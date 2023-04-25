import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import '../styles/HeroTabs.css'
import formatHeroName from '../lib/formatHeroName'

type HeroTabProps = {
  heroes: HeroObject[]
  chooseHero: (name: string) => void
  selectedHero: string
}

export function HeroTabList({
  heroes,
  chooseHero,
  selectedHero,
}: HeroTabProps) {
  const [isDropDownDisplayed, setDisplay] = useState(false)
  const [isDropdown, setDropdown] = useState(
    window.matchMedia('(max-width: 935px)').matches
  )

  function displayHeroList() {
    setDisplay(!isDropDownDisplayed)
  }

  function throttle(callback: () => any, limit: number) {
    let timeoutHandler: number | null = null

    return () => {
      if (timeoutHandler === null) {
        timeoutHandler = setTimeout(() => {
          callback()
          timeoutHandler = null
        }, limit)
      }
    }
  }

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.matchMedia('(max-width: 935px)').matches) {
        setDropdown(true)
      } else {
        setDropdown(false)
      }
    }, 300)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const heroTabs = Object.values(heroes).map((hero) => (
    <li
      className={hero.name === selectedHero ? 'hero-tab selected' : 'hero-tab'}
      onClick={() => chooseHero(hero.name)}
      key={`${hero.name}-tab`}
      id={`${hero.name}-tab`}
    >
      <span className="image-wrapper">
        <img
          className="hero-portrait"
          id={`${hero.name}-portrait`}
          src={
            hero.name === 'all-Heroes'
              ? logo
              : `https://d1u1mce87gyfbn.cloudfront.net/hero/${hero.name}/icon-portrait.png`
          }
          alt={`${hero.name} tab portrait`}
        />
      </span>
      <p className="hero-text">{formatHeroName(hero.name)}</p>
    </li>
  ))

  if (isDropdown) {
    return (
      <div className="dropDown" id="hero-list" onClick={displayHeroList}>
        Hero Selector <span></span>
        <ul
          id="hero-tab-list"
          style={isDropDownDisplayed ? { height: 300 } : { height: 0 }}
        >
          {heroTabs}
        </ul>
      </div>
    )
  }

  return (
    <div id="hero-list">
      <ul id="hero-tab-list">{heroTabs}</ul>
    </div>
  )
}
