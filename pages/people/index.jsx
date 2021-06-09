import { motion } from "framer-motion";
import { bg5 } from "../../assets/imgs/index";

import Image from "next/image";

import Footer from "../../components/footer/index";
import PeopleSection from "../../components/people-section/index";
import ImageBackground from "../../components/imageBackground";
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

 
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

function People() {
  return (
    <>
      <ImageBackground sizeType="short">
        <img src={bg5} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our People</h1>
            <div className="mt-4 ">
              <p>Meet the team that makes things happen.</p>
            </div>
          </div>
        </div>
      </ImageBackground>

      <motion.section className="">
        <motion.section
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="def-container-lg"
        >
          <motion.article variants={stagger} className="text-center ">
            <motion.h1 variants={fadeInUp} className="py-3">
              We are Visionaries
            </motion.h1>
            <motion.div className="">
              <motion.article variants={fadeInUp} className="def-line-height">
                We are a team of dedicated professionals working passionately
                for one common purpose and goal. We are led by visionaries who
                are supported by experienced executives, finance experts, and
                successful investors.
              </motion.article>
            </motion.div>
          </motion.article>
        </motion.section>
      </motion.section>
      <motion.section className="def-container-lg py-5 text-center text-lg-left">
        <div className="">
          <div className="mb-5">
            <p className="def_text_red">MEET</p>
            <h3>OUR PEOPLE</h3>
            <hr className="undertone mx-auto mx-lg-0" />
          </div>
        </div>
        <PeopleSection />
      </motion.section>
      <Footer />
    </>
  );
}

export default People;
