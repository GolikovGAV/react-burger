import { useParams } from 'react-router-dom';
import cn from 'classnames';

import s from './OrderInfo.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCustomSelector } from '../../utils/hooks';
import { orderDate } from '../../utils/date';
import { getTotalSumOfOrder, ingredientsIcons } from '../../utils/utils';

const OrderInfo = () => {
	const { id } = useParams();

	const ingredients = useCustomSelector((state) => state.burgerIngredient.data);

	const orders = useCustomSelector(
		(state) => state.rootReducer.feedPage.data?.orders
	);

	const order = orders?.find((order) => order._id === id);

	const orderIngredients = order?.ingredients.map((id) => {
		return ingredients.find((item) => item._id === id);
	});

	return (
		<section className={s.section}>
			<p className='text text_type_digits-default mt-10'>#{order?.number}</p>
			<p className={cn(s.name, 'text text_type_main-medium mt-10')}>
				{order?.name}
			</p>
			<p className={cn(s.status, 'text text_type_main-default mt-3')}>
				{order?.status === 'done' ? 'Готов' : 'Готовится'}
			</p>
			<p className='text text_type_main-medium mt-10'>Состав</p>
			<ul className={cn(s.list, 'custom-scroll')}>
				{typeof order !== 'undefined' &&
					ingredientsIcons(ingredients, order).map((item) => (
						<li className={s.item} key={item._id}>
							<div className={s.container}>
								<img
									className={cn(s.image, 'mr-5')}
									src={item.image_mobile}
									alt={item.name}
								/>
								<p className='text_type_main-default'>{item.name}</p>
							</div>
							<p className={cn(s.price, 'text text_type_digits-default')}>
								{
									orderIngredients?.filter(
										(ingredient) => ingredient?._id === item._id
									).length
								}
								{} x {item.price}
								<CurrencyIcon type='primary' />
							</p>
						</li>
					))}
			</ul>
			<div className={cn(s.total, 'mt-10 mb-10')}>
				<p className='text text_type_main-default text_color_inactive'>
					{typeof order !== 'undefined' &&
						orderDate(new Date(order?.createdAt))}
				</p>
				<div className={s.price}>
					<p className='text text_type_digits-default '>
						{getTotalSumOfOrder(orderIngredients)}
					</p>
					<CurrencyIcon type='primary' />
				</div>
			</div>
		</section>
	);
};

export default OrderInfo;
