import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import { Typography, Box, FormControlLabel } from '@mui/material';
import { setSelectedGender } from '../../../../../features/filters/genderFilterSlice';
import theme from '../../../../../theme';

function GenderSelector() {
	const dispatch = useDispatch();

	const selectedGender = useSelector(((state) => state.filters.gender.selectedGender));

	const handleSelectedCheckbox = (gender) => {
		dispatch(
			setSelectedGender({
				...selectedGender,
				[gender]: !selectedGender[gender],
			}),
		);
	};

	return (
		<Box
			sx={{
				width: '80%',
				justifyContent: 'space-between',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				marginLeft: '8px',
			}}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: '400',
					fontSize: '14px',
					color: theme.palette.dark,
					textAlign: 'left',
				}}
			>
				Gender
			</Typography>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '0px',
				}}
			>
				<FormControlLabel
					control={(
						<Checkbox
							checked={selectedGender.female}
							onChange={() => handleSelectedCheckbox('female')}
							sx={
								{
									color: theme.palette.grey,
									'&.Mui-checked': {
										color: theme.palette.primary.light,
									},
									'& .MuiSvgIcon-root': { fontSize: '100%' },
									verticalAlign: 'middle',

								}
							}
						/>
					)}
					label="F"
					sx={
						{
							marginRight: '0px',
						}
					}
				/>
				<FormControlLabel
					control={(
						<Checkbox
							checked={selectedGender.male}
							onChange={() => handleSelectedCheckbox('male')}
							sx={
								{
									color: theme.palette.grey,
									'&.Mui-checked': {
										color: theme.palette.primary.light,
									},
									'& .MuiSvgIcon-root': { fontSize: '100%' },
									verticalAlign: 'middle',

								}
							}
						/>
					)}
					label="M"
					sx={
						{
							marginLeft: '-2px',
							marginRight: '0px',
							marginBottom: '0px',
						}
					}
				/>

			</Box>
		</Box>

	);
}

export default GenderSelector;
