import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import theme from '../../theme';
import EmptyMavieIcon from '../icons/EmptyMavieIcon';
import FilledMavieIcon from '../icons/FilledMavieIcon';

function MavieRating(props) {
	const StyledRating = styled(Rating)({
		'& .MuiRating-iconFilled': {
			color: theme.palette.primary.main,
		},
		'& .MuiRating-iconHover': {
			color: theme.palette.primary.main,
		},
	});
	return (
		<StyledRating
			name="mavie-rating"
			defaultValue={0}
			getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
			precision={0.2}
			icon={<FilledMavieIcon fontSize="inherit" />}
			emptyIcon={<EmptyMavieIcon fontSize="inherit" />}
			{...props}
		/>
	);
}

export default MavieRating;
