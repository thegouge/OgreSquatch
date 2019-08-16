import React, {useState} from "react";

import Tab from "../Tab";

const Profile = ({data}) => {
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("Global");

  const renderedHeroes = Object.entries(data.heroStats).map((hero) => {
    return <Tab key={hero[1].name} heroData={hero[1]} playMode={playMode} />;
  });

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
      <ul id="profile-tags">{renderedHeroes}</ul>
    </div>
  );
};

export default Profile;
