import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsTab({ ingredientInView, setIngredientInView }) {
	const changeIngredientTypeInView = (id) => {
		setIngredientInView(id);
		document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div style={{ display: 'flex' }}>
			<Tab
				value='bun'
				active={ingredientInView === 'bun'}
				onClick={changeIngredientTypeInView}
			>
				Булки
			</Tab>
			<Tab
				value='sauce'
				active={ingredientInView === 'sauce'}
				onClick={changeIngredientTypeInView}
			>
				Соусы
			</Tab>
			<Tab
				value='main'
				active={ingredientInView === 'main'}
				onClick={changeIngredientTypeInView}
			>
				Начинки
			</Tab>
		</div>
	);
}

export default IngredientsTab;
