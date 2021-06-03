import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { callIcon, emailIcon, locationIcon } from "../../assets/imgs";

import Footer from "./../../components/footer/index";
import ContactForm from "./../../components/form/contact/index";

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
          <span className="col">Contact Us</span>
        </motion.div>
        <motion.div variants={stagger} className="row">
          <motion.div className="col-lg-6 py-5 px-4">
            <motion.h2 variants={fadeInUp} className="py-3">
              We Are Never Out of Reach
            </motion.h2>
            <motion.article variants={fadeInUp} className="def-line-height">
              For any queries or further information, you can always connect
              with us here or leave us a message.
            </motion.article>
            <motion.ul variants={stagger} className="my-4">
              <motion.li variants={fadeInUp} className="row py-3">
                <div className="col-auto ">
                  <img src={callIcon} />
                </div>
                <div className="d-flex col-auto flex-column">
                  <span>Call</span>
                  <a className="pointer" tel="+01 222 5589">
                    +01 222 5589, 658-789-4562
                  </a>
                </div>
              </motion.li>
              <motion.li variants={fadeInUp} className="row py-3">
                <div className="col-auto ">
                  <img src={emailIcon} />
                </div>
                <div className="d-flex col-auto flex-column">
                  <span>Email</span>
                  <a className="pointer" mailto="info@mojay.ngtdev.xyz">
                    info@mojay.ngtdev.xyz
                  </a>
                </div>
              </motion.li>
              <motion.li variants={fadeInUp} className="row flex py-3">
                <div className="col ">
                  <img className="pr-3" src={locationIcon} />
                  <span className="col-auto">Location</span>
                  <div className="col-12 pl-5">
                    <a
                      target="_blank"
                      className="pointer"
                      href="https://goo.gl/maps/TvuRc2yJWk5LKTiVA"
                    >
                      N 2001, Emirates Financial Towers, DIFC, Dubai, United
                      Arab Emirates
                    </a>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="col-lg-6 mt-lg-4 pb-5 pt-lg-4 px-4">
            <ContactForm className="" />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.998392050846!2d55.27721811474267!3d25.203276724480904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f429202af274d%3A0x1ab1e076b585abcb!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sng!4v1622286729968!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </motion.section>
      <Footer />
    </>
  );
}

export default ContactUs;
