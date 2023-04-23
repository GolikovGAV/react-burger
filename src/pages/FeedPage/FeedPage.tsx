import { useEffect } from 'react';

import FeedInfo from '../../components/FeedInfo/FeedInfo';
import FeedList from '../../components/FeedList/FeedList';
import s from './FeedPage.module.css';

const FeedPage = () => {
	return (
		<section className={s.container}>
			<FeedList />
			<FeedInfo />
		</section>
	);
};

export default FeedPage;
