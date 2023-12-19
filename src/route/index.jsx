import LoginPage from '../page/LoginPage';
import NotFoundPage from '../page/NotFoundPage';
import ClientProductPage from '../page/ClientProductPage';
import IndividualProductPage from '../page/IndividualProductPage';
import ProtectedRoute from './ProtectedRoute';
import SharedLoginPage from '../page/SharedLoginPage';
import ProductMetricPage from '../page/ProductMetricPage';
import SharedProductPage from '../page/SharedProductPage';

const routes = [
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/sharedProduct',
		element: <SharedProductPage />,
	},
	{
		path: '/client/:clientId',
		element: <ProtectedRoute />,
		children: [
			{
				path: '',
				element: <ClientProductPage />,
				children: [
					{
						path: 'product/:productId',
						element: <IndividualProductPage />,
						children: [
							{
								path: 'metrics',
								element: <ProductMetricPage />,
							},
						],
					},
				],
			},
		],
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
];
export default routes;
