const express = require("express");
const router = express.Router();
const qs = require("querystring");
const rs = require("randomstring");
const axios = require("axios");

let state;

router.get("/github", (req, res) => {
    state = rs.generate();

    const url = "https://github.com/login/oauth/authorize?";
    const query = qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        redirect_uri: process.env.GITHUB_CLIENT_REDIRECT_URI,
        state: state,
        score: "user:email",
    });

    const githubAuthUrl = url + query;

    res.json({
        url: githubAuthUrl,
    });
});

router.get("/github/callback", (req, res) => {
    const {code: returnCode, state: returnState} = req.query;

    if (state != returnState) {
        res.json({
            status: 500,
            message: "State is incorrect.",
        });
    }
    const url = "https://github.com/login/oauth/access_token?";
    const query = qs.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: returnCode,
        redirect_uri: process.env.GITHUB_CLIENT_REDIRECT_URI,
        state: state,
    });

    const githubAuthUrl = url + query;

    axios
        .post(githubAuthUrl, null, {
            headers: { Accept: "application/json" },
        })
        .then((postRes) => {
            const token = postRes.data.access_token;
            res.redirect("/?token=" + token);
        });
});

module.exports = router;
