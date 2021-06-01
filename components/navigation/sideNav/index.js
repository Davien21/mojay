// import Link from "next/link";
import style from "./side_nav.module.css";
import { motion, useCycle } from "framer-motion/dist/framer-motion.cjs";
import { useDimensions } from "./../../../utils/useDimensions";
import { useRef } from "react";
import Link from "next/link";
import Overlay from "./../../overlay/index";
import { MenuItem } from "./menuItem";

const sidebar = {
  open: (height = 1000) => ({
    opacity: 1,
    display: "flex",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      duration: 10,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    opacity: 0,
    display: "none",
    clipPath: "circle(30px at 256px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const easing = [0.6, -0.05, 0.01, 0.99];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const anim = {
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

const overlay = {
  height: "100vh",
  width: "auto ;",
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
  position: "fixed",
};

export default function SideNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="justify-content-end d-md-none bg-danger"
    >
      {/* <Overlay isOpen={isOpen} /> */}
      <div className="w-100 d-flex justify-content-between">
        This is nav
        <button className={style.menu_svg_box_2} onClick={() => toggleOpen()}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
