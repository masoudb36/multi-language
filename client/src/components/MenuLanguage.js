import React, { useState, useContext } from 'react';
import {
	Fade,
	IconButton,
	makeStyles,
	Menu,
	MenuItem,
} from '@material-ui/core';

import enLanguage from '../assets/images/united-kingdom.png';
import spLanguage from '../assets/images/044-spain.png';
import faLanguage from '../assets/images/iran.png';

import { LanguageContext } from '../contexts/LanguageContext';
import clsx from 'clsx';

const useStyles = makeStyles({
	iconLanguage: {
		'& img': {
			width: 25,
			height: 25,
		},
	},
	menuLanguage: {
		'& .MuiMenu-paper': {
			top: '70px !important',
			left: '1082px !important',
			backgroundColor: '#393939',
			color: '#fff',
		},
	},
	menuWrapper: {
		position: 'relative',
	},
	rtlMenu: {
		'& .MuiMenu-paper': {
			left: '182px !important',
		},
	},
});

const flags = {
	english: enLanguage,
	spanish: spLanguage,
	persian: faLanguage,
};

const MenuLanguage = ({ isPersian }) => {
	const { language, changeLanguage } = useContext(LanguageContext);

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuItemClick = (ev) => {
		console.log(ev.target.textContent.toLowerCase());
		const lang = ev.target.textContent.toLowerCase();
		changeLanguage(lang);
		setAnchorEl(null);
	};

	return (
		<div className={classes.menuWrapper}>
			<IconButton
				aria-controls='language-menu'
				aria-haspopup='true'
				onClick={handleClick}
				className={classes.iconLanguage}>
				<img src={flags[language]} alt='language' />
			</IconButton>
			<Menu
				id='language-menu'
				className={clsx(classes.menuLanguage, { [classes.rtlMenu]: isPersian })}
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}>
				<MenuItem onClick={menuItemClick}>English</MenuItem>
				<MenuItem onClick={menuItemClick}>Spanish</MenuItem>
				<MenuItem onClick={menuItemClick}>Persian</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuLanguage;
