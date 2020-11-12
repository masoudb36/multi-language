import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Buy from '../pages/Buy';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/buy' render={() => <Buy />} />
			<Route exact path='/about' render={() => <About />} />
			<Route exact path='/contact' render={() => <Contact />} />
			<Route exact path='/login' render={() => <Login />} />
			<Redirect to='/' />
		</Switch>
	);
};

export default Routes;
