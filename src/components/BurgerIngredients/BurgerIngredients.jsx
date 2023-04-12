import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import s from './BurgerIngredients.module.css';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { useInView } from 'react-intersection-observer';

function BurgerIngredients() {
	const ingredients = useSelector((state) => state.burgerIngredient.data);

	const [ingredientInView, setIngredientInView] = useState('bun');

	const [refBun, inViewBun] = useInView();
	const [refSauce, inViewSauce] = useInView();
	const [refMain, inViewMain] = useInView();

	useEffect(() => {
		if (inViewBun) {
			setIngredientInView('bun');
		} else if (inViewSauce) {
			setIngredientInView('sauce');
		} else if (inViewMain) {
			setIngredientInView('main');
		}
	}, [inViewBun, inViewSauce, inViewMain]);

	return (
		<section className={s.column}>
			<p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
			<IngredientsTab
				ingredientInView={ingredientInView}
				setIngredientInView={setIngredientInView}
			/>
			<div className={cn(s.ingredients, 'custom-scroll')}>
				<BurgerIngredientType name='Булки' id='bun' ref={refBun}>
					{ingredients
						.filter((ingredient) => ingredient.type === 'bun')
						.map((ingredient) => {
							return (
								<BurgerIngredient
									ingredient={ingredient}
									key={ingredient._id}
								/>
							);
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Соусы' id='sauce' ref={refSauce}>
					{ingredients
						.filter((ingredient) => ingredient.type === 'sauce')
						.map((ingredient) => {
							return (
								<BurgerIngredient
									ingredient={ingredient}
									key={ingredient._id}
								/>
							);
						})}
				</BurgerIngredientType>
				<BurgerIngredientType name='Начинки' id='main' ref={refMain}>
					{ingredients
						.filter((ingredient) => ingredient.type === 'main')
						.map((ingredient) => {
							return (
								<BurgerIngredient
									ingredient={ingredient}
									key={ingredient._id}
								/>
							);
						})}
				</BurgerIngredientType>
			</div>
		</section>
	);
}

export default BurgerIngredients;
