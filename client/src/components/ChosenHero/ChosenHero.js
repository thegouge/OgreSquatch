import React from "react";

import "./ChosenHero.css";

const ChosenHero = ({heroData, mode}) => {
  const data = heroData[mode];
  if (data === "no data!") {
    return (
      <div data-test="chosenComp">
        {heroData.name} hasn't been played in {mode} play!
      </div>
    );
  } else {
    return (
      <div id="chosen-hero" data-test="chosenComp">
        <h3 className="banner">
          {heroData.name} ({mode})
        </h3>
        <article className="printout">
          <div className="printed-stat">Time Played: {data.timePlayed} </div>
          <div className="printed-stat">Eliminations: {data.eliminations} </div>
          <div className="printed-stat">Deaths: {data.deaths} </div>
          <div className="printed-stat">Assists: {data.assists} </div>
          <div className="printed-stat">Games Won: {data.gamesWon} </div>
          <div className="printed-stat medal-container">
            Medals:
            <div className="printed-stat"> Bronze: {data.medals.bronze}</div>
            <div className="printed-stat">Silver: {data.medals.silver} </div>
            <div className="printed-stat">Gold: {data.medals.gold} </div>
          </div>
        </article>
      </div>
    );
  }
};

export default ChosenHero;
