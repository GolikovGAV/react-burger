import React, { useState } from 'react';
import s from './Profile.module.css';
import {
	Input,
	Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../Api/cookies';
import { logoutUser, updateInfoUser } from '../../services/selectors/UserSlice';
import cn from 'classnames';

const Profile = () => {
	const dispatch = useDispatch();

	const storeEmail = useSelector((state) => state.rootReducer?.user.data.email);
	const storeName = useSelector((state) => state.rootReducer?.user.data.name);

	const [value, setValue] = useState({
		name: storeName,
		email: storeEmail,
		password: ''
	});

	const token = getCookie('refreshToken');
	const RequestBody = {
		token: token
	};

	const logOut = (RequestBody) => {
		dispatch(logoutUser(RequestBody));
	};

	const updateUserInfoRequest = (value) => {
		dispatch(updateInfoUser(value));
	};

	return (
		<section className={s.page}>
			<nav className={s.nav}>
				<p className={cn(s.link, 'text text_type_main-medium')}>Профиль</p>
				<p
					className={cn(
						s.link,
						'text text_type_main-medium text_color_inactive'
					)}
				>
					История заказов
				</p>
				<p
					onClick={() => {
						logOut(RequestBody);
					}}
					className={cn(
						s.link,
						'text text_type_main-medium text_color_inactive'
					)}
				>
					Выход
				</p>
				<p className='text text_type_main-default text_color_inactive mt-20'>
					В этом разделе вы можете изменить свои персональные данные
				</p>
			</nav>
			<form className={s.container}>
				<Input
					type={'text'}
					value={value.name}
					onChange={(e) => setValue({ ...value, name: e.target.value })}
					placeholder={'Имя'}
					name={'name'}
					error={false}
					errorText={'Ошибка'}
					size={'default'}
					icon='EditIcon'
				/>
				<Input
					type={'email'}
					onChange={(e) => setValue({ ...value, email: e.target.value })}
					value={value.email}
					placeholder={'Логин'}
					name={'email'}
					icon='EditIcon'
					extraClass='mt-6'
				/>
				<Input
					type={'password'}
					onChange={(e) => setValue({ ...value, password: e.target.value })}
					value={value.password}
					placeholder={'Пароль'}
					name={'password'}
					icon='EditIcon'
					extraClass='mt-6'
				/>
				<div className={`${s.choice} mt-6`}>
					<Button
						type='secondary'
						size='medium'
						htmlType='reset'
						extraClass={cn('mr-6 text_color_inactive')}
					>
						Отмена
					</Button>

					<Button
						type='primary'
						size='medium'
						htmlType='button'
						onClick={() => {
							updateUserInfoRequest(value);
						}}
					>
						Сохранить
					</Button>
				</div>
			</form>
		</section>
	);
};

export default Profile;
