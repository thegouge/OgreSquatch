import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../components/Search';
import Profile from '../components/Profile';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Search} />
				<Route path="/profile/:platform/:gamertag" component={Profile} />
			</Switch>
		</BrowserRouter>
	);
};
