import cn from 'classnames';

import s from './PreviousOrders.module.css';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import { useCustomDispatch, useCustomSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types';
import FeedElement from '../../components/FeedElement/FeedElement';
import { useEffect } from 'react';
import {
	wsConnectOrder,
	wsDisconnectOrder
} from '../../services/actions/orderPage';
import { WS_URL_FEED, WS_URL_ORDERS } from '../../Api/Api';
import {
	wsConnectFeed,
	wsDisconnectFeed
} from '../../services/actions/feedPage';

const PreviousOrders = () => {
	const orders = useCustomSelector(
		(state) => state.rootReducer.orderPage.data?.orders
	);

	const dispatch = useCustomDispatch();

	useEffect(() => {
		dispatch(wsConnectOrder({ wsUrl: WS_URL_ORDERS, withTokenRefresh: true }));
		dispatch(wsConnectFeed({ wsUrl: WS_URL_FEED, withTokenRefresh: false }));
		return () => {
			dispatch(wsDisconnectOrder());
			dispatch(wsDisconnectFeed());
		};
	}, []);

	return (
		<section className={s.page}>
			<ProfileNavBar />
			{orders && orders?.length > 0 ? (
				<ul className={cn(s.container, 'custom-scroll')}>
					{orders &&
						orders?.map((order: TOrder) => {
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
