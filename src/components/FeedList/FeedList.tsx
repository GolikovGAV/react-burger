import cn from 'classnames';

import { useCustomSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types';
import FeedElement from '../FeedElement/FeedElement';
import s from './FeedList.module.css';

const FeedList = () => {
	const orders = useCustomSelector(
		(state) => state.rootReducer.feedPage.data?.orders
	);
	return (
		<section className={s.container}>
			<p className='text text_type_main-large mb-5'>Лента заказов</p>
			<ul className={cn(s.list, 'custom-scroll')}>
				{orders?.map((order: TOrder) => {
					return <FeedElement order={order} key={order?._id} />;
				})}
			</ul>
		</section>
	);
};

export default FeedList;
