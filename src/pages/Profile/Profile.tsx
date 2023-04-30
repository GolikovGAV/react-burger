import { useState } from 'react';
import cn from 'classnames';

import s from './Profile.module.css';
import {
	Input,
	Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import { updateInfoUser } from '../../services/selectors/userSlice';
import { useCustomDispatch, useCustomSelector } from '../../utils/hooks';
import { TUserInfo } from '../../utils/types';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';

const Profile = () => {
	const dispatch = useCustomDispatch();

	const storeEmail = useCustomSelector(
		(state) => state.rootReducer?.user.data?.email
	);
	const storeName = useCustomSelector(
		(state) => state.rootReducer?.user.data?.name
	);

	const [value, setValue] = useState({
		name: storeName,
		email: storeEmail,
		password: ''
	});

	const updateUserInfoRequest = (value: TUserInfo) => {
		dispatch(updateInfoUser(value));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				updateUserInfoRequest(value);
			}}
			className={s.page}
		>
			<ProfileNavBar />
			<section className={s.container}>
				<Input
					type={'text'}
					value={`${value.name}`}
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
					value={`${value.email}`}
					placeholder={'Логин'}
					name={'email'}
					icon='EditIcon'
					extraClass='mt-6'
				/>
				<Input
					type={'password'}
					onChange={(e) => setValue({ ...value, password: e.target.value })}
					value={`${value.password}`}
					placeholder={'Пароль'}
					name={'password'}
					icon='EditIcon'
					extraClass='mt-6'
				/>
				<div className={cn(s.choice, 'mt-6')}>
					<Button
						type='secondary'
						size='medium'
						htmlType='reset'
						extraClass={cn('mr-6 text_color_inactive')}
					>
						Отмена
					</Button>

					<Button type='primary' size='medium' htmlType='submit'>
						Сохранить
					</Button>
				</div>
			</section>
		</form>
	);
};

export default Profile;
