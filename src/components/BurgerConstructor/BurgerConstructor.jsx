import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid4 from 'uuid4';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import cn from 'classnames';

import s from './BurgerConstructor.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ChosenElement from '../ChosenElement/ChosenElement';
import TotalCost from '../TotalCost/TotalCost';
import { addConstructorElement } from '../services/selectors/burgerConstructorSlice';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import NoBun from '../NoBun/NoBun';
import { sendOrder } from '../services/selectors/burgerOrderInfo';

function BurgerConstructor() {
	const selectedBun = useSelector((state) => state.burgerConstructor.bun);
	const selectedFillings = useSelector(
		(state) => state.burgerConstructor.ingredients
	);
	const dispatch = useDispatch();

	const [, dropRef] = useDrop({
		accept: 'BurgerIngredient',
		drop(ingredient) {
			dispatch(addConstructorElement(ingredient));
		}
	});

	const total = React.useMemo(() => {
		let total = 0;
		selectedBun ? (total += selectedBun.price * 2) : (total = 0);
		selectedFillings.map((ingredient) => {
			total += ingredient.price;
		});
		return total;
	});

	const sendRequest = () => {
		const orderList = [];
		const chosenBuns = selectedBun?._id;
		orderList.push(chosenBuns, chosenBuns);
		selectedFillings.forEach((ingredient) => {
			orderList.push(ingredient._id);
		});
		dispatch(sendOrder(orderList));
	};

	return (
		<>
			<section ref={dropRef} className='mt-25 mb-10 ml-4'>
				{selectedBun ? (
					<ConstructorElement
						type='top'
						isLocked={true}
						text={`${selectedBun.name} (вверх)`}
						price={selectedBun.price}
						thumbnail={selectedBun.image}
						extraClass='ml-8 mb-4'
					/>
				) : (
					<NoBun type='top' text='Перетащите булку сюда (верх)' />
				)}
				<div className={cn(s.filling, 'custom-scroll')}>
					{selectedFillings.length !== 0 ? (
						selectedFillings.map((ingredient, index) => {
							return (
								<ChosenElement
									ingredient={ingredient}
									index={index}
									key={uuid4()}
								/>
							);
						})
					) : (
						<EmptyBasket text='Перетащите начинку сюда' />
					)}
				</div>
				{selectedBun ? (
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text={`${selectedBun.name} (низ)`}
						price={selectedBun.price}
						thumbnail={selectedBun.image}
						extraClass='ml-8 mt-4'
					/>
				) : (
					<NoBun type='bottom' text='Перетащите булку сюда (низ)' />
				)}
				<TotalCost total={total} sendRequest={sendRequest} />
			</section>
		</>
	);
}

export default BurgerConstructor;
