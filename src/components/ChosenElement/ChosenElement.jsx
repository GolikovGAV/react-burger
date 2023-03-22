import React from 'react';

import cn from 'classnames';
import s from './ChosenElement.module.css';

import {
	ConstructorElement,
	DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function ChosenElement(props) {
	return (
		<div className={cn(s.filling, 'custom-scroll')}>
			<DragIcon />
			<ConstructorElement
				text={props.name}
				price={props.price}
				thumbnail={props.image}
			/>
		</div>
	);
}

export default ChosenElement;
