import { useState } from "react";
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

import Image from "next/image";
import sunil from "./sunil";
import arun from "./arun";
import raul from "./raul";
import carerra from "./carerra";
import siddhant from "./siddhant";
import yasser from "./yasser";

let people = { sunil, arun, raul, carerra, siddhant, yasser };

let hoverProps = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const PeopleSection = () => {
  const [shortSummary, setShortSummary] = useState(sunil.shortSummary);
  const [longSummary, setLongSummary] = useState(sunil.longSummary);
  const [currentPersonImage, setCurrentPersonImage] = useState(sunil.image);

  function togglePerson(name) {
    setShortSummary(people[name]["shortSummary"]);
    setLongSummary(people[name]["longSummary"]);
    setCurrentPersonImage(people[name]["image"]);
  }

  return (
    <div id="" className="d-none d-lg-flex row people-section">
      <div className="col-lg-5 ">
        <div
          style={{ maxHeight: "625px", overflowY: "auto" }}
          className="paper-box-shadow border p-4 h-100"
        >
          {longSummary}
        </div>
      </div>
      <div className="col-lg ">
        <div className="">
          <div className="row border">
            <div className="col-md-5 px-0 h-100">
              <Image
                width={232}
                height={206}
                src={currentPersonImage}
                className="img-fluid paper-box-shadow"
              />
            </div>
            <div className="col-md-7 py-4">{shortSummary}</div>
          </div>
          <div className="row">
            <motion.div
              {...hoverProps}
              className="col-lg-4 pl-lg-0 my-lg-3 people_card-2"
            >
              <Image
                width={715}
                height={659}
                src={sunilImage}
                onClick={() => togglePerson("sunil")}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 px-2 my-lg-3 people_card-2"
            >
              <Image
                width={858}
                height={790}
                src={arunImage}
                onClick={() => togglePerson("arun")}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 pr-lg-0 my-lg-3 people_card-2"
            >
              <Image
                width={715}
                height={659}
                src={raulImage}
                onClick={() => togglePerson("raul")}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 pl-lg-0 people_card-2"
            >
              <Image
                width={715}
                height={659}
                src={candiImage}
                onClick={() => togglePerson("carerra")}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div {...hoverProps} className="col-lg-4 px-2 people_card-2">
              <Image
                width={715}
                height={659}
                src={shahImage}
                onClick={() => togglePerson("siddhant")}
                className="img-fluid paper-box-shadow pointer"
              />
            </motion.div>

            <motion.div
              {...hoverProps}
              className="col-lg-4 pr-lg-0 people_card-2"
            >
              <Image
                width={715}
                height={659}
                src={khanImage}
                onClick={() => togglePerson("yasser")}
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
