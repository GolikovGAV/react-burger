export const testData = {
	orders: [
		{
			_id: '64456f5045c6f2001be6ced6',
			ingredients: [
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa0943'
			],
			status: 'done',
			name: 'Space флюоресцентный бургер',
			createdAt: '2023-04-23T17:48:00.872Z',
			updatedAt: '2023-04-23T17:48:00.968Z',
			number: 1258
		},
		{
			_id: '6445700645c6f2001be6cedf',
			ingredients: [
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa0943',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa093e',
				'643d69a5c3f7b9001cfa0944'
			],
			status: 'done',
			name: 'Space флюоресцентный био-марсианский традиционный-галактический люминесцентный бургер',
			createdAt: '2023-04-23T17:51:02.329Z',
			updatedAt: '2023-04-23T17:51:02.367Z',
			number: 1259
		},
		{
			_id: '6445702745c6f2001be6cee3',
			ingredients: [
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa093d',
				'643d69a5c3f7b9001cfa0943',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa0944',
				'643d69a5c3f7b9001cfa0947',
				'643d69a5c3f7b9001cfa0949'
			],
			status: 'done',
			name: 'Space флюоресцентный фалленианский экзо-плантаго био-марсианский традиционный-галактический бургер',
			createdAt: '2023-04-23T17:51:35.719Z',
			updatedAt: '2023-04-23T17:51:35.748Z',
			number: 1260
		}
	],
	success: true,
	total: 1795,
	totalToday: 175
};

export const testUserData = {
	email: 'email@email.ru',
	name: 'Artem'
};

export const testBun = {
	_id: '643d69a5c3f7b9001cfa093c',
	name: 'Краторная булка N-200i',
	type: 'bun',
	proteins: 80,
	fat: 24,
	carbohydrates: 53,
	calories: 420,
	price: 1255,
	image: 'https://code.s3.yandex.net/react/code/bun-02.png',
	image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
	image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
	__v: 0
};

export const testIngredient = {
	_id: '643d69a5c3f7b9001cfa0943',
	name: 'Соус фирменный Space Sauce',
	type: 'sauce',
	proteins: 50,
	fat: 22,
	carbohydrates: 11,
	calories: 14,
	price: 80,
	image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
	image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
	image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
	__v: 0
};

export const testOrder = {
	success: true,
	name: 'Space антарианский флюоресцентный бургер',
	order: {
		ingredients: [
			{
				_id: '643d69a5c3f7b9001cfa093d',
				name: 'Флюоресцентная булка R2-D3',
				type: 'bun',
				proteins: 44,
				fat: 26,
				carbohydrates: 85,
				calories: 643,
				price: 988,
				image: 'https://code.s3.yandex.net/react/code/bun-01.png',
				image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa093d',
				name: 'Флюоресцентная булка R2-D3',
				type: 'bun',
				proteins: 44,
				fat: 26,
				carbohydrates: 85,
				calories: 643,
				price: 988,
				image: 'https://code.s3.yandex.net/react/code/bun-01.png',
				image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa0943',
				name: 'Соус фирменный Space Sauce',
				type: 'sauce',
				proteins: 50,
				fat: 22,
				carbohydrates: 11,
				calories: 14,
				price: 80,
				image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
				image_mobile:
					'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa0945',
				name: 'Соус с шипами Антарианского плоскоходца',
				type: 'sauce',
				proteins: 101,
				fat: 99,
				carbohydrates: 100,
				calories: 100,
				price: 88,
				image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
				image_mobile:
					'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
				__v: 0
			}
		],
		_id: '644d4eeb45c6f2001be6edd1',
		owner: {
			name: 'Artem',
			email: 'golikovgav@yandex.ru',
			createdAt: '2023-04-22T16:36:05.363Z',
			updatedAt: '2023-04-23T20:15:53.937Z'
		},
		status: 'done',
		name: 'Space антарианский флюоресцентный бургер',
		createdAt: '2023-04-29T17:07:55.978Z',
		updatedAt: '2023-04-29T17:07:56.068Z',
		number: 2201,
		price: 2144
	}
};
