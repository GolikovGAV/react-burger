import s from './EmptyBasket.module.css';

function EmptyBasket({ text }: { text: string }) {
	return (
		<div className={s.element}>
			<span className={s.row}>
				<span className={s.text}>{text}</span>
			</span>
		</div>
	);
}

export default EmptyBasket;
