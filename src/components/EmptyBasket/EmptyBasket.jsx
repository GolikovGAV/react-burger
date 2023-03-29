import s from './EmptyBasket.module.css';

import PropTypes from 'prop-types';

function EmptyBasket({ text }) {
	return (
		<div className={s.element}>
			<span className={s.row}>
				<span className={s.text}>{text}</span>
			</span>
		</div>
	);
}

EmptyBasket.propTypes = {
	text: PropTypes.string
};

export default EmptyBasket;
