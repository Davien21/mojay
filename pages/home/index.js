import BackgroundSlideshow from "react-background-slideshow";
import ImageBackground from "../../components/imageBackground";
import Footer from "./../../components/footer/index";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  hook,
  peopleImage2,
  myroBg,
  preimoBg,
  bg1,
  bg2,
} from "./../../assets/imgs";

const easing = [0.6, -0.05, 0.01, 0.99];

function Home() {
  return (
    <section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: easing, duration: 0.6 } }}
    >
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
                <span className="col-auto font-weight-bold h1 px-3 px-md-0 def_red">
                  Innovating
                </span>
                <span className="col-auto h1">Nurturing</span>
              </div>
              <div className="mt-4 ">
                <p>
                  Mojay Global Holding helps industy’s leaders to automate the
                  development and production process, because speed is
                  essential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ImageBackground>
      <Footer />
    </section>
  );
}

export default Home;
