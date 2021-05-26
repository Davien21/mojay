import { motion } from "framer-motion";
import { downArrow } from "../../assets/imgs/svgs";
// import { useEffect, useState } from "react";
// let [isDropping, setIsDropping] = useState(false)
const toggleClick = () => {
  isDropping = !isDropping
}

const DropDownArrow = (props) => {
//   useEffect(()=> {
//     console.log(isDropping)
//   })
console.log(downArrow)
  return (
    <motion.img
      src={downArrow}
      alt=""
      height={20}
      width={12}
      onClick={toggleClick}
      className="pointer"
    />
  );
};

export default DropDownArrow