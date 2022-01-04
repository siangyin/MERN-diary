import axios from "axios";

const url = "http://localhost:3030/diaries-api/";

export const fetchDiaries = () => axios.get(url);
export const createDiary = (newDiary) => axios.post(url, newDiary);
export const likeDiary = (id) => axios.patch(`${url}/${id}/likediary`);
export const updateDiary = (id, updatedDiary) =>
	axios.patch(`${url}/${id}`, updatedDiary);
export const deleteDiary = (id) => axios.delete(`${url}/${id}`);
