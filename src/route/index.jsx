import LoginPage from '../page/LoginPage';
import NotFoundPage from '../page/NotFoundPage';
import ClientProductPage from '../page/ClientProductPage';
import IndividualProductPage from '../page/IndividualProductPage';

const routes = [
	{
		path: '/*',
		element: <NotFoundPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/client/:id',
		element: <ClientProductPage />,
		children: [
			{
				path: 'product/:id',
				element: <IndividualProductPage />,
			},
		],
	},
];
export default routes;
