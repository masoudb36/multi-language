import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: '7fr 5fr',
		gridGap: 50,
		padding: theme.spacing(4, 0),
	},
	title: {
		gridColumn: '1/-1',

		'& a': {
			color: '#1980fe',
			textDecoration: 'none',
		},
	},
	forms: {
		padding: theme.spacing(3, 0),
		borderTop: '1px solid #4e4e4e',
	},
	emailWrap: {
		width: '100%',
		color: '#fff',
		'& .MuiFormControlLabel-label': {
			color: '#ffff',
			fontSize: '14px',
		},
		'& h6': {
			marginBottom: theme.spacing(2),
		},
	},
	checkbox: {
		'& svg': {
			color: '#1980fe',
		},
	},
	shipping: {
		paddingTop: theme.spacing(4),
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridGap: 20,
		'& h6': {
			gridColumn: '1/-1',
		},
	},
	paymentBtn: {
		marginTop: theme.spacing(4),
		backgroundColor: '#1980fe',
		color: '#fff',
		'&:hover': {
			backgroundColor: '# 0f64c8',
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
	rtl: {
		direction: 'rtl',
	},
}));
