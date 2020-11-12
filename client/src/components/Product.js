import React from 'react';
import { Box, Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import mouseImg from '../assets/images/g502-lightspeed-cart.png';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#222',
		padding: theme.spacing(4),
		borderColor: '#4e4e4e',
		color: '#fff',
		'&& hr': {
			backgroundColor: '#4e4e4e',
			margin: theme.spacing(2, 0),
		},
	},
	details: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
	},
	name: {
		padding: theme.spacing(0, 1),
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: theme.spacing(2),
	},
	textColor: {
		color: '#868686',
	},
}));

const Product = ({ productDetails, isPersian }) => {
	const classes = useStyles();
	const {
		title,
		subTitle,
		name,
		price,
		shippingText,
		ShippingPrice,
		totalText,
		totalPrice,
	} = productDetails;
	return (
		<Paper className={classes.root} variant='outlined'>
			<Typography variant='h6'>{title}</Typography>
			<Typography variant='subtitle2'>{subTitle}</Typography>
			<Divider variant='fullWidth' />
			<Box className={classes.details}>
				<img src={mouseImg} alt='mouse' />
				<Typography className={classes.name} variant='body1'>
					{name}
				</Typography>
				<Typography variant='body1'>{price}</Typography>
			</Box>
			<Box className={clsx(classes.flex, classes.textColor)}>
				<Typography variant='body1'>{shippingText}</Typography>
				<Typography variant='body2'>{ShippingPrice}</Typography>
			</Box>
			<Box className={classes.flex}>
				<Typography variant='body1'>{totalText}</Typography>
				<Typography variant='body2'>{totalPrice}</Typography>
			</Box>
		</Paper>
	);
};

export default Product;
