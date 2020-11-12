import React, { useContext } from 'react';
import {
	Box,
	Divider,
	Grid,
	IconButton,
	makeStyles,
	Typography,
} from '@material-ui/core';
import {
	Facebook as FacebookIcon,
	Twitter as TwitterIcon,
	Instagram as InstagramIcon,
	YouTube as YouTubeIcon,
} from '@material-ui/icons';
import { LanguageContext,DataContext } from '../contexts/LanguageContext';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '87vh',
	},
	title: {
		fontWeight: 'bold',
	},
	line: {
		height: 5,
		width: 120,
		backgroundColor: '#4e4e4e',
		margin: theme.spacing(2.5, 0),
	},
	items: {
		margin: theme.spacing(2, 0),
	},
	item: {
		'&>h5': {
			marginBottom: theme.spacing(2),
		},
		'&>p': {
			lineHeight: 1.8,
		},
	},
	social: {
		marginTop: theme.spacing(4),
		'&>a': {
			color: '#fff',
			transition: 'all 400ms',
			'&:hover': {
				'&:nth-child(1)': {
					color: '#3b5998',
				},
				'&:nth-child(2)': {
					color: '#1da1f2 ',
				},
				'&:nth-child(3)': {
					color: '#e1306c ',
				},
				'&:nth-child(4)': {
					color: '#f00 ',
				},
			},
		},
	},
	rtl: {
		direction: 'rtl',
	},
}));

const Contact = () => {
	const classes = useStyles();
	const { language } = useContext(LanguageContext);
	const { pageContent } = useContext(DataContext);

	const { data, loading, error } = pageContent;
	if (error || data === undefined) {
		return null;
	}
	const isPersian = language === 'persian' ? true : false;
	const { title, items } = data.pages.contact;
	if (loading) {
		return <Box>loading</Box>;
	}
	return (
		<Box className={clsx(classes.root, { [classes.rtl]: isPersian })}>
			<Typography className={classes.title} variant='h4'>
				{title}
			</Typography>
			<Divider variant='middle' className={classes.line} />
			<Grid className={classes.items} container spacing={5}>
				{items.map(({ title, description }) => (
					<Grid className={classes.item} item xs={3}>
						<Typography variant='h5'>{title}</Typography>
						<Typography variant='body2'>{description}</Typography>
					</Grid>
				))}
			</Grid>
			<Box className={classes.social}>
				<IconButton href='https://dncode.ir'>
					<FacebookIcon fontSize='large' />
				</IconButton>
				<IconButton href='https://dncode.ir'>
					<TwitterIcon fontSize='large' />
				</IconButton>
				<IconButton href='https://dncode.ir'>
					<InstagramIcon fontSize='large' />
				</IconButton>
				<IconButton href='https://dncode.ir'>
					<YouTubeIcon fontSize='large' />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Contact;
