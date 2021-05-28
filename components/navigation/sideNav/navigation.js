import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import Link from "next/link";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <div className="container">
    <motion.ul variants={variants} className={`row flex-column`}>
      <MenuItem></MenuItem>
      <MenuItem>
        <Link href="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about-us">About Us</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact-us">Contact Us</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/people">People</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/values">Values</Link>
      </MenuItem>
      {/* <div className={`ml-3 ${style.bottom_line}`}></div> */}
    </motion.ul>
  </div>
);
