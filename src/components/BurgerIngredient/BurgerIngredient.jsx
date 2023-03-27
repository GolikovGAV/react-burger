import React, { useState } from 'react';
import cn from 'classnames';
import uuid4 from 'uuid4';
import { useDrag } from 'react-dnd/dist/hooks';
import { useSelector } from 'react-redux';

import s from './BurgerIngredient.module.css';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';

import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { selectCountState } from '../services/selectors/burgerConstructorSlice';
function BurgerIngredient(ingredient) {
	const [state, setState] = useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	const id = uuid4();

	const [_, dragRef] = useDrag({
		type: 'BurgerIngredient',
		item: ingredient
	});

	const countID = ingredient._id;

	const counter = useSelector((state) => selectCountState(state, countID));

	return (
		<>
			{state === true && (
				<Modal onClick={openModal}>
					<IngredientDetails data={ingredient} onClick={openModal} />
				</Modal>
			)}
			<div
				ref={dragRef}
				className={cn(s.ingredient, 'ml-4')}
				onClick={() => {
					openModal();
				}}
				key={id}
				id={id}
			>
				{counter !== 0 && <Counter count={counter} size='default' />}
				<img
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
