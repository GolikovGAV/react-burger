import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import {
	Button,
	EmailInput,
	Input,
	PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { registerUser } from '../../services/selectors/UserSlice';
import { CustomUseDispatch } from '../../utils/hooks';
import { TUserInfo } from '../../utils/types';

function Registration() {
	const dispatch = CustomUseDispatch();

	const [value, setValue] = useState({
		email: '',
		password: '',
		name: ''
	});

	const cbRegistration = (value: TUserInfo) => {
		dispatch(registerUser(value));
		setValue({
			email: '',
			password: '',
			name: ''
		});
	};

	return (
		<section className={s.page}>
			<p className='text text_type_main-medium'>Регистрация</p>
			<Input
				type={'text'}
				onChange={(e) => {
					setValue({ ...value, name: e.target.value });
				}}
				value={value.name}
				placeholder={'Имя'}
				size={'default'}
				extraClass='mt-6'
			/>
			<EmailInput
				onChange={(e) => {
					setValue({ ...value, email: e.target.value });
				}}
				value={value.email}
				name={'email'}
				extraClass='mt-6'
				placeholder='E-mail'
			/>
			<PasswordInput
				onChange={(e) => {
					setValue({ ...value, password: e.target.value });
				}}
				value={value.password}
				name={'password'}
				extraClass='mt-6'
				placeholder='Пароль'
			/>
			<Button
				onClick={() => {
					cbRegistration(value);
				}}
				htmlType='submit'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
			>
				Зарегистрироваться
			</Button>
			<div className={cn(s.container)}>
				<p className='text text_type_main-default text_color_inactive'>
					Уже зарегистрированы?
				</p>
				<Link to='/login' className={cn(s.link, 'text text_type_main-default')}>
					Войти
				</Link>
			</div>
		</section>
	);
}

export default Registration;
