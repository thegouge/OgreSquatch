import React from 'react';
import { Link } from 'react-router-dom';

import './stats.css';
import './toggle.css';

import { formatHeroName } from '../../lib/functions';

const Stats = ({ profile, heroData, mode, changePlayMode }) => {
	// Variables
	const data = heroData[mode];
	let chosenHeroStats;

	// Boolean Check
	if (heroData[mode] === 'no data!') {
		chosenHeroStats = (
			<div className="no-stats" id="profile-info" data-test="statsComp">
				{heroData.name} hasn't been played in {mode} play!
			</div>
		);
	} else {
		chosenHeroStats = (
			<div
				id="chosen-hero"
				style={{
					backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/hero/${heroData.name}/full-portrait.png)`,
					backgroundRepeat: 'no-repeat',
				}}>
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
							src={require('../../assets/images/medals/bronze.png')}
							alt=""
							className="medal-img"
						/>
						<p className="medal-number">{data.medals.bronze}</p>
					</div>
					<div className="printed-medal">
						<img
							src={require('../../assets/images/medals/silver.png')}
							alt=""
							className="medal-img"
						/>
						<p className="medal-number">{data.medals.silver}</p>
					</div>
					<div className="printed-medal">
						<img
							src={require('../../assets/images/medals/gold.png')}
							alt=""
							className="medal-img"
						/>
						<p className="medal-number">{data.medals.gold}</p>
					</div>
				</article>
			</div>
		);
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
				htmlFor="cb3"></label>

			{chosenHeroStats}

			<Link to="/" className="overwatch-button-primary back-link">
				GO BACK
			</Link>
		</div>
	);
};

export default Stats;
