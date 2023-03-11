import React from 'react';
import s from './AppHeader.module.css';
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

function AppHeader(props) {
	return (
		<header className={s.AppHeader}>
			<div
				className={cn(s.AppHeader__container, s.AppHeader__container_side_left)}
			>
				<nav className='mt-4 mb-4'>
					<a href='#' className={cn(s.link, 'ml-5 mr-5')}>
						<BurgerIcon type='primary' />
						<p className={cn('text text_type_main-default pt-4 pb-4')}>
							Конструктор
						</p>
					</a>
				</nav>

				<nav className='mt-4 mb-4'>
					<a href='#' className={cn(s.link, 'ml-5 mr-5')}>
						<ListIcon type='secondary' />

						<p
							className={cn(
								s.inactive,
								'text text_type_main-default pt-4 pb-4'
							)}
						>
							Лента заказов
						</p>
					</a>
				</nav>
			</div>

			<div className={s.logo}>
				<Logo />
			</div>

			<div
				className={cn(
					s.AppHeader__container_side_right,
					s.AppHeader__container
				)}
			>
				<nav className='mt-4 mb-4'>
					<a href='#' className={cn(s.link, 'ml-5 mr-5')}>
						<ProfileIcon type='secondary' />

						<p
							className={cn(
								s.inactive,
								'text text_type_main-default pt-4 pb-4'
							)}
						>
							Личный кабинет
						</p>
					</a>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
