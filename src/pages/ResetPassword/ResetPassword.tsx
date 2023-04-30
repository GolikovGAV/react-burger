import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import {
	Button,
	Input,
	PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPasswordNew } from '../../services/selectors/userSlice';
import { useCustomDispatch } from '../../utils/hooks';
import { TUserInfo } from '../../utils/types';

function ResetPassword() {
	const dispatch = useCustomDispatch();

	const [value, setValue] = useState({
		password: '',
		token: ''
	});

	const navigate = useNavigate();

	const changePass = (value: TUserInfo) => {
		dispatch(resetPasswordNew(value));
		setValue({ password: '', token: '' });
		navigate('/login');
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				changePass(value);
			}}
			className={s.page}
		>
			<p className='text text_type_main-medium mt-30'>Восстановление пароля</p>
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
				htmlType='submit'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
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
		</form>
	);
}

export default ResetPassword;
