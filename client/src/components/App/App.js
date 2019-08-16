import React, {useState} from "react";

import Search from "../Search";
import Profile from "../Profile";
import Header from "../Header";
import Footer from "../Footer";

import "./App.css";

import testData from "./response.json";

function App() {
  // Change this initial value to "false" when ready to set the API
  const [playerData, setPlayerData] = useState(testData);

  const makeSearchCall = async (platform, gamertag) => {
    const response = await fetch(`/api/v1/profile/${platform}/${gamertag}`);

    setPlayerData(trimResponseData(response.json()));
  };

  const trimResponseData = (response) => {
    if (response.private) {
      return {name: response.name, private: true};
    }

    return {
      profile: {
        name: response.name,
        level: response.level,
        endorsement: response.endorsement,
        prestige: response.prestige,
        rating: response.rating,
        gamesWon: response.gamesWon,
        icons: {
          icon: response.icon,
          levelIcon: response.levelIcon,
          endorsementIcon: response.endorsementIcon,
          prestigeIcon: response.prestigeIcon,
          ratingIcon: response.ratingIcon,
        },
      },
      quickPlayStats: response.quickPlayStats,
      competitiveStats: response.competitiveStats,
    };
  };

  const visibleComponent = playerData ? (
    <Profile data={playerData} />
  ) : (
    <Search callApi={makeSearchCall} />
  );
  return (
    <div className="App">
      <Header />
      {visibleComponent}
      <Footer />
    </div>
  );
}

export default App;
