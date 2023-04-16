import React, { useRef } from 'react';
import s from './ChosenElement.module.css';
import { useDrag, useDrop } from 'react-dnd';

import {
	ConstructorElement,
	DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
	sortSelectedFilling,
	removeConstructorElement
} from '../../services/selectors/burgerConstructorSlice';
import { TIngredient } from '../../utils/types';
import { CustomUseDispatch } from '../../utils/hooks';

function ChosenElement({
	ingredient,
	index
}: {
	ingredient: TIngredient;
	index: number;
}) {
	const dispatch = CustomUseDispatch();

	const id = ingredient.id;

	const sortRef: any = useRef();

	const sortFilling = (
		posStart: number | undefined,
		posEnd: number | undefined
	) => {
		let sortedArr = [];
		sortedArr.push(posStart);
		sortedArr.push(posEnd);
		dispatch(sortSelectedFilling(sortedArr));
	};

	const [, drop] = useDrop({
		accept: 'constructorElement',
		hover(item: any, monitor) {
			const dragIndex = item.index;
			const hoverIndex = index;
			const hoverBoundingRect = sortRef.current.getBoundingClientRect();
			const clientOffset: any = monitor.getClientOffset();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;

			if (!sortRef.current) {
				return;
			}
			if (dragIndex === hoverIndex) {
				return;
			}
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			sortFilling(dragIndex, hoverIndex);
			item.index = hoverIndex;
		}
	});

	const [, drag] = useDrag({
		type: 'constructorElement',
		item: () => {
			return { id, index };
		}
	});
	drag(drop(sortRef));

	return (
		<div className={s.element} ref={sortRef}>
			<DragIcon type='primary' />
			<ConstructorElement
				text={ingredient.name}
				price={ingredient.price}
				thumbnail={ingredient.image}
				handleClose={() => {
					dispatch(removeConstructorElement(ingredient));
				}}
			/>
		</div>
	);
}

export default ChosenElement;
