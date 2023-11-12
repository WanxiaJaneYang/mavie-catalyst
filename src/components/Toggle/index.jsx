import { Switch } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import theme from '../../theme';

const Toggle = styled(Switch)(() => ({
	'& .MuiSwitch-switchBase.Mui-checked': {
		color: '#fff',
		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
		},
	},
	'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: alpha(theme.palette.primary.main, 1),
	},
}));

export default Toggle;
