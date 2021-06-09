import DropDownMenu from "../../dropDownMenu";
import { motion } from "framer-motion";
import { rightArrowIcon } from "./../../../assets/imgs/index";

import Image from "next/image";
import DropDownCard from "./../../dropDownCard/index";
import DropDown from "./../index";

const AboutUsDropDown = ({ isScrolled }) => {
  return (
    <div>
      <DropDown isScrolled={isScrolled} dropDownName="Business">
        <DropDownMenu>
          <div className="row">
            <div className="col-lg-4">
              <h4>Business</h4>
              <hr className="undertone mt-0" style={{ borderWidth: "3px" }} />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                enim deleniti beatae temporibus facere architecto iste vitae
                officia pariatur, facilis soluta blanditiis eos, eveniet aliquam
                voluptatum ea atque quia quo.
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/business#preimo">
                    <div className="">
                      <span className="pr-2 hover_target ">
                        Preimo Urban Mobility LLC
                      </span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur facilis harum sunt
                    </span>
                    <div id=""></div>
                  </DropDownCard>
                </div>
                <div className="py-1 pl-lg-0 col-lg-6">
                  <DropDownCard route="/business#myro">
                    <div className="">
                      <span className="pr-2 hover_target">Myro</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur facilis harum sunt
                    </span>
                    <div id=""></div>
                  </DropDownCard>
                </div>
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/business#eternal-robotics">
                    <div className="">
                      <span className="pr-2 hover_target">
                        Eternal Robotics
                      </span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur facilis harum sunt
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
