import { Link } from 'react-router-dom'

import '../styles/Loading.css'

export function Loading() {
  // simply making an array with 7 values
  const hexes = [...Array(7).keys()]

  return (
    <main data-test="loadingComp" className="loading">
      <p className="loading-text">Loading...</p>
      <div className="overwatch-spinner">
        {/* so that we may render them as hexes on the loading spinner */}
        {hexes.map((value, index) => (
          <div className="hex" key={index}></div>
        ))}
      </div>

      <Link className="loading-link" to="/">
        <div className="overwatch-button-primary loading-btn">Cancel</div>
      </Link>
    </main>
  )
}
