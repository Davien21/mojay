import Link from "next/link";
import DropDownMenu from "../../dropDownMenu";
import DropDownArrow from "../../dropDownArrow";
import { useCycle } from "framer-motion";

const AboutUsDropDown = (props) => {
  const [isDropping, toggleIsDropping] = useCycle(false, true);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link href="/about-us">About Us</Link>
        <DropDownArrow isDropping={isDropping} onDropDown={toggleIsDropping} />
      </div>
      <DropDownMenu isDropping={isDropping}>
        <p className="">Hi guys</p>
      </DropDownMenu>
    </div>
  );
};

export default AboutUsDropDown;
