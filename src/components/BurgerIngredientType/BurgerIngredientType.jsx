import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import s from './BurgerIngredientType.module.css';

const BurgerIngredientType = React.forwardRef(({ name, id, children }, ref) => {
	return (
		<>
			<p ref={ref} className='text text_type_main-medium mt-10 mb-6' id={id}>
				{name}
			</p>
			<div className={cn(s.ingredients)}>{children}</div>
		</>
	);
});

BurgerIngredientType.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired
};

export default BurgerIngredientType;
