import React from 'react';
import { Link } from 'react-router-dom';

import './loading.css';

function Loading() {
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
	);
}

export default Loading;
