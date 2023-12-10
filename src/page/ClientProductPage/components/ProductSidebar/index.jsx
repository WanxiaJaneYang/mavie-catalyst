import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import CompanyIcon from '../../../../components/ComponyIcon';
import ProductFilter from '../ProjectFilter';

function ProductSidebar(props) {
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
	);
}

export default ProductSidebar;
