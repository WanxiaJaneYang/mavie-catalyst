import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Card, CardContent, CardHeader, Typography, IconButton,
} from '@mui/material';
import { useState, useEffect } from 'react';
import CloseIcon from '../icons/CloseIcon';
import { setSelectedDomain } from '../../features/filters/domainFilterSlice';
import DomainCardContent from './DomainCardContent';

function DomainCard({ domainId }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);

	const dispatch = useDispatch();

	const handleCloseClick = () => {
		dispatch(setSelectedDomain(
			{
				[domainId]: false,
			},
		));
	};

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
				title={domainInfo?.name}
				action={(
					<IconButton onClick={handleCloseClick}>
						<CloseIcon />
					</IconButton>
				)}
			>
				<Typography>
					{domainInfo.name}
				</Typography>
			</CardHeader>
			<CardContent>
				<DomainCardContent domainId={domainId} />
			</CardContent>
		</Card>
	);
}

DomainCard.propTypes = {
	domainId: PropTypes.string.isRequired,
};

export default DomainCard;
