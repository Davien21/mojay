import BackgroundSlideshow from "react-background-slideshow";
import ImageBackground from "../../components/imageBackground";
import Footer from "./../../components/footer/index";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  myroBg,
  preimoBg,
  deloitteLogo,
  pkfLogo,
  almtLogo,
  thomasFamilyLogo,
  bsaLogo,
  abrahamicBusinessCircleLogo,
  teamImage,
} from "./../../assets/imgs";

const easing = [0.6, -0.05, 0.01, 0.99];

function Home() {
  return (
    <>
      <section
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
      >
        <section>
          <ImageBackground sizeType="tall">
            <BackgroundSlideshow
              animationDelay={3000}
              images={[myroBg, preimoBg]}
            />
            <div className={`absolute image_bg_content mt-5 text-shadow`}>
              <div className="def-container-lg my-5 pt-md-5 row">
                <div className="col-md-7 mt-4 d-flex flex-column">
                  <h6>Industrial automation, artificial intelligence</h6>
                  <div className="row">
                    <span className="col-auto h1">Challenging</span>
                    <span className="col-auto font-weight-bold h1 px-3 px-md-0 def_text_red">
                      Innovating
                    </span>
                    <span className="col-auto h1">Nurturing</span>
                  </div>
                  <div className="mt-4 ">
                    <p>
                      Mojay Global Holding helps industy’s leaders to automate
                      the development and production process, because speed is
                      essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ImageBackground>
        </section>
        <section id="partners" className="clear-nav-margin bg-white">
          <div className="def-container-lg ">
            <div className="row justify-content-lg-between mx-auto">
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center justify-content-lg-start pl-lg-0 d-flex align-items-center ">
                <img src={deloitteLogo} alt="" className="img-fluid" />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <img src={pkfLogo} alt="" className="img-fluid " />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center ">
                <img src={almtLogo} alt="" className="img-fluid" />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <img src={bsaLogo} alt="" className="img-fluid" />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center ">
                <img src={thomasFamilyLogo} alt="" className="img-fluid " />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <img
                  src={abrahamicBusinessCircleLogo}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="who-we-are">
          <div className="def-container-lg my-5 py-5">
            <div className="row">
              <div className="col-lg justify-content-center-6">
                <div className="mb-4">
                  <p className="def_text_red">GET TO KNOW</p>
                  <h3>WHO WE ARE</h3>
                  <hr className="undertone" />
                </div>
                <ul className="">
                  <li className="row my-4">
                    <span className="col-auto def_text_red">01</span>
                    <span className="col">
                      Expert think-tank with years of experience transforming
                      businesses.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">02</span>
                    <span className="col">
                      Technology specialists that understand business drivers
                      and operational challenges.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">03</span>
                    <span className="col">
                      Forward thinking architects constantly solving business
                      issues using innovative methods.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">04</span>
                    <span className="col">
                      Identifiers of out-of-the-box business opportunities, and
                      entrepreneurs who dare to challenge the status quo.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg justify-content-center-6 d-flex align-items-center before-img-div top-margin">
                <img src={teamImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="investment-portfolio">
          <div className="def-container-lg my-5 py-5">
            <div className="row">
              <div className="col-lg justify-content-center-6">
                <div className="mb-4">
                  <p className="def_text_red">GET TO KNOW</p>
                  <h3>WHO WE ARE</h3>
                  <hr className="undertone" />
                </div>
                <ul className="">
                  <li className="row my-4">
                    <span className="col-auto def_text_red">01</span>
                    <span className="col">
                      Expert think-tank with years of experience transforming
                      businesses.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">02</span>
                    <span className="col">
                      Technology specialists that understand business drivers
                      and operational challenges.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">03</span>
                    <span className="col">
                      Forward thinking architects constantly solving business
                      issues using innovative methods.
                    </span>
                  </li>
                  <li className="row my-4">
                    <span className="col-auto def_text_red">04</span>
                    <span className="col">
                      Identifiers of out-of-the-box business opportunities, and
                      entrepreneurs who dare to challenge the status quo.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg justify-content-center-6 d-flex align-items-center before-img-div top-margin">
                <img src={teamImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </section>
    </>
  );
}

export default Home;
