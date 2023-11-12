import { useSelector } from 'react-redux';
import SelectedPersonaCard from './SelectedPersonaCard';
import SelectedPersonaDetailCard from './SelectedPersonaDetailCard';

function GeneralPersonaCard() {
	const showDetails = useSelector((state) => state.product.productInfo.showDetail);

	return (
		showDetails ? <SelectedPersonaDetailCard /> : <SelectedPersonaCard />
	);
}

export default GeneralPersonaCard;
