export const config = {
	url: 'https://norma.nomoreparties.space/api/ingredients'
};

export function checkResponse(res) {
	return res.ok
		? res.json()
		: res.json().then((res) => Promise.reject(`Ошибка: ${res.message}`));
}

export function request(url) {
	return fetch(url).then(checkResponse);
}

function getInfoFromServer() {
	return request(config.url).then((data) => {
		return data.data;
	});
}

export default getInfoFromServer;
