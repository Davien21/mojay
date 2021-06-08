import React from "react";
import { motion } from "framer-motion";

import {
  arunImage,
  candiImage,
  eternalRoboticsLogo,
  raulImage,
  shahImage,
  sunilImage,
  khanImage,
} from "../../assets/imgs";

let hoverProps = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const PeopleSection = () => {
  return (
    <div id="" className="d-none d-lg-flex row people-section">
      <div className="col-lg-5 ">
        <div className="paper-box-shadow border p-4 h-100">
          <p className="def_text_orange" style={{ fontSize: "1.2rem" }}>
            Founder and Director
          </p>
          <p className="">
            Sunil is a technocrat with over 18 years of technology experience
            and one of the early proponents of blockchain-enabled technology.{" "}
            <br /> He plays an integral part in leading the firm’s tactical path
            and development processes, leading the organization to build a
            growing portfolio of thriving companies and IPs.
          </p>
        </div>
      </div>
      <div className="col-lg ">
        <div className="">
          <div className="row border">
            <div className="col-md-5 px-0 h-100">
              <img src={sunilImage} className="img-fluid paper-box-shadow" />
            </div>
            <div className="col-md-7 py-4">
              <p className="h5 mb-0">Sunil Singh</p>
              <p>Founder and Director</p>
              <article>
                Sunil Kumar Singh is the Founder and Director of the Board of
                Mojay Global Holding.
              </article>
              <article></article>
            </div>
          </div>
          <div class="row">
            <motion.div
              {...hoverProps}
              className="col-lg-4 my-lg-3 people_card-2"
            >
              <img
                src={sunilImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 my-lg-3 people_card-2"
            >
              <img
                src={arunImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 my-lg-3 people_card-2"
            >
              <img
                src={raulImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 people_card-2"
            >
              <img
                src={candiImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div {...hoverProps} className="col-lg-4 people_card-2">
              <img
                src={shahImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 people_card-2"
            >
              <img
                src={khanImage}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
