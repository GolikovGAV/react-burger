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
import { checkUserAuth } from '../../services/selectors/UserSlice';
import { CustomUseDispatch } from '../../utils/hooks';

function App() {
	const dispatch = CustomUseDispatch();

	useEffect(() => {
		dispatch(fetchIngredients());
		dispatch(checkUserAuth());
	}, []);

	const navigate = useNavigate();
	const location = useLocation();
	const background = location.state?.background;

	function handleCloseModal() {
		navigate(background.pathname || '/', { replace: true });
	}

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
				<Route
					path='/reset-password'
					element={
						<ProtectedRoute onlyUnAuth>
							<ResetPassword />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path='/ingredients/:id' element={<IngredientInfo />} />
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
				</Routes>
			)}
		</>
	);
}

export default App;
