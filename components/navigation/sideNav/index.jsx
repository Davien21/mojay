import { useRef, useState } from "react";
import router from "next/router";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Overlay from "../../overlay/index";
import styles from "./side_nav.module.css";
import { mojayFavicon, mojayLogo } from "../../../assets/imgs/index";

import Image from "next/image";
import Link from "next/link";
import SideMenu from "../../sideMenus";

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
    clipPath: "circle(20px at 258px 35px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const handleBoxAnimationStart = (ref, isOpen) => {
  if (!isOpen) return;
  ref.current.style.height = "100vh";
  let elems = Array.from(ref.current.children);
  const listIndex = elems.findIndex((elem) => elem.localName === "ul");
  console.log(elems, listIndex);
  ref.current.children[listIndex].style.display = "block";
};

const handleBoxAnimationEnd = (ref, isOpen) => {
  if (isOpen) return;
  ref.current.style.height = "80px";
  let elems = Array.from(ref.current.children);
  const listIndex = elems.findIndex((elem) => elem.localName === "ul");
  ref.current.children[listIndex].style.display = "none";
};

export default function SideNav() {
  const [isOpen, toggleOpen] = useState(false);
  const [sideMenu, toggleSideMenu] = useState(false);
  router.events.on("routeChangeStart", () => {
    toggleOpen(false);
    toggleSideMenu(false);
  });

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="d-md-none text-black">
      <Overlay
        className=""
        isOpen={isOpen}
        onClick={() => {
          toggleOpen(false);
          toggleSideMenu(false);
        }}
      />
      <div className=" py-3 bg-white paper-box-shadow">
        <Link href="/">
          <img
            height={30}
            width={35}
            className="pointer ml-4"
            title="Home Page"
            src={mojayFavicon}
            alt=""
          />
        </Link>
      </div>
      <motion.div
        onAnimationComplete={() => handleBoxAnimationEnd(containerRef, isOpen)}
        onAnimationStart={() => handleBoxAnimationStart(containerRef, isOpen)}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`${styles.fixed_box} `}
        ref={containerRef}
      >
        <motion.div className={`${styles.background}`} variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen(!isOpen)} />
        <Navigation
          isOpen={isOpen}
          sideMenu={sideMenu}
          toggleSideMenu={toggleSideMenu}
        />
        {/* </div> */}
      </motion.div>
      <SideMenu
        active={sideMenu}
        onToggleSideNav={() => {
          toggleOpen(!isOpen);
          toggleSideMenu(false);
        }}
        onSwitchToMainNav={() => toggleSideMenu(false)}
      />
    </div>
  );
}
