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

		<Grid
			container
			spacing={2}
			alignItems="center"
			sx={{
				marginBottom: '10px',
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '100%',

			}}
		>
			<Grid
				item
				xs={3}
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
				xs={1}
			>
				<DynamicSvg
					svgData={domain.icon}
					sx={{
						width: ['16x', '18px', '20px'], // [mobile, tablet, desktop
						height: ['16px', '184px', '20px'], // [mobile, tablet, desktop
					}}
				/>
			</Grid>
			<Grid item xs={7}>
				<ScoreBar
					score={domainRating[domainId]}
				/>
			</Grid>
			<Grid item xs={1}>
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
