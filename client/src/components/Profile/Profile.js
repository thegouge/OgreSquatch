import React, {useState, useEffect} from "react";
import {useFetch} from "../../lib/hooks";
import {formatHeroName} from "../../lib/functions";

import Stats from "../Stats";
import Loading from "../Loading";

import logo from "../../assets/images/logo.png";

import "./Profile.css";

const Profile = ({match}) => {
  // State
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("all-Heroes");
  const [playerData, loading] = useFetch(
    `/api/v1/profile/${match.params.platform}/${match.params.gamertag}`
  );

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
              hero.name === "all-Heroes"
                ? logo
                : `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name}/icon-portrait.png`
            }
            alt={`${hero.name} tab portrait`}
          />
        </span>
        <p className="hero-text">{formatHeroName(hero.name)}</p>
      </div>
    );
  });

  return (
    <div id="profile-window" data-test="profileComp">
      <div id="hero-list">
        <div id="hero-tab-list">{heroTabs}</div>
      </div>

      <Stats
        profile={playerData.profile}
        heroData={playerData.heroes[selectedHero]}
        mode={playMode}
        changePlayMode={changePlayMode}
      />
    </div>
  );
};

export default Profile;
