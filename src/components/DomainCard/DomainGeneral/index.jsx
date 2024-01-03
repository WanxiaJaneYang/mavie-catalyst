import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DomainGeneralSkeleton from './DomainGeneralSkeleton';
import DomainGeneralContent from './DomainGeneralContent';

function DomainGeneral({
	domainId, importanceRatingOn,
}) {
	const { loading, error } = useSelector((state) => state.product.productData.domain);

	if (loading) {
		return <DomainGeneralSkeleton />;
	}
	if (error) {
		return null;
	}
	return (
		<DomainGeneralContent domainId={domainId} importanceRatingOn={importanceRatingOn} />
	);
}

DomainGeneral.propTypes = {
	domainId: propTypes.string.isRequired,
	importanceRatingOn: propTypes.bool.isRequired,

};

export default DomainGeneral;
