const express = require("express");
const router = express.Router();

const authRouter = require("./auth/index");
const dbRouter = require("./db/index");

router.use("/auth", authRouter);
router.use("/db", dbRouter);

module.exports = router;