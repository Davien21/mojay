import { motion } from "framer-motion";

import {
  techIcon2,
  mobilityIcon,
  realEstateIcon,
  fmgcIcon,
  financeIcon,
  bg5,
  aboutUsImage3,
  respectImg,
  bg1,
  ideasImage,
  empathyImg,
  integrityImg,
  innovationImg,
  performanceImg,
} from "../../assets/imgs";

import Image from "next/image";
import Footer from "../../components/footer";
import ImageBackground from "../../components/imageBackground";
import OurBrief from "../../components/brief/index";

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
      <ImageBackground sizeType="short">
        <Image layout="fill" src={bg5} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container my-5 pt-md-5">
            <h1>About Us</h1>
          </div>
        </div>
      </ImageBackground>
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container"
      >
        <div className="my-5">
          <div className="def-container ">
            <article className="text-center text-md-left">
              <h3>Our Story</h3>
              <hr className="undertone" />
            </article>
          </div>
          <div className="def-container my-5">
            <div className="wrapped-text-div">
              <div className="col-12 col-md-5 p-md-0">
                <img
                  src={ideasImage}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <article className="text-justify p-3 p-md-0">
                <p>
                  What started as an idea is now turned into a growing business.
                  <br />
                  In the past few years we we have crossed many milestones and
                  turned around businesses.
                </p>

                <p>
                  From traditional business models, innovation came through
                  changes in Ideology, Scalability of Deliverables, Process
                  re-design and Talent re-assessment.
                </p>
                <p>
                  This has reinforced our Philosophy and has put us on a clear
                  path of expansion on a global platform.
                </p>
                <p>
                  Now we are confident that our expertise spanning across the
                  areas of Technology &amp; Robotics, Mobility, Real Estate and
                  FMCG are fit for growth, ready to move into the Global Arena.
                </p>
                <p>
                  We work collaboratively with the Key Stakeholders of the
                  companies to take the businesses to the next level of
                  profitable growth.
                </p>
                <p>
                  Our approach begins with active, strategic involvement at all
                  levels while helping the company to scale–by leveraging our
                  resources which are industry-specific, led by senior
                  experienced Management teams.
                </p>
              </article>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container my-5"
      >
        <motion.section>
          <motion.div
            variants={fadeInUp}
            className="d-flex my-5 py-4 text-center text-md-left justify-content-around"
          >
            <motion.div className={`w-100 col-lg-6`} variants={fadeInUp}>
              <Image
                layout="fill"
                src={aboutUsImage3}
                alt=""
                className="img-fluid def-rounded"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="col-lg-5 ">
              <motion.div className="">
                <div className="mb-5 my-5 pb-3">
                  <h5>Vision</h5>
                  <p>To be a reference in value creation and positive change</p>
                </div>
                <div className="mb-5 my-5">
                  <h5>Mission</h5>
                  <p>To nurture innovation and growth</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.section>
      <Footer />
    </>
  );
}

export default AboutUs;
