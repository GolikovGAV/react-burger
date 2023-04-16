import cn from 'classnames';
import { ReactNode, Ref, forwardRef } from 'react';

import s from './BurgerIngredientType.module.css';

const BurgerIngredientType = forwardRef(
	(
		{ name, id, children }: { name: string; id: string; children: ReactNode },
		ref: Ref<HTMLParagraphElement>
	) => {
		return (
			<>
				<p ref={ref} className='text text_type_main-medium mt-10 mb-6' id={id}>
					{name}
				</p>
				<div className={cn(s.ingredients)}>{children}</div>
			</>
		);
	}
);

export default BurgerIngredientType;
