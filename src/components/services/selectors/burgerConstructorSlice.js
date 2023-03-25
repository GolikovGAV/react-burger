import { createSlice } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

const initialState = {
	bun: null,
	ingredients: []
};

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
				(ingredient) => ingredient.id != action.payload.id
			);
		}
	}
});

export const { addConstructorElement, removeConstructorElement } =
	burgerConstructorSlice.actions;
export default burgerConstructorSlice.reducer;
