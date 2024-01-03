import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { IconButton, Grid } from '@mui/material';
import SelectedPersonaToggle from '../../../../../components/SelectedPersonaToggle';
import colors from '../../../../../theme/colors';
import { setShowDetail } from '../../../../../features/product/generalProduct';
import InfoIcon from '../../../../../components/icons/InfoIcon';

function SelectedPersonaCard() {
	const { loading, error } = useSelector((state) => state.persona);
	const personas = useSelector((state) => state.persona.ids);

	const dispatch = useDispatch();

	const showDetails = useSelector((state) => state.product.productInfo.showDetail);

	const getPersonaIcons = () => {
		if (personas && personas.length > 0) {
			return (
				personas.map((id) => (
					<Grid
						item
						xs={2}
						sm={1}
						md={1.5}
						lg={1}
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
		}
		return null;
	};

	const getPersonaIdRendered = () => {
		if (error) {
			return null;
		}
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
				spacing={0.5}
				sx={{
					paddingBottom: '8px',
					paddingLeft: '16px',
					paddingRight: '16px',
					paddingTop: '8px',
					width: '100%',
				}}
			>
				{getPersonaIdRendered()}
			</Grid>
		</Card>
	);
}

export default SelectedPersonaCard;
