import { useLocation, useNavigate, useParams } from 'react-router-dom';
import cookie from 'react-cookies';
import { useEffect } from 'react';

const useQuery = () => new URLSearchParams(useLocation().search);

function SharedProductPage() {
	const { productId } = useParams();
	const navigate = useNavigate();
	const query = useQuery();
	const id = query.get('id');
	const name = query.get('name');

	const productList = [
		{
			id,
			name,
		},
	];

	cookie.save('isLoggedIn', true, { path: '/' });
	cookie.save('user_id', '0', { path: '/' });
	cookie.save('productList', productList, { path: '/' });

	useEffect(
		() => {
			if (id && name) {
				console.log('id and name present');
				console.log('navigating to client product page');
				navigate(`/client/0/product/${id}/metrics`);
			}
		},
		[id, name],
	);
	return null;
}

export default SharedProductPage;
