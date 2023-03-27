import cn from 'classnames';
import React from 'react';
import s from './BurgerIngredientType.module.css';

const BurgerIngredientType = React.forwardRef((props, ref) => {
	return (
		<>
			<p
				ref={ref}
				className='text text_type_main-medium mt-10 mb-6'
				id={props.id}
			>
				{props.name}
			</p>
			<div className={cn(s.ingredients)}>{props.children}</div>
		</>
	);
});

export default BurgerIngredientType;
