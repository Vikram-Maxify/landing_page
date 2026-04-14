import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LeadPopup from "./pages/popup";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import AOS from "aos";
import "aos/dist/aos.css";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {

  // 🎯 AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      disable: window.innerWidth < 768,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }, []);

  // 📊 Facebook Pixel
  // useEffect(() => {
  //   !(function (f, b, e, v, n, t, s) {
  //     if (f.fbq) return;
  //     n = f.fbq = function () {
  //       n.callMethod
  //         ? n.callMethod.apply(n, arguments)
  //         : n.queue.push(arguments);
  //     };
  //     if (!f._fbq) f._fbq = n;
  //     n.push = n;
  //     n.loaded = true;
  //     n.version = "2.0";
  //     n.queue = [];
  //     t = b.createElement(e);
  //     t.async = true;
  //     t.src = v;
  //     s = b.getElementsByTagName(e)[0];
  //     s.parentNode.insertBefore(t, s);
  //   })(
  //     window,
  //     document,
  //     "script",
  //     "https://connect.facebook.net/en_US/fbevents.js"
  //   );

  //   window.fbq("init", "786258557492620");
  //   window.fbq("track", "PageView");
  // }, []);

  // 🍪 Get Cookie Helper
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(";").shift());
    }
    return null;
  };

  // 🔐 Protected Route
  const ProtectedRoute = ({ children }) => {
    const leadLocal = localStorage.getItem("leadData");
    const leadCookie = getCookie("leadData");

    if (!leadLocal && !leadCookie) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  // 🔁 Root Redirect Logic
  const hasLead =
    localStorage.getItem("leadData") || getCookie("leadData");

  return (
    <Routes>
      {/* Root */}
      <Route
        path="/"
        element={
          hasLead ? <Navigate to="/home" replace /> : <LeadPopup />
        }
      />

      {/* Protected Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment/:slug"
        element={
          <ProtectedRoute>
            <PaymentPage />
            
          </ProtectedRoute>
        }
      />

      <Route path="payment-success" element={<PaymentSuccess />} />

      <Route
        path="/payment-success" element={
          <ProtectedRoute>
            <PaymentSuccess/>
            </ProtectedRoute>
        }/>

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;