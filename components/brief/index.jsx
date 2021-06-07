import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const activeBtn = { backgroundColor: "#000", color: "#fff" };

const belief = () => {
  return (
    <p className="my-auto">
      We believe that the keystone of any good relationship is nurturing.
    </p>
  );
};

const foundation = () => {
  return (
    <div className="my-auto">
      <p>
        Invest, Advise and Manage companies with accelerated growth potential.
      </p>
      <p>
        We look to constantly create value to our diverse stakeholders, through
        innovation - bringing a new enterprise and end-user engagement.
      </p>
    </div>
  );
};

const name = () => {
  return (
    <>
      <p className="my-auto">
        Mojay is more than just a name; <br /> it is a portmanteau of our
        founder children’s names.
      </p>
    </>
  );
};

const briefs = {
  name,
  foundation,
  belief,
};

const OurBrief = () => {
  const [currentBrief, setCurrentBrief] = useState(foundation);
  const [currentBriefName, setCurrentBriefName] = useState("foundation");

  function toggleBrief(brief) {
    setCurrentBrief(briefs[brief]);
    setCurrentBriefName(brief);
  }

  return (
    <div className="row d-none d-md-flex" style={{ minHeight: "154px" }}>
      <div className="col-md-4 ">
        <div className="row">
          <div className="col-4 col-md-12">
            <motion.div
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.02 }}
              className="def-badge rounded pointer paper-box-shadow btn-block btn py-2"
              style={currentBriefName == "name" ? activeBtn : null}
              onClick={() => {
                toggleBrief("name");
              }}
            >
              Our Name
            </motion.div>
          </div>
          <div className="col-4 col-md-12">
            <motion.div
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.02 }}
              className="def-badge rounded pointer paper-box-shadow btn-block btn py-2 my-3"
              style={currentBriefName == "belief" ? activeBtn : null}
              onClick={() => {
                toggleBrief("belief");
              }}
            >
              Our Belief
            </motion.div>
          </div>
          <div className="col-4 col-md-12">
            <motion.div
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.02 }}
              className="def-badge rounded pointer paper-box-shadow btn-block btn py-2"
              style={currentBriefName == "foundation" ? activeBtn : null}
              onClick={() => {
                toggleBrief("foundation");
              }}
            >
              Our Foundation
            </motion.div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="d-flex  border h-100 p-4 bg-white paper-box-shadow">
          {currentBrief}
        </div>
      </div>
    </div>
  );
};

export default OurBrief;
