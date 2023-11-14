/* eslint-disable react/react-in-jsx-scope */

import { useRoutes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import routes from './route';
import store from './store';
import theme from './theme';

function App() {
	const routing = useRoutes(routes);

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{routing}
			</ThemeProvider>
		</Provider>
	);
}

export default App;
