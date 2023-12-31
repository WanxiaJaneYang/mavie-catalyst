import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../../../../constants';
import theme from '../../../../../theme';

function FilterReset() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userId = useSelector((state) => state.auth.userId);
	const currentSelectedProduct = useSelector((state) => state.filters.product.currentProduct);
	const applyEnabled = currentSelectedProduct !== null;

	const handleReset = () => {
		dispatch(resetState());
	};

	const handleApply = () => {
		navigate(`/client/${userId}/product/${currentSelectedProduct.id}/metrics`);
	};

	return (
		<Box
			sx={{
				width: '100%',
				paddingBottom: '20px',
				paddingTop: '20px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<Typography
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: '600',
						fontSize: '14px',
						color: theme.palette.dark,
						marginLeft: '-1px',
						marginRight: '8px',
					}}
				>
					Filters

				</Typography>
				<Box
					sx={
						{
							display: 'flex',
							flexDirection: 'row',
							gap: '0px',
							alignItems: 'center',
							alignContent: 'center',
						}
					}
				>
					<Button
						onClick={handleApply}
						style={{
							cursor: 'pointer',
							textTransform: 'none',
							fontFamily: 'Inter, sans-serif',
							padding: '-2px',
						}}
						size="small"
						variant="outlined"
						disabled={!applyEnabled}
						// color="inherit"
					>
						Apply
					</Button>
					<Button
						onClick={handleReset}
						style={{
							cursor: 'pointer',
							textTransform: 'none',
							fontFamily: 'Inter, sans-serif',
							padding: '-2px',
							marginLeft: '8px',
						}}
						size="small"
						variant="outlined"
					>
						Reset
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default FilterReset;
