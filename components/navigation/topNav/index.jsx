import Link from "next/link";
import { mojayLogo, mojayFavicon } from "../../../assets/imgs";

import Image from "next/image";
import AboutUsDropDown from "../../dropdowns/aboutUs";
import BusinessDropDown from "../../dropdowns/business";
import InvestmentsDropDown from "../../dropdowns/investments";
import styles from "./top_nav.module.css";

const TopNav = ({ isScrolled }) => {
  return (
    <>
      <div className={`def-container-lg d-none d-md-block py-3 w-100`}>
        <ul className={`row align-items-center`}>
          <li className="col px-4">
            <Link href="/">
              <img
                height={30}
                width={35}
                className="pointer"
                title="Home Page"
                src={mojayFavicon}
                alt=""
              />
            </Link>
          </li>
          <li className={`d-flex justify-content-center col ml-auto `}>
            <AboutUsDropDown isScrolled={isScrolled} />
          </li>
          <li className={`d-flex justify-content-center col ml-auto  `}>
            <BusinessDropDown isScrolled={isScrolled} />
          </li>
          <li className={`d-flex justify-content-center col ml-auto `}>
            <InvestmentsDropDown isScrolled={isScrolled} />
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
};

export default TopNav;
