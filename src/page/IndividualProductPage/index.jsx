import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import GeneralPersonaCard from './components/GeneralPersonaCard';
import ProductIntroCard from './components/productIntroCard';
import DomainCard from '../../components/DomainCard';
import BrandCard from '../../components/BrandCard';

function IndividualProductPage() {
	const domainIds = useSelector((state) => state.domain.ids);
	const selectedDomain = useSelector((state) => state.filters.domain);
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
			<Grid container spacing={2}>
				{domainIds.map((id) => (
					selectedDomain[id]
					&& (
						<Grid item xs={12} sm={12} md={6} lg={3}>
							<DomainCard
								domainId={id}
								key={`${id}-domain`}
							/>
						</Grid>
					)
				))}
			</Grid>
		</Box>
	);
}

export default IndividualProductPage;
