import React from 'react';

import cn from 'classnames';
import s from './BurgerConstructor.module.css';

import {
	Button,
	ConstructorElement,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import ChosenElement from '../ChosenElement/ChosenElement';
import TotalCost from '../TotalCost/TotalCost';

function BurgerConstructor(props) {
	return (
		<>
			<section className='mt-25 mb-10 ml-4'>
				<ConstructorElement
					type='top'
					isLocked={true}
					text='Краторная булка N-200i (верх)'
					price={200}
					thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
					extraClass='ml-8 mb-4'
				/>
				<ChosenElement />
				<ConstructorElement
					type='bottom'
					isLocked={true}
					text='Краторная булка N-200i (низ)'
					price={200}
					thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
					extraClass='ml-8 mt-4'
				/>
				<TotalCost />
			</section>
		</>
	);
}

export default BurgerConstructor;
