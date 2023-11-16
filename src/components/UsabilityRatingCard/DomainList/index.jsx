import React from 'react';
import PropTypes from 'prop-types';
import {
	Box, Divider, Typography, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ScoreBar from '../../ScoreBar';
import DynamicSvg from '../../DynamicSvgIcon';

function DomainList() {
	const domains = useSelector((state) => state.domain.entities);
	const domainIds = useSelector((state) => state.domain.ids);
	const domainRating = useSelector((state) => state.product.productData.domain.data);

	const getDomainScoreRow = (domainId) => {
		const domain = domains[domainId];
		if (!domain) return null;

		return (
			<Grid container spacing={2} alignItems="center" sx={{ marginBottom: '10px' }}>
				<Grid
					item
					sm={4}
					lg={3}
					xl={2}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'start',
						gap: '10px',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 500,
							fontSize: '12px',
							textAlign: 'left',
						}}
					>
						{domain.name}
					</Typography>
					<DynamicSvg
						svgData={domain.icon}
					/>
				</Grid>
				<Grid item xs={6} sm={6} lg={8} xl={9}>
					<ScoreBar
						score={domainRating[domainId]}
					/>
				</Grid>
				<Grid item xs={2} sm={2} lg={1}>
					<Typography
						sx={{
							color: '#000000',
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '14px',
							textAlign: 'left',
						}}
					>
						{domainRating[domainId]}
					</Typography>
				</Grid>
			</Grid>
		);
	};

	const getDomainScoreRows = () => domainIds.map((domainId) => getDomainScoreRow(domainId));

	return (
		<Box width="50%">
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Domains
			</Typography>
			<Box
				overflow="auto"
				sx={{
					height: '150px',
					width: '100%',
					paddingRight: '16px',
					paddingLeft: '16px',
				}}
			>
				{getDomainScoreRows()}
			</Box>

		</Box>
	);
}

export default DomainList;
