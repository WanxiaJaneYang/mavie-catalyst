import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../../theme';
import logo from '../../../images/svg/Logo.svg';

function WelcomeComponent() {
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			sx={
				{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}
			}
		>
			<Typography
				component="h1"
				fontSize={{
					xs: 25,
					sm: 29,
				}}
				paddingBottom={2}
				alignSelf="flex-start"
				fontFamily="Inter"
				fontWeight={500}
				align="left"
			>
				Welcome to Mavy
			</Typography>
			<img
				src={logo}
				alt="Company Logo"
				style={{
					width: 40,
					height: 40,
					display: matches ? 'none' : 'block',
					marginLeft: 10,
					marginTop: -10,
				}}
			/>

		</Box>
	);
}

export default WelcomeComponent;
