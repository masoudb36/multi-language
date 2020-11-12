const { makeStyles } = require('@material-ui/core');

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingTop: theme.spacing(5),
		textAlign: 'center',
		overflowX: 'hidden',
	},
	items: {
		display: 'flex',
		margin: theme.spacing(4, 0),
	},
	title: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	line: {
		height: 5,
		width: 100,
		backgroundColor: '#4e4e4e',
		margin: theme.spacing(2, 0),
	},
	description: {
		padding: theme.spacing(0, 10),
		lineHeight: 1.8,
		margin: theme.spacing(2, 0),
	},
	item: {
		margin: theme.spacing(0, 6),
		'& h5': {
			color: '#8a8a8a',
			textTransform: 'uppercase',
		},
	},
	lineItem: {
		border: '1px dashed #393939',
	},
	rtl: {
		direction: 'rtl',
	},
}));
