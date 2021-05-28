import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { downArrow } from "../../assets/imgs";

const rotateUp = { rotate: 180, transition: { duration: 0 } };
const rotateDown = { rotate: 0, transition: { duration: 0 } };

const DropDownArrow = ({ isDropping, onDropDown }) => {
  return (
    <div className="px-1">
      <motion.img
        src={downArrow}
        alt=""
        animate={isDropping ? rotateUp : rotateDown}
        height={20}
        width={12}
        onClick={() => onDropDown()}
        className="pointer"
      />
    </div>
  );
};

export default DropDownArrow;
