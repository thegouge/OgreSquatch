import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import Header from '../Header';
import Footer from '../Footer';

import RouteView from '../../routes';

import './App.css';
import '../../fonts.css';

const App = () => {
	return (
		<ToastProvider>
			<div className="App" data-test="AppComp">
				<Header />
				<main>
					<RouteView />
				</main>
				<Footer />
			</div>
		</ToastProvider>
	);
};

export default App;
