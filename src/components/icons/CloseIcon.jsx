import SvgIcon from '@mui/material/SvgIcon';

function CloseIcon(props) {
	return (
		<SvgIcon {...props}>
			<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<ellipse cx="20.8491" cy="20" rx="20.8491" ry="20" fill="#F6F8FA" />
				<path d="M15.0625 25.875L21 19.9375L26.9375 25.875" stroke="#8393A8" strokeWidth="1.78125" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M26.9375 14.125L21 20.0625L15.0625 14.125" stroke="#8393A8" strokeWidth="1.78125" strokeLinecap="round" strokeLinejoin="round" />
			</svg>

		</SvgIcon>
	);
}

export default CloseIcon;
