import { motion } from "framer-motion";
import style from "./side_nav.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ children, isOpen }) => {
  return (
    <motion.li
      animate={isOpen ? variants.open : variants.closed}
      whileTap={{ scale: 0.95 }}
      className={`col text-center ${style.side_li}`}
    >
      {children}
    </motion.li>
  );
};
