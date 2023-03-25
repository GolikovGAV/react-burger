import s from './App.module.css';

import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../services/selectors/burgerIngredientSlice';

import React from 'react';

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchIngredients());
	}, []);

	return (
		<main className={s.main}>
			<BurgerIngredients />
			<BurgerConstructor />
		</main>
	);
}

export default App;
