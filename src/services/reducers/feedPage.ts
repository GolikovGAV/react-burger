import { createReducer } from '@reduxjs/toolkit';

import {
	wsCloseFeed,
	wsConnectingFeed,
	wsErrorFeed,
	wsMessageFeed,
	wsOpenFeed
} from '../actions/feedPage';
import { TOrderState } from '../../utils/types';

const initialState: TOrderState = {
	data: null
};

export const feedReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(wsOpenFeed, (state) => {
			console.log('OPEN WEBSOCKET');
		})
		.addCase(wsCloseFeed, (state) => {
			console.log('CLOSE WEBSOCKET');
		})
		.addCase(wsErrorFeed, (state, action) => {})
		.addCase(wsMessageFeed, (state, action) => {
			state.data = action.payload;
		});
});
