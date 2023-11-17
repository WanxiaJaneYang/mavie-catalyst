import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import PersonaSelector from './PersonaSelector';
import DomainSelector from './DomainSelector';
import ProductSelector from './ProductSelector';
import ViewToggle from './ViewToggle';
import FilterReset from './FilterReset';
import ShareButton from '../ShareButton';

function ProductFilter() {
	const currentSelectedProduct = useSelector((state) => state.filters.product.currentProduct);
	return (
		<Box
			sx={
				{
					position: 'relative', // added
					maxHeight: '100vh', // ensure it does not exceed the viewport height
					overflow: 'hidden', // hide the scrollbars
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'start',
					width: '95%',
					height: '100%',
					marginTop: '10px',
					paddingLeft: '23px',
					paddingRight: '5px',
					marginLeft: '0px',
					marginRight: '0px',
					marginBottom: '10px',
					borderRadius: '0px 0px 0px 0px',
					boxShadow: '0px 0px 0px 0px',
				}
			}
		>
			<ProductSelector />
			<FilterReset
				sx={{
					position: 'sticky', top: 0, zIndex: 10, width: '90%',
				}}
			/>
			{
				currentSelectedProduct && (
					<Box
						sx={{
							overflowY: 'auto',
							flex: 1,
							width: '95%',
							paddingLeft: '10px',
						}}
					>

						<PersonaSelector />
						<DomainSelector />
						<ViewToggle />
						<ShareButton />
					</Box>
				)
			}
		</Box>
	);
}

export default ProductFilter;
