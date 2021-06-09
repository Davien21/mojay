import Footer from "./../../components/footer/index";
import { philosophyBg, philosophyBg2 } from "./../../assets/imgs";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageBackground from "./../../components/imageBackground/index";
const easing = [0.6, -0.05, 0.01, 0.99];

const OurPhilosophy = () => {
  return (
    <>
      <motion.section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
      >
        <ImageBackground sizeType="short">
          <img src={philosophyBg} alt="" className="img-fluid" />
          <div className={`image_bg_content mt-5 text-shadow`}>
            <div className="def-container-lg my-5 pt-md-5">
              <h1>Our Philosophy</h1>
              <div className="mt-4 ">
                <p>Challenging, nurturing, innovating.</p>
              </div>
            </div>
          </div>
        </ImageBackground>
        <section id="philosophy" className="clear-nav-margin">
          <div className="def-container-lg my-5 py-5 px-2">
            <div className="col-lg justify-content-center-6">
              <div className="mb-5">
                <p className="def_text_red">LEARN ABOUT</p>
                <h3>OUR PHILOSOPHY</h3>
                <hr className="undertone" />
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12 mb-5 col-md-6">
                <img src={philosophyBg2} alt="" className="img-fluid w-100" />
              </div>
              <div className="col-12 col-md-6">
                <h4 className="mb-4">Philosophy is two pronged</h4>
                <p>
                  Fully customizable and neatly organized components will help
                  you work faster without limiting creative freedom.
                </p>
                <div className="row">
                  <div className="col-12 my-2 col-md-6">
                    <div></div>
                    <h6 className="h5">Feature One</h6>
                    <div>
                      With the aid of new-age processes &amp; technologies and
                      deriving elevated value for our stakeholders.
                    </div>
                  </div>
                  <div className="col-12 my-3 col-md-6">
                    <div></div>
                    <h6 className="h5">Feature Two</h6>
                    <div>
                      Invest, Advise, Manage and support the growth of
                      disruptive technologies in Accelerated Growth sectors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.section>
    </>
  );
};

export default OurPhilosophy;
