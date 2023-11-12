import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { IconButton } from '@mui/material';
import SelectedPersonaToggle from '../../../../../components/SelectedPersonaToggle';
import colors from '../../../../../theme/colors';
import { setShowDetail } from '../../../../../features/product/generalProduct';
import InfoIcon from '../../../../../components/icons/InfoIcon';

function SelectedPersonaCard() {
	const personas = useSelector((state) => state.persona.ids);

	const dispatch = useDispatch();

	const showDetails = useSelector((state) => state.product.productInfo.showDetail);

	const getPersonaIcons = () => (
		personas.map((id) => (

			<SelectedPersonaToggle
				personaId={id}
				key={`${id}-selected`}
				sx={{
					fontSize: ['48px', '52px', '60px', '64px'],
				}}
			/>

		))
	);

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
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
					paddingBottom: '8px',
					paddingLeft: '8px',
					width: '100%',
					gap: ['8px', '16px', '16px'],
				}}
			>
				{getPersonaIcons()}
			</Box>
		</Card>
	);
}

export default SelectedPersonaCard;
