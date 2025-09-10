import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-secondary p-3 rounded-full text-white shadow-lg"
      whileHover={{ scale: 1.1 }}
    >
      <FaArrowUp size={20} />
    </Motion.button>
  );
}

export default ScrollToTop;
