import Footer from "./../../components/footer/index";
import { raulImage, bg14 } from "./../../assets/imgs";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageBackground from "./../../components/imageBackground/index";

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

const CeoMessage = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
      >
        <ImageBackground sizeType="short">
          <img src={bg14} alt="" className="img-fluid" />
          <div className={`image_bg_content mt-5 text-shadow`}>
            <div className="def-container-lg my-5 pt-md-5">
              <h1>CEO Message</h1>
              <div className="mt-4 ">
                <p>Here is a message from the CEO</p>
              </div>
            </div>
          </div>
        </ImageBackground>
        <section className="clear-nav-margin">
          <motion.div
            variants={stagger}
            className="col-12 def-container-lg my-5 pb-4"
          >
            <section className="row">
              <div className="col-lg-6 my-auto">
                <motion.h2 className="my-4" variants={fadeInUp}>
                  CEO Message
                </motion.h2>

                <motion.p variants={fadeInUp}>
                  Innovation. Value. Growth. It might not be the first time you
                  see these ideals weaved into a company’s ethos. But for us,
                  they mean so much more than words written on a wall. These
                  principles inspire everything we do—from the companies we run
                  to the investments we pursue, to the new ventures we embark
                  on.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  While our business goals might change in the future, there are
                  some things we won’t ever do. This is what makes Mojay Global
                  Holding different from any other investment firm. This is what
                  makes us the kind of company you can trust—today and into the
                  future.
                </motion.p>
              </div>
              <div className="col-lg-6 pl-lg-5 my-auto">
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-4"
                >
                  <div className={`w-100 mt-4`}>
                    <img
                      src={raulImage}
                      alt=""
                      className="img-fluid paper-box-shadow"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
            <section>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>We never settle</motion.h5>
                <motion.p variants={fadeInUp}>
                  We challenge today and reinvent tomorrow by thinking outside
                  the box, constantly defying the status quo and coming up with
                  innovative solutions that no one has ever though—or even
                  dreamed—of before.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We’re not blinded by profits, but we are value-driven
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We don’t invest in companies purely for profit’s sake. We
                  develop businesses with a genuine culture of honesty and
                  ethics; investing in sustainable projects that value our
                  planet and have the potential to improve the future of our
                  communities – profits are a consequence.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We don’t see companies, we nurture their main assets
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We invest in people. We see ambitious people and brilliant
                  minds pursuing a dream that will drive positive change and
                  push the world forward.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We don’t let differences get in the way
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We embrace diversity. Whether it’s our internal or external
                  stakeholders, whether it’s our colleagues, partners, clients
                  or vendors, we treat everyone with integrity and equal
                  respect.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We don’t let differences get in the way
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We embrace diversity. Whether it’s our internal or external
                  stakeholders, whether it’s our colleagues, partners, clients
                  or vendors, we treat everyone with integrity and equal
                  respect.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We’re not just investors
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We are partners, advisors, entrepreneurs. We work closely with
                  all our stakeholders, helping businesses navigate change and
                  reach towards exponential growth every step of the way.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.h5 variants={fadeInUp}>
                  We’re not just investors
                </motion.h5>
                <motion.p variants={fadeInUp}>
                  We are partners, advisors, entrepreneurs. We work closely with
                  all our stakeholders, helping businesses navigate change and
                  reach towards exponential growth every step of the way.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.p variants={fadeInUp}>
                  These are just some of the values that have brought us to
                  where we are today. And, I like to believe, these are the
                  values that will continue to lead Mojay towards its ultimate
                  ambition —to become a world-changing company and a
                  distinguished reference point in leadership, innovation and
                  growth.
                </motion.p>
              </div>
              <div className="my-4">
                <motion.p className="font-weight-bold" variants={fadeInUp}>
                  Raul Geraldes Silva
                </motion.p>
                <motion.p variants={fadeInUp}>CEO</motion.p>
              </div>
            </section>
          </motion.div>
        </section>
        <Footer />
      </motion.section>
    </>
  );
};

export default CeoMessage;
