import s from './BurgerIngredient.module.css';
import React, { useState } from 'react';
import {
	Counter,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import cn from 'classnames';

import IngredientDetails from '../IngredientDetails/IngredientDetails';
import getInfoFromServer from '../Api/Api';

function BurgerIngredient(type) {
	const [count, setCount] = useState(0);

	const [state, setState] = useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	const [ingredients, setIngredients] = React.useState([]);

	React.useEffect(() => {
		getInfoFromServer().then((data) => {
			setIngredients(data);
		});
	}, []);

	return ingredients
		.filter((ingredient) => ingredient.type === type.type)
		.map((ingredients) => {
			return (
				<div
					className={cn(s.ingredient, 'ml-4')}
					onClick={openModal}
					key={ingredients._id}
				>
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
						<p className='text text_type_digits-default '>
							{ingredients.price}
						</p>
						<CurrencyIcon type='primary' />
					</div>

					<p className='text text_type_main-default'>{ingredients.name}</p>
					{state === true && (
						<Modal onClick={openModal}>
							<IngredientDetails data={ingredients} onClick={openModal} />
						</Modal>
					)}
				</div>
			);
		});
}

export default BurgerIngredient;
