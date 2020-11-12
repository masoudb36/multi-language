import {
	Box,
	Button,
	
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { LanguageContext } from '../contexts/LanguageContext';

const labels = {
	english: {
		email: 'Email',
		password: 'Password',
	},
	spanish: {
		email: 'Correo electrónico',
		password: 'contraseña',
	},
	persian: {
		email: 'ایمیل',
		password: 'رمز عبور',
	},
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '80vh',
	},
	paper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#222222',
	},
	form: {
		height: 260,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginTop: 12,
		width: 400,
		'& button': {
			backgroundColor: '#1980fe',
			color: '#fff',
		},
	},
}));

const Login = () => {
	const classes = useStyles();
	const { language } = useContext(LanguageContext);

	const { handleSubmit, register, errors } = useForm();

	const onSubmit = (values) => {
		window.localStorage.setItem('currentUser', JSON.stringify(values));

		console.log(values, errors);
	};

	const { email, password } = labels[language];
	return (
		<Box className={classes.root}>
			<Box elevation={2} className={classes.paper}>
				<Typography variant='h4' className={classes.title}>
					Login
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						name='email'
						label={email}
						type='email'
						register={register}
						errors={errors}
						minLength={10}
						maxLength={100}
					/>
					<Input
						name='password'
						label={password}
						type='password'
						register={register}
						errors={errors}
						minLength={8}
						maxLength={100}
					/>
					<Button variant='contained' type='submit'>
						login
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default Login;
