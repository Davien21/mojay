import styles from "./side_menu.module.css";
import { useState } from "react";
import { MenuItem } from "./../navigation/sideNav/MenuItem";
import Link from "next/link";

const BusinessSideMenu = () => {
  return (
    <ul className={`${styles.ul} side_nav_links`}>
      <MenuItem>
        <Link href="/business#preimo">Preimo Urban Mobility</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/business#myro">Myro</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/business#eternal-robotics">Eternal Robotics</Link>
      </MenuItem>
    </ul>
  );
};

export default BusinessSideMenu;
