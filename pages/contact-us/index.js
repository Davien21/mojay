import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { callIcon, emailIcon, locationIcon } from "../../assets/imgs";

import Footer from "./../../components/footer/index";

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
          <span className="col">Our Businesses</span>
        </motion.div>
        <motion.div variants={stagger} className="row text-center text-md-left">
          <motion.div className="col-md-6">
            <motion.h2 variants={fadeInUp} className="py-3">
              We Are Never Out of Reach
            </motion.h2>
            <motion.article variants={fadeInUp} className="def-line-height">
              For any queries or further information, you can always connect
              with us here or leave us a message.
            </motion.article>
            <motion.ul variants={stagger} className="my-4">
              <motion.li variants={fadeInUp} className="row py-2">
                <div className="col-auto ">
                  <img src={callIcon} />
                </div>
                <div className="d-flex col-auto flex-column">
                  <span>Call</span>
                  <a className="pointer" tel="+01 222 5589">+01 222 5589, 658-789-4562</a>
                </div>
              </motion.li>
              <motion.li variants={fadeInUp} className="row py-2">
                <div className="col-auto ">
                  <img src={emailIcon} />
                </div>
                <div className="d-flex col-auto flex-column">
                  <span>Email</span>
                  <a className="pointer" mailto="info@mojay.ngtdev.xyz">info@mojay.ngtdev.xyz</a>
                </div>
              </motion.li>
              <motion.li variants={fadeInUp} className="row py-2">
                <div className="col-auto ">
                  <img src={emailIcon} />
                </div>
                <div className="d-flex col-auto flex-column">
                  <span>Location</span>
                  <a className="pointer" mailto="info@mojay.ngtdev.xyz">info@mojay.ngtdev.xyz</a>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default ContactUs;
