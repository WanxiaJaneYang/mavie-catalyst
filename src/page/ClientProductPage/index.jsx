import {
	Grid, Box, useMediaQuery, Drawer, Button,
} from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import ProductSidebar from './components/ProductSidebar';
import theme from '../../theme';
import getProductFilter from '../../thunk/productFilterThunk';
import getProductInfo from '../../thunk/productInfoThunk';

function ClientProductPage() {
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile);
	const handleSidebarOpen = () => {
		setIsSidebarOpen(true);
	};
	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};
	const dispatch = useDispatch();
	const { productId } = useParams();

	useEffect(() => {
		console.log('dispatching getProductInfo and getProductFilter from client product page use effect');
		// dispatch(getProductInfo(productId));
		// dispatch(getProductFilter(productId));
	}, [productId, dispatch]);

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

	const renderFloatingButton = () => {
		if (isMobile && !isSidebarOpen) {
			return (
				<Box
					sx={{
						position: 'fixed',
						bottom: 16,
						right: 16,
					}}
				>
					<Button
						color="primary"
						variant="circular"
						onClick={handleSidebarOpen}
						sx={{
							width: 40,
							height: 40,
							borderRadius: '20%',
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
							'&:hover': {
								backgroundColor: theme.palette.primary.light,
							},
							boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
						}}
					>
						<MenuIcon />
					</Button>
				</Box>
			);
		}
		return null;
	};

	return (
		<Grid
			container
			sx={
				{
					height: '100vh',
				}
			}
		>
			{renderSidebar()}
			<Grid
				item
				xs={12}
				sm={12}
				md={9}
				lg={9}
			>
				<Box
					sx={
						{
							width: '100%',
							height: '100vh',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'start',
							overflow: 'auto',
							marginTop: '10px',
							marginBottom: '10px',
							// alignItems: 'center',
						}
					}
				>
					<Outlet />
					{renderFloatingButton()}
				</Box>
			</Grid>
		</Grid>
	);
}
export default ClientProductPage;
