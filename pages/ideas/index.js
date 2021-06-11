import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import ImageBackground from "../../components/imageBackground";
import { bg6, ideasImage, ideasIcon } from "./../../assets/imgs";

import Image from "next/image";

import Footer from "./../../components/footer/index";
import IdeaForm from "./../../components/form/ideas/index";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition1 = {
  duration: 0.6,
  ease: easing,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
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

function ContactUs() {
  return (
    <>
      <ImageBackground sizeType="short">
        <img src={bg6} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Share your ideas</h1>
            <div className="mt-4 ">
              <p>Do you think you have the next big idea?</p>
            </div>
          </div>
        </div>
      </ImageBackground>
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container py-5 clear-nav-margin"
      >
        <motion.div variants={stagger} className="row">
          <motion.div className="col-lg-6 py-5 px-4">
            <motion.h2 variants={fadeInUp} className="py-3">
              Are You Driven By Ideas?
            </motion.h2>
            <motion.article variants={fadeInUp} className="def-line-height">
              If so, you’ve found the right investment firm. At Mojay Global
              Holding, we help you scale your business and bring you new
              opportunities for investment and growth.
            </motion.article>
            <div className="mt-5 d-flex">
              <motion.img
                alt=""
                src={ideasIcon}
                height={100}
                width={100}
                className="img-fluid  mx-auto"
              />
            </div>
          </motion.div>
          <motion.div className="col-lg-6 mt-lg-4 pb-5 pt-lg-4 px-4">
            <IdeaForm className="" />
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default ContactUs;
