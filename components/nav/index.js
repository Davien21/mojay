import Link from "next/link";
import style from "./nav.module.css";
import { motion } from "framer-motion";
import DropDownArrow from "./../dropDownArrow/index";
export default function Nav() {
  return (
    <motion.nav className={`container ${style.container}`}>
      <ul className={`row`}>
        <li className={`col text-center ${style.li}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`d-flex justify-content-center col ${style.li}`}>
          <Link href="/about-us">About Us</Link>
          <div className="px-1">
            <DropDownArrow />
          </div>
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/people">People</Link>
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/values">Values</Link>
        </li>
        {/* <div className={`ml-3 ${style.bottom_line}`}></div> */}
      </ul>
    </motion.nav>
  );
}
