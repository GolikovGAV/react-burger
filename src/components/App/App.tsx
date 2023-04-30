import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../../pages/MainPage/MainPage';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import IngredientInfo from '../../pages/IngredientInfo/IngredientInfo';
import { fetchIngredients } from '../../services/selectors/burgerIngredientSlice';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { checkUserAuth } from '../../services/selectors/userSlice';
import { useCustomDispatch } from '../../utils/hooks';
import FeedPage from '../../pages/FeedPage/FeedPage';
import OrderInfo from '../OrderInfo/OrderInfo';
import { WS_URL_FEED, WS_URL_ORDERS } from '../../Api/Api';
import {
	wsConnectFeed,
	wsDisconnectFeed
} from '../../services/actions/feedPage';
import {
	wsConnectOrder,
	wsDisconnectOrder
} from '../../services/actions/orderPage';
import PreviousOrders from '../../pages/PreviousOrders/PreviousOrders';

function App() {
	const dispatch = useCustomDispatch();

	useEffect(() => {
		dispatch(fetchIngredients());
		dispatch(checkUserAuth(''));
	}, []);

	const navigate = useNavigate();
	const location = useLocation();
	const background = location.state?.background;

	function handleCloseModal() {
		navigate(background.pathname || '/', { replace: true });
	}

	useEffect(() => {
		dispatch(wsConnectOrder({ wsUrl: WS_URL_ORDERS, withTokenRefresh: true }));
		dispatch(wsConnectFeed({ wsUrl: WS_URL_FEED, withTokenRefresh: false }));
		return () => {
			dispatch(wsDisconnectOrder());
			dispatch(wsDisconnectFeed());
		};
	}, []);

	const isFromForgotPassword = location.state?.fromForgotPassword;

	console.log('loca', location);

	return (
		<>
			<AppHeader />
			<Routes location={background || location}>
				<Route path='/' element={<MainPage />} />
				<Route
					path='/login'
					element={
						<ProtectedRoute onlyUnAuth>
							<Login />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<ProtectedRoute onlyUnAuth>
							<Registration />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/forgot-password'
					element={
						<ProtectedRoute onlyUnAuth>
							<ForgotPassword />
						</ProtectedRoute>
					}
				/>
				{isFromForgotPassword && (
					<Route
						path='/reset-password'
						element={
							<ProtectedRoute onlyUnAuth>
								<ResetPassword />
							</ProtectedRoute>
						}
					/>
				)}
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path='/feed' element={<FeedPage />} />
				<Route path='/ingredients/:id' element={<IngredientInfo />} />
				<Route path='feed/:id' element={<OrderInfo />} />
				<Route
					path='/profile/orders'
					element={
						<ProtectedRoute>
							<PreviousOrders />
						</ProtectedRoute>
					}
				/>
				<Route path='/profile/orders/:id' element={<OrderInfo />} />
			</Routes>
			{background && (
				<Routes>
					<Route
						path='ingredients/:id'
						element={
							<Modal onClick={handleCloseModal}>
								<IngredientDetails />
							</Modal>
						}
					/>
					<Route
						path='feed/:id'
						element={
							<Modal onClick={handleCloseModal}>
								<OrderInfo />
							</Modal>
						}
					/>
					<Route
						path='profile/orders/:id'
						element={
							<Modal onClick={handleCloseModal}>
								<OrderInfo />
							</Modal>
						}
					/>
				</Routes>
			)}
		</>
	);
}

export default App;
