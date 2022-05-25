import { FETCHED_FLIGHT } from "../constant/constant";

const initialState = {
	requirement: [],
};

export const flightReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCHED_FLIGHT:
			return {
				...state,
				requirement: [...state.requirement, action.payload],
			};

		default:
			return { ...state };
	}
};
