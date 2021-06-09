import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./people.module.css";
import {
  arunImage,
  candiImage,
  philosophyBg,
  raulImage,
  sunilImage,
  shahImage,
  khanImage,
  bg5,
} from "../../assets/imgs/index";

import Image from "next/image";

import Link from "next/link";
import Footer from "../../components/footer/index";
import PeopleSection from "./../../components/people-section/index";
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
        <div>
          <PeopleSection />
        </div>
        <motion.div className="d-lg-none row flex-column mx-auto flex-sm-row align-items-center">
          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
          >
            <Link href="/people/sunil-singh">
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

          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.animate}
            animate={fadeInUp.animate}
          >
            <Link href="/people/s-r-arun">
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

          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.animate}
            animate={fadeInUp.animate}
          >
            <Link href="/people/raul-silva">
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
                  <h4>Raul Geraldes Silva</h4>
                  <p>Managing Director &amp; CEO</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.animate}
            animate={fadeInUp.animate}
          >
            <Link href="/people/candi-carrera">
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

          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.animate}
            animate={fadeInUp.animate}
          >
            <Link href="/people/siddhant-shah">
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

          <motion.div
            className={`col-auto col-6 col-md-4 ${styles.people_card}`}
            initial={fadeInUp.animate}
            animate={fadeInUp.animate}
          >
            <Link href="/people/yasser-khan">
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
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default People;
