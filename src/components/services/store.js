import { configureStore } from '@reduxjs/toolkit';
import burgerConstructorSlice from './selectors/burgerConstructorSlice';
import burgerIngredientSlice from './selectors/burgerIngredientSlice';
import burgerOrderInfoSlice from './selectors/burgerOrderInfo';

export const store = configureStore({
	reducer: {
		burgerIngredient: burgerIngredientSlice,
		burgerConstructor: burgerConstructorSlice,
		burgerOrderInfo: burgerOrderInfoSlice
	}
});
