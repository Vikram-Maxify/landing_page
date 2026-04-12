import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LeadPopup from "./pages/popup";
import HomePage from "./pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      disable: window.innerWidth < 768,
    });
  }, []);

  // Facebook Pixel
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "786258557492620");
    window.fbq("track", "PageView");
  }, []);

  return (
    <Routes>
      {/* Default → Form */}
      <Route path="/" element={<LeadPopup />} />

      {/* After submit → Home */}
      <Route path="/home" element={<HomePage />} />

      {/* 404 fallback */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;