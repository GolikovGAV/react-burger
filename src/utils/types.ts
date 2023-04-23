export type TIngredient = {
	__v: number;
	_id: string;
	name: string;
	price: number;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	image: string;
	image_mobile: string;
	image_large: string;
	type: string;
	id?: string;
};

export type TUserInfo = {
	email?: string;
	name?: string;
	password?: string;
	accessToken?: string;
	refreshToken?: string;
};

export type TUserReq = {
	user?: TUserInfo;
	success?: boolean;
	accessToken?: string;
	refreshToken?: string;
};

export type TOrder = {
	_id: string;
	ingredients: string[];
	status: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	number: number;
};

export type TOrderList = {
	success: boolean;
	orders: TOrder[];
	total: number;
	totalToday: number;
};

export type wsPayloadConnect = {
	wsUrl: string;
	withTokenRefresh: boolean;
};

export type TOrderState = {
	data: TOrderList | null;
};
