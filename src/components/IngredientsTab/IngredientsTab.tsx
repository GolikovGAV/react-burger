import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './IngredientsTab.module.css';

function IngredientsTab({
	ingredientInView,
	setIngredientInView
}: {
	ingredientInView: string;
	setIngredientInView: React.Dispatch<React.SetStateAction<string>>;
}) {
	const changeIngredientTypeInView = (id: string) => {
		setIngredientInView(id);
		document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav className={s.nav}>
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
		</nav>
	);
}

export default IngredientsTab;
