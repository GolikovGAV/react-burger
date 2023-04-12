import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './IngredientsTab.module.css';

function IngredientsTab({ ingredientInView, setIngredientInView }) {
	const changeIngredientTypeInView = (id) => {
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

IngredientsTab.propTypes = {
	ingredientInView: PropTypes.string.isRequired,
	setIngredientInView: PropTypes.func.isRequired
};

export default IngredientsTab;
