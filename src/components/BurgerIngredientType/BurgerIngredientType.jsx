import cn from 'classnames';
import s from './BurgerIngredientType.module.css';

function BurgerIngredientType(props) {
	return (
		<>
			<p className='text text_type_main-medium mt-10 mb-6'>{props.name}</p>
			<div className={cn(s.ingredients)}>{props.children}</div>
		</>
	);
}

export default BurgerIngredientType;
