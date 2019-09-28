import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {useToasts} from "react-toast-notifications";

import "./Search.css";
import "../../fonts.css";

const Search = () => {
  // State
  const [platform, setPlatform] = useState("");
  const [gamertag, setGamertag] = useState("MirroR#11669");
  const [ready, setReady] = useState(false);
  const {addToast} = useToasts();

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

  const authenticateSearch = () => {
    // Platform Booleans
    if (platform === "") {
      addToast("You need to Choose a Platform!", {
        appearance: "error",
        autoDismiss: true,
      });
      return false;
    }
    if (gamertag === "") {
      addToast("You need to write a user name!", {
        appearance: "error",
        autoDismiss: true,
      });
      return false;
    }
    if (platform === "pc" && gamertag.search(/#(?=\d{4})/) < 0) {
      addToast(
        "A Battle.Net profile needs to have a battle tag (a hashtag followed by numbers)",
        {appearance: "warning", autoDismiss: true}
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateSearch()) {
      if (platform === "pc") {
        setGamertag(gamertag.replace(/#(?=\d{4})/, "-"));
      }
      setReady(true);
    }
  };

  if (ready) {
    return <Redirect to={`/profile/${platform}/${gamertag}`} />;
  }

  return (
    <section id="profile-search" data-test="searchComp">
      <h2 className="search-header">
        Find out if your friends need to stay on the payload!
      </h2>
      <form
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
        onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-group">
            <select
              className="form-input"
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
            <input
              className="form-input"
              id="username"
              onChange={handleTagChange}
              value={gamertag}
              placeholder={placeholderText}
            />
          </div>
        </div>
        <input id="submit" className="overwatch-button-primary" type="submit" />
      </form>
    </section>
  );
};

export default Search;
