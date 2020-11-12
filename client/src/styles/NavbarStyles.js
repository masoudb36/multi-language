import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: '3fr 6fr 3fr',
		gridGap: 10,
		alignItems: 'center',
	},
	logo: {
		'&>img': {
			width: 140,
		},
	},
	menu: {
		display: 'flex',
		'&>li': {
			paddingTop: 0,
		},
		'& a': {
			color: '#fff',
			textDecoration: 'none',
			transition: 'all 400ms',
			'&:hover': {
				color: '#1890ff',
			},
		},
	},

	auth: {
		justifySelf: 'end',
		display: 'flex',
		alignItems: 'center',
		'& hr': {
			backgroundColor: '#4e4e4e',
		},
		'& button': {
			color: theme.palette.common.white,
			padding: theme.spacing(1, 3),
			borderColor: theme.palette.common.white,
		},
	},
	active: {
		'& span': {
			color: '#1890ff',
		},
	},
	rtl: {
		direction: 'rtl',
	},
}));
