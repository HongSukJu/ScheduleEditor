const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");

const app = express();
app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use("/auth", authRouter);
app.use(history());
app.use("/", indexRouter);

const port = process.env.PORT | 4000;
app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`);
});