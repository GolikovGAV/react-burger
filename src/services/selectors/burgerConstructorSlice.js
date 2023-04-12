import { createSelector, createSlice } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

const initialState = {
	bun: null,
	ingredients: []
};

const buns = (state) => state.burgerConstructor.bun;
const items = (state) => state.burgerConstructor.ingredients;

export const burgerConstructorSlice = createSlice({
	name: 'burgerConstructor',
	initialState,
	reducers: {
		addConstructorElement: (state, action) => {
			if (action.payload.type === 'bun') {
				state.bun = action.payload;
			} else {
				state.ingredients.push({ ...action.payload, id: uuid4() });
			}
		},
		removeConstructorElement: (state, action) => {
			state.ingredients = state.ingredients.filter(
				(ingredient) => ingredient.id !== action.payload.id
			);
		},
		sortSelectedFilling: (state, action) => {
			let sorted = [];
			let start = action.payload[0];
			let end = action.payload[1];
			if (start === end) {
				return state;
			}
			if (start > end) {
				sorted = [
					...state.ingredients.slice(0, end),
					state.ingredients[start],
					...state.ingredients.slice(end, start),
					...state.ingredients.slice(start + 1)
				];
			}
			if (start < end) {
				sorted = [
					...state.ingredients.slice(0, start),
					...state.ingredients.slice(start + 1, end + 1),
					state.ingredients[start],
					...state.ingredients.slice(end + 1)
				];
			}
			return {
				bun: state.bun,
				ingredients: sorted
			};
		}
	}
});

export const selectCountState = createSelector(
	[items, buns, (items, id) => id],
	(items, buns, id) => {
		return [buns, ...items, buns].filter(
			(ingredient) => ingredient && ingredient._id === id
		).length;
	}
);

export const {
	addConstructorElement,
	removeConstructorElement,
	sortSelectedFilling
} = burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
