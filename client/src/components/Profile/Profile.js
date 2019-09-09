import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useFetch} from "../../lib/hooks";

import ChosenHero from "../ChosenHero";
import Loading from "../Loading";

import logo from "../../assets/images/logo.png";

import "./Profile.css";

const Profile = ({match}) => {
  // State
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("Global");
  const [playerData, loading] = useFetch(
    `/api/v1/profile/${match.params.platform}/${match.params.gamertag}`
  );
  const [topHeroView, setTopHeroView] = useState(false);

  // Methods
  const chooseHero = (name) => {
    setSelectedHero(name);
  };

  const changePlayMode = () => {
    if (playMode === "quick") {
      setPlaymode("comp");
    } else {
      setPlaymode("quick");
    }
  };

  const toggleTopView = () => {
    setTopHeroView(!topHeroView);
  };

  // Boolean Flags
  if (loading) {
    return <Loading />;
  } else if (playerData.private) {
    return (
      <h2>
        The account {playerData.name} is private. They will have to set their
        account in Overwatch to public in order to display their stats
      </h2>
    );
  }

  // Rendering
  const heroTabs = Object.values(playerData.heroes).map((hero) => {
    if (!topHeroView || (topHeroView && hero[playMode].topHero)) {
      return (
        <div
          className="hero-tab"
          onClick={(e) => chooseHero(hero.name)}
          key={`${hero.name}-tab`}
          id={`${hero.name}-tab`}>
          <span className="image-wrapper">
            <img
              className="hero-portrait"
              id={`${hero.name}-portrait`}
              src={
                hero.name === "Global"
                  ? logo
                  : `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name}/icon-portrait.png`
              }
              alt={`${hero.name} tab portrait`}
            />
          </span>
          <p className="hero-text">{hero.name}</p>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div id="profile-window" data-test="profileComp">
      <div id="hero-list">
        <button onClick={toggleTopView}>
          Change to {topHeroView ? "all" : "top"} heroes
        </button>
        <div id="hero-tab-list">{heroTabs}</div>
      </div>

      <div className="profile-info">
        <h2 id="profile-slug">
          <img
            id="player-icon"
            src={playerData.profile.icons.profileIcon}
            alt="account icon"
          />
          {playerData.profile.name}
        </h2>
        <button onClick={changePlayMode}>{playMode} Play</button>
        <ChosenHero
          heroData={playerData.heroes[selectedHero]}
          mode={playMode}
        />

        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Profile;
