import React, { useState } from 'react';
import cn from 'classnames';
import { useDrag } from 'react-dnd/dist/hooks';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import s from './BurgerIngredient.module.css';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { selectCountState } from '../../services/selectors/burgerConstructorSlice';
import { Link, useLocation } from 'react-router-dom';

function BurgerIngredient({ ingredient }) {
	const location = useLocation();

	const [_, dragRef] = useDrag({
		type: 'BurgerIngredient',
		item: ingredient
	});

	const countID = ingredient._id;

	const counter = useSelector((state) => selectCountState(state, countID));

	return (
		<>
			<Link
				to={{ pathname: `ingredients/${ingredient._id}` }}
				state={{ background: location }}
				ref={dragRef}
				className={cn(s.ingredient, 'ml-4')}
				replace={true}
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
			</Link>
		</>
	);
}

BurgerIngredient.propTypes = {
	ingredient: PropTypes.object.isRequired
};

export default BurgerIngredient;
