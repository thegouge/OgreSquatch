import React from "react";
import {Link} from "react-router-dom";

import "./stats.css";
import "./toggle.css";

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
          src={require(`../../assets/images/heroes/${heroData.name}.png`)}
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
      <input
        onClick={changePlayMode}
        class="tgl tgl-skewed"
        id="cb3"
        type="checkbox"
      />
      <label
        class="tgl-btn"
        data-tg-off="Quick"
        data-tg-on="Competitive"
        for="cb3"></label>
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
          <div className="printed-medal">
            <img
              src={require("../../assets/images/medals/bronze.png")}
              alt=""
              className="medal-img"
            />
            <p className="medal-number">{data.medals.bronze}</p>
          </div>
          <div className="printed-medal">
            <img
              src={require("../../assets/images/medals/silver.png")}
              alt=""
              className="medal-img"
            />
            <p className="medal-number">{data.medals.silver}</p>
          </div>
          <div className="printed-medal">
            <img
              src={require("../../assets/images/medals/gold.png")}
              alt=""
              className="medal-img"
            />
            <p className="medal-number">{data.medals.gold}</p>
          </div>
        </article>
        <article className="printout">
          <div className="printed-stat">
            <span className="stat-title">Time</span>
            <span className="stat-stat">{data.timePlayed}</span>
          </div>
          <div className="printed-stat">
            <span className="stat-title">Kills</span>
            <span className="stat-stat">{data.eliminations}</span>
          </div>
          <div className="printed-stat">
            <span className="stat-title">Deaths</span>
            <span className="stat-stat">{data.deaths}</span>
          </div>
          <div className="printed-stat">
            <span className="stat-title">Assists</span>
            <span className="stat-stat">{data.assists}</span>
          </div>
          <div className="printed-stat">
            <span className="stat-title">Wins</span>
            <span className="stat-stat">{data.gamesWon}</span>
          </div>
        </article>
      </div>
      <Link to="/" className="back-link">
        Go Back
      </Link>
    </div>
  );
};

export default Stats;
