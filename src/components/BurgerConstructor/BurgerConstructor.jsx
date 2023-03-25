import React from 'react';

import cn from 'classnames';
import s from './BurgerConstructor.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ChosenElement from '../ChosenElement/ChosenElement';
import TotalCost from '../TotalCost/TotalCost';
import { useSelector } from 'react-redux';
import uuid4 from 'uuid4';

function BurgerConstructor(props) {
	const bun = useSelector((state) => state.burgerConstructor.bun);
	const chosenFillings = useSelector(
		(state) => state.burgerConstructor.ingredients
	);

	return (
		<>
			<section className='mt-25 mb-10 ml-4'>
				{bun ? (
					<ConstructorElement
						type='top'
						isLocked={true}
						text={`${bun.name} (вверх)`}
						price={bun.price}
						thumbnail={bun.image}
						extraClass='ml-8 mb-4'
					/>
				) : (
					<ConstructorElement
						type='top'
						isLocked={true}
						text={`Выберите булку (вверх)`}
						thumbnail='https://i.gifer.com/6os.gif'
						extraClass='ml-8 mb-4'
					/>
				)}
				<div className={cn(s.filling, 'custom-scroll')}>
					{chosenFillings.map((ingredient) => {
						return <ChosenElement {...ingredient} key={uuid4()} />;
					})}
				</div>
				{bun ? (
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text={`${bun.name} (вверх)`}
						price={bun.price}
						thumbnail={bun.image}
						extraClass='ml-8 mt-4'
					/>
				) : (
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text={`Выберите булку (вверх)`}
						thumbnail='https://i.gifer.com/6os.gif'
						extraClass='ml-8 mt-4'
					/>
				)}
				<TotalCost />
			</section>
		</>
	);
}

export default BurgerConstructor;
