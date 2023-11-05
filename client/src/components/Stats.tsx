import { Link } from 'react-router-dom'
import formatHeroName from '../lib/formatHeroName'

import bronzeMedal from '../assets/images/medals/bronze.png'
import silverMedal from '../assets/images/medals/silver.png'
import goldMedal from '../assets/images/medals/gold.png'

import '../styles/Stats.css'
import '../styles/toggle.css'

type StatPropTypes = {
  heroData: HeroObject
  playMode: string
  changePlayMode: () => void
}

export function Stats({ heroData, playMode, changePlayMode }: StatPropTypes) {
  const data = heroData[playMode]
  let chosenHeroStats

  if (data === null || data === "no data!") {
    chosenHeroStats = (
      <div className="no-stats" id="profile-info" data-test="statsComp">
        {heroData.name} hasn't been played in {playMode} play!
      </div>
    )
  } else {
    chosenHeroStats = (
      <div
        id="chosen-hero"
        style={{
          backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${heroData.name}/full-portrait.png)`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='hero-overlay'>
          <article className="hero">
            <h4 className="hero-name">{formatHeroName(heroData.name)}</h4>
          </article>
          <article className="printout">
            <div className="printed-stat">
              <span className="stat-title">Time</span>
              <span className="stat-stat">{data.timePlayed}</span>
            </div>
            <div className="printed-stat">
              <span className="stat-title">Kills</span>
              <span className="stat-stat">{data.eliminations}</span>
            </div>
            <div className="printed-stat">
              <span className="stat-title">Deaths</span>
              <span className="stat-stat">{data.deaths}</span>
            </div>
            <div className="printed-stat">
              <span className="stat-title">Assists</span>
              <span className="stat-stat">{data.assists}</span>
            </div>
            <div className="printed-stat">
              <span className="stat-title">Wins</span>
              <span className="stat-stat">{data.gamesWon}</span>
            </div>
          </article>
          <article className="medals">
            <div className="printed-medal">
              <img
                src={bronzeMedal}
                alt="bronze medal background"
                className="medal-img"
              />
              <p className="medal-number">{data.medals.bronze}</p>
            </div>
            <div className="printed-medal">
              <img
                src={silverMedal}
                alt="silver medal background"
                className="medal-img"
              />
              <p className="medal-number">{data.medals.silver}</p>
            </div>
            <div className="printed-medal">
              <img
                src={goldMedal}
                alt="gold medal background"
                className="medal-img"
              />
              <p className="medal-number">{data.medals.gold}</p>
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div id="hero-info" data-test="statsComp">
      <input
        onClick={changePlayMode}
        className="tgl tgl-skewed"
        id="cb3"
        type="checkbox"
      />
      <label
        className="tgl-btn"
        data-tg-off="Quickplay"
        data-tg-on="Competitive"
        htmlFor="cb3"
      ></label>

      {chosenHeroStats}

      <Link to="/" className="overwatch-button-primary back-link">
        GO BACK
      </Link>
    </div>
  )
}
