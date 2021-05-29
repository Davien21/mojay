import Link from "next/link";
import AboutUsDropDown from "../../dropdowns/aboutUs";
import style from "./top_nav.module.css";

export default function TopNav() {
  return (
    <div className="container d-none d-md-block">
      <ul className={`row`}>
        <li className={`col text-center ${style.li}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`d-flex justify-content-center col ${style.li}`}>
          <AboutUsDropDown />
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/about-us/people">People</Link>
        </li>
        <li className={`col text-center ${style.li}`}>
          <Link href="/values">Values</Link>
        </li>
        {/* <div className={`ml-3 ${style.bottom_line}`}></div> */}
      </ul>
    </div>
  );
}
