import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import '../styles/Search.css'

export function Search() {
  const [platform, setPlatform] = useState('')
  const [region, setRegion] = useState('')
  const [gamertag, setGamertag] = useState('')
  const [ready, setReady] = useState(false)
  const { addToast } = useToasts()

  let placeholderText = ''

  switch (platform) {
    case 'pc':
      placeholderText = 'battle tag'
      break

    case 'xbl':
      placeholderText = 'Xbox Live gamertag'
      break

    case 'psn':
      placeholderText = 'Playstation Network ID'
      break

    default:
      placeholderText = 'in-game username'
      break
  }

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPlatform(event?.target?.value ?? '')
  }
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event?.target?.value ?? '')
  }
  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGamertag(event?.target?.value ?? '')
  }

  const authenticateSearch = () => {
    // Platform Booleans
    if (platform === '') {
      addToast('You need to Choose a Platform!', {
        appearance: 'error',
        autoDismiss: true,
      })
      return false
    }
    if (region === '') {
      addToast('You need to Choose a Region!', {
        appearance: 'error',
        autoDismiss: true,
      })
      return false
    }
    if (gamertag === '') {
      addToast('You need to write a user name!', {
        appearance: 'error',
        autoDismiss: true,
      })
      return false
    }
    if (platform === 'pc' && gamertag.search(/#(?=\d{4})/) < 0) {
      addToast(
        'A Battle.Net profile needs to have a battle tag (a hashtag followed by numbers)',
        { appearance: 'warning', autoDismiss: true }
      )
      return false
    }

    return true
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (authenticateSearch()) {
      if (platform === 'pc') {
        // This replaces the '#' in the blizzard battle tag with a '-'
        setGamertag(gamertag.replace(/#(?=\d{4})/, '-'))
      }
      setReady(true)
    }
  }

  if (ready) {
    redirect(`/profile/${platform}/${region}/${gamertag}`)
  }

  return (
    <section id="profile-search" data-test="searchComp">
      <h2 className="search-header">
        Find out if your friends need to stay on the payload!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-group">
            <select
              name="platform"
              id="platform"
              className="form-input"
              defaultValue=""
              onChange={handlePlatformChange}
            >
              <option value="">Choose a Platform</option>
              <option value="pc">Battle.Net</option>
              <option value="psn">PlayStation</option>
              <option value="xbl">Xbox</option>
              <option value="nintendo-switch">Nintendo Switch</option>
            </select>
          </div>

          <div className="form-group">
            <select
              name="region"
              id="region"
              className="form-input"
              defaultValue=""
              onChange={handleRegionChange}
            >
              <option value="">Choose a Region</option>
              <option value="us">United States</option>
              <option value="eu">European Union</option>
              <option value="kr">Korea</option>
              <option value="global">Other</option>
            </select>
          </div>

          <div className="form-group">
            <span
              className={`pc-reminder ${
                platform === 'pc' ? 'active-reminder' : ''
              }`}
            >
              (case sensitive with # numbers)
            </span>
            <input
              className="form-input"
              id="username"
              onChange={handleTagChange}
              value={gamertag}
              placeholder={placeholderText}
            />
          </div>
        </div>
        <input type="submit" className="overwatch-button-primary" />
      </form>
    </section>
  )
}
