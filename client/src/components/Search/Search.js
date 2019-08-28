import React, {useState} from "react";

import "./Search.css";

const Search = ({callApi}) => {
  const [platform, setPlatform] = useState("pc");
  const [gamertag, setGamertag] = useState("");

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

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleTagChange = (event) => {
    setGamertag(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    callApi(platform, gamertag.replace(/#(?=\d{4})/, "-"));
  };

  return (
    <form onSubmit={handleSubmit} data-test="searchComp">
      <div className="form-group">
        <label htmlFor="platform">Game Platform</label>
        <select
          name="platform"
          id="platform"
          type="select"
          defaultValue="pc"
          onChange={handlePlatformChange}>
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
  );
};

export default Search;
