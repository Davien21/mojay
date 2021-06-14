import { motion } from "framer-motion";
import Image from "next/image";

import {
  bg2,
  ideasImage,
} from "../../assets/imgs";

import ImageBackground from "../../components/imageBackground";
import Footer from "../../components/footer/index";
const easing = [0.6, -0.05, 0.01, 0.99];

function OurStory() {
  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
    >
      <ImageBackground sizeType="short">
        <img src={bg2} alt="" className="img-fluid" />
        <div className={`image_bg_content mt-5 text-shadow`}>
          <div className="def-container-lg my-5 pt-md-5">
            <h1>Our Story</h1>
            <div className="mt-4 ">
              <p>Discover how we started this journey.</p>
            </div>
          </div>
        </div>
      </ImageBackground>
      <section className="clear-nav-margin">
        <div className="my-5">
          <div className="def-container ">
            <article className="text-center text-md-left">
              <h3>Our Story</h3>
              <hr className="undertone" />
            </article>
          </div>
          <div className="def-container my-5">
            <div className="wrapped-text-div">
              <div className="col-12 col-md-5 p-md-0">
                <img
                  src={ideasImage}
                  alt=""
                  className="img-fluid def-rounded"
                />
              </div>
              <article className="text-justify p-3 p-md-0">
                <p>
                  What started as an idea is now turned into a growing business.
                  <br />
                  In the past few years we we have crossed many milestones and
                  turned around businesses.
                </p>

                <p>
                  From traditional business models, innovation came through
                  changes in Ideology, Scalability of Deliverables, Process
                  re-design and Talent re-assessment.
                </p>
                <p>
                  This has reinforced our Philosophy and has put us on a clear
                  path of expansion on a global platform.
                </p>
                <p>
                  Now we are confident that our expertise spanning across the
                  areas of Technology &amp; Robotics, Mobility, Real Estate and
                  FMCG are fit for growth, ready to move into the Global Arena.
                </p>
                <p>
                  We work collaboratively with the Key Stakeholders of the
                  companies to take the businesses to the next level of
                  profitable growth.
                </p>
                <p>
                  Our approach begins with active, strategic involvement at all
                  levels while helping the company to scale–by leveraging our
                  resources which are industry-specific, led by senior
                  experienced Management teams.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.section>
  );
}

export default OurStory;
