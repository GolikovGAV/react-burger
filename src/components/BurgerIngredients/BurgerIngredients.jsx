import React from 'react';

import s from './BurgerIngredients.module.css';
import cn from 'classnames';

import IngredientsTab from '../IngredientsTab/IngredientsTab';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

function BurgerIngredients() {
	return (
		<section className={s.column}>
			<p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
			<IngredientsTab />
			<div className={cn(s.ingredients, 'custom-scroll')}>
				<BurgerIngredientType name='Булки'>
					<BurgerIngredient type='bun' />
				</BurgerIngredientType>
				<BurgerIngredientType name='Соусы'>
					<BurgerIngredient type='sauce' />
				</BurgerIngredientType>
				<BurgerIngredientType name='Начинки'>
					<BurgerIngredient type='main' />
				</BurgerIngredientType>
			</div>
		</section>
	);
}

export default BurgerIngredients;
