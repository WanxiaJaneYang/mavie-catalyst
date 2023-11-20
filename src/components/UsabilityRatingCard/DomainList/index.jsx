import { useEffect, useState } from 'react';
import {
	Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import DomainListRow from './DomainListRow';
import DomainListSkeleton from './DomainListSkeleton';
import ErrorMessage from '../../ErrorMessage';

function DomainList() {
	const domainIds = useSelector((state) => state.domain.ids);
	const { loading, error } = useSelector((state) => state.product.productData.domain);

	const getDomainScoreRows = () => domainIds.map((domainId) => (
		<DomainListRow domainId={domainId} key={domainId} />
	));

	const [errorMessageOpen, setErrorMessageOpen] = useState(false);

	const handleErrorMessageOpen = () => {
		setErrorMessageOpen(true);
	};

	const handleErrorMessageClose = () => {
		setErrorMessageOpen(false);
	};

	useEffect(
		() => {
			if (error) {
				handleErrorMessageOpen();
			}
		},
		[error],
	);

	const getDomainListRendered = () => {
		if (loading) {
			return (
				<DomainListSkeleton />
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
		if (domainIds) {
			return (
				<Box>
					{getDomainScoreRows()}
				</Box>
			);
		}
		return null;
	};

	return (
		<Box width="50%">
			<Typography
				sx={{
					color: '#000000',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					fontSize: '16px',
					textAlign: 'left',
					marginBottom: '10px',
				}}
			>
				Domains
			</Typography>
			<Box
				overflow="auto"
				sx={{
					height: '150px',
					width: '100%',
					paddingRight: '16px',
					paddingLeft: '16px',
				}}
			>
				{getDomainListRendered()}
			</Box>

		</Box>
	);
}

export default DomainList;
