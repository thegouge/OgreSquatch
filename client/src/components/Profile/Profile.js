import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Stats from '../Stats';
import HeroTabs from '../HeroTabs';
import Loading from '../Loading';

// import testData from "../../lib/response.json";

import './Profile.css';

const Profile = ({ match }) => {
	// State
	const [playMode, setPlaymode] = useState('quick');
	const [selectedHero, setSelectedHero] = useState('all-Heroes');
	const [playerData, setPlayerData] = useState({ name: match.params.gamertag });
	const api = `/api/v1/profile/${match.params.platform}/${match.params.gamertag}`;

	useEffect(() => {
		async function fetchUrl(url) {
			try {
				const response = await fetch(url);
				const json = await response.json();
				if (json.error) {
					setPlayerData({ ...playerData, ...json });
				} else {
					setPlayerData(json);
				}
			} catch (error) {
				console.log('error!');
				console.error(error);
				setPlayerData({ ...playerData, error });
			}
		}

		fetchUrl(api);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [api]);

	// Methods
	const chooseHero = (name) => {
		setSelectedHero(name);
	};

	const changePlayMode = () => {
		if (playMode === 'quick') {
			setPlaymode('comp');
		} else {
			setPlaymode('quick');
		}
	};

	// Error "Handling"
	if (playerData.error) {
		console.error(`${playerData.error}: ${playerData.message}`);

		let errorMessage;
		switch (playerData.error) {
			case 'private':
				errorMessage = `The account ${playerData.name} is private. They will have to set their
          account in Overwatch to public in order to display their stats`;
				break;

			default:
				errorMessage = `Something went wrong trying to fetch ${playerData.name}'s data`;
				break;
		}

		return (
			<div className="error-message">
				<h2>{errorMessage}</h2>
				<Link to="/" className="overwatch-button-primary error-link">
					Go Back
				</Link>
			</div>
		);
	} else if (!playerData.heroes) {
		return <Loading />;
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
				<img
					src={require(`../../assets/images/logo.png`)}
					alt="selectedHero"
					className="logo"
				/>
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
					src={require(`../../assets/images/heroes/${selectedHero}.png`)}
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
		);

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

			<HeroTabs
				chooseHero={chooseHero}
				heroes={playerData.heroes}
				selectedHero={selectedHero}
			/>

			<Stats
				profile={playerData.profile}
				heroData={playerData.heroes[selectedHero]}
				mode={playMode}
				changePlayMode={changePlayMode}
			/>
		</section>
	);
};

export default Profile;
