const config = {
	url: 'https://norma.nomoreparties.space/api/ingredients'
};

function checkResponse(res) {
	return res.ok
		? res.json()
		: res.json().then((res) => Promise.reject(`Ошибка: ${res.message}`));
}

function getInfoFromServer() {
	return fetch(config.url)
		.then(checkResponse)
		.then((data) => {
			return data.data;
		});
}

export default getInfoFromServer;
