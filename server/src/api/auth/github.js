const express = require("express");
const router = express.Router();
const qs = require("querystring");
const axios = require("axios");

router.get("/", (req, res) => {
    const url = "https://github.com/login/oauth/authorize?";
    const query = qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        redirect_uri: process.env.GITHUB_CLIENT_REDIRECT_URI,
    });

    const getCodeUrl = url + query;

    res.json({
        url: getCodeUrl,
    });
});

router.get("/callback", (req, res) => {
    const {code} = req.query;

    const url = "https://github.com/login/oauth/access_token?";
    const query = qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: process.env.GITHUB_CLIENT_REDIRECT_URI,
    });

    const getTokenUrl = url + query;

    axios
        .post(getTokenUrl, {}, {
            headers: {Accept: "application/json"},
        })
        .then((axiosRes) => {
            const {access_token} = axiosRes.data;
            res.cookie("access_token", access_token, {
                maxAge: 1000 * 60 * 60,
            });
            res.json({
                access_token,
            });
        });
});

router.get("/user", (req, res) => {
    const { access_token } = req.query;

    const url = "https://api.github.com/user";

    axios
        .get(url, {
            headers: {Authorization: `token ${access_token}`},
        })
        .then((axiosRes) => {
            res.json(
                axiosRes.data
            );
        });
});

module.exports = router;
