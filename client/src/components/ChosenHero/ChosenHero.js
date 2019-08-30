import React from "react";

import "./ChosenHero.css";

const ChosenHero = ({heroData, mode}) => {
  return <div data-test="chosenComp">Chosen hero is {heroData.name}</div>;
};

export default ChosenHero;
