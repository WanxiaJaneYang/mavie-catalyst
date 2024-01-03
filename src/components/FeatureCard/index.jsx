import React from 'react';
import {
	Card, CardContent, CardHeader, Dialog, IconButton,
} from '@mui/material';
import propType from 'prop-types';
import { useSelector } from 'react-redux';
import CloseIcon from '../icons/CloseIcon';
import FeatureCardContent from './FeatureCardContent';

function FeatureCard({
	open, domainId, featureId, handleCloseClick,
}) {
	const feature = useSelector((state) => state.feature.entities[featureId]);
	const domains = useSelector((state) => state.domain.entities);

	return (
		<Dialog
			open={open}
			sx={{
				'& .MuiDialog-paper': {
					alignItems: 'center',
					justifyContent: 'center',
					width: ['350px', '600px', '800px'], // Breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'
					maxHeight: '90vh',
					margin: 'auto',
				},
			}}
		>
			<Card
				sx={{
					width: '100%', // Adjust as needed, or use maxWidth for responsiveness
					maxWidth: '600px',
					maxHeight: '90vh',
					// marginBottom: '16px',
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
				<CardContent sx={{ padding: ['8px', '16px', '16px'] }}>
					<FeatureCardContent featureId={featureId} />
				</CardContent>
			</Card>
		</Dialog>
	);
}

FeatureCard.propTypes = {
	domainId: propType.string.isRequired,
	featureId: propType.string.isRequired,
	handleCloseClick: propType.func.isRequired,
	open: propType.bool.isRequired,
};

export default FeatureCard;
