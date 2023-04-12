import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './TotalCost.module.css';
import {
	Button,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';

function TotalCost({ total, sendRequest }) {
	const [state, setState] = React.useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	return (
		<div className={cn(s.price, 'mt-10 mr-4')}>
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

TotalCost.propTypes = {
	total: PropTypes.number.isRequired,
	sendRequest: PropTypes.func.isRequired
};

export default TotalCost;
