import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './NoBun.module.css';

function NoBun({ type, text }) {
	function whichType() {
		if (type === 'top') {
			return (
				<div className={cn(s.top, s.container, 'ml-8 mb-4')}>
					<span className={s.text}>{text}</span>
				</div>
			);
		} else {
			return (
				<div className={cn(s.bottom, s.container, 'ml-8 mt-4')}>
					<span className={s.text}>{text}</span>
				</div>
			);
		}
	}
	return <>{whichType()}</>;
}

NoBun.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string
};

export default NoBun;
