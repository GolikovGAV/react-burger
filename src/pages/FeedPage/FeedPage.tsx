import { useEffect } from 'react';
import FeedInfo from '../../components/FeedInfo/FeedInfo';
import FeedList from '../../components/FeedList/FeedList';
import { useCustomDispatch } from '../../utils/hooks';
import s from './FeedPage.module.css';
import {
	wsConnectOrder,
	wsDisconnectOrder
} from '../../services/actions/orderPage';
import { WS_URL_FEED, WS_URL_ORDERS } from '../../Api/Api';
import {
	wsConnectFeed,
	wsDisconnectFeed
} from '../../services/actions/feedPage';

const FeedPage = () => {
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
		<section className={s.container}>
			<FeedList />
			<FeedInfo />
		</section>
	);
};

export default FeedPage;
