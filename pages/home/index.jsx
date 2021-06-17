import BackgroundSlideshow from "react-background-slideshow";
import ImageBackground from "../../components/imageBackground";
import Footer from "../../components/footer/index";
import { motion } from "framer-motion";
import Link from "next/link";
import HoverCard from "../../components/hoverCard/index";

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
  techIcon2,
  mobilityIcon,
  realEstateIcon,
  fmgcIcon,
  financeIcon,
  bg5,
  aboutUsImage3,
} from "../../assets/imgs";
import OurBrief from "../../components/brief/index";

import Image from "next/image";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

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
            <div
              className={`absolute text-md-center image_bg_content mt-5 text-shadow`}
            >
              <div className="def-container-lg my-5 pt-md-5">
                <div className="d-flex flex-column">
                  <div className="mt-5">
                    <span className="col-auto h2">Challenging,</span>
                    <span className="col-auto font-weight-bold h2 px-3 px-md-0 def_text_red">
                      Innovating,
                    </span>
                    <span className="col-auto h2">Nurturing</span>
                  </div>

                  <p className="mt-4">We are Mojay Global Holding Limited</p>
                </div>
              </div>
            </div>
          </ImageBackground>
        </section>
        <section id="partners" className="partners-section bg-white">
          <div className="def-container-lg ">
            <div className="row justify-content-lg-between mx-auto">
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center justify-content-lg-start d-flex align-items-center ">
                <Image
                  width={80}
                  height={60}
                  src={deloitteLogo}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <Image
                  width={138}
                  height={60}
                  src={pkfLogo}
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center ">
                <Image
                  width={158}
                  height={35}
                  src={almtLogo}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <Image
                  width={46}
                  height={46}
                  src={bsaLogo}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center ">
                <Image
                  width={60}
                  height={60}
                  src={thomasFamilyLogo}
                  alt=""
                  className="img-fluid "
                />
              </div>
              <div className="partner-logo col-6 col-md-4 py-4 col-lg justify-content-center d-flex align-items-center">
                <Image
                  width={127}
                  height={39}
                  src={abrahamicBusinessCircleLogo}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <motion.section
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="def-container my-5"
        >
          <motion.div variants={stagger} className=" text-center text-md-left">
            <motion.h3 variants={fadeInUp} className="py-3">
              We are Mojay Global Holding
            </motion.h3>
            <motion.div className="row">
              <motion.article className="col-lg-12">
                <motion.article variants={fadeInUp} className="def-line-height">
                  Mojay Global holding limited is a value-driven organisation
                  established in July 2020, to embrace several existing
                  businesses and to nurture new investment opportunities
                </motion.article>
                <motion.article
                  variants={fadeInUp}
                  className="py-4 def-line-height"
                >
                  It is registered and headquartered in DIFC-Dubai International
                  Financial Centre as a Private Investment Holding Company and,
                  since then, it has been expanding across diverse business
                  sectors, majorly focusing on 5 strategic verticals:
                </motion.article>
              </motion.article>
            </motion.div>
            <motion.article className="text-center mt-5 pb-4 text-md-left">
              <motion.h3 variants={fadeInUp}>
                Diverse Business sectors
              </motion.h3>
              <motion.hr
                variants={fadeInUp}
                className="undertone mx-auto mx-md-0"
              />
            </motion.article>
            <motion.ul
              variants={fadeInUp}
              className="row justify-content-between flex-wrap"
            >
              <div className="offset-2 d-md-none"></div>
              <li className="col-4 col-md-2 py-2 mx-auto mx-md-0 text-center">
                <Image src={techIcon2} height={50} width={50} alt="" />
                <p>Technology and Robotics</p>
              </li>
              <li className="col-4 col-md-2 py-2 mx-auto mx-md-0 text-center">
                <Image src={mobilityIcon} height={50} width={50} alt="" />
                <p>Mobility</p>
              </li>
              <div className="offset-2 d-md-none"></div>
              <li className="col-4 col-md-2 py-2 text-center">
                <Image src={realEstateIcon} height={50} width={50} alt="" />
                <p>Real Estate</p>
              </li>
              <li className="col-4 col-md-2 py-2 text-center">
                <Image src={fmgcIcon} height={50} width={50} alt="" />
                <p>FMGC</p>
              </li>
              <li className="col-4 col-md-2 py-2 text-center">
                <Image src={financeIcon} height={50} width={50} alt="" />
                <p>Financial Assets</p>
              </li>
            </motion.ul>
          </motion.div>
        </motion.section>
        <motion.section
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="def-container my-5"
        >
          <motion.article className="text-center mt-5 pb-4 text-md-left">
            <motion.h3 variants={fadeInUp}>Company Brief</motion.h3>
            <motion.hr
              variants={fadeInUp}
              className="undertone mx-auto mx-md-0"
            />
          </motion.article>
          <OurBrief />
          <div className="row d-md-none text-center">
            <div className="col-md-12">
              <motion.div variants={fadeInUp} className=" mb-5">
                <h4>Our Name</h4>
                <hr className="undertone mx-auto" />
                <p>
                  <p>
                    Mojay is more than just a name; it is a portmanteau of our
                    founder children’s names.
                  </p>
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className=" mb-5">
                <h4>Our Belief</h4>
                <hr className="undertone mx-auto" />
                <p>
                  We believe that the keystone of any good relationship is
                  nurturing.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="">
                <h4>Our Foundation</h4>
                <hr className="undertone mx-auto" />
                <p>
                  Invest, Advise and Manage companies with accelerated growth
                  potential.
                </p>
                <p>
                  We look to constantly create value to our diverse
                  stakeholders, through innovation - bringing a new enterprise
                  and end-user engagement.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <section id="who-we-are">
          <div className="def-container-lg my-5 text-center text-md-left py-5">
            <div className="row">
              <div className="col-lg">
                <div className="mb-4">
                  <p className="def_text_red">GET TO KNOW</p>
                  <h3>WHO WE ARE</h3>
                  <hr className="undertone mx-auto mx-lg-0" />
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
              <div className="col-lg justify-content-center d-flex align-items-center top-margin">
                <img src={teamImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="investment-portfolio">
          <div className="def-container-lg my-5 text-center text-md-left py-5">
            <div className="col-lg">
              <div className="mb-5">
                <p className="def_text_red">TAKE A LOOK AT</p>
                <h3>OUR BUSINESS PORTFOLIO</h3>
                <hr className="undertone mx-auto mx-lg-0" />
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12 col-md-6 col-lg-4 mx-auto">
                <HoverCard flex isHoverable={false} height={"96%"}>
                  <div
                    style={{ height: "61.75%" }}
                    className={`w-100 d-flex align-items-center border-bottom`}
                  >
                    <Image
                      width={438}
                      height={216}
                      src={preimoLogo}
                      alt=""
                      className="img-fluid w-100"
                    />
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
                    <Image
                      width={438}
                      height={438}
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
                    <Image
                      width={438}
                      height={438}
                      src={myroLogo}
                      alt=""
                      className="img-fluid w-100"
                    />
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
          <div className="def-container-lg my-5 text-center text-md-left py-5">
            <div className="col-lg">
              <div className="mb-5">
                <p className="def_text_red">LEARN ABOUT</p>
                <h3>OUR PHILOSOPHY</h3>
                <hr className="undertone mx-auto mx-lg-0" />
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12 mb-5 col-md-6">
                <Image
                  width={438}
                  height={292}
                  src={philosophyBg}
                  alt=""
                  className="img-fluid w-100"
                />
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
