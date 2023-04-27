const heroList = require('./masterHeroList.js')

function trimHeroData(heroData, top) {
  if (!heroData) {
    return 'no data!'
  }
  const defaultValues = {
    assists: { defensiveAssists: 0, offensiveAssists: 0, reconAssists: 0 },
    combat: { damageDone: 0, deaths: 0 },
    game: { gamesWon: 0, timePlayed: '0:0:0' },
    matchAwards: { medals: 0, medalsBronze: 0, medalsSilver: 0, medalsGold: 0 },
  }

  Object.keys(defaultValues).forEach((cat) => {
    if (!heroData[cat]) {
      heroData[cat] = defaultValues[cat]
    }
    Object.keys(defaultValues[cat]).forEach((subCat) => {
      if (!heroData[cat][subCat]) {
        heroData[cat][subCat] = defaultValues[cat][subCat]
      }
    })
  })

  const { assists, combat, game, matchAwards } = heroData

  const addedAssists =
    assists.defensiveAssists + assists.offensiveAssists + assists.reconAssists

  const topHero = top !== undefined

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
  }
}

function mapThroughHeroes(quickData, compData) {
  const result = {}
  heroList.forEach((hero) => {
    const trimmedQuick = trimHeroData(
      quickData.careerStats[hero],
      quickData.topHeroes[hero]
    )
    const trimmedComp = trimHeroData(
      compData.careerStats[hero],
      compData.topHeroes[hero]
    )

    let heroName = hero

    switch (hero) {
      case 'allHeroes':
        heroName = 'all-Heroes'
        break

      case 'dVa':
        heroName = 'dva'
        break

      case 'soldier76':
        heroName = 'soldier-76'
        break

      case 'wreckingBall':
        heroName = 'wrecking-ball'
        break

      default:
        break
    }

    result[heroName] = {
      name: heroName,
      quick: trimmedQuick,
      comp: trimmedComp,
    }
  })
  return result
}

class formattedData {
  constructor(
    {
      name,
      privateAccount,
      level,
      endorsement,
      prestige,
      rating,
      gamesWon,
      icon,
      levelIcon,
      endorsementIcon,
      prestigeIcon,
      ratingIcon,
      quickPlayStats,
      competitiveStats,
    },
    platform
  ) {
    if (privateAccount) {
      this.name = name
      this.privateAccount = true
      this.error = 'private'
    } else {
      let userName = name
      if (platform === 'pc') {
        userName = name.replace(/#\d+$/, '')
      }
      this.profile = {
        name: userName,
        level,
        endorsement,
        prestige,
        rating,
        gamesWon,
        icons: {
          profileIcon: icon,
          levelIcon,
          endorsementIcon,
          prestigeIcon,
          ratingIcon,
        },
      }

      this.heroes = mapThroughHeroes(quickPlayStats, competitiveStats)
    }
  }
}

module.exports = formattedData
