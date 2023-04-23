import { getCookie, setCookie } from './cookies';
import { BASE_URL, TRequest, request } from './Api';
import { TUserInfo } from '../utils/types';

export type TError = {
	statusCode: number;
};

export type TUserResponse = {
	success: boolean;
	user?: TUserInfo;
	accessToken: string;
	refreshToken: string;
};

export class BurgerApi {
	fetchWithRefresh = async (url: string, options: TRequest) => {
		try {
			const res = await request(url, options);
			return await res;
		} catch (error: any) {
			if (error.statusCode === 401 || error.statusCode === 403) {
				const refreshData = await this.refreshToken();
				if (!refreshData.success) {
					Promise.reject(refreshData);
				}
				setCookie('accessToken', refreshData.accessToken);
				setCookie('refreshToken', refreshData.refreshToken);
				options.headers.authorization = refreshData.accessToken;
				const res = await request(url, options);
				return await res;
			} else {
				Promise.reject(error);
			}
		}
	};

	registerUser = (data: TUserInfo) => {
		return request(`${BASE_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	loginUser = (data: TUserInfo) => {
		return request(`${BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	logoutUser = (data: TUserInfo) => {
		return request(`${BASE_URL}/auth/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	forgotPasswordEmail = (data: TUserInfo) => {
		return request(`${BASE_URL}/password-reset`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	forgotPasswordNew = (data: TUserInfo) => {
		return request(`${BASE_URL}/password-reset/reset`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	updateInfoUser = (data: TUserInfo) => {
		return request(`${BASE_URL}/auth/user`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
				authorization: getCookie('accessToken')
			},
			body: JSON.stringify(data)
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};

	refreshToken = () => {
		return request(`${BASE_URL}/auth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				token: getCookie('refreshToken')
			})
		});
	};

	getUser = async () => {
		return await this.fetchWithRefresh(`${BASE_URL}/auth/user`, {
			headers: {
				authorization: getCookie('accessToken')
			}
		}).then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});
	};
}

export default new BurgerApi();
