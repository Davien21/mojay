import { useState } from "react";

import {
  arunImage,
  candiImage,
  raulImage,
  shahImage,
  sunilImage,
  khanImage,
} from "../../assets/imgs";

const peopleImages = {
  arunImage,
  candiImage,
  raulImage,
  shahImage,
  sunilImage,
  khanImage,
};

import sunil from "./people/sunil";
import arun from "./people/arun";
import raul from "./people/raul";
import carerra from "./people/carerra";
import siddhant from "./people/siddhant";
import yasser from "./people/yasser";
import DesktopPeopleSection from "./desktop/index";
import MobilePeopleSection from "./mobile/index";

let people = { sunil, arun, raul, carerra, siddhant, yasser };

const PeopleSection = () => {
  const [role, setRole] = useState(sunil.role);
  const [shortSummary, setShortSummary] = useState(sunil.shortSummary);
  const [longSummary, setLongSummary] = useState(sunil.longSummary);
  const [currentPersonImage, setCurrentPersonImage] = useState(sunil.image);

  function togglePerson(name) {
    setRole(people[name]["role"]);
    setShortSummary(people[name]["shortSummary"]);
    setLongSummary(people[name]["longSummary"]);
    setCurrentPersonImage(people[name]["image"]);
  }

  return (
    <>
      <DesktopPeopleSection
        peopleImages={peopleImages}
        onTogglePerson={togglePerson}
        shortSummary={shortSummary}
        longSummary={longSummary}
        role={role}
        currentPersonImage={currentPersonImage}
      />
      <MobilePeopleSection
        peopleImages={peopleImages}
        onTogglePerson={togglePerson}
        shortSummary={shortSummary}
        longSummary={longSummary}
        role={role}
        currentPersonImage={currentPersonImage}
      />
    </>
  );
};

export default PeopleSection;
