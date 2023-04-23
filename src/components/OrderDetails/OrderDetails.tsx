import cn from 'classnames';

import s from './OrderDetails.module.css';
import done from '../../images/done.svg';
import { useCustomSelector } from '../../utils/hooks';

function OrderDetails() {
	const orderNumber = useCustomSelector(
		(state) => state.burgerOrderInfo.serverResponse?.order?.number
	);

	return (
		<>
			<p className={cn(s.glow, 'text text_type_digits-large mt-30 mb-8')}>
				{orderNumber}
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
