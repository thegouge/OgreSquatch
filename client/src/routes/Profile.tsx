import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Loading, HeroTabList, Stats } from '../components'
import '../styles/Profile.css'
import logo from '../assets/images/logo.png'

export function Profile() {
  // State
  const [playMode, setPlaymode] = useState('quick')
  const [selectedHero, setSelectedHero] = useState('all-Heroes')
  const playerData = useLoaderData() as PlayerData

  // Methods
  const chooseHero = (name: string) => {
    setSelectedHero(name)
  }

  const changePlayMode = () => {
    if (playMode === 'quick') {
      setPlaymode('comp')
    } else {
      setPlaymode('quick')
    }
  }

  // Error "Handling"
  if (playerData?.error) {
    console.error(`${playerData.error}: ${playerData.error.message}`)

    let errorMessage
    switch (playerData.error) {
      case 'private':
        errorMessage = `The account ${playerData.name} is private. They will have to set their
          account in Overwatch to public in order to display their stats`
        break

      default:
        errorMessage = `Something went wrong trying to fetch ${playerData.name}'s data`
        break
    }

    return (
      <div className="error-message">
        <h2>{errorMessage}</h2>
        <Link to="/" className="overwatch-button-primary error-link">
          Go Back
        </Link>
      </div>
    )
  } else if (!playerData.heroes) {
    return <Loading />
  }

  // Checking for Mobile

  if (window.matchMedia('(max-width: 600px)').matches) {
    // mobile props
  } else {
    // bigger props
  }

  const levelIcon =
    selectedHero === 'all-Heroes' ? (
      <div className="level-icon-comp">
        <img src={logo} alt="selectedHero" className="logo" />
      </div>
    ) : (
      <div className="level-icon-comp">
        {playerData.profile.icons.levelIcon && (
          <img
            className="level-icon"
            id="level"
            src={playerData.profile.icons.levelIcon}
            alt="level Icon"
          />
        )}
        <img
          src={import(`../assets/images/heroes/${selectedHero}.png`).default}
          alt="Selected Hero"
          className="curr-hero-port"
        />
        {playerData.profile.icons.prestigeIcon && (
          <img
            className="level-icon"
            id="prestige"
            src={playerData.profile.icons.prestigeIcon}
            alt="prestige Icon"
          />
        )}
      </div>
    )

  // Rendering
  return (
    <section id="profile-window" data-test="profileComp">
      <div id="profile-slug">
        <img
          id="player-icon"
          src={playerData.profile.icons.profileIcon}
          alt="account icon"
        />
        <h3 className="username">{playerData.profile.name}</h3>
        {levelIcon}
      </div>

      <HeroTabList
        chooseHero={chooseHero}
        heroes={playerData.heroes}
        selectedHero={selectedHero}
      />

      <Stats
        heroData={playerData.heroes[selectedHero]}
        playMode={playMode}
        changePlayMode={changePlayMode}
      />
    </section>
  )
}
