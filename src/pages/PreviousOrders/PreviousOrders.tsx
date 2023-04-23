import cn from 'classnames';

import s from './PreviousOrders.module.css';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import { useCustomSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types';
import FeedElement from '../../components/FeedElement/FeedElement';

const PreviousOrders = () => {
	const orders = useCustomSelector(
		(state) => state.rootReducer.orderPage.data?.orders
	);

	return (
		<section className={s.page}>
			<ProfileNavBar />
			{typeof orders !== 'undefined' && orders?.length > 0 ? (
				<ul className={cn(s.container, 'custom-scroll')}>
					{orders?.map((order: TOrder) => {
						return <FeedElement order={order} key={order?._id} />;
					})}
				</ul>
			) : (
				<p className={cn(s.empty, 'text text_type_main-medium')}>
					Упс, кажется, вы ничего не заказывали
				</p>
			)}
		</section>
	);
};

export default PreviousOrders;
