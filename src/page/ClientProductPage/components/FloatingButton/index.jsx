import { useMediaQuery, Box } from '@mui/material';
import propType from 'prop-types';
import MenuButton from '../../../../components/MenuButton';
import ScrollToTopButton from '../../../../components/ScrollToTopButton';
import theme from '../../../../theme';

function FloatingButtons({ handleMenuClick, handleScrollToTopClick }) {
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const largeScreenButton = () => (
		// console.log('largeScreenButton');

		<Box sx={{
			position: 'fixed',
			bottom: 10,
			right: 10,
		}}
		>
			<ScrollToTopButton onClick={handleScrollToTopClick} />
		</Box>
	);
	const smallScreenButton = () => (
		// console.log('smallScreenButton');
		<Box sx={{
			position: 'fixed',
			bottom: 10,
			right: 10,
			display: 'flex',
			flexDirection: 'column',
			gap: 2,
		}}
		>
			<MenuButton onClick={handleMenuClick} />
			<ScrollToTopButton onClick={handleScrollToTopClick} />
		</Box>
	);
	return (
		<>
			{/* <MenuButton onClick={handleMenuClick} /> */}
			{isMobile ? smallScreenButton() : largeScreenButton()}
		</>
	);
}

export default FloatingButtons;

FloatingButtons.propTypes = {
	handleMenuClick: propType.func.isRequired,
	handleScrollToTopClick: propType.func.isRequired,
};
