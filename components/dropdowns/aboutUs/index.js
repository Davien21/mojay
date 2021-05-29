import Link from "next/link";
import DropDownMenu from "../../dropDownMenu";
import DropDownArrow from "../../dropDownArrow";
import { useCycle, motion } from "framer-motion";
import { rightArrowIcon } from "../../../assets/imgs/index";
import { useState } from "react";

const AboutUsDropDown = (props) => {
  const [isDropping, toggleIsDropping] = useCycle(false, true);

  
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link href="/about-us">About Us</Link>
        <DropDownArrow isDropping={isDropping} onDropDown={toggleIsDropping} />
      </div>
      <DropDownMenu isDropping={isDropping} >
        <div className="row">
          <div className="col-lg-4">
            <h4>About</h4>
            <hr className="undertone mt-0" style={{ borderWidth: "2px" }} />
            <div>
              Mojay Global holding limited is a value-driven organisation
              established in July 2020, to embrace several existing businesses
              and to nurture new investment opportunities
            </div>
            <div className="my-4">
              <Link href="/contact-us">
                <div>
                  <span className="def_call-to-action">Contact Us</span>
                  <img src={rightArrowIcon} height={12} width={12} />
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="py-1 col-lg-6">
                <Link href="/">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target ">Our Companies</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Find out about our products and how we are taking
                      businesses to the next level of profitable growth.
                    </span>
                    <div id=""></div>
                  </motion.div>
                </Link>
              </div>
              <div className="py-1 pl-lg-0 col-lg-6">
                <Link href="">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target">Our History</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Discover how Mojay Global Holdings Limited came to be, and
                      why we do what we do
                    </span>
                    <div id=""></div>
                  </motion.div>
                </Link>
              </div>
              <div className="py-1 col-lg-6">
                <Link href="">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target">Our Philosophy</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      Challenging, Innovating, Nurturing. Click to find out more
                      about our philosophy
                    </span>
                    <div id=""></div>
                  </motion.div>
                </Link>
              </div>
              <div className="py-1 col-lg-6 pl-lg-0">
                <Link href="">
                  <motion.div
                    style={{ boxShadow: "0 2px 18px 0 rgb(0 0 0 / 10%)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white def_hover_2 p-3 "
                  >
                    <div className="">
                      <span className="pr-2 hover_target">Our Values</span>
                      <img src={rightArrowIcon} height={12} width={12} />
                    </div>
                    <span style={{ fontSize: "0.7rem" }}>
                      See what we hold most dear at Mojay Global Holding
                      Limited. Our Values
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

export default AboutUsDropDown;
