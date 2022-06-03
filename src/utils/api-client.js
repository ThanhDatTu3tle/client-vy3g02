import axios from "axios";

export default async function axiosMethod(
	endpoint,
	method,
	body
) {
	const accessToken = localStorage.getItem("access_token");
	if (!accessToken) return;
	const res = await axios({
		method: method,
		data: body,
		url: `${process.env.REACT_APP_API_URL}${endpoint}`,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		// withCredentials: true,
	});
	const data = res.data;
	return data;
}
