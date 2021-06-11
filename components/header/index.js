// import style from "./top_nav.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import TopNav from "./../navigation/topNav/index";
import SideNav from "./../navigation/sideNav/index";
import styles from "./header.module.css";

const easing = [0.6, -0.05, 0.01, 0.99];

const scrollUp = {
  color: "white",
  backgroundColor: "transparent",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  transition: { duration: 0.6 },
};

const scrollDown = {
  color: "black",
  backgroundColor: "white",
  boxShadow: "0 6px 10px -4px rgba(0,0,0,.15)",
  transition: { ease: "easeIn", duration: 0.6 },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e) => {
    if (window.pageYOffset > 80) setIsScrolled(true);
    if (window.pageYOffset < 80) setIsScrolled(false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.nav
      className={styles.container}
      initial={scrollUp}
      animate={isScrolled ? scrollDown : scrollUp}
    >
      <TopNav isScrolled={isScrolled} />
      <SideNav isScrolled={isScrolled} />
    </motion.nav>
  );
}
