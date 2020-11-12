import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { LanguageProvider } from './contexts/LanguageContext';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		color: theme.palette.common.white,
		paddingTop: theme.spacing(1.9),
		overflow: 'hidden'
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container fixed>
				<LanguageProvider>
					<Router>
						<Navbar />
						<Routes />
					</Router>
				</LanguageProvider>
			</Container>
		</div>
	);
}

export default App;
