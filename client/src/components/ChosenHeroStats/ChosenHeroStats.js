import React from "react";

import "./ChosenHeroStats.css";

const ChosenHeroStats = ({data, mode}) => {
  return <div data-test="chosenComp">Chosen hero is {data.name}</div>;
};

export default ChosenHeroStats;
