import React, { useContext } from 'react';
import { makeStyles, TextField, Typography, Zoom } from '@material-ui/core';
import clsx from 'clsx';
import { LanguageContext } from '../contexts/LanguageContext';

const useStyles = makeStyles((theme) => ({
	input: {
		'& .MuiInputBase-input': {
			color: '#fff',
		},
		'& label': {
			color: '#626262',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			transition: 'all 300ms',
			borderColor: '#4e4e4e',
		},
		'& .MuiOutlinedInput-root': {
			'&:hover': {
				'& .MuiOutlinedInput-notchedOutline': {
					borderColor: '#1980fe !important',
				},
			},
		},
	},
	messageError: {
		color: '#ff4141',
	},
	fullWidth: {
		gridColumn: '1/-1',
	},
	rtlLabel: {
		'& label': {
			inset: 'auto',
			right: 22,
			fontFamily: 'Samim !important',
		},
	},
}));
const messages = {
	english: 'Please enter your',
	spanish: 'Por favor introduzca su',
	persian: 'لطفا خود را وارد کنید',
};

const Input = (props) => {
	const { language } = useContext(LanguageContext);
	const { type, name, label, register, errors, maxLength, minLength } = props;
	const classes = useStyles();
	const fullWidth = name === 'address' && true;
	const isPersian = language === 'persian' && true;
	const message = messages[language];
	return (
		<div className={clsx(fullWidth && classes.fullWidth)}>
			<TextField
				className={clsx(classes.input, { [classes.rtlLabel]: isPersian })}
				variant='outlined'
				type={type}
				name={name}
				fullWidth
				label={label}
				inputRef={register({
					required: true,
					maxLength: maxLength,
					minLength: minLength,
				})}
				defaultValue=''
			/>

			{errors[name] && (
				<div>
					<Zoom in={true}>
						<Typography className={classes.messageError} variant='caption'>
							{message} {label}
						</Typography>
					</Zoom>
				</div>
			)}
		</div>
	);
};

export default Input;
