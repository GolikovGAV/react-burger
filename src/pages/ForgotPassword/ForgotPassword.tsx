import React, { useState } from 'react';
import s from '../commonStyles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import {
	Button,
	EmailInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPasswordEmail } from '../../services/selectors/userSlice';
import { useCustomDispatch, useCustomSelector } from '../../utils/hooks';

function ForgotPassword() {
	const dispatch = useCustomDispatch();
	const navigate = useNavigate();

	const [value, setValue] = useState({
		email: ''
	});

	const isRequestSuccess = useCustomSelector(
		(state) => state?.rootReducer?.user?.resetPasswordEmailError
	);

	const onSubmit = (data: object) => {
		dispatch(resetPasswordEmail(data));

		if (!isRequestSuccess) {
			navigate('/reset-password', { state: { fromForgotPassword: true } });
		}
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(value);
			}}
			className={s.page}
		>
			<p className='text text_type_main-medium mt-30'>Восстановление пароля</p>
			<EmailInput
				onChange={(e) => setValue({ ...value, email: e.target.value })}
				value={value.email}
				name={'email'}
				extraClass='mt-6'
				placeholder='Укажите e-mail'
			/>
			<Button
				htmlType='submit'
				type='primary'
				size='medium'
				extraClass='mt-6 mb-20'
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
		</form>
	);
}

export default ForgotPassword;
