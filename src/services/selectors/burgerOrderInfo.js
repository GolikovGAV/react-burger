import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL, checkResponse, request } from '../../Api/Api';

const initialState = {
	orderList: null
};

export const sendOrder = createAsyncThunk(
	'burgerOrderInfo/post',
	async (orderList, ThunkApi) => {
		const res = await request(`${BASE_URL}orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({ ingredients: orderList })
		});

		ThunkApi.dispatch(setOrderDetails(res));
	}
);

export const burgerOrderInfoSlice = createSlice({
	name: 'burgerOrderInfo',
	initialState,
	reducers: {
		setOrderDetails: (state, action) => {
			state.orderList = action.payload;
		}
	}
});

export const { setOrderDetails } = burgerOrderInfoSlice.actions;

export default burgerOrderInfoSlice.reducer;
