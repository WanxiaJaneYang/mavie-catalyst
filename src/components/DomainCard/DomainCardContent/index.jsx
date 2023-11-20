import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
	Typography, Box, Divider,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Domain } from '@mui/icons-material';
import DomainGeneral from '../DomainGeneral';
import FeatureList from '../FeatureList';
import Toggle from '../../Toggle';
import DomainExpertOpinion from '../DomainExpertOpinion';

function DomainCardContent({ domainId }) {
	const domainInfo = useSelector((state) => state.domain.entities[domainId]);
	const filter = useSelector((state) => state.filters.toggle);
	const [importanceRatingOn, setImportanceRatingOn] = useState(false);
	const domainRating = useSelector((state) => state.product.productData
		.domain.data[domainId]);

	return (
		<>
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
				<DomainExpertOpinion domainId={domainId} />
			)}
		</>
	);
}

export default DomainCardContent;

DomainCardContent.propTypes = {
	domainId: PropTypes.number.isRequired,
};
