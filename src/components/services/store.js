import { configureStore } from '@reduxjs/toolkit';
import burgerConstructorSlice from './selectors/burgerConstructorSlice';
import burgerIngredientSlice from './selectors/burgerIngredientSlice';

export const store = configureStore({
	reducer: {
		burgerIngredient: burgerIngredientSlice,
		burgerConstructor: burgerConstructorSlice
	}
});
