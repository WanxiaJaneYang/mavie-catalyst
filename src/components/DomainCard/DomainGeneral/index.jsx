import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';
import DynamicSvgIcon from '../../DynamicSvgIcon';
import MavieGauge from '../../Gauges';

function DomainGeneral({
	icon, score, importanceRatingOn, importance,
}) {
	return (
		<Box
			sx={
				{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'space-between',
					justifyContent: 'space-between',
					padding: '0px',
				}
			}
		>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
					}
				}
			>
				<DynamicSvgIcon
					svgData={icon}
					sx={{
						width: ['30px', '40px', '50px'],
						height: ['30px', '40px', '50px'],
						justifyContent: 'center',
					}}
				/>
				<Typography
					sx={{
						color: '#000000',
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						fontSize: '18px',
						textAlign: 'center',
					}}
				>
					{score}
				</Typography>
			</Box>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '16px',
						width: '100%',
						marginRight: '16px',
						marginBottom: '7px',
					}
				}
			>
				<MavieGauge
					type={importanceRatingOn ? 'importanceRating' : 'default'}
					value={score}
					size={1.5}
					importance={importance}
				/>
			</Box>
		</Box>
	);
}

DomainGeneral.propTypes = {
	icon: propTypes.string.isRequired,
	score: propTypes.number.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,
	importance: propTypes.number.isRequired,
};

export default DomainGeneral;
