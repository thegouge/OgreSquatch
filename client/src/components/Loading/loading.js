import React from "react";
import {Link} from "react-router-dom";

import "./loading.css";

function Loading() {
  return (
    <div data-test="loadingComp" className="loading">
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
        Cancel
      </Link>
    </div>
  );
}

export default Loading;
