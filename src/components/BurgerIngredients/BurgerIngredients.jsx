import s from './BurgerIngredients.module.css';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';
import { useState } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function BurgerIngredients(ingredients) {
	const [count, setCount] = useState(0);
	const [state, setState] = useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	return (
		<>
			<div className={cn(s.ingredient, 'ml-4')} onClick={openModal}>
				{count !== 0 && <Counter count={count} size='default' />}
				<img
					className={s.ingredient__image}
					src={ingredients.image}
					alt={ingredients.name}
				/>
				<div
					onClick={() => setCount(count + 1)}
					className={cn(s.ingredient__price, 'mt-1 mb-1')}
				>
					<p className='text text_type_digits-default '>{ingredients.price}</p>
					<CurrencyIcon type='primary' />
				</div>

				<p className='text text_type_main-default'>{ingredients.name}</p>
			</div>
			{state === true && (
				<ModalOverlay onClick={openModal}>
					<Modal>
						<IngredientDetails data={ingredients} onClick={openModal} />
					</Modal>
				</ModalOverlay>
			)}
		</>
	);
}

export default BurgerIngredients;
