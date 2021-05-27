// import Link from "next/link";
import style from "./side_nav.module.css";
import { motion, useCycle } from "framer-motion/dist/framer-motion.cjs";
import { useDimensions } from './../../../utils/useDimensions';
import { useRef } from 'react';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      duration: 10,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 256px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const toggle = () => {
  console.log("toggle menu button!");
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

export default function SideNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log(height)
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="d-flex justify-content-end d-md-none"
    >
      <motion.div className={style.background} variants={sidebar}>
        <button className={style.menu_svg_box} onClick={() => toggleOpen()}>
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
        {/* <motion.img
          src={downArrow}
          alt=""
          animate={isDropping ? rotateUp : rotateDown}
          height={20}
          width={12}
          onClick={() => onDropDown()}
          className="pointer"
        /> */}
      <p>Hi, this is side nav ✌</p>
      </motion.div>
    </motion.div>
  );
}
