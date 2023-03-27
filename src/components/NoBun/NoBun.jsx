import s from './NoBun.module.css';
import cn from 'classnames';

function NoBun(props) {
	function whichType() {
		if (props.type === 'top') {
			return (
				<div className={cn(s.top, s.container, 'ml-8 mb-4')}>
					<span className={s.text}>{props.text}</span>
				</div>
			);
		} else {
			return (
				<div className={cn(s.bottom, s.container, 'ml-8 mt-4')}>
					<span className={s.text}>{props.text}</span>
				</div>
			);
		}
	}
	return <>{whichType()}</>;
}

export default NoBun;
