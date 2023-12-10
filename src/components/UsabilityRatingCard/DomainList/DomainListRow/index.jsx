import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import propType from 'prop-types';
import ScoreBar from '../../../ScoreBar';
import DynamicSvg from '../../../DynamicSvgIcon';

function DomainListRow({ domainId }) {
	const domains = useSelector((state) => state.domain.entities);
	const domainRating = useSelector((state) => state.product.productData.domain.data);
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
					justifyContent: 'space-between',
					gap: '10px',
				}}
			>
				<Grid container>
					<Grid
						item
						columns={6}
					>
						<Typography
							sx={{
								fontFamily: 'Inter, sans-serif',
								fontWeight: 500,
								fontSize: ['10px', '12px', '14px'], // [mobile, tablet, desktop
								textAlign: 'left',
							}}
						>
							{domain.name}
						</Typography>
					</Grid>
					<Grid
						item
						columns={6}
					>
						<DynamicSvg
							svgData={domain.icon}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={6} sm={6} lg={8} xl={9}>
				<ScoreBar
					score={domainRating[domainId]}
				/>
			</Grid>
			<Grid item xs={1} sm={2} lg={1}>
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
}

export default DomainListRow;

DomainListRow.propTypes = {
	domainId: propType.string.isRequired,
};
