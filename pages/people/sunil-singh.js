import { sunilImage, checkIcon, leftArrowIcon } from "../../assets/imgs";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../people/people.module.css";
import Footer from "../../components/footer/index";
import Brands from "../../components/brands/index";
import SimpleBar from "simplebar-react";
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

const sunilSingh = () => {
  return (
    <>
      <motion.div
        className={styles.main_container}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <div className="h-100">
          <div className="container-fluid d-flex px-0 h-100 justify-content-between row align-items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`col-md-6 mx-auto`}
            >
              <motion.div className={`${styles.people_card} mx-auto`}>
                <motion.div
                  className={`col-auto col-6 col-md-4 ${styles.people_card}`}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
            <SimpleBar className="h-100 col-md-6" style={{ overflowY: "auto" }}>
              <motion.div variants={stagger} className="mb-5 pb-4">
                <Link href="/about-us/people">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-4 d-inline-block mt-4 pointer text-black "
                    variants={fadeInUp}
                  >
                    <img src={leftArrowIcon} height={30} width={30} alt="" />
                    <span className="col-auto ">Back</span>
                  </motion.div>
                </Link>

                <motion.p variants={fadeInUp}>
                  Sunil Kumar Singh is the Founder and Director of the Board of
                  Mojay Global Holding.
                </motion.p>
                <motion.article
                  variants={fadeInUp}
                  className="py-2 def-line-height"
                >
                  He is a technocrat with over 18 years of experiecnce in the
                  technology sector. A prolific entrepreneur, businessman,
                  consultant, thinker, and founder of companies committed to the
                  creation and advancement of new industries leveraging
                  cutting-edge technology such as artificial intelligence,
                  machine learning, robotics, blockchain and others. He is one
                  of the early proponents of blockchain-enabled technology.
                </motion.article>
                <motion.article
                  variants={fadeInUp}
                  className="py-2 def-line-height"
                >
                  He plays an integral part in leading the firm’s tactical path
                  and development processes, leading the organization to build a
                  growing portfolio of thriving companies and IPs.
                </motion.article>
                <motion.article
                  variants={fadeInUp}
                  className="py-1 def-line-height"
                >
                  <p>
                    He is based in Dubai and engaged in diverse business
                    verticals that encompass
                  </p>
                </motion.article>
                <motion.article variants={fadeInUp} className="">
                  <ul className="ml-md-3">
                    <li className="row align-items-center py-1">
                      <div className="col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                      </div>
                      <span className="">Business Consulting.</span>
                    </li>
                    <li className="row align-items-center py-1">
                      <div className="col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                      </div>
                      <span className="">Strategic Consulting..</span>
                    </li>
                    <li className="row align-items-center py-1">
                      <div className="col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                      </div>
                      <span className="">Investments</span>
                    </li>
                    <li className="row align-items-center py-1">
                      <div className="col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                      </div>
                      <span className="">
                        High-End Food and Beverage Concepts.
                      </span>
                    </li>
                    <li className="row align-items-center py-1">
                      <div className="col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                      </div>
                      <span className="">
                        Innovative and Disruptive Technology{" "}
                      </span>
                    </li>
                    <li
                      style={{ overflowX: "hidden" }}
                      className="row align-items-center py-1"
                    >
                      <div className="d-flex col-auto">
                        <img src={checkIcon} height={20} width={20} alt="" />
                        <span className="col-auto">
                          Creator of Intellectual property in the field of
                          information technology, Mobility, Security Research,
                          communication.
                        </span>
                      </div>
                    </li>
                  </ul>
                </motion.article>
              </motion.div>
            </SimpleBar>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default sunilSingh;
