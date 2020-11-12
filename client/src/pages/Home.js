import React, { useContext } from 'react';
import { useStyles } from '../styles/HomeStyles';
import mouseImage from '../assets/images/mouse-g502.png';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import {
	AddShoppingCart as AddShoppingCartIcon,
	ErrorOutline as ErrorOutlineIcon,
} from '@material-ui/icons';
import { LanguageContext, DataContext } from '../contexts/LanguageContext';
import clsx from 'clsx';

const Home = () => {
	const classes = useStyles();
	const { language } = useContext(LanguageContext);
	const { pageContent } = useContext(DataContext);

	const { data, loading, error } = pageContent;
	if (error) {
		console.log(error.message);
		return null;
	}
	if (loading) {
		return (
			<Box className={classes.loading}>
				<CircularProgress />
			</Box>
		);
	}

	const isPersian = language === 'persian' ? true : false;
	const { title, subTitle, description, btnAdd, btnMore } = data.pages.home;

	return (
		<Box className={clsx(classes.root, { [classes.rtl]: isPersian })}>
			<Box
				className={clsx(classes.content, { [classes.rtlContent]: isPersian })}>
				<Typography variant='h2'>{title}</Typography>
				<Typography variant='h4'>{subTitle}</Typography>
				<Typography variant='body1'>{description}</Typography>
				<Box className={classes.MoreBtn}>
					<Button
						id='addToCard'
						variant='contained'
						startIcon={<AddShoppingCartIcon />}>
						{btnAdd}
					</Button>
					<Button
						id='moreBtn'
						variant='outlined'
						startIcon={<ErrorOutlineIcon />}>
						{btnMore}
					</Button>
				</Box>
			</Box>
			<Box className={clsx(classes.image, { [classes.rtlImage]: isPersian })}>
				<img src={mouseImage} alt='Mouse G-502' />

				<Typography className={classes.title} variant='h1'>
					G502
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
