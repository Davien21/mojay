import { motion } from "framer-motion";
import {
  techIcon2,
  mobilityIcon,
  realEstateIcon,
  fmgcIcon,
  financeIcon,
  aboutUsImage,
  aboutUsImage2,
} from "./../../assets/imgs";
import Footer from "../../components/footer";

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

const slideInRight = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: transition1,
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function AboutUs() {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container"
      >
        <motion.div variants={fadeInUp} className="my-4">
          <hr className="col dash" />
          <span className="col">About Us</span>
        </motion.div>
        <motion.div variants={stagger} className=" text-center text-md-left">
          <motion.h2 variants={fadeInUp} className="py-3">
            We are Mojay Global Holding
          </motion.h2>
          <motion.div className="row">
            <motion.article className="col-lg-7">
              <motion.article variants={fadeInUp} className="def-line-height">
                Mojay Global holding limited is a value-driven organisation
                established in July 2020, to embrace several existing businesses
                and to nurture new investment opportunities
              </motion.article>
              <motion.article
                variants={fadeInUp}
                className="py-4 def-line-height"
              >
                It is registered and headquartered in DIFC-Dubai International
                Financial Centre as a Private Investment Holding Company and,
                since then, it has been expanding across diverse business
                sectors, majorly focusing on 5 strategic verticals:
              </motion.article>
            </motion.article>
            <motion.div className="col-lg-5 my-5 my-lg-0 d-flex align-items-start justify-content-center">
              <motion.img
                variants={slideInRight}
                src={aboutUsImage2}
                alt=""
                className="img-fluid"
              />
            </motion.div>
          </motion.div>
          <motion.article className="text-center">
            <motion.h2 variants={fadeInUp}>Diverse Business sectors</motion.h2>
            <motion.hr variants={fadeInUp} className="undertone ml-auto" />
          </motion.article>
          <motion.ul
            variants={fadeInUp}
            className="row justify-content-between flex-wrap"
          >
            <div className="offset-2 d-md-none"></div>
            <li className="col-4 col-md-2 py-2 mx-auto mx-md-0 text-center">
              <img src={techIcon2} height={50} width={50} alt="" />
              <p>Technology and Robotics</p>
            </li>
            <li className="col-4 col-md-2 py-2 mx-auto mx-md-0 text-center">
              <img src={mobilityIcon} height={50} width={50} alt="" />
              <p>Mobility</p>
            </li>
            <div className="offset-2 d-md-none"></div>
            <li className="col-4 col-md-2 py-2 text-center">
              <img src={realEstateIcon} height={50} width={50} alt="" />
              <p>Real Estate</p>
            </li>
            <li className="col-4 col-md-2 py-2 text-center">
              <img src={fmgcIcon} height={50} width={50} alt="" />
              <p>FMGC</p>
            </li>
            <li className="col-4 col-md-2 py-2 text-center">
              <img src={financeIcon} height={50} width={50} alt="" />
              <p>Financial Assets</p>
            </li>
          </motion.ul>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default AboutUs;
