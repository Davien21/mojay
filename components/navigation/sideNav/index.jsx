import { useRef, useState } from "react";
import router from "next/router";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Overlay from "../../overlay/index";
import styles from "./side_nav.module.css";
import { mojayLogo } from "../../../assets/imgs/index";
import Link from "next/link";

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
  const [isOpen, toggleOpen] = useState(false);
  router.events.on("routeChangeStart", () => toggleOpen(false));

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <Overlay
        className="d-md-none"
        isOpen={isOpen}
        onClick={() => toggleOpen(!isOpen)}
      />
      <div className="d-md-none py-3 bg-white paper-box-shadow">
        <Link href="/">
          <span className="px-4">Logo</span>
        </Link>
      </div>
      <motion.div
        onAnimationComplete={() => {
          console.log(containerRef)
        }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`${styles.fixed_box} d-md-none`}
        ref={containerRef}
      >
        <motion.div className={`${styles.background}`} variants={sidebar} />
        <div>
          <MenuToggle toggle={() => toggleOpen(!isOpen)} />
          <Navigation />
        </div>
      </motion.div>
    </>
  );
}
