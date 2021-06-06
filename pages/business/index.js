import { motion } from "framer-motion";
import Link from "next/link";
import { InView } from "react-intersection-observer";

import { eternalRobotics, preimo } from "./../../assets/imgs";
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
      staggerChildren: 0.05,
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

function OurBusiness() {
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
        <motion.div variants={stagger} className=" text-center text-md-left">
          <motion.h2 variants={fadeInUp} className="py-3">
            We Are Always Exploring and Expanding
          </motion.h2>
          <motion.div className="row">
            <motion.article className="col-md-12">
              <motion.article variants={fadeInUp} className="def-line-height">
                Mojay Global Holding Limited is a diversified organisation
                having its presence across the areas of Technology &amp;
                Robotics, Mobility, FMCG, Real Estate and Financial Assets.{" "}
                <br /> We work collaboratively with our key stakeholders of the
                companies to take the businesses to the next level of profitable
                growth.
              </motion.article>
            </motion.article>
          </motion.div>
          <motion.section className="my-5" variants={stagger}>
            <InView triggerOnce threshold={0.5}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  variants={stagger}
                  className="row bg-white align-items-center"
                >
                  <motion.div id="#preimo" id="#preimo"  className="col-md-7 p-5 order-2 order-lg-1">
                    <motion.h4 variants={fadeInUp}>Preimo</motion.h4>
                    <hr className="undertone" />
                    <motion.div variants={fadeInUp}>
                      <motion.p className="def-line-height">
                        PREIMO Urban Mobility provides luxury mobility services
                        that offer a one-of-a-kind experience to its customers.
                        Starting its operations in 2018, in Dubai, the company
                        is currently one of the leading providers of chauffeured
                        car rental services. Within a short span of time, MLLIMO
                        scaled up and extended its client base, demonstrating
                        steady growth of sales. It made more than 1,500 Trips
                        per month by the end of 2019 and over 17,000 Trips until
                        pandemic COVID-19 hit the world.
                      </motion.p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <a
                        className="default_link_1"
                        href="https://www.preimo.com"
                      >
                        www.preimo.com
                      </a>
                    </motion.div>
                  </motion.div>
                  <motion.div className="px-0 pl-md-5 pr-lg-5 col-md-5 order-1 order-lg-2">
                    <motion.img
                      variants={ImageSlideIn}
                      src={preimo}
                      className="img-fluid"
                    />
                  </motion.div>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce threshold={0.5}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  variants={stagger}
                  className="row my-5 pt-0 pt-md-5 pb-5 row bg-white align-items-center"
                >
                  <motion.div className="col-md-5 px-0 px-md-5 h-100">
                    <motion.img
                      variants={InView ? ImageSlideIn : ""}
                      src={eternalRobotics}
                      className="img-fluid"
                    />
                  </motion.div>
                  <motion.div id="#eternal-robotics"  className="col-md-7 p-5">
                    <motion.h4 animate={inView ? fadeInUp.animate : ""}>
                      Eternal Robotics
                    </motion.h4>
                    <hr className="undertone" />

                    <motion.div animate={inView ? fadeInUp.animate : ""}>
                      <motion.p className="def-line-height">
                        Eternal Robotics (ER), was acquired by our Group in
                        August 2019. The focus of the company is to develop new
                        products by using technology that makes human execution
                        easy and efficient. From construction to agriculture,
                        logistics, energy, and infrastructure, the prospects for
                        product development are endless.
                      </motion.p>
                      <motion.div animate={inView ? fadeInUp.animate : ""}>
                        <a
                          className="default_link_1"
                          href="https://www.eternalrobotics.com"
                        >
                          www.eternalrobotics.com
                        </a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce threshold={0.5}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  variants={stagger}
                  className="row bg-white align-items-center"
                >
                  <motion.div id="#myro"  className="col-md-7 p-5 order-2 order-lg-1">
                    <motion.h4 variants={fadeInUp}>Myro</motion.h4>
                    <hr className="undertone" />

                    <motion.div variants={fadeInUp}>
                      <motion.p className="def-line-height">
                        MYRO is the first product developed by Eternal Robotics.
                        It is an intelligent wall painting robot designed for
                        construction industry.
                      </motion.p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <a className="default_link_1" href="https://www.myro.bot">
                        www.myro.bot
                      </a>
                    </motion.div>
                  </motion.div>
                  <motion.div className="col-md-5 order-1 order-lg-2">
                    <motion.img
                      variants={ImageSlideIn}
                      src={"https://myro.bot/images/content/gall-01@4x-8.jpg"}
                      className="img-fluid"
                    />
                  </motion.div>
                </motion.div>
              )}
            </InView>
          </motion.section>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default OurBusiness;
