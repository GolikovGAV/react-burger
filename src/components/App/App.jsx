import React from 'react';

import s from './App.module.css';

import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
	return (
		<main className={s.main}>
			<BurgerIngredients />
			<BurgerConstructor />
		</main>
	);
}

export default App;
