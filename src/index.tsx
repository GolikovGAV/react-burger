import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/AppHeader/AppHeader';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './components/services/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppHeader />
			<App />
		</Provider>
	</React.StrictMode>
);
