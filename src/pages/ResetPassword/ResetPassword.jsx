import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import {
	Button,
	Input,
	PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPasswordNew } from '../../services/selectors/UserSlice';

function ResetPassword() {
	const dispatch = useDispatch();

	const [value, setValue] = useState({
		password: '',
		token: ''
	});

	const navigate = useNavigate();

	const changePass = (value) => {
		dispatch(resetPasswordNew(value));
		setValue({ password: '', token: '' });
		navigate('/');
	};

	return (
		<section className={s.page}>
			<p className='text text_type_main-medium'>Восстановление пароля</p>
			<PasswordInput
				onChange={(e) => setValue({ ...value, password: e.target.value })}
				value={value.password}
				name={'password'}
				extraClass='mt-6'
				placeholder='Введите новый пароль'
			/>
			<Input
				onChange={(e) => setValue({ ...value, token: e.target.value })}
				value={value.token}
				type={'text'}
				placeholder={'Введите код из письма'}
				size={'default'}
				extraClass='mt-6'
			/>
			<Button
				htmlType='button'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
				onClick={() => {
					changePass(value);
				}}
			>
				Сохранить
			</Button>
			<div className={cn(s.container)}>
				<p className='text text_type_main-default text_color_inactive'>
					Вспомнили пароль?
				</p>
				<Link to='/login' className={cn(s.link, 'text text_type_main-default')}>
					Войти
				</Link>
			</div>
		</section>
	);
}

export default ResetPassword;
