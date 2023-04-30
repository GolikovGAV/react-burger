import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import s from './FeedElement.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCustomSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types';
import { orderDate } from '../../utils/date';
import {
	findIngredientByID,
	getTotalSumOfOrder,
	ingredientsIcons
} from '../../utils/utils';

const FeedElement = ({ order }: { order: TOrder }) => {
	const location = useLocation();

	const ingredients = useCustomSelector((state) => state.burgerIngredient.data);

	return (
		<Link
			to={{
				pathname:
					location.pathname === '/feed'
						? `/feed/${order._id}`
						: `/profile/orders/${order._id}`
			}}
			state={{ background: location }}
			className={s.link}
		>
			{order && (
				<li className={cn(s.order, 'mr-2 p-6')}>
					<div className={cn(s.order__number, 'mb-6')}>
						<p className='text text_type_digits-default'>#{order?.number}</p>
						<p className={cn(s.date, 'text text_type_main-default')}>
							{orderDate(new Date(order?.createdAt))}
						</p>
					</div>
					<p className='text text_type_main-medium mb-6'>{order.name}</p>
					<div className={s.row}>
						<ul className={s.row__images}>
							{ingredientsIcons(ingredients, order).map((image) => {
								return (
									<li className={s.row__images__container} key={image._id}>
										<img
											src={image.image_mobile}
											className={s.row__images__image}
											alt={image.name}
										/>
									</li>
								);
							})}
						</ul>
						<div className={s.total}>
							<p className='text text_type_digits-default mr-2'>
								{getTotalSumOfOrder(
									findIngredientByID(order.ingredients, ingredients)
								)}
							</p>
							<CurrencyIcon type='primary' />
						</div>
					</div>
				</li>
			)}
		</Link>
	);
};

export default FeedElement;
