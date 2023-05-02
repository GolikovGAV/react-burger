import { createReducer } from '@reduxjs/toolkit';

import {
	wsCloseFeed,
	wsErrorFeed,
	wsMessageFeed,
	wsOpenFeed
} from '../actions/feedPage';
import { initialState } from '../../utils/utils';

export const feedReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(wsOpenFeed, (state) => {
			console.log('OPEN WEBSOCKET');
		})
		.addCase(wsCloseFeed, (state) => {
			console.log('CLOSE WEBSOCKET');
		})
		.addCase(wsErrorFeed, (state, action) => {
			console.log('wsErrorFeed');
		})
		.addCase(wsMessageFeed, (state, action) => {
			state.data = action.payload;
		});
});
