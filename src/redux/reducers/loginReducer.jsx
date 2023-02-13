import {
	loginRequest,
	loginSuccess,
	loginFailure,
	clearMessage,
	loginLogout,
} from '../types/loginTypes';

const initialState = {
	loading: false,
	user: JSON.parse(localStorage.getItem('data')) || [],
	isAuthenticated: localStorage.getItem('isAuthenticated') || false,
	msg: '',
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case loginRequest:
			return {
				...state,
				loading: true,
			};
		case loginSuccess:
			return {
				...state,
				loading: false,
				user: action.payload.usuario,
				isAuthenticated: true,
				msg: '',
			};
		case loginFailure:
			return {
				...state,
				loading: false,
				msg: action.payload,
			};
		case clearMessage:
			return {
				...state,
				msg: '',
			};
		case loginLogout:
			return { ...initialState };
		default:
			return state;
	}
};
