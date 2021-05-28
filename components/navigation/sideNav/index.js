// import Link from "next/link";
import style from "./side_nav.module.css";
import { motion, useCycle } from "framer-motion/dist/framer-motion.cjs";
import { useDimensions } from "./../../../utils/useDimensions";
import { useRef } from "react";
import Link from "next/link";

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

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
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
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
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
      className="d-flex justify-content-end d-md-none"
    >
      <motion.div
        className={`d-flex flex-column ${style.background}`}
        variants={sidebar}
      >
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
        <div className="container">
          <motion.ul variants={variants} className={`row flex-column`}>
            <li className={`col text-center ${style.side_li}`}></li>
            <motion.li
              variants={anim}
              whileTap={{ scale: 0.95 }}
              className={`col text-center ${style.side_li}`}
            >
              <Link className="p-4" href="/">
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={anim}
              whileTap={{ scale: 0.95 }}
              className={`col text-center ${style.side_li}`}
            >
              <Link className="p-4" href="/about-us">
                About Us
              </Link>
            </motion.li>
            <motion.li
              variants={anim}
              whileTap={{ scale: 0.95 }}
              className={`col text-center ${style.side_li}`}
            >
              <Link className="p-4" href="/contact-us">
                Contact Us
              </Link>
            </motion.li>
            <motion.li
              variants={anim}
              whileTap={{ scale: 0.95 }}
              className={`col text-center ${style.side_li}`}
            >
              <Link className="p-4" href="/people">
                People
              </Link>
            </motion.li>
            <motion.li
              variants={anim}
              whileTap={{ scale: 0.95 }}
              className={`col text-center ${style.side_li}`}
            >
              <Link className="p-4" href="/values">
                Values
              </Link>
            </motion.li>
            {/* <div className={`ml-3 ${style.bottom_line}`}></div> */}
          </motion.ul>
        </div>

      </motion.div>
    </motion.div>
  );
}
