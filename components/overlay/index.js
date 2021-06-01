import { motion } from "framer-motion/dist/framer-motion.cjs";
import { useEffect } from "react";
const style = {
  height: "100vh",
  width: "auto ;",
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
  position: "fixed",
};

const fadeIn = { opacity: 1, transition: { duration: 0.5 } };
const fadeOut = { opacity: 0, transition: { duration: 0.5, delay: 0.5 } };

const Overlay = ({ isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isOpen ? fadeIn : fadeOut}
      style={style}
    ></motion.div>
  );
};

export default Overlay;
