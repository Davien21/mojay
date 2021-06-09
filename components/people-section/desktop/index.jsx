import { motion } from "framer-motion";

import Image from "next/image";

let hoverProps = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const DesktopPeopleSection = ({
  peopleImages,
  onTogglePerson,
  shortSummary,
  longSummary,
  currentPersonImage,
}) => {
  return (
    <>
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
                  src={peopleImages.sunilImage}
                  onClick={() => onTogglePerson("sunil")}
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
                  src={peopleImages.arunImage}
                  onClick={() => onTogglePerson("arun")}
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
                  src={peopleImages.raulImage}
                  onClick={() => onTogglePerson("raul")}
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
                  src={peopleImages.candiImage}
                  onClick={() => onTogglePerson("carerra")}
                  className="img-fluid paper-box-shadow pointer"
                />
              </motion.div>

              <motion.div
                {...hoverProps}
                className="col-lg-4 px-2 people_card-2"
              >
                <Image
                  width={715}
                  height={659}
                  src={peopleImages.shahImage}
                  onClick={() => onTogglePerson("siddhant")}
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
                  src={peopleImages.khanImage}
                  onClick={() => onTogglePerson("yasser")}
                  className="img-fluid paper-box-shadow pointer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPeopleSection;
