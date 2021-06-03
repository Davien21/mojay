import { deloitteLogo } from "./../../assets/imgs";
import styles from "./brands.module.css";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition1 = {
  duration: 0.6,
  ease: easing,
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition1,
  },
};

const Brands = () => {
  return (
    <>
      <motion.div variants={fadeInUp} className="">
        <hr className="col dash" />
        <span className="col">Our brands</span>
      </motion.div>
      <ul className="row">
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
        <li className="col">
          <img
            className={`${styles.max_dimensions} img-fluid`}
            src={deloitteLogo}
            alt=""
          />
        </li>
      </ul>
    </>
  );
};

export default Brands;
