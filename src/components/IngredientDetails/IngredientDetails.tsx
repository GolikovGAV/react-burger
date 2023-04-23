import cn from 'classnames';
import { useParams } from 'react-router-dom';

import s from './IngredientDetails.module.css';
import { useCustomSelector } from '../../utils/hooks';
import { TIngredient } from '../../utils/types';

function IngredientDetails() {
	const params = useParams();
	const ingredients = useCustomSelector((state) => state.burgerIngredient.data);
	const chosenOne = ingredients.find(
		(ingredient: TIngredient) => ingredient._id === params.id
	);

	return (
		<>
			<p className={cn(s.title, 'mt-10 ml-10 mr-10 text text_type_main-large')}>
				Детали ингредиента
			</p>
			<img className={s.image} src={chosenOne?.image} alt={chosenOne?.name} />
			<p className='text text_type_main-medium mt-4'>{chosenOne?.name}</p>
			<div className={cn(s.nutrition, 'mb-15 mt-8')}>
				<p className='text text_type_main-default'>Калории,ккал</p>
				<p className='text text_type_main-default'>Белки, г</p>
				<p className='text text_type_main-default'>Жиры, г</p>
				<p className='text text_type_main-default'>Углеводы, г</p>
				<p className='text text_type_digits-default'> {chosenOne?.calories}</p>
				<p className='text text_type_digits-default'> {chosenOne?.proteins}</p>
				<p className='text text_type_digits-default'> {chosenOne?.fat}</p>
				<p className='text text_type_digits-default'>
					{chosenOne?.carbohydrates}
				</p>
			</div>
		</>
	);
}

export default IngredientDetails;
