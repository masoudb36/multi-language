import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	FormControlLabel,
	Link,
	Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { useStyles } from '../styles/BuyStyle';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Product from '../components/Product';
import { LanguageContext, DataContext } from '../contexts/LanguageContext';
import clsx from 'clsx';

const labels = {
	english: {
		email: 'email',
		firstName: 'First Name',
		lastName: 'Last Name',
		state: 'State',
		city: 'City',
		address: 'Address',
		zipCode: 'Zip/Postal Code',
		phone: 'Phone Number',
	},
	spanish: {
		email: 'correo electrónico',
		firstName: 'Nombre de pila',
		lastName: 'Apellido',
		state: 'Estado',
		city: 'Ciudad',
		address: 'Habla a',
		zipCode: 'Código postal',
		phone: '',
	},
	persian: {
		email: 'ایمیل',
		firstName: 'نام',
		lastName: 'نام خانوادگی',
		state: 'استان',
		city: 'شهر',
		address: 'آدرس',
		zipCode: 'کدپستی',
		phone: 'شماره همراه',
	},
};

const Buy = () => {
	const classes = useStyles();
	const { handleSubmit, register, errors } = useForm();

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

	const onSubmit = (values) => console.log(values, errors);

	const isPersian = language === 'persian' ? true : false;
	const {
		title,
		subTitle,
		linkText,
		titleEmail,
		subscribeText,
		titleAddress,
		btnText,
		productDetails,
	} = data.pages.buy;

	const {
		email,
		firstName,
		lastName,
		state,
		city,
		address,
		zipCode,
		phone,
	} = labels[language];
	return (
		<Box className={clsx(classes.root,{[classes.rtl]:isPersian})}>
			<Box className={classes.title}>
				<Typography variant='h4'>{title}</Typography>
				<Typography variant='body1'>
					{subTitle} <Link to='/signin'>{linkText}</Link>
				</Typography>
			</Box>
			<Box className={classes.forms}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box className={classes.emailWrap}>
						<Typography variant='h6'>{titleEmail}</Typography>
						<Input
							name='email'
							label={email}
							type='email'
							register={register}
							errors={errors}
							minLength={10}
							maxLength={100}
						/>
						<FormControlLabel
							control={<Checkbox color='primary' />}
							inputRef={register}
							name='subscribe'
							className={classes.checkbox}
							defaultValue={false}
							label={subscribeText}
						/>
					</Box>
					<Box className={classes.shipping}>
						<Typography variant='h6'>{titleAddress}</Typography>
						<Input
							name='firstName'
							label={firstName}
							type='text'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={80}
						/>
						<Input
							name='lastName'
							label={lastName}
							type='text'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={80}
						/>
						<Input
							name='State'
							label={state}
							type='text'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={80}
						/>
						<Input
							name='city'
							label={city}
							type='text'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={80}
						/>
						<Input
							name='address'
							label={address}
							type='text'
							register={register}
							errors={errors}
							minLength={10}
							maxLength={150}
						/>
						<Input
							name='zipCode'
							label={zipCode}
							type='tel'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={8}
						/>
						<Input
							name='phone'
							label={phone}
							type='tel'
							register={register}
							errors={errors}
							minLength={6}
							maxLength={12}
						/>
					</Box>
					<Button
						className={classes.paymentBtn}
						fullWidth
						variant='contained'
						type='submit'>
						{btnText}
					</Button>
				</form>
			</Box>
			<Box className={classes.product}>
				<Product productDetails={productDetails} isPersian={isPersian} />
			</Box>
		</Box>
	);
};

export default Buy;
