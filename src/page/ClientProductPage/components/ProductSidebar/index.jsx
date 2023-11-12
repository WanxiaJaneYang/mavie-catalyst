import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from '@mui/material';
import CompanyIcon from '../../../../components/ComponyIcon';
import ProductFilter from '../ProjectFilter';

const drawerWidth = 250;

function ProductSidebar(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Paper
			sx={
				{
					height: '100%',
					width: '250',
					display: 'flex',
					flexDirection: 'column',
				}
			}
		>
			<Box
				display="flex"
				justifyContent="start"
				margin={2}
			>
				<CompanyIcon />
			</Box>
			<ProductFilter />
		</Paper>
		// <Box sx={{ display: 'flex' }}>
		// 	<AppBar
		// 		position="fixed"
		// 		sx={{
		// 			display: { xs: 'block', sm: 'none' }, // This line ensures it's only visible on mobile
		// 			ml: { sm: `${drawerWidth}px` },
		// 			borderRadius: '0px 0px 0px 0px',
		// 			width: { sm: `calc(100% - ${drawerWidth}px)` },
		// 		}}

	// 	>
	// 		<Toolbar>
	// 			<IconButton
	// 				color="inherit"
	// 				aria-label="open drawer"
	// 				edge="start"
	// 				onClick={handleDrawerToggle}
	// 				sx={{
	// 					mr: 2,
	// 					display: { sm: 'none' },
	// 					borderRadius: '0px 0px 0px 0px',
	// 					width: { sm: `calc(100% - ${drawerWidth}px)` },
	// 				}}
	// 			>
	// 				<MenuIcon />
	// 			</IconButton>
	// 		</Toolbar>
	// 	</AppBar>
	// 	<Box
	// 		component="nav"
	// 		sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
	// 		aria-label="mailbox folders"
	// 	>
	// 		{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
	// 		<Drawer
	// 			variant="temporary"
	// 			open={mobileOpen}
	// 			onClose={handleDrawerToggle}
	// 			ModalProps={{
	// 				keepMounted: true, // Better open performance on mobile.
	// 			}}
	// 			sx={{
	// 				display: { xs: 'block', sm: 'none' },
	// 				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
	// 			}}
	// 		>
	// 			{drawer}
	// 		</Drawer>
	// 		<Drawer
	// 			variant="permanent"
	// 			sx={{
	// 				display: { xs: 'none', sm: 'block' },
	// 				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
	// 			}}
	// 			open
	// 		>
	// 			{drawer}
	// 		</Drawer>
	// 	</Box>

	// </Box>
	);
}

export default ProductSidebar;
