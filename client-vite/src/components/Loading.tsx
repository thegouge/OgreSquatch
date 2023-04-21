import { Link } from 'react-router-dom'

import '../styles/Loading.css'

export function Loading() {
  return (
    <main data-test="loadingComp" className="loading">
      <p className="loading-text">Loading...</p>
      <div className="overwatch-spinner">
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
        <div className="hex"></div>
      </div>

      <Link className="loading-link" to="/">
        <div className="overwatch-button-primary loading-btn">Cancel</div>
      </Link>
    </main>
  )
}
