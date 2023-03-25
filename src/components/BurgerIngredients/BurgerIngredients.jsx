import React from 'react';
import cn from 'classnames';

import s from './BurgerIngredients.module.css';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { useSelector } from 'react-redux';

function BurgerIngredients() {
	const ingredients = useSelector((state) => state.burgerIngredient.data);

	return (
		<section className={s.column}>
			<p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
			<IngredientsTab />
			<div className={cn(s.ingredients, 'custom-scroll')}>
				<BurgerIngredientType name='Булки'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'bun')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Соусы'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'main')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Начинки'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'sauce')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
			</div>
		</section>
	);
}

export default BurgerIngredients;
