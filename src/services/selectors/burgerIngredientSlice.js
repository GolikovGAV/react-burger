import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getInfoFromServer from '../../Api/Api';

const initialState = {
	data: [],
	isLoading: false,
	error: null
};

export const fetchIngredients = createAsyncThunk(
	'burgerIngredient/fetchBurgerIngredient',
	async (_, { rejectWithValue, dispatch }) => {
		const res = await getInfoFromServer();
		if (!Array.isArray(res)) {
			return rejectWithValue({ message: 'Ошибка сервера' });
		}
		return res;
	}
);

export const burgerIngredientSlice = createSlice({
	name: 'burgerIngredient',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(fetchIngredients.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchIngredients.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchIngredients.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export default burgerIngredientSlice.reducer;
