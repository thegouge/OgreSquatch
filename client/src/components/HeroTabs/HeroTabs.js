import React, {useState} from 'react'

import {formatHeroName} from "../../lib/functions";
import logo from "../../assets/images/logo.png";

import "./heroTabs.css";

const HeroTabs = ({heroes, chooseHero, selectedHero}) => {
  // State
  const [dropDownDisplay, setDisplay] = useState(true);

  // Methods
  const displayHeroList = () => {
    setDisplay(!dropDownDisplay);
  }

  // Render
  const heroTabs = Object.values(heroes).map((hero) => {
    return (
      <li
        className={
          hero.name === selectedHero ? "hero-tab selected" : "hero-tab"
        }
        onClick={(e) => chooseHero(hero.name)}
        key={`${hero.name}-tab`}
        id={`${hero.name}-tab`}>
        <span className="image-wrapper">
          <img
            className="hero-portrait"
            id={`${hero.name}-portrait`}
            src={
              hero.name === "all-Heroes"
                ? logo
                : `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name}/icon-portrait.png`
            }
            alt={`${hero.name} tab portrait`}
          />
        </span>
        <p className="hero-text">{formatHeroName(hero.name)}</p>
      </li>
    );
  });

  if(window.matchMedia("(max-width: 935px)").matches) {
    return (
      <div className="dropDown" id="hero-list" onClick={displayHeroList}>
        Hero Chooser <span></span>
        <ul id="hero-tab-list" style={dropDownDisplay ? {height: 300} : {height: 0}}>
          {heroTabs}
        </ul>
      </div>
    )
  } else {
    return (
      <div id="hero-list">
          <ul id="hero-tab-list">{heroTabs}</ul>
      </div>
    )
  }

  
}

export default HeroTabs;