const heroList = require("./masterHeroList.js");

class formattedData {
  constructor(data = {name: "default", private: true}, platform) {
    if (data.private) {
      this.name = data.name;
      this.private = true;
      this.error = "private";
    } else {
      let name = data.name;
      if (platform === "pc") {
        name = data.name.replace(/#\d+$/, "");
      }
      this.profile = {
        name,
        level: data.level,
        endorsement: data.endorsement,
        prestige: data.prestige,
        rating: data.rating,
        gamesWon: data.gamesWon,
        icons: {
          profileIcon: data.icon,
          levelIcon: data.levelIcon,
          endorsementIcon: data.endorsementIcon,
          prestigeIcon: data.prestigeIcon,
          ratingIcon: data.ratingIcon,
        },
      };

      this.heroes = mapThroughHeroes(
        data.quickPlayStats,
        data.competitiveStats
      );
    }
  }
}

function mapThroughHeroes(quickData, compData) {
  const result = {};
  heroList.forEach((hero) => {
    const trimmedQuick = trimHeroData(
      quickData.careerStats[hero],
      quickData.topHeroes[hero]
    );
    const trimmedComp = trimHeroData(
      compData.careerStats[hero],
      compData.topHeroes[hero]
    );

    switch (hero) {
      case "allHeroes":
        hero = "all-Heroes";
        break;

      case "dVa":
        hero = "dva";
        break;

      case "soldier76":
        hero = "soldier-76";
        break;

      case "wreckingBall":
        hero = "wrecking-ball";
        break;

      default:
        break;
    }

    result[hero] = {
      name: hero,
      quick: trimmedQuick,
      comp: trimmedComp,
    };
  });
  return result;
}

function trimHeroData(heroData, top) {
  if (!heroData) {
    return "no data!";
  }
  const defaultValues = {
    assists: {defensiveAssists: 0, offensiveAssists: 0, reconAssists: 0},
    combat: {damageDone: 0, deaths: 0},
    game: {gamesWon: 0, timePlayed: "0:0:0"},
    matchAwards: {medals: 0, medalsBronze: 0, medalsSilver: 0, medalsGold: 0},
  };

  Object.keys(defaultValues).forEach((cat) => {
    if (!heroData[cat]) {
      heroData[cat] = defaultValues[cat];
    }
    Object.keys(defaultValues[cat]).forEach((subCat) => {
      if (!heroData[cat][subCat]) {
        heroData[cat][subCat] = defaultValues[cat][subCat];
      }
    });
  });

  const {assists, combat, game, matchAwards} = heroData;

  const addedAssists =
    assists.defensiveAssists + assists.offensiveAssists + assists.reconAssists;

  const topHero = top ? true : false;

  return {
    assists: addedAssists,
    damageDone: combat.damageDone,
    deaths: combat.deaths,
    eliminations: combat.eliminations,
    gamesWon: game.gamesWon,
    timePlayed: game.timePlayed,
    topHero,
    medals: {
      total: matchAwards.medals,
      bronze: matchAwards.medalsBronze,
      silver: matchAwards.medalsSilver,
      gold: matchAwards.medalsGold,
    },
  };
}

module.exports = formattedData;
