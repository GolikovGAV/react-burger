import { TIngredient, TOrder, TOrderState } from './types';

export const getTotalSumOfOrder = (ingredients: any): number => {
	return ingredients?.reduce(
		(prev: number, next: TIngredient) => prev + next?.price,
		0
	);
};

export const findIngredientByID = (
	idArrayToFind: string[],
	whereToFindArray: TIngredient[]
) => {
	return idArrayToFind.map((id) => {
		return whereToFindArray.find((item) => item._id === id);
	});
};

export const ingredientsIcons = (ingredients: TIngredient[], order: TOrder) =>
	ingredients.filter((ingredient) =>
		order.ingredients.includes(ingredient._id)
	);

export const initialState: TOrderState = {
	data: null
};
