import React from 'react';
import {
	Box, Card, CardContent, CardHeader, Dialog, IconButton, Typography,
} from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';
import CloseIcon from '../icons/CloseIcon';
import FeatureCardContent from './FeatureCardContent';

function FeatureCard({
	open, domainId, featureId, handleCloseClick,
}) {
	const feature = useSelector((state) => state.product.productData.features.entities[featureId]);
	const domains = useSelector((state) => state.domain.entities);

	return (
		<Dialog
			open={open}
			sx={{
				'& .MuiDialog-paper': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: ['300px', '400px', '600px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					maxHeight: '90vh',
				},
			}}
		>
			<Card
				sx={{
					width: '100%', // Adjust as needed, or use maxWidth for responsiveness
					maxWidth: '600px',
					marginBottom: '16px',
					overflow: 'visible', // Ensures shadows and such are not clipped
				}}
				elevation={0}
			>
				<CardHeader
					sx={{
						alignItems: 'center',
						justifyContent: 'space-between',
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
					subheader={domains[domainId].name}
					action={(
						<IconButton onClick={handleCloseClick}>
							<CloseIcon />
						</IconButton>
					)}
				/>
				<CardContent>
					<FeatureCardContent featureId={featureId} />
				</CardContent>
			</Card>
		</Dialog>
	);
}

FeatureCard.propTypes = {
	domainId: propType.number.isRequired,
	featureId: propType.number.isRequired,
	handleCloseClick: propType.func.isRequired,
	open: propType.bool.isRequired,
};

export default FeatureCard;
