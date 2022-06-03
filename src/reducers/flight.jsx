import { FETCHED_FLIGHT } from "../constant/constant";

const initialState = {
	flight: {},
};

export const flightReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHED_FLIGHT:
			return {
				...state,
				flight: action.payload,
			};
		default:
			return { ...state };
	}
};
