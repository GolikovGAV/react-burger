import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/AppHeader/AppHeader';
import App from './components/App/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppHeader />
		<App />
	</React.StrictMode>
);
