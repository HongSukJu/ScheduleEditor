const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fallback = require("express-history-api-fallback");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const address = process.env.NODE_ENV === "production"
                    ? "https://hong-schedule-editor.herokuapp.com/"
                    : "http://localhost:8080";

const app = express();
app.use(morgan());
app.use(cors({ 
    origin: address,
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

const apiRouter = require("./api/index");
app.use("/api", apiRouter);

const root = __dirname + "/../dist";
app.use("/", express.static(root));
app.use(fallback('index.html', { root: root }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});