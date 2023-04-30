import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import cn from 'classnames';

import s from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ChosenElement from '../ChosenElement/ChosenElement';
import TotalCost from '../TotalCost/TotalCost';
import { addConstructorElement } from '../../services/selectors/burgerConstructorSlice';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import NoBun from '../NoBun/NoBun';
import { sendOrder } from '../../services/selectors/burgerOrderInfo';
import { useCustomDispatch, useCustomSelector } from '../../utils/hooks';
import { getTotalSumOfOrder } from '../../utils/utils';
import { TIngredient, TUserInfo } from '../../utils/types';
import uuid4 from 'uuid4';

function BurgerConstructor() {
	const selectedBun: TIngredient | null = useCustomSelector(
		(state) => state.burgerConstructor.bun
	);
	const selectedFillings: TIngredient[] | null = useCustomSelector(
		(state) => state.burgerConstructor.ingredients
	);

	const dispatch = useCustomDispatch();

	const [, dropRef] = useDrop({
		accept: 'BurgerIngredient',
		drop(ingredient) {
			dispatch(addConstructorElement(ingredient));
		}
	});

	const ingredientsForTotal: any = [];
	ingredientsForTotal.push(selectedBun, selectedBun);
	selectedFillings.forEach((ingredient: TIngredient) => {
		ingredientsForTotal.push(ingredient);
	});

	const sendRequest = () => {
		const orderList: any = [];
		ingredientsForTotal.forEach((ingredient: TIngredient) => {
			orderList.push(ingredient._id);
		});
		dispatch(sendOrder(orderList));
	};

	let total = 0;

	if (getTotalSumOfOrder(ingredientsForTotal)) {
		total = getTotalSumOfOrder(ingredientsForTotal);
	}

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
