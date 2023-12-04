import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import GeneralPersonaCard from './components/GeneralPersonaCard';
import ProductIntroCard from './components/productIntroCard';
import BrandCard from '../../components/BrandCard';

function IndividualProductPage() {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'auto',
				justifyContent: 'start',
				paddingRight: '16px',
				paddingLeft: '16px',
				gap: '0px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<BrandCard />
			<Typography
				sx={
					{
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'left',
						marginTop: '16px',
						marginBottom: '16px',
					}
				}
			>
				Product
			</Typography>
			<ProductIntroCard />
			<GeneralPersonaCard />
			<Outlet />
		</Box>
	);
}

export default IndividualProductPage;
