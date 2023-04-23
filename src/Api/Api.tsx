export const BASE_URL = 'https://norma.nomoreparties.space/api';

export type TRequest = {
	method?: string;
	headers: {
		'Content-Type'?: string;
		authorization?: string;
	};
	body?: string;
};

export function checkResponse(res: Response) {
	return res.ok
		? res.json()
		: res
				.json()
				.then((res) => Promise.reject({ ...res, statusCode: res.status }));
}

export const request = async (url: string, options?: TRequest) => {
	return await fetch(url, options).then(checkResponse);
};

function getInfoFromServer() {
	return request(`${BASE_URL}/ingredients`).then((data) => {
		return data.data;
	});
}

export default getInfoFromServer;
