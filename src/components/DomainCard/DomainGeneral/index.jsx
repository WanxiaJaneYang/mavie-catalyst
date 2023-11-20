import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DomainGeneralSkeleton from './DomainGeneralSkeleton';
import DomainGeneralContent from './DomainGeneralContent';
import ErrorMessage from '../../ErrorMessage';

function DomainGeneral({
	domainId, importanceRatingOn,
}) {
	const { loading, error } = useSelector((state) => state.product.productData.domain);
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

	if (loading) {
		return <DomainGeneralSkeleton />;
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
		<DomainGeneralContent domainId={domainId} importanceRatingOn={importanceRatingOn} />
	);
}

DomainGeneral.propTypes = {
	domainId: propTypes.number.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,

};

export default DomainGeneral;
