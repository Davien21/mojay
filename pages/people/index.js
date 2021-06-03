import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./people.module.css";

// import ImageBackground from "../../components/imageBackground/index";

import Link from "next/link";
import Footer from "../../components/footer/index";
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

function People() {
  return (
    <>
      <motion.section className="">
        {/* <ImageBackground src={peopleImage2} /> */}
        <motion.section
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="def-container"
        >
          <motion.div variants={fadeInUp} className="py-5 text-center">
            <hr className="dash" />
            <span className="col">Our People</span>
          </motion.div>
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
      hi people
      <Footer />
    </>
  );
}

export default People;
