import { createReducer } from '@reduxjs/toolkit';

import {
	wsCloseOrder,
	wsErrorOrder,
	wsMessageOrder,
	wsOpenOrder
} from '../actions/orderPage';
import { initialState } from '../../utils/utils';

export const ordersReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(wsOpenOrder, (state) => {
			console.log('OPEN WEBSOCKET');
		})
		.addCase(wsCloseOrder, (state) => {
			console.log('CLOSE WEBSOCKET');
		})
		.addCase(wsErrorOrder, (state, action) => {
			console.log('wsErrorOrder');
		})
		.addCase(wsMessageOrder, (state, action) => {
			state.data = action.payload;
		});
});
