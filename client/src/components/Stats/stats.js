import React from "react";
import {Link} from "react-router-dom";

import "./stats.css";
import {formatHeroName} from "../../lib/functions";

const Stats = ({profile, heroData, mode, changePlayMode}) => {
  // Variables
  const data = heroData[mode];

  // Boolean Check
  if (data === "no data!") {
    return (
      <div className="no-stats" id="profile-info" data-test="statsComp">
        {heroData.name} hasn't been played in {mode} play!
      </div>
    );
  }

  let levelIcon;
  if (heroData.name === "all-Heroes") {
    levelIcon = (
      <img
        src={require(`../../assets/images/logo.png`)}
        alt="selectedHero"
        className="logo"
      />
    );
  } else {
    levelIcon = (
      <div className="level-icon-comp">
        {profile.icons.levelIcon && (
          <img
            className="level-icon"
            id="level"
            src={profile.icons.levelIcon}
            alt="level Icon"
          />
        )}
        <img
          src={require(`../../assets/images/${heroData.name}.png`)}
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
      </div>
    );
  }

  return (
    <div id="profile-info" data-test="statsComp">
      <div id="profile-slug">
        <img
          id="player-icon"
          src={profile.icons.profileIcon}
          alt="account icon"
        />
        <h3 className="username">{profile.name}</h3>
        {levelIcon}
      </div>
      <button onClick={changePlayMode}>{mode}</button>
      <div
        id="chosen-hero"
        style={{
          backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${heroData.name}/full-portrait.png)`,
          backgroundRepeat: "no-repeat",
        }}>
        <article className="hero">
          <h4 className="hero-name">
            {formatHeroName(heroData.name)} ({mode})
          </h4>
        </article>
        <article className="medals">
          Medals:
          <div className="printed-stat">Bronze: {data.medals.bronze}</div>
          <div className="printed-stat">Silver: {data.medals.silver}</div>
          <div className="printed-stat">Gold: {data.medals.gold}</div>
        </article>
        <article className="printout">
          <div className="printed-stat">Time Played: {data.timePlayed} </div>
          <div className="printed-stat">Eliminations: {data.eliminations} </div>
          <div className="printed-stat">Deaths: {data.deaths} </div>
          <div className="printed-stat">Assists: {data.assists} </div>
          <div className="printed-stat">Games Won: {data.gamesWon} </div>
        </article>
      </div>
      <Link to="/" className="back-link">
        Go Back
      </Link>
    </div>
  );
};

export default Stats;
