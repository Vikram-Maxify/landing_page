import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return (
    <Routes>
      {/* ✅ Direct Home */}
      <Route path="/" element={<HomePage />} />

      {/* Home */}
      <Route path="/home" element={<HomePage />} />

      {/* Payment */}
      <Route path="/payment/:slug" element={<PaymentPage />} />

      {/* Payment Success */}
      <Route path="/payment-success" element={<PaymentSuccess />} />

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;