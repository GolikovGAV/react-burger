import { configureStore } from '@reduxjs/toolkit';

import burgerConstructorSlice from './selectors/burgerConstructorSlice';
import burgerIngredientSlice from './selectors/burgerIngredientSlice';
import burgerOrderInfoSlice from './selectors/burgerOrderInfo';
import rootReducer from './selectors/rootReducer';
import burgerApi, { BurgerApi } from '../Api/burger-api';
import {
	wsCloseFeed,
	wsConnectFeed,
	wsConnectingFeed,
	wsDisconnectFeed,
	wsErrorFeed,
	wsMessageFeed,
	wsOpenFeed
} from './actions/feedPage';
import {
	wsCloseOrder,
	wsConnectOrder,
	wsConnectingOrder,
	wsDisconnectOrder,
	wsErrorOrder,
	wsMessageOrder,
	wsOpenOrder
} from './actions/orderPage';
import { socketMiddleware } from './middleware/middleware';

const wsActionsFeed = {
	wsConnect: wsConnectFeed,
	wsDisconnect: wsDisconnectFeed,
	wsConnecting: wsConnectingFeed,
	wsOpen: wsOpenFeed,
	wsClose: wsCloseFeed,
	wsError: wsErrorFeed,
	wsMessage: wsMessageFeed
};

const wsActionsOrder = {
	wsConnect: wsConnectOrder,
	wsDisconnect: wsDisconnectOrder,
	wsConnecting: wsConnectingOrder,
	wsOpen: wsOpenOrder,
	wsClose: wsCloseOrder,
	wsError: wsErrorOrder,
	wsMessage: wsMessageOrder
};

const websocketOrderMiddleware = socketMiddleware(wsActionsOrder);
const websocketFeedMiddleware = socketMiddleware(wsActionsFeed);

export const store = configureStore({
	reducer: {
		burgerIngredient: burgerIngredientSlice,
		burgerConstructor: burgerConstructorSlice,
		burgerOrderInfo: burgerOrderInfoSlice,
		rootReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: burgerApi
			}
		}).concat(websocketOrderMiddleware, websocketFeedMiddleware)
});

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export type ThunkAPI = {
	dispatch: TDispatch;
	extra: BurgerApi;
};
