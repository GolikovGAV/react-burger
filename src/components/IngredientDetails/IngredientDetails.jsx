import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './IngredientDetails.module.css';

function IngredientDetails({ ingredient }) {
	return (
		<>
			<div className={cn(s.title, 'mt-10 ml-10 mr-10')}>
				<p className='text text_type_main-large'>Детали ингредиента</p>
			</div>
			<img className={s.image} src={ingredient.image} alt={ingredient.name} />
			<p className='text text_type_main-medium mt-4'>{ingredient.name}</p>
			<div className={cn(s.nutrition, 'mb-15 mt-8')}>
				<p className='text text_type_main-default'>Калории,ккал</p>
				<p className='text text_type_main-default'>Белки, г</p>
				<p className='text text_type_main-default'>Жиры, г</p>
				<p className='text text_type_main-default'>Углеводы, г</p>
				<p className='text text_type_digits-default'> {ingredient.calories}</p>
				<p className='text text_type_digits-default'> {ingredient.proteins}</p>
				<p className='text text_type_digits-default'> {ingredient.fat}</p>
				<p className='text text_type_digits-default'>
					{ingredient.carbohydrates}
				</p>
			</div>
		</>
	);
}

IngredientDetails.propTypes = {
	ingredient: PropTypes.object.isRequired
};

export default IngredientDetails;
