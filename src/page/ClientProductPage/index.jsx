import {
	Grid, Box, useMediaQuery, Drawer, Button,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSidebar from './components/ProductSidebar';
import theme from '../../theme';
import ErrorMessage from '../../components/ErrorMessage';
import { clearProductFilterErrorMessage } from '../../features/errorMessages/errorMessageSlice';
import FloatingButtons from './components/FloatingButton';

function ClientProductPage() {
	const errorMessage = useSelector((state) => state.errorMessages.messages.productFilter);
	const index = useSelector((state) => state.errorMessages.index.productFilter);
	const [errorMessageOpen, setErrorMessageOpen] = useState(false);
	const ref = useRef();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile);
	const handleSidebarOpen = () => {
		setIsSidebarOpen(true);
	};
	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};
	const dispatch = useDispatch();

	const onScroll = () => {
		ref.current.scrollTop = 0;
	};

	useEffect(
		() => {
			if (errorMessage) {
				setErrorMessageOpen(true);
			}
		},
		[errorMessage],
	);

	const handleClose = () => {
		dispatch(clearProductFilterErrorMessage());
		setErrorMessageOpen(false);
	};

	const renderSidebar = () => {
		if (isMobile) {
			return (
				<Drawer
					anchor="left"
					onClose={handleSidebarClose}
					open={isSidebarOpen}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 350,
							top: 0,
							height: '100vh',
						},
					}}
				>
					<ProductSidebar
						onMobileClose={handleSidebarClose}
					/>
				</Drawer>
			);
		}

		return (
			<Grid
				item
				md={3}
				lg={3}
				sx={{ height: '100vh' }}
			>
				<ProductSidebar />
			</Grid>
		);
	};

	// const renderFloatingButton = () => {
	// 	if (isMobile && !isSidebarOpen) {
	// 		return (
	// 			<Box
	// 				sx={{
	// 					position: 'fixed',
	// 					bottom: 10,
	// 					right: 1,
	// 				}}
	// 			>
	// 				<Button
	// 					color="primary"
	// 					variant="outlined"
	// 					onClick={handleSidebarOpen}
	// 					sx={{
	// 						mt: 2,
	// 						mb: 2,
	// 						borderRadius: {
	// 							xs: 40,
	// 							sm: 40,
	// 							md: 52,
	// 						},
	// 						height: {
	// 							xs: 26,
	// 							sm: 28,
	// 							md: 30,
	// 						},
	// 						// fixe
	// 						backgroundColor: theme.palette.primary.main,
	// 						color: theme.palette.primary.contrastText,
	// 						'&:hover': {
	// 							backgroundColor: theme.palette.primary.light,
	// 						},
	// 						boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
	// 					}}
	// 				>
	// 					<MenuIcon />
	// 				</Button>
	// 			</Box>
	// 		);
	// 	}
	// 	return null;
	// };

	return (
		<Grid
			container
			sx={
				{
					height: '100vh',
				}
			}
		>
			<ErrorMessage
				open={errorMessageOpen}
				handleClose={handleClose}
				message={errorMessage}
				index={index}
			/>
			{renderSidebar()}
			<Grid
				item
				xs={12}
				sm={12}
				md={9}
				lg={9}
			>
				<Box
					ref={ref}
					sx={
						{
							width: '100%',
							height: '100vh',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'start',
							overflow: 'auto',
							scrollBehavior: 'smooth',
							marginTop: '10px',
							marginBottom: '10px',
							// alignItems: 'center',
						}
					}
				>
					<Outlet />
					{/* {renderFloatingButton()} */}
					{/* {!isMobile && <ScrollToTopButton onClick={onScroll} />} */}
					<FloatingButtons handleMenuClick={handleSidebarOpen} handleScrollToTopClick={onScroll} />
				</Box>
			</Grid>
		</Grid>
	);
}
export default ClientProductPage;
