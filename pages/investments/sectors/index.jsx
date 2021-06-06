import { motion } from "framer-motion";
import Link from "next/link";
import { InView } from "react-intersection-observer";

import { eternalRobotics, preimo, techIcon3 } from "./../../../assets/imgs";
import Footer from "./../../../components/footer/index";

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

function InvestmentSectors() {
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
          <span className="col">Our InvestmentSectors</span>
        </motion.div>
        <motion.div variants={stagger} className=" text-center text-md-left">
          <motion.h2 variants={fadeInUp} className="py-3">
            Turning Challenges Into Opportunities
          </motion.h2>
          <motion.div className="row mx-auto">
            <motion.article className="col-md-12 px-0">
              <motion.article variants={fadeInUp} className="def-line-height">
                At Mojay Global Holding, we are always in hunt for innovative
                projects, business opportunities and entrepreneurs who dare to
                challenge the status quo and to setup new and higher standards
                in their industries. Here are the industries where we excel in:
              </motion.article>
            </motion.article>
          </motion.div>
          <motion.section className="my-5 row" variants={stagger}>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">
                        Technology &amp; Robotics Mobility
                      </h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      Industry 4.0, also known as the Fourth Industrial
                      Revolution, is all about making business smarter and more
                      automated. Some of the digital transformation technologies
                      brought about by Industry 4.0, that we follow with
                      attention, include:
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">Artificial Intelligence</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      “AI”, or machine intelligence, is the field developing
                      computers and robots capable of parsing data contextually
                      to provide requested information, supply analysis, or
                      trigger events based on findings. Through techniques like
                      neural networks machine learning, companies globally are
                      investing in teaching machines to ‘think’ more like
                      humans.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">Robotics</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      Robotics is the intersection of science, technology, and
                      engineering that produces machines, called robots, that
                      replicate for (or substitute) human actions.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">Mobility</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      Mobility industry defined as “a user-centric concept –
                      recognising that transportation products and services must
                      be responsive to the needs, habits, and preferences of
                      consumers”. We focus on Luxury Transportation Services and
                      innovative mobility solutions and technologies.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">FMCG</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      We look for innovators in the FMCG sector, particularly
                      operating in the Food Industry. Food security has always
                      been one of the major challenges faced by Nations. The
                      availability of aliments and a balanced nutrition are
                      major contributors for Human Development. At Mojay Global
                      Holding, we believe that innovation in the Food Industry
                      can generate higher productivity, lower prices, longer
                      product life cycles and higher nutritional value to the
                      World’s fast-growing population. We also look for
                      innovative FMGC’s E-commerce businesses with focus on B2C
                      (products &amp; services) or new market-places.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">Real Estate</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      The real estate industry encompasses a large variety of
                      property, including development, appraisal, selling,
                      leasing, and management of commercial, industrial,
                      residential, and agricultural properties. We look for
                      opportunities with constant revenue streams or with high
                      potential of value appreciation.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-md-6 p-2">
              <motion.div className="bg-white">
                <motion.div className="row p-5 flex-column">
                  <motion.div className=" col-auto">
                    <div className="d-flex">
                      <img src={techIcon3} />
                      <h5 className="col">Financial Assets</h5>
                    </div>
                    <hr className="undertone" />
                  </motion.div>
                  <motion.div className="col pt-3">
                    <p>
                      Mojay Global Holding also invests in a diversified
                      portfolio of Securities, following a conservative
                      investment strategy, with small exposure to the best
                      opportunities in Stocks and Commodities. We look for
                      long-term value creation (Legacy Portfolio). Our
                      Investment analysis is based on fundamental analysis of
                      stock markets, industry, company performance and stock
                      evaluation. We also look for non-listed Investment
                      Opportunities in innovative Fintechs.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default Investments;
