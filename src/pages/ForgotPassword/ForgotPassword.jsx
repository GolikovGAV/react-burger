import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import {
	Button,
	EmailInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordEmail } from '../../services/selectors/UserSlice';

function ForgotPassword() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [value, setValue] = useState({
		email: ''
	});

	const onSubmit = (value) => {
		dispatch(resetPasswordEmail(value));
		navigate('/reset-password');
	};

	return (
		<section className={s.page}>
			<p className='text text_type_main-medium'>Восстановление пароля</p>
			<EmailInput
				onChange={(e) => setValue({ ...value, email: e.target.value })}
				value={value.email}
				name={'email'}
				extraClass='mt-6'
				placeholder='Укажите e-mail'
			/>
			<Button
				htmlType='button'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
				onClick={() => {
					onSubmit(value);
				}}
			>
				Восстановить
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

export default ForgotPassword;
