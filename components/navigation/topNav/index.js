import Link from "next/link";
import { mojayLogo } from "../../../assets/imgs";
import AboutUsDropDown from "../../dropdowns/aboutUs";
import BusinessDropDown from "../../dropdowns/business";
import InvestmentsDropDown from "../../dropdowns/investments";
import style from "./top_nav.module.css";

export default function TopNav() {
  return (
    <>
      <div className="container-fluid d-none d-md-block py-3 w-100">
        <ul className={`row`}>
          <li className="col-3 px-4">
            <Link href="/">Logo</Link>
          </li>
          <li className={`d-flex justify-content-center col ml-auto`}>
            <AboutUsDropDown />
          </li>
          <li className={`d-flex justify-content-center col ml-auto `}>
            <BusinessDropDown />
          </li>
          <li className={`d-flex justify-content-center col ml-auto`}>
            <InvestmentsDropDown />
          </li>
          <li className={`col text-center `}>
            <Link href="/ideas">Ideas</Link>
          </li>
          <li className={`col text-center `}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
