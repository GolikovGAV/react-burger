export type TActionPending = {
	type: string;
};

export function isActionPending(action: TActionPending) {
	return action.type.endsWith('pending');
}

export function isActionRejected(action: TActionPending) {
	return action.type.endsWith('rejected');
}

export function isActionSuccess(action: TActionPending) {
	return action.type.endsWith('fulfilled');
}

export function getActionName(actionType: string) {
	return actionType.split('/')[1];
}
