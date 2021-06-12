import router from "next/router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import style from "./drop_down_menu.module.css";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 0.5, ease: easing };

const fadeIn = { opacity: 1, y: 10, transition };
const fadeOut = { opacity: 0, y: 60, transition };

const DropDownMenu = (props) => {
  const { isDropped, children, onDropDown, dropDownArrowRef } = props;
  router.events.on("routeChangeStart", () => onDropDown(false));

  const handleAnimationStart = (ref, isDropped) => {
    if (!isDropped) return;
    ref.current.style.display = "block";
  };

  const handleAnimationEnd = (ref, isDropped) => {
    if (isDropped) return;
    ref.current.style.display = "none";
  };

  const dropDownMenuRef = useRef();
  const handleClickOutside = (e) => {
    if (
      !dropDownMenuRef?.current.contains(e.target) &&
      !dropDownArrowRef?.current.contains(e.target)
    ) {
      onDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropped]);

  return (
    <motion.div
      ref={dropDownMenuRef}
      onAnimationComplete={() => handleAnimationEnd(dropDownMenuRef, isDropped)}
      onAnimationStart={() => handleAnimationStart(dropDownMenuRef, isDropped)}
      initial={{ opacity: 0, y: 60 }}
      animate={isDropped ? fadeIn : fadeOut}
      className={`${style.drop_section} paper-box-shadow text-black`}
    >
      <motion.div
        className="app-container"
        style={{
          padding: "20px 100px",
          maxWidth: "1520px",
          display: "flex",
          minHeight: "280px",
          alignItems: "center",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DropDownMenu;
