import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseBySlug } from "../redux/courseSlice";
import {
  createOrder,
  verifyPayment,
  createPurchase,
  saveFailedPayment,
} from "../redux/amountSlice";

const PaymentPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { courseBySlug: course } = useSelector((state) => state.courses);

  const triggeredRef = useRef(false);

  /* ✅ POPUP STATE */
  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error | cancel
    message: "",
  });

  /* ================= AUTO REDIRECT AFTER POPUP ================= */
  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2500); // 2.5 sec delay

      return () => clearTimeout(timer);
    }
  }, [popup.show, navigate]);

  /* ================= LOAD RAZORPAY ================= */
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (existingScript) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  /* ================= FETCH COURSE ================= */
  useEffect(() => {
    if (slug) {
      dispatch(getCourseBySlug(slug));
    }
  }, [slug, dispatch]);

  /* ================= AUTO PAYMENT ================= */
  useEffect(() => {
    const startPayment = async () => {
      if (!course || triggeredRef.current) return;

      triggeredRef.current = true;

      const params = new URLSearchParams(window.location.search);
      const email = params.get("email");
      const phone = params.get("phone");

      if (!email || !phone || phone.length < 10) {
        setPopup({
          show: true,
          type: "error",
          message: "Invalid payment link",
        });
        return;
      }

      const finalPrice =
        course?.discount_price > 0
          ? course.discount_price
          : course?.price;

      try {
        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
          setPopup({
            show: true,
            type: "error",
            message: "Razorpay failed to load",
          });
          return;
        }

        const orderRes = await dispatch(
          createOrder({
            amount: finalPrice,
            email,
            phone: Number(phone),
          })
        );

        if (!createOrder.fulfilled.match(orderRes)) {
          setPopup({
            show: true,
            type: "error",
            message: "Order creation failed",
          });
          return;
        }

        const { key, order_id, amount } = orderRes.payload;

        const options = {
          key,
          amount,
          currency: "INR",
          name: "Maxify",
          description: course.title,
          order_id,

          prefill: { email, contact: phone },

          handler: async (response) => {
            try {
              const verifyRes = await dispatch(
                verifyPayment({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                })
              );

              if (!verifyPayment.fulfilled.match(verifyRes)) {
                setPopup({
                  show: true,
                  type: "error",
                  message: "Payment verification failed",
                });
                return;
              }

              const purchaseRes = await dispatch(
                createPurchase({
                  course_id: course._id,
                  is_buy: true,
                  purchased_amount: finalPrice,
                  email,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                })
              );

              if (!createPurchase.fulfilled.match(purchaseRes)) {
                setPopup({
                  show: true,
                  type: "error",
                  message: "Purchase save failed",
                });
                return;
              }

              navigate("/payment-success", {
                replace: true,
                state: {
                  email,
                  phone,
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  courseTitle: course.title,
                  amount: finalPrice,
                },
              });
            } catch (err) {
              console.error(err);
              setPopup({
                show: true,
                type: "error",
                message: "Payment done but error occurred",
              });
            }
          },

          modal: {
            ondismiss: () => {
              dispatch(
                saveFailedPayment({
                  course_id: course._id,
                  email,
                  mobile: phone,
                  amount: finalPrice,
                  order_id,
                  reason: "User cancelled",
                })
              );

              setPopup({
                show: true,
                type: "cancel",
                message: "Payment cancelled by user",
              });
            },
          },

          theme: { color: "#0092B9" },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", (response) => {
          dispatch(
            saveFailedPayment({
              course_id: course._id,
              email,
              mobile: phone,
              amount: finalPrice,
              order_id,
              reason: response.error?.description || "Payment failed",
            })
          );

          setPopup({
            show: true,
            type: "error",
            message: "Payment failed",
          });
        });

        rzp.open();
      } catch (err) {
        console.error(err);
        setPopup({
          show: true,
          type: "error",
          message: "Something went wrong",
        });
      }
    };

    startPayment();
  }, [course, dispatch, navigate]);

  /* ================= UI ================= */
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-blue-900">

      {/* Loader */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-white font-medium text-lg">
        Redirecting to secure payment...
      </p>

      {/* POPUP */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

          <div className="relative w-[90%] max-w-md p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

            {/* Inner Card */}
            <div className="bg-[#0f172a] rounded-2xl p-7 text-center">

              {/* Glow Icon */}
              <div className="flex justify-center mb-5">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold
            ${popup.type === "error"
                      ? "bg-red-500/10 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                      : popup.type === "cancel"
                        ? "bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                        : "bg-green-500/10 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    }`}
                >
                  {popup.type === "error" && "!"}
                  {popup.type === "cancel" && "×"}
                  {popup.type === "success" && "✓"}
                </div>
              </div>

              {/* Title */}
              <h2
                className={`text-xl font-semibold mb-2 tracking-wide
          ${popup.type === "error"
                    ? "text-red-400"
                    : popup.type === "cancel"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
              >
                {popup.type === "cancel"
                  ? "Payment Cancelled"
                  : popup.type === "error"
                    ? "Transaction Failed"
                    : "Payment Successful"}
              </h2>

              {/* Message */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {popup.message}
              </p>

              {/* Button */}
              <button
                onClick={() => {
                  setPopup({ ...popup, show: false });
                  navigate("/home", { replace: true });
                }}
                className="w-full py-2.5 rounded-lg font-medium text-white
          bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-blue-600 hover:to-indigo-700
          transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
              >
                Continue
              </button>

            </div>
          </div>
        </div>
      )}    </div>
  );
};

export default PaymentPage;