import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { checkResponse } from '../../Api/Api';

const initialState = {
	orderList: null
};

export const sendOrder = createAsyncThunk(
	'burgerOrderInfo/post',
	async (orderList, ThunkApi) => {
		const res = await fetch('https://norma.nomoreparties.space/api/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({ ingredients: orderList })
		}).then(checkResponse);

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
