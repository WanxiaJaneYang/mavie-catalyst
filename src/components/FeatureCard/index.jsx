import {
	Box, Card, CardContent, CardHeader, IconButton, Typography,
} from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';
import CloseIcon from '../icons/CloseIcon';
import MavieGauge from '../Gauges';

function FeatureCard({ domainId, featureId, handleCloseClick }) {
	const feature = useSelector((state) => state.product.productData.feature.entities[featureId]);
	const percentages = useSelector((state) => state.product.productData
		.featureDetail.questionImportance);

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#FFFFFF',
				width: '100%',
				height: 'auto',
				marginBottom: '16px',
			}}
		>
			<CardHeader
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					padding: '20px',
				}}
				titleTypographyProps={{
					sx: {
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'left',
					},
				}}
				title={feature.name}
				action={(
					<IconButton>
						<CloseIcon
							onClick={handleCloseClick}
						/>
					</IconButton>
				)}
			/>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							width: '50%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								color: '#000000',
								fontFamily: 'Inter, sans-serif',
								fontWeight: 500,
								fontSize: '14px',
								textAlign: 'left',
							}}
						>
							{feature.description}
						</Typography>
						<Typography>
							{`${feature.score}/5`}
						</Typography>
					</Box>
					<Box sx={{ width: '50%' }}>
						<MavieGauge
							type="percentage"
							value={feature.score}
							importance={feature.importance}
							percentages={percentages}
						/>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}

FeatureCard.propTypes = {
	domainId: propType.number.isRequired,
	featureId: propType.number.isRequired,
	handleCloseClick: propType.func.isRequired,
};

export default FeatureCard;
