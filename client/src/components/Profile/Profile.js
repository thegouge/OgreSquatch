import React, {useState} from "react";

import ChosenHeroStats from "../ChosenHeroStats";

import "./Profile.css";

const Profile = ({data}) => {
  // State
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("allHeroes");

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

  const heroTabs = Object.values(data.heroStats).map((hero) => {
    if (hero[playMode]) {
      return (
        <li
          className="hero-tab"
          onClick={(e) => chooseHero(hero.name)}
          key={hero.name}>
          {hero.name}
        </li>
      );
    }
  });

  if (data.private) {
    return (
      <h2>
        The account {data.name} is private. They will have to set their account
        in Overwatch to public in order to display their stats
      </h2>
    );
  }

  return (
    <div>
      <h2 id="profile-slug">
        <img
          id="player-icon"
          src={data.profile.icons.icon}
          alt="account icon"
        />
        {data.profile.name}
        <button onClick={changePlayMode}>{playMode} Play</button>
      </h2>
      <ul id="hero-tab-list">{heroTabs}</ul>
      <ChosenHeroStats data={data.heroStats[selectedHero]} mode={playMode} />
    </div>
  );
};

export default Profile;
