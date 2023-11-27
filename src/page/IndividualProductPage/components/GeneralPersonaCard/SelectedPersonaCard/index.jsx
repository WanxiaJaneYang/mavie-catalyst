import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { IconButton, Grid } from '@mui/material';
import SelectedPersonaToggle from '../../../../../components/SelectedPersonaToggle';
import colors from '../../../../../theme/colors';
import { setShowDetail } from '../../../../../features/product/generalProduct';
import InfoIcon from '../../../../../components/icons/InfoIcon';
import ErrorMessage from '../../../../../components/ErrorMessage';

function SelectedPersonaCard() {
	const { loading, error } = useSelector((state) => state.persona);
	const personas = useSelector((state) => state.persona.ids);
	const [errorMessageOpen, setErrorMessageOpen] = useState(false);

	useEffect(
		() => {
			if (error) {
				handleErrorMessageOpen();
			}
		},
		[error],
	);

	const handleErrorMessageOpen = () => {
		setErrorMessageOpen(true);
	};

	const handleErrorMessageClose = () => {
		setErrorMessageOpen(false);
	};

	const dispatch = useDispatch();

	const showDetails = useSelector((state) => state.product.productInfo.showDetail);

	const getPersonaIcons = () => (
		personas.map((id) => (
			<Grid
				item
				md={3}
				lg={2}
				xl={1}
				key={`${id}-selected-grid`}
			>
				<SelectedPersonaToggle
					personaId={id}
					key={`${id}-selected`}
					sx={{
						width: ['48px', '52px', '60px', '64px'],
						height: ['48px', '52px', '60px', '64px'],
					}}
				/>
			</Grid>

		))
	);

	const getPersonaIdRendered = () => {
		if (loading) {
			return (
				<Skeleton
					variant="rectangular"
					width="95%"
					height="200px"
					sx={
						{
							borderRadius: '8px',
							alignContent: 'center',
						}
					}
				/>
			);
		}
		if (error) {
			return (
				<ErrorMessage
					open={errorMessageOpen}
					handleClose={handleErrorMessageClose}
					message={error}
				/>
			);
		}

		return (
			<>
				{getPersonaIcons()}
			</>
		);
	};

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: colors.grey,
				width: '100%',
				height: 'auto',
				marginBottom: '16px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '16px',
				}}
			>
				<Typography
					sx={
						{
							color: colors.white,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						}
					}
				>
					Selected Personas
				</Typography>
				<IconButton
					onClick={() => dispatch(setShowDetail(!showDetails))}
				>
					<InfoIcon
						sx={{
							width: '24px',
							height: '24px',
						}}
					/>
				</IconButton>
			</Box>
			<Grid
				container
				sx={{
					// display: 'flex',
					// alignItems: 'center',
					// flexDirection: 'row',
					// justifyContent: 'start',
					paddingBottom: '8px',
					paddingLeft: '8px',
					width: '100%',
					gap: ['8px', '16px', '16px'],
				}}
			>
				{getPersonaIdRendered()}
			</Grid>
		</Card>
	);
}

export default SelectedPersonaCard;
