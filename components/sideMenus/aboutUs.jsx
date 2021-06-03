import styles from "./side_menu.module.css";
import { useState } from "react";
import { MenuItem } from "./../navigation/sideNav/MenuItem";
import Link from "next/link";

const AboutUsSideMenu = () => {
  return (
    <ul className={`${styles.ul} side_nav_links`}>
      <MenuItem>
        <Link href="/history">Our History</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/values">Our Values</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/philosophy">Our Philosophy</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/people">Our People</Link>
      </MenuItem>
    </ul>
  );
};

export default AboutUsSideMenu;
