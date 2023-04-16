import { useState } from 'react';
import cn from 'classnames';

import s from './TotalCost.module.css';
import {
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import { CustomUseSelector } from '../../utils/hooks';

function TotalCost({
	total,
	sendRequest
}: {
	total: number;
	sendRequest: Function;
}) {
	const [state, setState] = useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	const isThereABun = CustomUseSelector((state) => state.burgerConstructor.bun);

	return (
		<div className={cn(s.price, 'mt-10 mr-4')}>
			{!isThereABun ? (
				<Button
					disabled
					htmlType='button'
					type='primary'
					size='large'
					extraClass='ml-10'
					onClick={() => {
						openModal();
						sendRequest();
					}}
				>
					Оформить заказ
				</Button>
			) : (
				<Button
					htmlType='button'
					type='primary'
					size='large'
					extraClass='ml-10'
					onClick={() => {
						openModal();
						sendRequest();
					}}
				>
					Оформить заказ
				</Button>
			)}
			{state === true && (
				<Modal onClick={openModal}>
					<OrderDetails />
				</Modal>
			)}
			<CurrencyIcon type='primary' />
			<p className='text text_type_digits-medium mr-2'>{total}</p>
		</div>
	);
}

export default TotalCost;
