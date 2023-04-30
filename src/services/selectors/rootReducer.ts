import { combineReducers } from 'redux';

import user, { sliceName } from './userSlice';
import { ordersReducer } from '../reducers/orderPage';
import { feedReducer } from '../reducers/feedPage';

const rootReducer = combineReducers({
	[sliceName]: user,
	orderPage: ordersReducer,
	feedPage: feedReducer
});

export default rootReducer;
