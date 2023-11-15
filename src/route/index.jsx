import LoginPage from '../page/LoginPage';
import NotFoundPage from '../page/NotFoundPage';
import ClientProductPage from '../page/ClientProductPage';
import IndividualProductPage from '../page/IndividualProductPage';
import ProtectedRoute from './ProtectedRoute';
import SharedLoginPage from '../page/SharedLoginPage';

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
		path: '/shareProduct/:id',
		element: <SharedLoginPage />,
	},
	{
		path: '/client/:id',
		element: <ProtectedRoute />,
		children: [
			{
				path: '',
				element: <ClientProductPage />,
			},
			{
				path: 'product/:id',
				element: <IndividualProductPage />,
			},
		],
	},
	{
		path: '/*',
		element: <NotFoundPage />,
	},
];
export default routes;
