import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { setCurrentProduct } from '../../../../../features/filters/productListSlice';
import theme from '../../../../../theme';

function ProductSelector() {
	const dispatch = useDispatch();
	const currentProduct = useSelector((state) => state.filters.product.currentProduct);
	const productList = useSelector((state) => state.filters.product.products);

	const handleChange = (event) => {
		const selectedProduct = productList.find((product) => product.productId === event.target.value);
		dispatch(setCurrentProduct(selectedProduct));
	};
	return (
		<div
			style={{
				justifyContent: 'start',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'start',
				marginLeft: '0px',
				marginRight: '0px',
				paddingRight: '0px',
				width: '100%',
			}}
		>
			<Typography
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: '600',
					fontSize: '14px',
					color: theme.palette.dark,
					marginLeft: '0px',
				}}
			>
				Product
			</Typography>
			<Select
				value={currentProduct?.productId}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'Without label' }}
				sx={
					{
						marginLeft: '0px',
						marginBottom: '10px',
						marginTop: '10px',
						width: '100%',
						height: '35px',
						textAlign: 'left',
						paddingLeft: '0px',
					}
				}
			>
				{productList.map((product) => (
					<MenuItem
						key={product.productId}
						value={product.productId}
						// sx={
						// 	{
						// 		fontFamily: 'Inter, sans-serif',
						// 		fontWeight: '400',
						// 		alignContent: 'start',
						// 	}
						// }
					>
						{product.productName}

					</MenuItem>
				))}
			</Select>
		</div>
	);
}

export default ProductSelector;
