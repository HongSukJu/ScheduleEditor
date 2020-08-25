const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRouter = require("./routes/auth.js");

const app = express();
app.use(morgan());
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:8080' }));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);

const port = process.env.PORT | 4000;
app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`);
});