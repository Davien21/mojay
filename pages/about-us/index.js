import { motion } from "framer-motion";
import {
  techIcon2,
  mobilityIcon,
  realEstateIcon,
  fmgcIcon,
  financeIcon,
  bg16,
  aboutUsImage3,
  respectImg,
  bg5,
  ideasImage,
  empathyImg,
  integrityImg,
  innovationImg,
  performanceImg,
} from "./../../assets/imgs";
import Footer from "../../components/footer";
import ImageBackground from "../../components/imageBackground";
import OurBrief from "./../../components/brief/index";

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
        <img src={bg16} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>About Us</h1>
            {/* <div className="mt-4 ">
              <p>
                Get to know us
              </p>
            </div> */}
          </div>
        </div>
      </ImageBackground>
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container-lg"
      >
        <motion.div variants={fadeInUp} className="my-4"></motion.div>
        <motion.div variants={stagger} className=" text-center text-md-left">
          <motion.h3 variants={fadeInUp} className="py-3">
            We are Mojay Global Holding
          </motion.h3>
          <motion.div className="row">
            <motion.article className="col-lg-12">
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
          </motion.div>
          <motion.article className="text-center mt-5 pb-4 text-md-left">
            <motion.h3 variants={fadeInUp}>Diverse Business sectors</motion.h3>
            <motion.hr
              variants={fadeInUp}
              className="undertone mx-auto mx-md-0"
            />
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
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container-lg my-5"
      >
        <OurBrief />
        <div className="row d-md-none text-center">
          <div className="col-md-12">
            <motion.div variants={fadeInUp} className=" mb-5">
              <h4>Our Name</h4>
              <hr className="undertone mx-auto" />
              <p>
                <p>
                  Mojay is more than just a name; it is a portmanteau of our
                  founder children’s names.
                </p>
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className=" mb-5">
              <h4>Our Belief</h4>
              <hr className="undertone mx-auto" />
              <p>
                We believe that the keystone of any good relationship is
                nurturing.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="">
              <h4>Our Foundation</h4>
              <hr className="undertone mx-auto" />
              <p>
                Invest, Advise and Manage companies with accelerated growth
                potential.
              </p>
              <p>
                We look to constantly create value to our diverse stakeholders,
                through innovation - bringing a new enterprise and end-user
                engagement.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.section>
          <motion.div variants={fadeInUp} className="row my-5 py-4">
            <motion.div className={`w-100 col-lg-6 order-2 order-md-1`}>
              <img
                src={aboutUsImage3}
                alt=""
                className="img-fluid def-rounded"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="col-lg-6 order-1 order-md-2 "
            >
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
