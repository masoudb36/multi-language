import React, { useContext } from 'react';
import logo from '../assets/images/logo.png';
import { useStyles } from '../styles/NavbarStyles';

import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuLanguage from './MenuLanguage';
import { LanguageContext } from '../contexts/LanguageContext';
import clsx from 'clsx';

const words = {
	english: {
		menus: [
			{
				name: 'Home',
				pathname: '/',
			},
			{
				name: 'Buy',
				pathname: '/buy',
			},
			{
				name: 'About',
				pathname: '/about',
			},
			{
				name: 'Contact Us',
				pathname: '/contact',
			},
		],
		buttonText: 'Sign in',
	},
	spanish: {
		menus: [
			{
				name: 'Hogar',
				pathname: '/',
			},
			{
				name: 'Comprar',
				pathname: '/buy',
			},
			{
				name: 'Acerca de',
				pathname: '/about',
			},
			{
				name: 'Contacto',
				pathname: '/contact',
			},
		],
		buttonText: 'Registrarse',
	},
	persian: {
		menus: [
			{
				name: 'صفحه اصلی',
				pathname: '/',
			},
			{
				name: 'خرید',
				pathname: '/buy',
			},
			{
				name: 'درباره ما',
				pathname: '/about',
			},
			{
				name: 'تماس باما',
				pathname: '/contact',
			},
		],
		buttonText: 'ثبت نام',
	},
};

const Navbar = () => {
	const classes = useStyles();
	const { language } = useContext(LanguageContext);
	const { menus, buttonText } = words[language];
	const isPersian = language === 'persian' ? true : false;
	return (
		<div className={clsx(classes.root, { [classes.rtl]: isPersian })}>
			<Box className={classes.logo}>
				<img src={logo} alt='logo' title='tech-gear' />
			</Box>
			<List className={classes.menu}>
				{menus.map(({ name, pathname }) => (
					<ListItem key={name}>
						<Link to={pathname}>
							<ListItemText>{name}</ListItemText>
						</Link>
					</ListItem>
				))}
			</List>
			<Box className={classes.auth}>
				<MenuLanguage isPersian={isPersian} />
				<Divider orientation='vertical' variant='middle' flexItem />
				<Button variant='outlined' href='/login'>{buttonText}</Button>
			</Box>
		</div>
	);
};

export default Navbar;
