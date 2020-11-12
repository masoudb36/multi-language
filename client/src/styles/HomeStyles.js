import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',

		paddingTop: theme.spacing(5),
		overflow: 'hidden',
		alignItems: 'center',
	},
	rtl: {
		flexDirection: 'row-reverse',

		'& .MuiButton-startIcon': {
			marginRight: 0,
			marginLeft: 8,
		},
	},
	image: {
		display: 'flex',
		alignItems: 'center',
		'&>img': {
			zIndex: 1,
		},
	},
	title: {
		position: 'absolute',
		right: 70,
		transform: 'rotate(90deg)',
		fontSize: '9rem',
		fontWeight: 'bold',
		color: '#19b5fe',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		'& >*': {
			margin: theme.spacing(1, 0),
		},
		'& > h2': {
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '3rem',
		},
		'& >h4': {
			fontSize: '1.8rem',
			color: '#4e4e4e',
		},
	},
	MoreBtn: {
		marginTop: theme.spacing(2),
		'&>button': {
			marginRight: theme.spacing(2),
			padding: theme.spacing(1, 2),
			color: '#fff',
		},
		'&>#moreBtn': {
			borderColor: '#fff',
		},
		'&>#addToCard': {
			backgroundColor: '#1890ff',
		},
	},
	rtlContent: {
		direction: 'rtl',
	},
	rtlImage: {
		flexDirection: 'row-reverse',
		'&>h1': {
			inset: 'auto',
		},
	},
	loading: {
		display: 'flex',
		height: '85vh',
		alignItems: 'center',
		justifyContent: 'center',
		'&>div': {
			color: '#1890ff',
		},
	},
}));
