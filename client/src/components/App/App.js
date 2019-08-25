import React, {useState} from "react";

import Search from "../Search";
import Profile from "../Profile";
import Header from "../Header";
import Footer from "../Footer";

import "./App.css";

import testData from "./formattedResponse.json";

function App() {
  const [playerData, setPlayerData] = useState(false);

  const makeSearchCall = async (platform, gamertag) => {
    // const response = await fetch(`/api/v1/profile/${platform}/${gamertag}`);

    // Change this to "response" when linking to backend 
    setPlayerData(testData);
  };

  const visibleComponent = playerData ? (
    <Profile data={playerData} />
  ) : (
    <Search callApi={makeSearchCall} />
  );
  return (
    <div className="App" data-test="AppComp">
      <Header />
      {visibleComponent}
      <Footer />
    </div>
  );
}

export default App;
