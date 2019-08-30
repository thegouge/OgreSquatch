import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import ChosenHero from "../ChosenHero";

import testData from "./formattedResponse.json";

import "./Profile.css";

const Profile = ({match}) => {
  // State
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("allHeroes");
  const [playerData, setPlayerData] = useState(testData);

  // Lifecycle
  // useEffect(() => {
  //   makeSearchCall();
  // }, []);

  const makeSearchCall = async () => {
    const {platform, gamertag} = match.params;

    const response = await fetch(`/api/v1/profile/${platform}/${gamertag}`);

    // Change this to "response" when linking to backend
    setPlayerData(response);
  };

  // Methods
  const chooseHero = (name) => {
    setSelectedHero(name);
  };

  const changePlayMode = () => {
    if (playMode === "quick") {
      setPlaymode("competitive");
    } else {
      setPlaymode("quick");
    }
  };

  if (playerData.private) {
    return (
      <h2>
        The account {playerData.name} is private. They will have to set their
        account in Overwatch to public in order to display their stats
      </h2>
    );
  }

  const heroTabs = Object.values(playerData.heroes).map((hero) => {
    console.log("first?");
    return (
      <li
        className="hero-tab"
        onClick={(e) => chooseHero(hero.name)}
        key={hero.name}>
        {hero.name}
      </li>
    );
  });

  return (
    <div playerData-test="profileComp">
      <h2 id="profile-slug">
        <img
          id="player-icon"
          src={playerData.profile.icons.icon}
          alt="account icon"
        />
        {playerData.profile.name}
        <button onClick={changePlayMode}>{playMode} Play</button>
      </h2>
      <ul id="hero-tab-list">{heroTabs}</ul>
      <ChosenHero heroData={playerData.heroes[selectedHero]} mode={playMode} />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Profile;
