import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import "./Search.css";

const Search = () => {
  // State
  const [platform, setPlatform] = useState("");
  const [gamertag, setGamertag] = useState("TheGouge#1273");
  const [ready, setReady] = useState(false);

  let placeholderText = "";

  switch (platform) {
    case "pc":
      placeholderText = "battle tag (case sensitive with # numbers)";
      break;

    case "xbl":
      placeholderText = "Xbox Live gamertag";
      break;

    case "psn":
      placeholderText = "Playstation Network ID";
      break;

    default:
      placeholderText = "in-game username";
      break;
  }

  // Methods
  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleTagChange = (event) => {
    setGamertag(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (platform === "pc") {
      setGamertag(gamertag.replace(/#(?=\d{4})/, "-"));
    }

    setReady(true);
  };

  if (ready) {
    return <Redirect to={`/profile/${platform}/${gamertag}`} />;
  }

  return (
    <div id="profile-search" data-test="searchComp">
      <h2 className="search-header">
        Find out if your friends need to stay on the payload!
      </h2>
      <form
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
        onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="platform">Game Platform</label>
          <select
            name="platform"
            id="platform"
            type="select"
            defaultValue=""
            onChange={handlePlatformChange}>
            <option value="">Choose a Platform</option>
            <option value="pc">Battle.Net</option>
            <option value="psn">PlayStation</option>
            <option value="xbl">Xbox Live</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            name="username"
            id="username"
            onChange={handleTagChange}
            value={gamertag}
            placeholder={placeholderText}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
