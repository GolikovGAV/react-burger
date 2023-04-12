export const BASE_URL = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
	return res.ok
		? res.json()
		: res
				.json()
				.then((res) => Promise.reject({ ...res, statusCode: res.status }));
}

export function request(url, options) {
	return fetch(url, options).then(checkResponse);
}

function getInfoFromServer() {
	return request(`${BASE_URL}/ingredients`).then((data) => {
		return data.data;
	});
}

export default getInfoFromServer;
