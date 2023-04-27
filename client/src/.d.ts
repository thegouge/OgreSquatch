type HeroObject = {
  name: string
  [playMode: string]: {
    timePlayed: number
    eliminations: number
    deaths: number
    assists: number
    gamesWon: number
    medals: {
      bronze: number
      silver: number
      gold: number
    }
  }
}

type PlayerData = {
  name: string
  heroes: any
  profile: {
    name: string
    icons: {
      levelIcon: string
      prestigeIcon: string
      profileIcon: string
    }
  }
  error?: any
}
