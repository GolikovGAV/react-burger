import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCustomSelector } from '../../utils/hooks';

export type TProtectedRoute = {
	onlyUnAuth?: any;
	children: ReactElement;
};

export const ProtectedRoute: FC<TProtectedRoute> = ({
	onlyUnAuth,
	children
}) => {
	const location = useLocation();
	const user = useCustomSelector((state) => state.rootReducer?.user.data);

	if (onlyUnAuth && user) {
		const { from } = location.state || { from: { pathname: '/' } };
		const { background } = location.state?.from?.state || {
			background: null
		};
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
