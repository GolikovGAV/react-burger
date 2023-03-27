import s from './EmptyBasket.module.css';

function EmptyBasket(props) {
	return (
		<div className={s.element}>
			<span className={s.row}>
				<span className={s.text}>{props.text}</span>
			</span>
		</div>
	);
}

export default EmptyBasket;
