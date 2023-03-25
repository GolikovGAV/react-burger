import s from './BurgerIngredient.module.css';
import React, { useState } from 'react';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import cn from 'classnames';

import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addConstructorElement } from '../services/selectors/burgerConstructorSlice';
import uuid4 from 'uuid4';

function BurgerIngredient(ingredient) {
	// const [count, setCount] = useState(0);

	const [state, setState] = useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	const dispatch = useDispatch();

	const id = uuid4();

	return (
		<>
			{state === true && (
				<Modal onClick={openModal}>
					<IngredientDetails data={ingredient} onClick={openModal} />
				</Modal>
			)}
			<div
				className={cn(s.ingredient, 'ml-4')}
				onClick={(e) => {
					openModal();
					dispatch(addConstructorElement(ingredient));
				}}
				key={id}
				id={id}
				draggable
			>
				<img
					draggable='false'
					className={s.ingredient__image}
					src={ingredient.image}
					alt={ingredient.name}
				/>
				<div className={cn(s.ingredient__price, 'mt-1 mb-1')}>
					<p className='text text_type_digits-default '>{ingredient.price}</p>
					<CurrencyIcon type='primary' />
				</div>
				<p className='text text_type_main-default'>{ingredient.name}</p>
			</div>
		</>
	);
}

export default BurgerIngredient;
