import DropDownToggler from "../dropDownToggler";
import {
  useState,
  useRef,
  isValidElement,
  Children,
  cloneElement,
} from "react";

const menuWithProps = (menu, props) => {
  return Children.map(menu, (child) => {
    if (isValidElement(child)) return cloneElement(child, props);

    return child;
  });
};

const DropDown = ({ isScrolled, children: menu, dropDownName }) => {
  const [isDropped, setIsDropped] = useState(false);
  const dropDownArrowRef = useRef();
  const childProps = {
    dropDownArrowRef,
    isDropped,
    onDropDown: setIsDropped,
  };
  menu = menuWithProps(menu, childProps);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <DropDownToggler
          ref={dropDownArrowRef}
          isDropped={isDropped}
          isScrolled={isScrolled}
          onDropDown={setIsDropped}
        >
          <span>{dropDownName}</span>
        </DropDownToggler>
      </div>
      {menu}
    </div>
  );
};

export default DropDown;
