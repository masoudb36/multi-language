import {
	Box,
	Container,
	Divider,
	Tooltip,
	Typography,
	Zoom,
} from '@material-ui/core';
import React, { useContext } from 'react';
import mouseImg from '../assets/images/mouse-about.png';
import { LanguageContext, DataContext } from '../contexts/LanguageContext';
import { useStyles } from '../styles/AboutStyle';
import clsx from 'clsx';

const About = () => {
	const classes = useStyles();
	const { language } = useContext(LanguageContext);
	const { pageContent } = useContext(DataContext);

	const { data, loading, error } = pageContent;
	if (error || data === undefined) {
		return null;
	}
	if (loading) {
		return <Box>loading</Box>;
	}
	const isPersian = language === 'persian' ? true : false;
	const { title, description, items, tooltip } = data.pages.about;
	return (
		<Container fixed>
			<Box className={clsx(classes.root, { [classes.rtl]: isPersian })}>
				<Typography className={classes.title} variant='h5'>
					{title}
				</Typography>
				<Divider variant='middle' className={classes.line} />
				<Typography className={classes.description} variant='body1'>
					{description}
				</Typography>
				<Box className={classes.items}>
					<Box className={classes.item}>
						<Typography variant='h5'>{items[0].title}</Typography>
						<Typography variant='subtitle1'>{items[0].subTitle}</Typography>
					</Box>
					<div className={classes.lineItem} />
					<Box className={classes.item}>
						<Typography variant='h5'>{items[1].title}</Typography>
						<Tooltip title={tooltip} TransitionComponent={Zoom}>
							<Typography variant='subtitle1'>{items[1].subTitle}</Typography>
						</Tooltip>
					</Box>
					<div className={classes.lineItem} />
					<Box className={classes.item}>
						<Typography variant='h5'>{items[2].title}</Typography>
						<Typography variant='subtitle1'>{items[2].subTitle}</Typography>
					</Box>
				</Box>
				<Box className={classes.image}>
					<img src={mouseImg} alt='Mouse' />
				</Box>
			</Box>
		</Container>
	);
};

export default About;
