import { motion } from "framer-motion";
import style from "./drop_down_menu.module.css";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 0.5, ease: easing };

const fadeIn = { opacity: 1, y: 10, transition };
const fadeOut = { opacity: 0, y: 60, transition };

const DropDownMenu = (props) => {
  const { isDropping, children } = props;
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isDropping ? fadeIn : fadeOut}
      className={`${style.drop_section} paper-box-shadow`}
    >
      {children}
    </motion.div>
  );
};

export default DropDownMenu;
