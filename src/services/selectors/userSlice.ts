import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
	getActionName,
	isActionPending,
	isActionRejected
} from '../../utils/action-utils';
import { deleteCookie, setCookie } from '../../Api/cookies';
import { ThunkAPI } from '../store';
import { TUserReq } from '../../utils/types';

export const sliceName = 'user';

type TInitialState = {
	isAuthChecked: boolean;
	data?: {
		email?: string;
		name?: string;
		password?: string;
	} | null;

	registerUserError: string | null;
	registerUserRequest: boolean | null;

	loginUserError: string | null;
	loginUserRequest: boolean | null;

	getUserError: string | null;
	getUserRequest: boolean | null;

	logoutUserError: string | null;
	logoutUserRequest: boolean | null;

	updateInfoUserError: string | null;
	updateInfoUserRequest: boolean | null;

	resetPasswordEmailError: string | null;
	resetPasswordEmailRequest: boolean | null;

	resetPasswordNewError: string | null;
	resetPasswordNewRequest: boolean | null;
};

export const initialState: TInitialState = {
	isAuthChecked: false,
	data: null,

	registerUserError: null,
	registerUserRequest: false,

	loginUserError: null,
	loginUserRequest: false,

	getUserError: null,
	getUserRequest: false,

	logoutUserError: null,
	logoutUserRequest: false,

	updateInfoUserError: null,
	updateInfoUserRequest: false,

	resetPasswordEmailError: null,
	resetPasswordEmailRequest: false,

	resetPasswordNewError: null,
	resetPasswordNewRequest: false
};

export const checkUserAuth = createAsyncThunk<any, void, ThunkAPI>(
	`${sliceName}/checkUserAuth`,
	async (_, { extra: api, rejectWithValue, dispatch }) => {
		try {
			const data = await api.getUser();
			if (!data?.success) {
				return rejectWithValue(data);
			}
			return data.user;
		} catch (error) {
			return rejectWithValue(error);
		} finally {
			dispatch(authCheck());
		}
	}
);

export const registerUser = createAsyncThunk<any, TUserReq, ThunkAPI>(
	`${sliceName}/registerUser`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.registerUser(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		setCookie('accessToken', data.accessToken, { 'max-age': 1000 });
		setCookie('refreshToken', data.refreshToken);
		return data.user;
	}
);

export const loginUser = createAsyncThunk<any, TUserReq, ThunkAPI>(
	`${sliceName}/loginUser`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.loginUser(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		setCookie('accessToken', data.accessToken);
		setCookie('refreshToken', data.refreshToken);
		return data.user;
	}
);

export const logoutUser = createAsyncThunk<any, TUserReq, ThunkAPI>(
	`${sliceName}/logoutUser`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.logoutUser(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		deleteCookie('accessToken');
		deleteCookie('refreshToken');
		return data.user;
	}
);

export const updateInfoUser = createAsyncThunk<any, TUserReq, ThunkAPI>(
	`${sliceName}/updateInfoUser`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.updateInfoUser(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		return data.user;
	}
);

export const resetPasswordNew = createAsyncThunk<any, TUserReq, ThunkAPI>(
	`${sliceName}/resetPasswordNew`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.forgotPasswordNew(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		return data;
	}
);

export const resetPasswordEmail = createAsyncThunk<any, object, ThunkAPI>(
	`${sliceName}/resetPasswordEmail`,
	async (dataUser, { extra: api, rejectWithValue }) => {
		const data = await api.forgotPasswordEmail(dataUser);
		if (!data?.success) {
			return rejectWithValue(data);
		}
		return data;
	}
);

const user = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		authCheck: (state) => {
			state.isAuthChecked = true;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkUserAuth.fulfilled, (state, action) => {
				state.data = action.payload;
				state.getUserRequest = false;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.registerUserRequest = false;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loginUserRequest = false;
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.data = null;
				state.logoutUserRequest = false;
			})
			.addCase(updateInfoUser.fulfilled, (state, action) => {
				state.data = action.payload;
				state.updateInfoUserRequest = false;
			})
			.addCase(resetPasswordNew.fulfilled, (state, action) => {
				state.resetPasswordNewRequest = false;
			})
			.addCase(resetPasswordEmail.fulfilled, (state, action) => {
				state.resetPasswordEmailRequest = false;
			})
			.addMatcher(
				isActionPending,
				(state: { [key: string]: unknown }, action) => {
					state[`${getActionName(action.type)}Request`] = true;
					state[`${getActionName(action.type)}Error`] = null;
				}
			)
			.addMatcher(
				isActionRejected,
				(state: { [key: string]: unknown }, action) => {
					state[`${getActionName(action.type)}Error`] = action.payload;
					state[`${getActionName(action.type)}Request`] = false;
				}
			);
	}
});

export const { authCheck } = user.actions;

export default user.reducer;
