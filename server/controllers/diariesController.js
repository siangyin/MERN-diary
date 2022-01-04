const Diary = require("../models/Diary");

const getDiaries = async (req, res) => {
	res.send("getDiaries");
};

const getDiary = async (req, res) => {
	res.send("getDiary");
};

const createDiary = async (req, res) => {
	res.send("createDiary");
};

const updateDiary = async (req, res) => {
	res.send("updateDiary");
};

const deleteDiary = async (req, res) => {
	res.send("deleteDiary");
};

const likeDiary = async (req, res) => {
	res.send("likeDiary");
};

module.exports = {
	getDiaries,
	getDiary,
	createDiary,
	updateDiary,
	deleteDiary,
	likeDiary,
};
