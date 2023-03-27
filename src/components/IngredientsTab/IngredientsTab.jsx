import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsTab(props) {
	return (
		<div style={{ display: 'flex' }}>
			<Tab value='bun' active={props.inView === 'bun'} onClick={props.onClick}>
				Булки
			</Tab>
			<Tab
				value='sauce'
				active={props.inView === 'sauce'}
				onClick={props.onClick}
			>
				Соусы
			</Tab>
			<Tab
				value='main'
				active={props.inView === 'main'}
				onClick={props.onClick}
			>
				Начинки
			</Tab>
		</div>
	);
}

export default IngredientsTab;
