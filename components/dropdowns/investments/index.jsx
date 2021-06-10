import DropDownMenu from "../../dropDownMenu";
import { motion } from "framer-motion";
import { rightArrowIcon } from "./../../../assets/imgs/index";

import Image from "next/image";
import DropDownCard from "./../../dropDownCard/index";
import DropDown from "./../index";

const AboutUsDropDown = ({ isScrolled }) => {
  return (
    <div>
      <DropDown isScrolled={isScrolled} dropDownName="Investments">
        <DropDownMenu>
          <div className="row">
            <div className="col-lg-4">
              <h4 className="mb-2">Investments</h4>
              <hr className="undertone mt-0" style={{ borderWidth: "3px" }} />
              <div>
                At Mojay Global Holding, we are always in hunt for innovative
                projects, business opportunities and entrepreneurs who dare to
                challenge the status quo and to setup new and higher standards
                in their industries.
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/investments/sectors">
                    <div className="">
                      <span className="pr-2 hover_target ">Sectors</span>
                      <Image src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Mojay Global Holding Limited is a diversified organisation
                      having its presence across many sectors. Find out what we
                      are involved in.
                    </span>
                    <div id=""></div>
                  </DropDownCard>
                </div>
                <div className="py-1 pl-lg-0 col-lg-6">
                  <DropDownCard route="/investments/processes">
                    <div className="">
                      <span className="pr-2 hover_target">Processes</span>
                      <Image src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      At Mojay Global Holding, we work collaboratively with key
                      stakeholders of companies to take the businesses to the
                      next level of profitable growth.
                    </span>
                    <div id=""></div>
                  </DropDownCard>
                </div>
              </div>
            </div>
          </div>
        </DropDownMenu>
      </DropDown>
    </div>
  );
};

export default AboutUsDropDown;
