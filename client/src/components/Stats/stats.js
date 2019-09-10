import React from "react";
import {Link} from "react-router-dom";

import "./stats.css";

const Stats = ({profile, heroData, mode, changePlayMode}) => {
  // Variables
  const data = heroData[mode];
  const heroPortrait = require(`../../assets/images/${heroData.name}.png`);

  // Boolean Check
  if (data === "no data!") {
    return (
      <div data-test="statsComp">
        {heroData.name} hasn't been played in {mode} play!
      </div>
    );
  } else {
    const levelIcon = (
      <span className="level-icon-comp">
        {profile.icons.levelIcon && (
          <img
            className="level-icon"
            id="level"
            src={profile.icons.levelIcon}
            alt="level Icon"
          />
        )}
        <img
          src={heroPortrait}
          alt="Selected Hero"
          className="curr-hero-port"
        />
        {profile.icons.prestigeIcon && (
          <img
            className="level-icon"
            id="prestige"
            src={profile.icons.prestigeIcon}
            alt="prestige Icon"
          />
        )}
      </span>
    );

    return (
      <div id="profile-info" data-test="statsComp">
        <div id="profile-slug">
          <img
            id="player-icon"
            src={profile.icons.profileIcon}
            alt="account icon"
          />
          <p className="username">{profile.name}</p>
          {levelIcon}
        </div>
        <button onClick={changePlayMode}>{mode}</button>
        <div id="chosen-hero">
          <article className="hero">
            {heroData.name} ({mode})
          </article>
          <article className="medals">
            Medals:
            <div className="printed-stat">Bronze: {data.medals.bronze}</div>
            <div className="printed-stat">Silver: {data.medals.silver}</div>
            <div className="printed-stat">Gold: {data.medals.gold}</div>
          </article>
          <article className="printout">
            <div className="printed-stat">Time Played: {data.timePlayed} </div>
            <div className="printed-stat">
              Eliminations: {data.eliminations}{" "}
            </div>
            <div className="printed-stat">Deaths: {data.deaths} </div>
            <div className="printed-stat">Assists: {data.assists} </div>
            <div className="printed-stat">Games Won: {data.gamesWon} </div>
          </article>
        </div>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
};

export default Stats;
