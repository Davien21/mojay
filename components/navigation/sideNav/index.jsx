import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Overlay from "../../overlay/index";
import styles from "./side_nav.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 258px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function SideNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <Overlay className="d-md-none" isOpen={isOpen} />
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`${styles.fixed_box} d-md-none`}
        ref={containerRef}
      >
        <motion.div className={`${styles.background}`} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </>
  );
}
