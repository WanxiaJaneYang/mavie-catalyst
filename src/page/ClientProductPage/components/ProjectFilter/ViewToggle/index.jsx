import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { setFeaturesOn, setExpertOpinionsOn } from '../../../../../features/filters/toggleFilterSlice';
import Toggle from '../../../../../components/Toggle';

function ViewToggle() {
	const dispatch = useDispatch();
	const featuresOn = useSelector((state) => state.filters.toggle.featuresOn);
	const expertOpinionsOn = useSelector((state) => state.filters.toggle.expertOpinionsOn);

	const handleFeaturesToggle = () => {
		dispatch(setFeaturesOn(!featuresOn));
	};

	const handleExpertOpinionToggle = () => {
		dispatch(setExpertOpinionsOn(!expertOpinionsOn));
	};

	return (
		<Box>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
					}}
				>
					Features
				</Typography>
				<Toggle
					checked={featuresOn}
					onChange={handleFeaturesToggle}
					name="features"
				/>
			</Box>
			<Box
				sx={
					{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}
				}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
					}}
				>
					Expert Opinions
				</Typography>
				<Toggle
					checked={expertOpinionsOn}
					onChange={handleExpertOpinionToggle}
					name="expertOpinions"
				/>
			</Box>
		</Box>
	);
}

export default ViewToggle;
