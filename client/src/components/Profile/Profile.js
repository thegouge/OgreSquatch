import React, {useState} from "react";

import ChosenHeroStats from "../ChosenHeroStats";

const Profile = ({data}) => {
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("Global");

  const heroTabs = Object.entries(data.heroStats).map((hero) => {
    if (hero[1][playMode]) {
      return (
        <li onClick={chooseHero(hero[0])} key={hero[1].name}>
          {hero[1].name}
        </li>
      );
    }
  });

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
      <h2 className="profile-slug">
        <img src={data.profile.icons.icon} alt="account icon" />
        {data.profile.name}
        <button onClick={changePlayMode}>{playMode} Play</button>
      </h2>
      <ul id="profile-tags">{heroTabs}</ul>
      <ChosenHeroStats data={data.heroStats[selectedHero]} mode={playMode} />
    </div>
  );
};

export default Profile;
