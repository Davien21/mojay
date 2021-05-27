// import style from "./top_nav.module.css";
import TopNav from "./../navigation/topNav/index";
import SideNav from "./../navigation/sideNav/index";
import styles from "./header.module.css";
export default function Header() {
  return (
    <nav className={styles.container}>
      <TopNav />
      <SideNav />
    </nav>
  );
}
