import styles from "./side_menu.module.css";
import { rightArrowIcon } from "../../assets/imgs";
import { motion } from "framer-motion";
import { MenuToggle } from "./../navigation/sideNav/MenuToggle";

const SideMenu = ({ children, menuTitle, isOpen, setOpen }) => {
  return (
    <>
      <div className={`${styles.drop_button}`} onClick={() => setOpen(true)}>
        <p className="m-0">{menuTitle}</p>
        <img src={rightArrowIcon} height={15} width={15} alt="" />
      </div>
      {/* <motion.div
        initial={{ width: "0px" }}
        animate={isOpen ? { width: "300px" } : { width: "0px" }}
        className={`bg-primary vh-100 absolute ${styles.side_menu}`}
      >
        {children}
      </motion.div> */}
    </>
  );
};

export default SideMenu;
