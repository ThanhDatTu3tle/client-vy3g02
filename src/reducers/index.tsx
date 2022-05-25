import { combineReducers } from "redux";
import { flightReducer } from "./flight.reducer";

const rootReducer = combineReducers({
	detailApartment: flightReducer,
});

export default rootReducer;
