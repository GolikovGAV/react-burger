import { testData } from '../../utils/test-utils';
import { initialState } from '../../utils/utils';
import { wsMessageOrder } from '../actions/orderPage';
import { ordersReducer } from './orderPage';

describe('feed reducer', () => {
	it('should return initial state', () => {
		expect(ordersReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should hanlde wsMessageFeed action', () => {
		expect(
			ordersReducer(initialState, {
				type: wsMessageOrder.type,
				payload: testData
			})
		).toEqual({
			...initialState,
			data: testData
		});
	});
});
