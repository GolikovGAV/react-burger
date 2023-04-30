import React from 'react';
import cn from 'classnames';
import { useDrag } from 'react-dnd/dist/hooks';
import { Link, useLocation } from 'react-router-dom';

import s from './BurgerIngredient.module.css';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import { selectCountState } from '../../services/selectors/burgerConstructorSlice';
import { TIngredient } from '../../utils/types';
import { useCustomSelector } from '../../utils/hooks';

function BurgerIngredient(data: { ingredient: TIngredient }) {
	const location = useLocation();

	const [_, dragRef] = useDrag({
		type: 'BurgerIngredient',
		item: data.ingredient
	});

	const countID = data.ingredient._id;

	const counter = useCustomSelector((state) =>
		selectCountState(state, countID)
	);

	return (
		<>
			<Link
				to={{ pathname: `ingredients/${data.ingredient._id}` }}
				state={{ background: location }}
				ref={dragRef}
				className={cn(s.ingredient, 'ml-4')}
				replace={true}
			>
				{counter !== 0 && <Counter count={counter} size='default' />}
				<img
					className={s.ingredient__image}
					src={data.ingredient.image}
					alt={data.ingredient.name}
				/>
				<div className={cn(s.ingredient__price, 'mt-1 mb-1')}>
					<p className='text text_type_digits-default '>
						{data.ingredient.price}
					</p>
					<CurrencyIcon type='primary' />
				</div>
				<p className='text text_type_main-default'>{data.ingredient.name}</p>
			</Link>
		</>
	);
}

export default BurgerIngredient;
