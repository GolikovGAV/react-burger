import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/App/App';
import { store } from './services/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLDivElement
);

root.render(
	<HashRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</HashRouter>
);
