import React from "react";

const Tab = ({heroData, playMode}) => {
  if (!heroData[playMode]) {
    return (
      <li>
        There aren't any stats for {heroData.name} in {playMode} play!
      </li>
    );
  }

  return (
    <li>
      {heroData.name} games won: {heroData[playMode].game.gamesWon || 0}
    </li>
  );
};

export default Tab;
