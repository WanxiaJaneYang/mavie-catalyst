import { Button } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import theme from '../../../../theme';

function ShareButton() {
	return (
		<Button
			fullWidth
			variant="outlined"
			sx={{
				mt: 2,
				mb: 2,
				borderRadius: {
					xs: 40,
					sm: 40,
					md: 52,
				},
				height: {
					xs: 26,
					sm: 28,
					md: 30,
				},
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				'&:hover': {
					backgroundColor: theme.palette.primary.light,
				},
			}}
			color="primary"
			type="submit"
			startIcon={<ShareOutlinedIcon />}
		>
			Share
		</Button>
	);
}

export default ShareButton;
