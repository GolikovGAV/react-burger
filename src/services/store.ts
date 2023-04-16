import { configureStore } from '@reduxjs/toolkit';

import burgerConstructorSlice from './selectors/burgerConstructorSlice';
import burgerIngredientSlice from './selectors/burgerIngredientSlice';
import burgerOrderInfoSlice from './selectors/burgerOrderInfo';
import rootReducer from './selectors/rootReducer';
import burgerApi, { BurgerApi } from '../Api/burger-api';

export const store = configureStore({
	reducer: {
		burgerIngredient: burgerIngredientSlice,
		burgerConstructor: burgerConstructorSlice,
		burgerOrderInfo: burgerOrderInfoSlice,
		rootReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: burgerApi
			}
		})
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export type ThunkAPI = {
	dispatch: TDispatch;
	extra: BurgerApi;
};
