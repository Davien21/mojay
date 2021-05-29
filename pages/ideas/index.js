import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { callIcon, emailIcon, locationIcon } from "../../assets/imgs";

import Footer from "./../../components/footer/index";
import ContactForm from "./../../components/form/contact/index.js";
import IdeaForm from "./../../components/form/ideas/index";

const easing = [0.6, -0.05, 0.01, 0.99];
const transition1 = {
  duration: 0.6,
  ease: easing,
};

const transition2 = {
  duration: 0.6,
  delay: 0.4,
  ease: easing,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ImageSlideIn = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: transition2,
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
      <motion.section
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="def-container py-5"
      >
        <motion.div variants={fadeInUp} className="">
          <hr className="col dash" />
          <span className="col">Share Ideas</span>
        </motion.div>
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
          </motion.div>
          <motion.div className="col-lg-6 mt-lg-4 pb-5 pt-lg-5 px-4">
            <IdeaForm className="" />
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}

export default ContactUs;
