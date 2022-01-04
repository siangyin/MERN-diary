const express = require("express");
const router = express.Router();
const {
	getDiaries,
	getDiary,
	createDiary,
	updateDiary,
	deleteDiary,
	likeDiary,
} = require("../controllers/diariesController");

router.route("/").get(getDiaries).post(createDiary);
router.route("/:id").get(getDiary).patch(updateDiary).delete(deleteDiary);
router.route("/:id/likePost").patch(likeDiary);

module.exports = router;
