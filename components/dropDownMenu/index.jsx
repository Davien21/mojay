import router from "next/router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import style from "./drop_down_menu.module.css";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 0.5, ease: easing };

const fadeIn = { opacity: 1, y: 10, display: "block", transition };
const fadeOut = { opacity: 0, y: 60, display: "none", transition };

const DropDownMenu = (props) => {
  const { isDropped, children, onDropDown, dropDownArrowRef } = props;
  router.events.on("routeChangeStart", () => onDropDown(false));

  const ref = useRef();
  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !dropDownArrowRef.current.contains(e.target)
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
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isDropped ? fadeIn : fadeOut}
      className={`${style.drop_section} paper-box-shadow text-black`}
    >
      <motion.div
        className="app-container"
        style={{ padding: "50px 100px", maxWidth: "1520px" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DropDownMenu;
