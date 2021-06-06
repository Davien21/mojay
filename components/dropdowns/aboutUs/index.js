import Link from "next/link";
import DropDownMenu from "../../dropDownMenu";
import DropDownToggler from "../../dropDownToggler";
import { useCycle, motion } from "framer-motion";
import { rightArrowIcon } from "./../../../assets/imgs/index";
import { useState, useRef } from "react";
import DropDownCard from "./../../dropDownCard/index";
import DropDown from "./../index";

const AboutUsDropDown = ({ isScrolled }) => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div>
      <DropDown isScrolled={isScrolled} dropDownName="About Us">
        <DropDownMenu>
          <div className="row">
            <div className="col-lg-4">
              <h4>About</h4>
              <hr className="undertone mt-0" style={{ borderWidth: "3px" }} />
              <div>
                Mojay Global holding limited is a value-driven organisation
                established in July 2020, to embrace several existing businesses
                and to nurture new investment opportunities
              </div>
              <div className="my-4">
                <Link href="/ceo-message">
                  <div>
                    <span className="def_call-to-action">View CEO Message</span>
                    <img src={rightArrowIcon} height={12} width={12} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/history">
                    <div className="">
                      <span className="pr-2 hover_target ">Our History</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Discover how Mojay Global Holdings Limited came to be, and
                      why we do what we do.
                    </span>
                  </DropDownCard>
                </div>
                <div className="py-1 pl-lg-0 col-lg-6">
                  <DropDownCard route="/values">
                    <div className="">
                      <span className="pr-2 hover_target">Our Values</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      At the core of Mojay Global Holding Limited are our
                      values. Find out about them here.
                    </span>
                  </DropDownCard>
                </div>
                <div className="py-1 col-lg-6">
                  <DropDownCard route="/philosophy">
                    <div className="">
                      <span className="pr-2 hover_target">Our Philosophy</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Challenging, Innovating, Nurturing. Click to find out more
                      about our philosophy.
                    </span>
                  </DropDownCard>
                </div>
                <div className="py-1 col-lg-6 pl-lg-0">
                  <DropDownCard route="/people">
                    <div className="">
                      <span className="pr-2 hover_target">Our People</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Meet the amazing people that make things happen at Mojay
                      Global Holding Limited.
                    </span>
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
