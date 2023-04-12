import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import cn from 'classnames';
import {
	Button,
	EmailInput,
	PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../services/selectors/UserSlice';

function Login() {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [value, setValue] = useState({
		email: '',
		password: ''
	});

	const isLoginned = useSelector((state) => state?.rootReducer?.user?.data);

	const onClickLogin = (data) => {
		dispatch(loginUser(data));

		if (isLoginned) {
			navigate('/profile');
		}

		setValue({
			email: '',
			password: ''
		});
	};

	return (
		<section className={s.page}>
			<p className='text text_type_main-medium'>Вход</p>
			<EmailInput
				onChange={(e) => setValue({ ...value, email: e.target.value })}
				value={value.email}
				name={'email'}
				extraClass='mt-6'
				placeholder='E-mail'
			/>
			<PasswordInput
				onChange={(e) => setValue({ ...value, password: e.target.value })}
				value={value.password}
				name={'password'}
				extraClass='mt-6'
				placeholder='Пароль'
			/>
			<Button
				onClick={() => onClickLogin(value)}
				htmlType='button'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
			>
				Войти
			</Button>
			<div className={cn(s.container)}>
				<p className='text text_type_main-default text_color_inactive'>
					Вы — новый пользователь?
				</p>
				<Link
					to='/register'
					className={cn(s.link, 'text text_type_main-default')}
				>
					Зарегистрироваться
				</Link>
			</div>
			<div className={cn(s.container, 'mt-4')}>
				<p className='text text_type_main-default text_color_inactive'>
					Забыли пароль?
				</p>
				<Link
					to='/forgot-password'
					className={cn(s.link, 'text text_type_main-default')}
				>
					Восстановить пароль
				</Link>
			</div>
		</section>
	);
}

export default Login;
