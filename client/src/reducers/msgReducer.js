import { SHOW_MESSAGE, RESET_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
	showMessage: null,
	text: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_MESSAGE:
			return { ...state, showMessage: true, text: action.payload };
		case RESET_MESSAGE:
			return INITIAL_STATE;
		default:
			return state;
	}
};
