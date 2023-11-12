import { Grid, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ProductSidebar from './components/ProductSidebar';

function ClientProductPage() {
	return (
		<Grid
			container
			sx={
				{
					height: '100vh',
				}
			}
		>
			<Grid
				item
				md={3}
				lg={2}
				sx={{ height: '100vh' }}
			>
				<ProductSidebar />
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={9}
				lg={10}
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
				</Box>
			</Grid>
		</Grid>
	);
}
export default ClientProductPage;
