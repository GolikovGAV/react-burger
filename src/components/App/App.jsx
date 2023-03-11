import React from 'react';
import s from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerIngredientType from '../BurgerIngredientType/BurgerIngredientType';
import getInfoFromServer from '../Api/Api';
import cn from 'classnames';
import IngredientsTab from '../IngredientsTab/IngredientsTab';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {
	Button,
	ConstructorElement,
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails/OrderDetails';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import Modal from '../Modal/Modal';

function App() {
	const [ingredients, setIngredients] = React.useState([]);

	const [state, setState] = React.useState(false);

	const openModal = () => {
		state === false ? setState(true) : setState(false);
	};

	React.useEffect(() => {
		getInfoFromServer().then((data) => {
			setIngredients(data);
		});
	}, []);

	const buns = ingredients
		.filter((ingredient) => ingredient.type === 'bun')
		.map((ingredient) => (
			<BurgerIngredients key={ingredient._id} {...ingredient} />
		));

	const sauces = ingredients
		.filter((ingredient) => ingredient.type === 'sauce')
		.map((ingredient) => (
			<BurgerIngredients key={ingredient._id} {...ingredient} />
		));

	const mains = ingredients
		.filter((ingredient) => ingredient.type === 'main')
		.map((ingredient) => (
			<BurgerIngredients key={ingredient._id} {...ingredient} />
		));

	const allIngredients = ingredients.map((ingredient) => (
		<BurgerConstructor key={ingredient._id} {...ingredient} />
	));

	return (
		<main className={s.main}>
			{/* LEFT SIDE */}
			<section className={s.column}>
				<p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
				<IngredientsTab />
				<div className={cn(s.ingredients, 'custom-scroll')}>
					<BurgerIngredientType name='Булки'>{buns}</BurgerIngredientType>
					<BurgerIngredientType name='Соусы'>{sauces}</BurgerIngredientType>
					<BurgerIngredientType name='Начинки'>{mains}</BurgerIngredientType>
				</div>
			</section>
			{/* RIGHT SIDE */}
			<section className={cn(s.column, 'ml-4')}>
				<div className='mt-25 mb-10'>
					<ConstructorElement
						type='top'
						isLocked={true}
						text='Краторная булка N-200i (верх)'
						price={200}
						thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
						extraClass='ml-8 mb-4'
					/>
					<div className={cn(s.filling, 'custom-scroll')}>{allIngredients}</div>
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text='Краторная булка N-200i (низ)'
						price={200}
						thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
						extraClass='ml-8 mt-4'
					/>

					<div className={cn(s.price, 'mt-10 mr-4')}>
						<Button
							htmlType='button'
							type='primary'
							size='large'
							extraClass='ml-10'
							onClick={openModal}
						>
							Оформить заказ
						</Button>
						{state === true && (
							<ModalOverlay onClick={openModal}>
								<Modal>
									<OrderDetails onClick={openModal} />
								</Modal>
							</ModalOverlay>
						)}
						<CurrencyIcon type='primary' />
						<p className='text text_type_digits-medium mr-2'>600</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
