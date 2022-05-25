import axios from "axios";

export default async function axiosMethod(
	endpoint: any,
	method: any,
	body?: any
) {
	const accessToken = localStorage.getItem("access_token");
	if (!accessToken) return;
	const res = await axios({
		method: method,
		data: body,
		url: `http://139.59.225.244:3001/${endpoint}`,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		// withCredentials: true,
	});
	const data = res.data;
	return data;
}
