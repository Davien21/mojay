import { motion } from "framer-motion";
import Footer from "./../../../components/footer/index";
import {
  bg4,
  processesIcon,
  promoterImage,
  mghlComplianceImage,
  mghlEntrepreneurImage,
  mghlInvestmentImage,
  mghlExecutiveImage,
} from "./../../../assets/imgs";

import Image from "next/image";
import ImageBackground from "./../../../components/imageBackground/index";

const easing = [0.6, -0.05, 0.01, 0.99];

const transition1 = {
  duration: 0.6,
  ease: easing,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
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

const InvestmentProcesses = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
      >
        <ImageBackground sizeType="short">
          <img src={bg4} alt="" className="img-fluid" />
          <div className={`image_bg_content mt-5 text-shadow`}>
            <div className="def-container-lg my-5 pt-md-5">
              <h1>Investment Process</h1>
              <div className="mt-4 ">
                <p>
                  Look at our step by step guide for how we can get you started
                  with us.
                </p>
              </div>
            </div>
          </div>
        </ImageBackground>
        <section id="processes" className="clear-nav-margin">
          <div className="def-container-lg my-5">
            <div className="col-lg">
              <div className="mb-5">
                <p className="def_text_red">LEARN ABOUT</p>
                <h3>OUR INVESTMENT PROCESS</h3>
                <hr className="undertone" />
              </div>
            </div>
            <div className="col-lg mb-5">
              <p>Here is a step by step breakdown of how we run investments</p>
            </div>
            <div className="row px-3">
              <div className="col-md-10 col-lg-8 mx-auto mb-5">
                <img src={processesIcon} alt="" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="process-breakdown"
          className="clear-nav-margin container-fluid"
        >
          <motion.div variants={stagger} className="col-12 my-5 pb-4">
            <section
              className="row mx-auto justify-content-center"
              style={{ maxWidth: "1200px" }}
            >
              <div className="row mx-auto justify-content-center justify-content-lg-start">
                <div className="col process-card justify-content-center my-4">
                  <img src={promoterImage} alt="" />
                </div>
                <div className="col process-card justify-content-center my-4">
                  <img src={mghlExecutiveImage} alt="" />
                </div>
                <div className="col process-card justify-content-center my-4">
                  <img src={mghlComplianceImage} alt="" />
                </div>
                <div className="col process-card my-4">
                  <img src={mghlInvestmentImage} alt="" />
                </div>
                <div className="col process-card my-4">
                  <img src={mghlEntrepreneurImage} alt="" />
                </div>
              </div>
            </section>
          </motion.div>
        </section>
        <Footer />
      </motion.section>
    </>
  );
};

export default InvestmentProcesses;
