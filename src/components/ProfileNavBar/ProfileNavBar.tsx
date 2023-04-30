import cn from 'classnames';
import { Link, useMatch } from 'react-router-dom';

import s from './ProfileNavBar.module.css';
import { useCustomDispatch } from '../../utils/hooks';
import { logoutUser } from '../../services/selectors/userSlice';
import { getCookie } from '../../Api/cookies';
import { TUserInfo } from '../../utils/types';

export const ProfileNavBar = () => {
	const isProfile = useMatch('/profile');
	const isProfileOrders = useMatch('/profile/orders');

	const dispatch = useCustomDispatch();

	const token = getCookie('refreshToken');

	const RequestBody = {
		token: token
	};

	const logOut = (RequestBody: {
		token?: string | undefined;
		user?: TUserInfo | undefined;
		success?: boolean | undefined;
		accessToken?: string | undefined;
		refreshToken?: string | undefined;
	}) => {
		dispatch(logoutUser(RequestBody));
	};

	return (
		<nav className={s.nav}>
			<Link
				to='/profile'
				className={cn(
					s.link,
					`text text_type_main-medium ${
						isProfile ? `${s.link_color_active}` : 'text_color_inactive'
					}`
				)}
			>
				Профиль
			</Link>
			<Link
				to='/profile/orders'
				className={cn(
					s.link,
					`text text_type_main-medium ${
						isProfileOrders ? `${s.link_color_active}` : 'text_color_inactive'
					}`
				)}
			>
				История заказов
			</Link>
			<p
				onClick={() => {
					logOut(RequestBody);
				}}
				className={cn(s.link, 'text text_type_main-medium text_color_inactive')}
			>
				Выход
			</p>
			<p className='text text_type_main-default text_color_inactive mt-20'>
				В этом разделе вы можете изменить свои персональные данные
			</p>
		</nav>
	);
};

export default ProfileNavBar;
