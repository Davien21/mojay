import styles from "./footer.module.css";
import { mojayLogo } from "../../assets/imgs";
import Link from "next/link";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className={`text-center text-md-left ${styles.defaults} ${styles.grey_text}`}>
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-lg-6 pt-5 pb-4">
            <img className="img-fluid" src={mojayLogo} alt="" />
            <p className="font-weight-bold text-white py-5 m-0">
              Challenging, Innovating, Nurturing
            </p>
            <p className="text-white">
              Located in the Center of Now, Downtown Dubai, Emaar Boulevard
              Plaza, Tower 1, Office 2903
            </p>
            <p className={styles.grey_text}>
              © {year} Mojay Global Holdings. All Rights Reserved
            </p>
          </div>
          <div className="col-lg-6 ">
            <div className="row justify-content-around">
              <div className="col-md-3 py-4">
                <header className="text-white">Company</header>
                <ul className="default_links_list">
                  <li className="pb-2 pt-3">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">About us</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 py-4">
                <header className="text-white">Business</header>
                <ul className="default_links_list">
                  <li className="pb-2 pt-3">
                    <Link href="/">Investments</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Ideas</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 py-4">
                <header className="text-white">Legal</header>
                <ul className="default_links_list">
                  <li className="pb-2 pt-3">
                    <Link href="/">Privacy</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Terms</Link>
                  </li>
                 
                </ul>
              </div>
              <div className="col-md-3 py-4">
                <header className="text-white">Socials</header>
                <ul className="default_links_list">
                  <li className="pb-2 pt-3">
                    <Link href="/">LinkedIn</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Facebook</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">Instagram</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
