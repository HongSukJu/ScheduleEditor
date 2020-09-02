const express = require("express");
const router = express.Router();

const userRouter = require("./userController");

router.use("/user", userRouter);

module.exports = router;