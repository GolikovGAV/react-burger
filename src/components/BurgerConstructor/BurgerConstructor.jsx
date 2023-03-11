import {
	ConstructorElement,
	DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
	return (
		<>
			<DragIcon />
			<ConstructorElement
				text={props.name}
				price={props.price}
				thumbnail={props.image}
			/>
		</>
	);
}

export default BurgerConstructor;
