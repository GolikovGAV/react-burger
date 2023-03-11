import React from 'react';
import s from './OrderDetails.module.css';
import cn from 'classnames';
import done from '../../images/done.svg';
import close from '../../images/close.svg';

function OrderDetails({ onClick }) {
	return (
		<>
			<p className={cn(s.glow, 'text text_type_digits-large mt-30 mb-8')}>
				034536
			</p>
			<p className='text text_type_main-default'>идентификатор заказа </p>
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
			<button className={cn(s.close, 'mt-15 mr-10')} onClick={onClick}>
				<img src={close} alt='Закрыть' />
			</button>
		</>
	);
}

export default OrderDetails;
