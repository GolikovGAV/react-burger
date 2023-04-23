import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { BASE_URL, request } from '../../Api/Api';

type TState = {
	serverResponse: null | {
		success?: boolean;
		name?: string;
		order?: {
			number?: number;
		};
	};
	isLoading: boolean;
};

const initialState: TState = {
	serverResponse: null,
	isLoading: false
};

export const sendOrder = createAsyncThunk(
	'burgerOrderInfo/post',
	async (selectOrderDetails: any, ThunkApi) => {
		const res = await request(`${BASE_URL}/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({ ingredients: selectOrderDetails })
		});

		return res;
	}
);

export const burgerOrderInfoSlice = createSlice({
	name: 'burgerOrderInfo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(sendOrder.fulfilled, (state, action: PayloadAction<object>) => {
				state.serverResponse = action.payload;
				state.isLoading = false;
			})
			.addCase(sendOrder.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(sendOrder.rejected, (state) => {
				state.isLoading = false;
				alert('Ошибка запроса');
			});
	}
});

export default burgerOrderInfoSlice.reducer;
