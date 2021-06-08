import BackgroundSlideshow from "react-background-slideshow";
import ImageBackground from "../../components/imageBackground";
import Footer from "./../../components/footer/index";
import { motion } from "framer-motion";
import Link from "next/link";
import HoverCard from "./../../components/hoverCard/index";

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
  myroLogo,
  eternalRoboticsLogo,
  preimoLogo,
  philosophyBg,
  beforeImg,
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
          <ImageBackground sizeType="short">
            <BackgroundSlideshow
              animationDelay={3000}
              images={[myroBg, preimoBg]}
            />
            <div className={`absolute image_bg_content mt-5 text-shadow`}>
              <div className="def-container-lg my-5 pt-md-5 row">
                <div className="col-md-6 d-flex flex-column">
                  <div className="row mt-5">
                    <span className="col-auto h2">Challenging,</span>
                    <span className="col-auto font-weight-bold h2 px-3 px-md-0 def_text_red">
                      Innovating,
                    </span>
                    <br />
                    <span className="col-auto h2">Nurturing</span>
                  </div>
                  
                <p className="mt-4">We are Mojay Global Holding Limited</p>
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
                <img src={teamImage} alt="" className="img-fluid main" />
                <img src={beforeImg} alt="" className="img-fluid before" />
              </div>
            </div>
          </div>
        </section>
        <section id="investment-portfolio">
          <div className="def-container-lg my-5 py-5 px-2">
            <div className="col-lg justify-content-center-6">
              <div className="mb-5">
                <p className="def_text_red">TAKE A LOOK AT</p>
                <h3>OUR INVESTMENT PORTFOLIO</h3>
                <hr className="undertone" />
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12 col-md-6 col-lg-4 mx-auto">
                <HoverCard flex isHoverable={false} height={"96%"}>
                  <div
                    style={{ height: "61.75%" }}
                    className={`w-100 d-flex align-items-center border-bottom`}
                  >
                    <img src={preimoLogo} alt="" className="img-fluid w-100" />
                  </div>
                  <div className="px-3 pt-3 pb-5 text-left">
                    <div className="mb-3 row align-items-center">
                      <h4 className="col-auto">Preimo</h4>
                    </div>
                    <p style={{ fontSize: "0.9rem" }}>
                      PREIMO Urban Mobility provides luxury mobility services.
                    </p>
                    <Link href="/business#preimo">
                      <span className="default_link_1">
                        Click to Learn More
                      </span>
                    </Link>
                  </div>
                </HoverCard>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mx-auto">
                <HoverCard flex isHoverable={false}>
                  <div className={`w-100 bg-white`}>
                    <img
                      src={eternalRoboticsLogo}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="px-3 pt-3 pb-5 text-left">
                    <div className="mb-3 row align-items-center">
                      <h4 className="col-auto">Eternal Robotics</h4>
                    </div>
                    <p style={{ fontSize: "0.9rem" }}>
                      ETERNAL ROBOTICS (ER), was acquired by our Group in August
                      2019.
                    </p>
                    <Link href="/business#eternal-robotics">
                      <span className="default_link_1">
                        Click to Learn More
                      </span>
                    </Link>
                  </div>
                </HoverCard>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mx-auto">
                <HoverCard flex isHoverable={false}>
                  <div className={`w-100 bg-white`}>
                    <img src={myroLogo} alt="" className="img-fluid w-100" />
                  </div>
                  <div className="px-3 pt-3 pb-5 text-left">
                    <div className="mb-3 row align-items-center">
                      <h4 className="col-auto">Myro</h4>
                    </div>
                    <p style={{ fontSize: "0.9rem" }}>
                      MYRO is the first product developed by Eternal Robotics.
                    </p>
                    <Link href="/business#myro">
                      <span className="default_link_1">
                        Click to Learn More
                      </span>
                    </Link>
                  </div>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>
        <section id="philosophy">
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
                <img src={philosophyBg} alt="" className="img-fluid w-100" />
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
      </section>
    </>
  );
}

export default Home;
