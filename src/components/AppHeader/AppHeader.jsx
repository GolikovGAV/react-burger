import React from 'react';
import s from './AppHeader.module.css';
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';
import { Link, useMatch } from 'react-router-dom';

function AppHeader() {
	const isConstrucor = useMatch('/');
	const isProfile = useMatch('/profile');
	const isOrderFeed = useMatch('/???????');

	return (
		<header className={s.AppHeader}>
			<nav className='mt-4 mb-4 mr-2 ml-5 mr-5'>
				<Link to='/' className={cn(s.link)}>
					<BurgerIcon type={isConstrucor ? 'primary' : 'secondary'} />
					<p
						className={cn(
							`text text_type_main-default ${
								isConstrucor ? '' : 'text_color_inactive'
							} pt-4 pb-4`
						)}
					>
						Конструктор
					</p>
				</Link>
			</nav>

			<nav className={cn(s.left, 'mt-4 mb-4 ml-5')}>
				<Link className={cn(s.link)}>
					<ListIcon type={isOrderFeed ? 'primary' : 'secondary'} />

					<p
						className={cn(
							`text text_type_main-default ${
								isOrderFeed ? '' : 'text_color_inactive'
							} pt-4 pb-4`
						)}
					>
						Лента заказов
					</p>
				</Link>
			</nav>
			<Link to='/'>
				<Logo />
			</Link>
			<nav className={cn(s.right, 'mt-4 mb-4')}>
				<Link to='/profile' className={cn(s.link, 'ml-5 mr-5')}>
					<ProfileIcon type={isProfile ? 'primary' : 'secondary'} />

					<p
						className={cn(
							`text text_type_main-default ${
								isProfile ? '' : 'text_color_inactive'
							} pt-4 pb-4`
						)}
					>
						Личный кабинет
					</p>
				</Link>
			</nav>
		</header>
	);
}

export default AppHeader;
