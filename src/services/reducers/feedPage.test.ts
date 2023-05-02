import { testData } from '../../utils/test-utils';
import { initialState } from '../../utils/utils';
import { wsMessageFeed } from '../actions/feedPage';
import { feedReducer } from './feedPage';

describe('feed reducer', () => {
	it('should return initial state', () => {
		expect(feedReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should hanlde wsMessageFeed action', () => {
		expect(
			feedReducer(initialState, { type: wsMessageFeed.type, payload: testData })
		).toEqual({
			...initialState,
			data: testData
		});
	});
});
