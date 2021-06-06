import { forwardRef } from "react";
import { motion } from "framer-motion";

const rotateUp = { rotate: -180, transition: { duration: 0 } };
const rotateDown = { rotate: 0, transition: { duration: 0 } };

const DropDownToggler = forwardRef((props, ref) => {
  const { isDropped, isScrolled, onDropDown, children } = props;

  const svgVariants = {
    initial: rotateDown,
    animate: isDropped ? rotateUp : rotateDown,
  };

  const color = isScrolled ? "black" : "white";
  return (
    <div
      className="d-flex justify-content-center pointer"
      ref={ref}
      onClick={() => onDropDown(!isDropped)}
    >
      {children}
      <div className="px-1" ref={ref}>
        <motion.svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <path
            d="M11.8536 1.05524C11.6583 0.814921 11.3417 0.814921 11.1464 1.05524L6 7.3893L0.853552 1.05524C0.658294 0.814921 0.341701 0.814921 0.146443 1.05524C-0.0488144 1.29556 -0.0488144 1.68521 0.146443 1.92553L5.64645 8.69476C5.8417 8.93508 6.1583 8.93508 6.35355 8.69476L11.8536 1.92553C12.0488 1.68518 12.0488 1.29556 11.8536 1.05524Z"
            fill={color}
          />
        </motion.svg>
      </div>
    </div>
  );
});

export default DropDownToggler;
