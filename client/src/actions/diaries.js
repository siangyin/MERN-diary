import * as api from "../api/index.js";

// Action Creators
export const getDiaries = () => async (dispatch) => {
	try {
		const { data } = await api.fetchDiaries();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
