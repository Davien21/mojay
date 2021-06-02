import Link from "next/link";
import DropDownMenu from "../../dropDownMenu";
import DropDownToggler from "../../dropDownToggler";
import { motion } from "framer-motion";
import { rightArrowIcon } from "../../../assets/imgs/index";
import { useState, useRef } from "react";

const InvestmentsDropDown = (props) => {
  const [isDropped, setIsDropped] = useState(false);
  const dropDownArrowRef = useRef();

  return (
    <div>
      <div className="d-flex justify-content-center">
        <DropDownToggler
          ref={dropDownArrowRef}
          isDropped={isDropped}
          onDropDown={setIsDropped}
        >
          <span>Investments</span>
        </DropDownToggler>
      </div>
      <DropDownMenu
        dropDownArrowRef={dropDownArrowRef}
        isDropped={isDropped}
        onDropDown={setIsDropped}
      >
        <div className="row">
          <div className="col-lg-4">
            <h4>Investments</h4>
            <hr className="undertone mt-0" style={{ borderWidth: "3px" }} />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              enim deleniti beatae temporibus facere architecto iste vitae
              officia pariatur.
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="py-1 col-lg-6">
                <Link href="/investments/sectors">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target ">Sectors</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur facilis harum sunt
                    </span>
                    <div id=""></div>
                  </motion.div>
                </Link>
              </div>
              <div className="py-1 pl-lg-0 col-lg-6">
                <Link href="/investments/processes">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target">Processes</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur facilis harum sunt
                    </span>
                    <div id=""></div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DropDownMenu>
    </div>
  );
};

export default InvestmentsDropDown;
