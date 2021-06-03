import { motion } from "framer-motion/dist/framer-motion.cjs";
import { useEffect, useRef } from "react";
const style = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
  position: "fixed",
};

const fadeIn = { opacity: 1, transition: { duration: 0.5 } };
const fadeOut = { opacity: 0, transition: { duration: 0.5, delay: 0.5 } };

const handleAnimationStart = (ref, isOpen) => {
  if (isOpen) ref.current.style.display = "block";
};

const handleAnimationEnd = (ref, isOpen) => {
  if (!isOpen) ref.current.style.display = "none";
};

const Overlay = ({ isOpen, ...rest }) => {
  const ref = useRef();
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <motion.div
      ref={ref}
      onAnimationComplete={() => handleAnimationEnd(ref, isOpen)}
      onAnimationStart={() => handleAnimationStart(ref, isOpen)}
      initial={{ opacity: 0 }}
      animate={isOpen ? fadeIn : fadeOut}
      style={style}
      {...rest}
    ></motion.div>
  );
};

export default Overlay;
