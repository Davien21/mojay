import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { downArrow } from "../../assets/imgs";

const rotateUp = { rotate: 180, transition: { duration: 0 } };
const rotateDown = { rotate: 0, transition: { duration: 0 } };

const DropDownArrow = React.forwardRef((props, ref) => {
  const { isDropped, onDropDown } = props;
  
  return (
    <div className="px-1" ref={ref}>
      <motion.img
        src={downArrow}
        alt=""
        animate={isDropped ? rotateUp : rotateDown}
        height={20}
        width={12}
        onClick={() => onDropDown(!isDropped)}
        className="pointer"
      />
    </div>
  );
});

export default DropDownArrow;
