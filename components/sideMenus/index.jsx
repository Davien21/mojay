import styles from "./side_menu.module.css";
import { motion } from "framer-motion";
import { MenuToggle } from "./../navigation/sideNav/MenuToggle";
import { leftArrowAltIcon } from "./../../assets/imgs";
import AboutUsSideMenu from "./aboutUs";

const slideIn = { width: "300px", transition: { duration: 0.2 } };
const slideOut = { width: "0px", transition: { duration: 0.2 } };

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const menus = {
  "About Us": <AboutUsSideMenu />,
};

const SideMenu = ({ active, onToggleSideNav, onSwitchToMainNav }) => {
  if (active) console.log("active", active);
  if (!active) console.log("not active", active);
  return (
    <>
      <motion.div
        initial={{ width: "0px" }}
        animate={active ? slideIn : slideOut}
        className={`vh-100 absolute ${styles.side_menu}`}
      >
        <div className={`d-flex justify-content-between px-3 ${styles.back}`}>
          <div className="pointer" onClick={() => onSwitchToMainNav(false)}>
            <img src={leftArrowAltIcon} height={23} width={23} alt="" />
          </div>
          <span>{active}</span>
        </div>
        {menus[active]}
      </motion.div>
    </>
  );
};

export default SideMenu;
