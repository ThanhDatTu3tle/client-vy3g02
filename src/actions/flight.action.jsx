import { FETCHED_FLIGHT } from "../constant/constant";

const setFlight = (data) => ({
	type: FETCHED_FLIGHT,
	payload: data,
});

export { setFlight };
