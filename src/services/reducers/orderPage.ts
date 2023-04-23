import { createReducer } from '@reduxjs/toolkit';

import {
	wsCloseOrder,
	wsConnectingOrder,
	wsErrorOrder,
	wsMessageOrder,
	wsOpenOrder
} from '../actions/orderPage';
import { TOrderState } from '../../utils/types';

const initialState: TOrderState = {
	data: null
};

export const ordersReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(wsOpenOrder, (state) => {
			console.log('OPEN WEBSOCKET');
		})
		.addCase(wsCloseOrder, (state) => {
			console.log('CLOSE WEBSOCKET');
		})
		.addCase(wsErrorOrder, (state, action) => {
			console.log('error');
		})
		.addCase(wsMessageOrder, (state, action) => {
			state.data = action.payload;
		});
});
