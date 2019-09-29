import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Stats from "../Stats";
import HeroTabs from "../HeroTabs"
import Loading from "../Loading";

import "./Profile.css";

const Profile = ({match}) => {
  // State
  const [playMode, setPlaymode] = useState("quick");
  const [selectedHero, setSelectedHero] = useState("all-Heroes");
  const [playerData, setPlayerData] = useState({name: match.params.gamertag});
  const api = `/api/v1/profile/${match.params.platform}/${match.params.gamertag}`;

  useEffect(() => {
    async function fetchUrl(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (json.error) {
          setPlayerData({...playerData, ...json});
        } else {
          setPlayerData(json);
        }
      } catch (error) {
        console.log("error!");
        console.error(error);
        setPlayerData({...playerData, error});
      }
    }
    fetchUrl(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

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

  // Error "Handling"
  if (playerData.error) {
    console.error(`${playerData.error}: ${playerData.message}`);
    return (
      <div className="error-message">
        <h2>
          Something went wrong trying to fetch <br /> {playerData.name}'s data
        </h2>
        <Link to="/" className="overwatch-button-primary error-link">
          Go Back
        </Link>
      </div>
    );
  } else if (playerData.private) {
    return (
      <div className="error-message">
        <h2>
          The account {playerData.name} is private. They will have to set their
          account in Overwatch to public in order to display their stats
        </h2>
        <Link to="/" className="overwatch-button-primary error-link">
          Go Back
        </Link>
      </div>
    );
  } else if (!playerData.heroes) {
    return <Loading />;
  } else if (playerData.private) {
    return (
      <div className="error-message">
        <h2>
          The account {playerData.name} is private. They will have to set their
          account in Overwatch to public in order to display their stats
        </h2>
      </div>
    );
  }

  // Rendering
  return (
    <section id="profile-window" data-test="profileComp">
      <HeroTabs chooseHero={chooseHero} heroes={playerData.heroes} selectedHero={selectedHero} />

      <Stats
        profile={playerData.profile}
        heroData={playerData.heroes[selectedHero]}
        mode={playMode}
        changePlayMode={changePlayMode}
      />
    </section>
  );
};

export default Profile;
