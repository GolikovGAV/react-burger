import { testBun, testIngredient } from '../../utils/test-utils';
import burgerIngredientSlice, {
	fetchIngredients,
	initialState
} from './burgerIngredientSlice';

describe('burgerIngredientSlice reducer', () => {
	it('should return initial state', () => {
		expect(burgerIngredientSlice(initialState, { type: '' })).toEqual(
			initialState
		);
	});

	it('should hanlde burgerIngredientSlice fulfilled', () => {
		expect(
			burgerIngredientSlice(initialState, {
				payload: [testBun, testIngredient],
				type: fetchIngredients.fulfilled
			})
		).toEqual({
			...initialState,
			data: [testBun, testIngredient],
			isLoading: false
		});
	});

	it('should hanlde burgerIngredientSlice pending', () => {
		expect(
			burgerIngredientSlice(initialState, {
				type: fetchIngredients.pending
			})
		).toEqual({
			...initialState,
			isLoading: true,
			error: null
		});
	});

	it('should hanlde burgerIngredientSlice rejected', () => {
		expect(
			burgerIngredientSlice(initialState, {
				payload: 'error',
				type: fetchIngredients.rejected
			})
		).toEqual({
			...initialState,
			isLoading: false,
			error: 'error'
		});
	});
});
