import React from 'react';
import s from './AppHeader.module.css';
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

function AppHeader() {
	return (
		<header className={s.AppHeader}>
			<nav className='mt-4 mb-4 mr-2 ml-5 mr-5'>
				<a href='#' className={cn(s.link)}>
					<BurgerIcon type='primary' />
					<p className={cn('text text_type_main-default pt-4 pb-4')}>
						Конструктор
					</p>
				</a>
			</nav>

			<nav className={cn(s.left, 'mt-4 mb-4 ml-5')}>
				<a href='#' className={cn(s.link)}>
					<ListIcon type='secondary' />

					<p
						className={cn(s.inactive, 'text text_type_main-default pt-4 pb-4')}
					>
						Лента заказов
					</p>
				</a>
			</nav>
			<Logo />

			<nav className={cn(s.right, 'mt-4 mb-4')}>
				<a href='#' className={cn(s.link, 'ml-5 mr-5')}>
					<ProfileIcon type='secondary' />

					<p
						className={cn(s.inactive, 'text text_type_main-default pt-4 pb-4')}
					>
						Личный кабинет
					</p>
				</a>
			</nav>
		</header>
	);
}

export default AppHeader;
