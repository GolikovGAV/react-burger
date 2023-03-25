import React from 'react';

import cn from 'classnames';
import s from './ChosenElement.module.css';

import {
	ConstructorElement,
	DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { removeConstructorElement } from '../services/selectors/burgerConstructorSlice';

function ChosenElement(ingredient) {
	const dispatch = useDispatch();
	return (
		<div className={s.element}>
			<DragIcon />
			<ConstructorElement
				text={ingredient.name}
				price={ingredient.price}
				thumbnail={ingredient.image}
				handleClose={() => {
					dispatch(removeConstructorElement(ingredient));
				}}
			/>
		</div>
	);
}

export default ChosenElement;
