import Link from "next/link";
import { mojayLogo } from "./../../../assets/imgs";
import AboutUsDropDown from "../../dropdowns/aboutUs";
import BusinessDropDown from "../../dropdowns/business";
import InvestmentsDropDown from "../../dropdowns/investments";
import styles from "./top_nav.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import router from "next/router";

const scrollUp = { color: "white", backgroundColor: "transparent" };
const scrollDown = { color: "black", backgroundColor: "white" };
let routesWithImageBackgrounds = { "/": "Home" };
const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageBackgroundRoute, setIsImageBackgroundRoute] = useState(false);
  let animate = isScrolled ? scrollDown : scrollUp;
  const handleScroll = (e) => {
    if (window.pageYOffset > 80) setIsScrolled(true);
    if (window.pageYOffset < 80) setIsScrolled(false);
  };
  
  useEffect(() => {
    let path = router.router.route;
    if (routesWithImageBackgrounds[path]) {
      setIsImageBackgroundRoute(true);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    console.log(isImageBackgroundRoute);
  }, [isScrolled]);
  return (
    <>
      <motion.div
        className={`container-fluid d-none d-md-block py-3 w-100 `}
        initial={scrollDown}
        animate={isImageBackgroundRoute && animate}
      >
        <ul className={`row`}>
          <li className="col-3 px-4">
            {isImageBackgroundRoute.toString()}
            <Link href="/">Logo</Link>
          </li>
          <li className={`d-flex justify-content-center col ml-auto `}>
            <AboutUsDropDown />
          </li>
          <li className={`d-flex justify-content-center col ml-auto  `}>
            <BusinessDropDown />
          </li>
          <li className={`d-flex justify-content-center col ml-auto `}>
            <InvestmentsDropDown />
          </li>
          <li className={`col text-center `}>
            <Link href="/ideas">Ideas</Link>
          </li>
          <li className={`col text-center `}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default TopNav;
