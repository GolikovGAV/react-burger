import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDispatch } from 'react-redux';

import s from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { fetchIngredients } from '../../services/selectors/burgerIngredientSlice';
import AppHeader from '../AppHeader/AppHeader';

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchIngredients());
	}, []);

	return (
		<>
			<AppHeader />

			<main className={s.main}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor />
				</DndProvider>
			</main>
		</>
	);
}

export default App;
