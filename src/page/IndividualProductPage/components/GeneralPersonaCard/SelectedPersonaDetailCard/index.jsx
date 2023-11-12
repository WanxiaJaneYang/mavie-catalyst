import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { IconButton } from '@mui/material';
import SelectedPersonaToggle from '../../../../../components/SelectedPersonaToggle';
import colors from '../../../../../theme/colors';
import { setShowDetail } from '../../../../../features/product/generalProduct';
import CloseIcon from '../../../../../components/icons/CloseIcon';

function SelectedPersonaDetailCard() {
	const personaIds = useSelector((state) => state.persona.ids);

	const dispatch = useDispatch();

	const showDetails = useSelector((state) => state.product.productInfo.showDetail);
	const personaInfo = useSelector((state) => state.persona.entities);

	const getPersonaIcons = () => (
		personaIds.map((personaId) => (
			<Box
				key={`${personaId}-box`}
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'start',
					padding: '8px',
					width: ['90%', '40%', '30%'],

				}}
			>
				<SelectedPersonaToggle
					personaId={personaId}
					key={`${personaId}-selected`}
					sx={{
						fontSize: ['48px', '52px', '56px', '60px'],
					}}
				/>
				<Box
					key={`${personaId}-label-box`}
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Typography
						key={`${personaId}-label`}
						sx={{
							color: colors.white,
							fontFamily: 'Inter, sans-serif',
							fontWeight: 600,
							fontSize: '18px',
							textAlign: 'left',
						}}
					>
						{personaInfo[personaId].name}
					</Typography>
					<Typography
						key={`${personaId}-description`}
						sx={{
							fontFamily: 'Inter, sans-serif',
							fontWeight: 400,
							fontSize: '14px',
							textAlign: 'left',
						}}
					>
						{personaInfo[personaId].description}
					</Typography>
				</Box>
			</Box>

		))
	);

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: colors.purple6,
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
					All Personas Selected
				</Typography>
				<IconButton
					onClick={() => dispatch(setShowDetail(!showDetails))}
				>
					<CloseIcon
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
					flexDirection: ['column', 'row', 'row'],
					flexWrap: 'wrap',
					gap: ['8px', '16px', '16px'],
					alignItems: 'center',
					justifyContent: 'start',
					paddingBottom: '8px',
					paddingLeft: '8px',
					width: '100%',
				}}
			>
				{getPersonaIcons()}
			</Box>
		</Card>
	);
}

export default SelectedPersonaDetailCard;
