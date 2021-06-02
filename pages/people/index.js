import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./people.module.css";
import {
  arunImage,
  candiImage,
  peopleImage2,
  raulImage,
  sunilImage,
  shahImage,
  khanImage,
} from "../../assets/imgs";
import ImageBackground from "../../components/imageBackground/index";
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
      <motion.section className="def-container-md py-5">
        <motion.div className="row flex-column mx-auto flex-sm-row align-items-center">
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.initial}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/sunil-singh">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={sunilImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>Sunil Kumar Singh</h4>
                      <p>Founder &amp; Director</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.animate}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/s-r-arun">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={arunImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>S. R. Arun</h4>
                      <p>Chairman</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.animate}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/raul-silva">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={raulImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>Raul Silva</h4>
                      <p>Managing Director &amp; CEO</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.animate}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/candi-carrera">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={candiImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>Candi Carrera</h4>
                      <p>Director</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.animate}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/siddhant-shah">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={shahImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>Siddhant Shah</h4>
                      <p>Director</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce threshold={0.5}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                initial={fadeInUp.animate}
                animate={inView ? fadeInUp.animate : ""}
              >
                <Link href="/about-us/people/yasser-khan">
                  <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 bg-white paper-box-shadow pointer"
                  >
                    <div className={`w-100`}>
                      <img src={khanImage} alt="" className="img-fluid" />
                    </div>
                    <div className="px-3 pt-3 pb-5 text-left">
                      <h4>Yasser Khan</h4>
                      <p>Director</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </InView>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default People;
