import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ onlyUnAuth, children }) => {
	const location = useLocation();
	const user = useSelector((state) => state.rootReducer?.user.data);

	if (onlyUnAuth && user) {
		const { from } = location.state || { from: { pathname: '/' } };
		const { background } = location.state?.from?.state || { background: null };
		return <Navigate replace to={from} state={{ background }} />;
	}

	if (!onlyUnAuth && !user) {
		return (
			<Navigate
				replace
				to={{ pathname: '/login' }}
				state={{ from: location }}
			/>
		);
	}

	return children;
};
