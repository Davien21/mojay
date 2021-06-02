import SideMenu from ".";
import styles from "./side_menu.module.css";
import { rightArrowIcon } from "../../assets/imgs";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutUsSideMenu = ({ toggleSideNav }) => {
  const [isOpen, setOpen] = useState(false);
  // const dropDownArrowRef = useRef();

  return (
    <SideMenu isOpen={isOpen} setOpen={setOpen} menuTitle="About Us">
      <p>Hello</p>
    </SideMenu>
  );
};

export default AboutUsSideMenu;
