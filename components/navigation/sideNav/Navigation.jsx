import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./side_nav.module.css";
import Link from "next/link";
import AboutUsSideMenu from "./../../sideMenus/aboutUs";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggleSideNav }) => (
  <motion.ul className={`${styles.ul} side_nav_links`} variants={variants}>
    <MenuItem>
      <Link href="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <AboutUsSideMenu  />
      {/* <Link href="/about-us">About Us</Link> */}
    </MenuItem>
    <MenuItem>
      <Link href="/">Business </Link>
    </MenuItem>

    <MenuItem>
      <Link href="/ideas">Ideas</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact-us">Contact Us</Link>
    </MenuItem>
  </motion.ul>
);
