import { testBun, testIngredient } from '../../utils/test-utils';
import burgerConstructorSlice, {
	addConstructorElement,
	initialState,
	removeConstructorElement,
	sortSelectedFilling
} from './burgerConstructorSlice';

describe('user reducer', () => {
	it('should hanlde burgerConstructorSlice', () => {
		expect(
			burgerConstructorSlice(initialState, {
				type: addConstructorElement.type,
				payload: testBun
			})
		).toEqual({ ...initialState, bun: testBun });
	});

	it('should hanlde burgerConstructorSlice else', () => {
		expect(
			burgerConstructorSlice(initialState, {
				type: addConstructorElement.type,
				payload: testIngredient
			})
		).toEqual({ ...initialState, ingredients: [testIngredient] });
	});

	it('should hanlde removeConstructorElement', () => {
		const stateWithIngredients = {
			...initialState,
			ingredients: [testIngredient]
		};
		expect(
			burgerConstructorSlice(stateWithIngredients, {
				type: removeConstructorElement.type,
				payload: testIngredient
			})
		).toEqual(initialState);
	});

	it('should hanlde sortSelectedFilling (start < end)', () => {
		const expectedResult = [testBun, testIngredient];
		const ingredients = [testIngredient, testBun];
		expect(
			burgerConstructorSlice(
				{ ...initialState, ingredients },
				{
					type: sortSelectedFilling.type,
					payload: [0, 1]
				}
			)
		).toEqual({ ...initialState, ingredients: expectedResult });
	});

	it('should hanlde sortSelectedFilling (start === end)', () => {
		const ingredients = [testIngredient, testBun];
		expect(
			burgerConstructorSlice(
				{ ...initialState, ingredients },
				{
					type: sortSelectedFilling.type,
					payload: [1, 1]
				}
			)
		).toEqual({ ...initialState, ingredients: ingredients });
	});
	it('should hanlde sortSelectedFilling (start > end)', () => {
		const ingredients = [testBun, testIngredient];
		const expectedResult = [testIngredient, testBun];
		expect(
			burgerConstructorSlice(
				{ ...initialState, ingredients },
				{
					type: sortSelectedFilling.type,
					payload: [1, 0]
				}
			)
		).toEqual({ ...initialState, ingredients: expectedResult });
	});
});
