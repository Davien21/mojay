import styles from "./side_menu.module.css";
import { MenuItem } from "./../navigation/sideNav/MenuItem";
import Link from "next/link";

const InvestmentsSideMenu = () => {
  return (
    <ul className={`${styles.ul} side_nav_links`}>
      <MenuItem>
        <Link href="/investments/sectors">Sectors</Link>
      </MenuItem>

      <MenuItem>
        <Link href="/investments/processes">Processes</Link>
      </MenuItem>
    </ul>
  );
};

export default InvestmentsSideMenu;
