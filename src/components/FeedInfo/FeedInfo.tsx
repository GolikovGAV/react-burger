import React from 'react';
import cn from 'classnames';

import s from './FeedInfo.module.css';
import { useCustomSelector } from '../../utils/hooks';

const FeedInfo = () => {
	const allOrders = useCustomSelector(
		(state) => state.rootReducer.feedPage.data
	);

	const doneOrders = allOrders?.orders
		.filter((order) => order.status === 'done')
		.slice(0, 5);

	const pendingOrders = allOrders?.orders
		.filter((order) => order.status === 'pending')
		.slice(0, 5);

	return (
		<section className={cn(s.container, 'mt-15')}>
			<div className={s.columns}>
				<div className={s.orders}>
					<p className='text text_type_main-medium mb-6'>Готовы:</p>
					<ul className={s.orders__list}>
						{doneOrders?.map((order) => {
							return (
								<li
									className={cn(
										s.orders__done,
										'text text_type_digits-default '
									)}
									key={order.number}
								>
									{order.number}
								</li>
							);
						})}
					</ul>
				</div>
				<div className={s.orders}>
					<p className='text text_type_main-medium mb-6'>В работе:</p>
					<ul className={s.orders__list}>
						{pendingOrders?.map((order) => {
							return (
								<li
									className='text text_type_digits-default'
									key={order.number}
								>
									{order.number}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className={s.date_ready_list}>
				<p className='text text_type_main-medium mt-15'>
					Выполнено за все время:
				</p>
				<p className={cn(s.glow, 'text text_type_digits-large')}>
					{allOrders?.total}
				</p>
			</div>
			<div className={s.date_ready_list}>
				<p className='text text_type_main-medium mt-15'>
					Выполнено за сегодня:
				</p>
				<p className={cn(s.glow, 'text text_type_digits-large')}>
					{allOrders?.totalToday}
				</p>
			</div>
		</section>
	);
};

export default FeedInfo;
