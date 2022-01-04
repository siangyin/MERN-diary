const Diary = require("../models/Diary");

const getDiaries = async (req, res) => {
	try {
		const diary = await Diary.find();
		res.status(200).json({ status: "OK", count: diary.length, data: diary });
	} catch (error) {
		res.status(404).json({ status: "Error", message: error.message });
	}
};

const getDiary = async (req, res) => {
	try {
		const { id } = req.params;
		const diary = await Diary.findOne({ _id: id });

		if (!diary) {
			return res.status(404).json({ msg: `No diary with ID ${id} found` });
		}

		res.status(200).json({ status: "OK", count: diary.length, data: diary });
	} catch (error) {
		res.status(404).json({ status: "Error", message: error.message });
	}
};

const createDiary = async (req, res) => {
	try {
		const diary = await Diary.create(req.body);
		res.status(201).json({ status: "OK", count: diary.length, data: diary });
	} catch (error) {
		res.status(409).json({ status: "Error", message: error.message });
	}
};

const updateDiary = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, message, creator, selectedFile, tags } = req.body;

		const diary = await Diary.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
			runValidators: true,
		});

		if (!diary) {
			return res.status(404).json({ msg: `No diary with ID ${id} found` });
		}

		res.status(200).json({ status: "OK", count: diary.length, data: diary });
	} catch (error) {
		res.status(404).json({ status: "Error", message: error.message });
	}
};

const deleteDiary = async (req, res) => {
	try {
		const { id } = req.params;
		const diary = await Diary.findOneAndDelete({ _id: id });

		if (!diary) {
			return res.status(404).json({ msg: `No diary with ID ${id} found` });
		}
		res.status(200).json({ status: "OK", message: "data deleted" });
	} catch (error) {
		res.status(404).json({ status: "Error", message: error.message });
	}
};

const likeDiary = async (req, res) => {
	try {
		const { id } = req.params;

		const curr = await Diary.findOne({ _id: id });

		if (!curr) {
			return res.status(404).json({ msg: `No diary with ID ${id} found` });
		}
		const diary = await Diary.findOneAndUpdate(
			{ _id: id },
			{ likeCount: curr.likeCount + 1 },
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(200).json({ status: "OK", count: diary.length, data: diary });
	} catch (error) {
		res.status(404).json({ status: "Error", message: error.message });
	}
};

module.exports = {
	getDiaries,
	getDiary,
	createDiary,
	updateDiary,
	deleteDiary,
	likeDiary,
};
