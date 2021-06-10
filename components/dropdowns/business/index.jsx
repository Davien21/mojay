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
              <h4 className="mb-2">Business</h4>
              <hr className="undertone mt-0" style={{ borderWidth: "3px" }} />
              <div>
                Mojay Global Holding Limited is involved in several businesses
                and has acquired several companies since it's launch in July,
                2020. We are steadily building an ecosystem of businesses that
                challenge the status quo.
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
                      Preimo Urban Mobility represents the next generation of
                      what chauffeur-driven limousine services should feel like.
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
                      Eternal Robotics is a technology-driven company based in
                      India, that provides a wide range of engineering services.
                    </span>
                    <div id=""></div>
                  </DropDownCard>
                </div>
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/business#myro">
                    <div className="">
                      <span className="pr-2 hover_target">
                        Myro International
                      </span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      A robotics company that is solving complex, monotonous
                      problems around human productivity and workplace
                      innovation.
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
