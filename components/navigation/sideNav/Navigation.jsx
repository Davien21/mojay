import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./side_nav.module.css";
import Link from "next/link";
import { rightArrowIcon } from "./../../../assets/imgs";

import Image from "next/image";

export const Navigation = ({ isOpen, sideMenu, toggleSideMenu }) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.ul className={`${styles.ul} side_nav_links`} variants={variants}>
      <MenuItem>
        <Link href="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <div
          className={`${styles.drop_button}`}
          onClick={() => toggleSideMenu("About Us")}
        >
          <p className="m-0">About Us</p>
          <img src={rightArrowIcon} height={15} width={15} alt="" />
        </div>
      </MenuItem>
      <MenuItem>
        <div
          className={`${styles.drop_button}`}
          onClick={() => toggleSideMenu("Business")}
        >
          <p className="m-0">Business</p>
          <img src={rightArrowIcon} height={15} width={15} alt="" />
        </div>
      </MenuItem>
      <MenuItem>
        <div
          className={`${styles.drop_button}`}
          onClick={() => toggleSideMenu("Investments")}
        >
          <p className="m-0">Investments</p>
          <img src={rightArrowIcon} height={15} width={15} alt="" />
        </div>
      </MenuItem>
      <MenuItem>
        <Link href="/ideas">Ideas</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact-us">Contact Us</Link>
      </MenuItem>
    </motion.ul>
  );
};
