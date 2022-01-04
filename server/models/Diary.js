const mongoose = require("mongoose");

const DiarySchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	message: {
		type: String,
		required: true,
	},
	creator: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Diary", DiarySchema);
