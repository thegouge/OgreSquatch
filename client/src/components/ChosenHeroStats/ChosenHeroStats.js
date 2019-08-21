import React from "react";

import "./ChosenHeroStats.css";

const ChosenHeroStats = ({data, mode}) => {
  return <div>Chosen hero is {data.name}</div>;
};

export default ChosenHeroStats;
