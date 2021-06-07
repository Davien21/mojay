import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "./../../../components/footer/index";
import { bg15 } from "./../../../assets/imgs";
import ImageBackground from "./../../../components/imageBackground/index";

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

const InvestmentProcesses = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
      >
        <ImageBackground sizeType="short">
          <img src={bg15} alt="" className="img-fluid" />
          <div className={`image_bg_content mt-5 text-shadow`}>
            <div className="def-container-lg my-5 pt-md-5">
              <h1>Investment Process</h1>
              <div className="mt-4 ">
                <p>
                  Look at our step by step guide for how we can get you started
                  with us.
                </p>
              </div>
            </div>
          </div>
        </ImageBackground>
        <section className="clear-nav-margin">
          <motion.div variants={stagger} className="col-12 my-5 pb-4">
            <section></section>
            <section className="row">
              <div className="col my-auto">
                <h5 className="text-white text-center def-orange-bg py-3">
                  Promoter / Entrepreneur
                </h5>
                <ul className="paper-box-shadow bg-white px-3 pb-5 text-center">
                  <h6>Origination</h6>
                  <hr />
                  <li className="my-3">Letter of Intention</li>
                  <li className="my-3">NDA Signature</li>
                  <li className="my-3">
                    Idea, Project and/or Company Presentation
                  </li>
                  <li className="my-3">Promoter Presentation</li>
                  <li className="my-3">Business Plan</li>
                  <li className="my-3">Budget and Projections</li>
                  <li className="my-3">Investment Requirements</li>
                </ul>
              </div>
              <div className="col my-auto">
                <h5 className="text-white text-center def-orange-bg py-3">
                  MGHL Executive Commitee
                </h5>
                <ul className="paper-box-shadow bg-white px-3 pb-5 text-center">
                  <h6>INITIAL ANALYSIS</h6>
                  <hr />
                  <li className="my-3">Strategic Fitting</li>
                  <li className="my-3">Business Model Analisys</li>
                  <li className="my-3">Innovation Potential</li>
                  <li className="my-3">Value Creation Potential</li>
                  <li className="my-3">Request for Additional Information</li>
                </ul>
              </div>
              <div className="col my-auto">
                <h5 className="text-white text-center def-orange-bg py-3">
                  MGHL Compliance Team
                </h5>
                <ul className="paper-box-shadow bg-white px-3 pb-5 text-center">
                  <h6>DUE DILLIGENCE</h6>
                  <hr />
                  <li className="my-3">Company Overview</li>
                  <li className="my-3">Organisation &amp; Structure</li>
                  <li className="my-3">Products and Services</li>
                  <li className="my-3">Management Team</li>
                  <li className="my-3">Supply Chain Analysis</li>
                  <li className="my-3">Sales &amp; Marketing</li>
                  <li className="my-3">Financial Reports</li>
                  <li className="my-3">R &amp; D, Brands and IPs</li>
                </ul>
              </div>
              <div className="col my-auto">
                <h5 className="text-white text-center def-orange-bg py-3">
                  MGHL Investment Commitee
                </h5>
                <ul className="paper-box-shadow bg-white px-3 pb-5 text-center">
                  <h6>INTERNAL ANALISYS</h6>
                  <hr />
                  <li className="my-3">Investment Committee Analysis</li>
                  <li className="my-3">Risk Committee Analisys</li>
                  <li className="my-3">Investment Report and Recommendation</li>
                  <li className="my-3">Board of Directors Deliberation</li>
                </ul>
              </div>
              <div className="col my-auto">
                <h5 className="text-white text-center def-orange-bg py-3">
                  MGHL &amp; Entrepreneur
                </h5>
                <ul className="paper-box-shadow bg-white px-3 pb-5 text-center">
                  <h6>NEGOTIATION STAGE</h6>
                  <hr />
                  <li className="my-3">Negotiation of terms and conditions</li>
                  <li className="my-3">Investment Agreement</li>
                  <li className="my-3">Investment Deployment</li>
                  <li className="my-3">MGHL Strategic Support</li>
                </ul>
              </div>
            </section>
          </motion.div>
        </section>
        <Footer />
      </motion.section>
    </>
  );
};

export default InvestmentProcesses;
