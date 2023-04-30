import { testOrder } from '../../utils/test-utils';
import {
	burgerOrderInfoSlice,
	initialState,
	sendOrder
} from './burgerOrderInfo';

describe('burgerOrderInfoSlice reducer', () => {
	it('should return initial state', () => {
		expect(burgerOrderInfoSlice.reducer(initialState, { type: '' })).toEqual(
			initialState
		);
	});

	it('should hanlde sendOrder fulfilled', () => {
		expect(
			burgerOrderInfoSlice.reducer(initialState, {
				payload: testOrder,
				type: sendOrder.fulfilled
			})
		).toEqual({ ...initialState, serverResponse: testOrder, isLoading: false });
	});

	it('should return sendOrder pending', () => {
		expect(
			burgerOrderInfoSlice.reducer(initialState, {
				payload: testOrder,
				type: sendOrder.pending
			})
		).toEqual({ ...initialState, isLoading: true });
	});

	it('should return sendOrder rejected', () => {
		expect(
			burgerOrderInfoSlice.reducer(initialState, {
				payload: testOrder,
				type: sendOrder.rejected
			})
		).toEqual({ ...initialState, isLoading: false });
	});
});
