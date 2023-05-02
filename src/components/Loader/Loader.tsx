import cn from 'classnames';

import s from './Loader.module.css';
import loader from '../../images/oval.svg';

const Loader = () => {
	return (
		<div className={s.loader}>
			<img src={loader} alt='Загрузка' className={cn(s.image, 'mt-30 mb-30')} />
		</div>
	);
};

export default Loader;
