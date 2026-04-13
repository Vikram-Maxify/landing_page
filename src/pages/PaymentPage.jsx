import React, { useEffect, useRef } from "react";
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

  const triggeredRef = useRef(false); // prevent double execution

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
        alert("Invalid payment link");
        navigate("/home", { replace: true });
        return;
      }

      const finalPrice =
        course?.discount_price > 0
          ? course.discount_price
          : course?.price;

      try {
        /* LOAD SCRIPT */
        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
          alert("Razorpay failed to load");
          navigate("/home", { replace: true });
          return;
        }

        /* CREATE ORDER */
        const orderRes = await dispatch(
          createOrder({
            amount: finalPrice,
            email,
            phone: Number(phone),
          })
        );

        if (!createOrder.fulfilled.match(orderRes)) {
          alert("Order creation failed");
          navigate("/home", { replace: true });
          return;
        }

        const { key, order_id, amount } = orderRes.payload;

        /* RAZORPAY OPTIONS */
        const options = {
          key,
          amount,
          currency: "INR",
          name: "Maxify",
          description: course.title,
          order_id,

          prefill: {
            email,
            contact: phone,
          },

          handler: async (response) => {
            try {
              /* VERIFY PAYMENT */
              const verifyRes = await dispatch(
                verifyPayment({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                })
              );

              if (!verifyPayment.fulfilled.match(verifyRes)) {
                alert("Payment verification failed");
                navigate("/home", { replace: true });
                return;
              }

              /* CREATE PURCHASE */
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
                alert("Purchase save failed");
                navigate("/home", { replace: true });
                return;
              }

              /* SUCCESS */
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
              alert("Payment done but error occurred");
              navigate("/home", { replace: true });
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

              alert("Payment cancelled");
              navigate("/home", { replace: true }); // ✅ redirect
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

          alert("Payment failed");
          navigate("/home", { replace: true }); // ✅ redirect
        });

        rzp.open();

      } catch (err) {
        console.error(err);
        alert("Something went wrong");
        navigate("/home", { replace: true });
      }
    };

    startPayment();
  }, [course, dispatch, navigate]);

  /* ================= UI ================= */
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>

      <p className="text-white font-medium text-lg">
        Redirecting to secure payment...
      </p>
    </div>
  );
};

export default PaymentPage;