import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import s from './OrderDetails.module.css';
import done from '../../images/done.svg';

function OrderDetails() {
	const orderNumber = useSelector((state) => state.burgerOrderInfo.orderList);

	return (
		<>
			<p className={cn(s.glow, 'text text_type_digits-large mt-30 mb-8')}>
				{orderNumber?.order.number}
			</p>
			<p className='text text_type_main-default'>идентификатор заказа</p>
			<img
				src={done}
				alt='Заказ принят'
				className={cn(s.image, 'mt-15 mb-15')}
			/>
			<p className='text text_type_main-default mb-2'>
				Ваш заказ начали готовить
			</p>
			<p className={cn(s.inactive, 'text text_type_main-default mb-30')}>
				Дождитесь готовности на орбитальной станции
			</p>
		</>
	);
}

export default OrderDetails;
