import React, { useState } from 'react';
import cn from 'classnames';

import s from './BurgerIngredients.module.css';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { useSelector } from 'react-redux';

function BurgerIngredients() {
	const ingredients = useSelector((state) => state.burgerIngredient.data);

	const [ingredientInView, setIngredientInView] = useState('bun');
	const changeIngredientTypeInView = (id) => {
		setIngredientInView(id);
		document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className={s.column}>
			<p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
			<IngredientsTab
				onClick={changeIngredientTypeInView}
				inView={ingredientInView}
			/>
			<div className={cn(s.ingredients, 'custom-scroll')}>
				<BurgerIngredientType name='Булки' id='bun'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'bun')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Соусы' id='sauce'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'sauce')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Начинки' id='main'>
					{ingredients
						.filter((ingredient) => ingredient.type === 'main')
						.map((ingredient) => {
							return <BurgerIngredient {...ingredient} key={ingredient._id} />;
						})}
				</BurgerIngredientType>
			</div>
		</section>
	);
}

export default BurgerIngredients;
