import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Card, CardContent, CardHeader, Typography, Box, Divider, IconButton,
} from '@mui/material';
import { useState, useEffect } from 'react';
import CloseIcon from '../icons/CloseIcon';
import DomainGeneral from './DomainGeneral';
import FeatureList from './FeatureList';
import Toggle from '../Toggle';
import { setSelectedDomain } from '../../features/filters/domainFilterSlice';

function DomainCard({ domainId }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);
	const filter = useSelector((state) => state.filters.toggle);
	const [importanceRatingOn, setImportanceRatingOn] = useState(false);
	const domainRating = useSelector((state) => state.product.productData
		.domain.data[domainId]);

	const dispatch = useDispatch();

	const handleCloseClick = () => {
		dispatch(setSelectedDomain(
			{
				[domainId]: false,
			},
		));
	};

	// useEffect(
	// 	() => {
	// 		console.log('importanceRatingOn', importanceRatingOn);
	// 	},
	// 	[importanceRatingOn],
	// );

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
				title={domainInfo.name}
				action={(
					<IconButton>
						<CloseIcon
							onClick={handleCloseClick}
						/>
					</IconButton>
				)}
			>
				<Typography>
					{domainInfo.name}
				</Typography>
			</CardHeader>
			<CardContent>
				<DomainGeneral
					icon={domainInfo.roundIcon}
					score={domainRating}
					importance={domainInfo.importance}
					importanceRatingOn={importanceRatingOn}
				/>
				<Divider
					sx={
						{
							marginTop: '16px',
							marginBottom: '16px',
							border: '2px solid #E0E0E0',
						}
					}
				/>
				{
					filter.featuresOn && (
						<FeatureList
							domainId={domainId}
							importanceRatingOn={importanceRatingOn}
						/>
					)
				}
				<Box
					sx={
						{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'end',
							padding: '0px',
						}
					}
				>
					<Typography>
						Importance Rating
					</Typography>
					<Toggle
						value={importanceRatingOn}
						onChange={() => setImportanceRatingOn(!importanceRatingOn)}
					/>
				</Box>

				{filter.expertOpinionsOn && (
					<Typography>
						{domainInfo.expertOpinions}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
}

DomainCard.propTypes = {
	domainId: PropTypes.number.isRequired,
};

export default DomainCard;
