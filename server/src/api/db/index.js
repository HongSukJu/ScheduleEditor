const express = require("express");
const router = express.Router();

const userRouter = require("./userController");
const scheduleRouter = require("./scheduleController");

router.use("/user", userRouter);
router.use("/schedule", scheduleRouter);

module.exports = router;
