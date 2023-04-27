import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import '../styles/Search.css'

export function Search() {
  const [platform, setPlatform] = useState('')
  const [region, setRegion] = useState('')
  const [gamertag, setGamertag] = useState('')
  const navigate = useNavigate()

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

  const authenticateSearch = (event: React.FormEvent) => {
    event.preventDefault()
    // Platform Booleans
    if (platform === '') {
      toast.error('You need to Choose a Platform!')
      return false
    }
    if (region === '') {
      toast.error('You need to Choose a Region!')
      return false
    }
    if (gamertag === '') {
      toast.error('You need to write a user name!')
      return false
    }
    if (platform === 'pc' && gamertag.search(/#(?=\d{4})/) < 0) {
      toast.warn(
        'A Battle.Net profile needs to have a battle tag (a hashtag followed by numbers)'
      )
      return false
    }

    return handleSubmit()
  }

  const handleSubmit = () => {
    let urlGamertag = gamertag

    if (platform === 'pc') {
      // This replaces the '#' in the blizzard battle tag with a '-'
      urlGamertag = gamertag.replace(/#(?=\d{4})/, '-')
    }

    return navigate(`/profile/${platform}/${region}/${urlGamertag}`)
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
        <input
          type="submit"
          className="overwatch-button-primary p-2 text-2xl"
          onClick={authenticateSearch}
        />
      </form>
    </section>
  )
}
