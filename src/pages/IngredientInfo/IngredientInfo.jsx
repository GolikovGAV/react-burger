import PropTypes from 'prop-types';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from './IngredientInfo.module.css';

function IngredientInfo() {
	const params = useParams();
	const ingredients = useSelector((state) => state.burgerIngredient.data);
	const chosenOne = ingredients.find((ingredient) => {
		return ingredient._id === params.id;
	});
	return (
		<section className={cn(s.container)}>
			<div className={cn(s.title)}>
				<p className='text text_type_main-large'>Детали ингредиента</p>
			</div>
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
		</section>
	);
}

export default IngredientInfo;
