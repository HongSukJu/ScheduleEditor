const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userModel = require("./model/user")

router.get("/", (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) return res.send("User 전체 조회 실패.");
        res.send(users);
    })
});

router.post("/", async (req, res) => {
    const { name, email, avatar_url } = req.body;
    if (await userModel.findByEmail(email)) return res.send("이미 있는 email.");

    userModel.create({
        name,
        email,
        avatar_url
    },
    (err, user) => {
        if (err) return res.send("User 생성 실패.");
        res.send(user);
    });
});

router.get("/:id", (req, res) => {
    userModel.findById(req.params.id, (err, user) => {
        if (err) return res.send("User 삭제 실패.");
        else if (!user) return res.send("User 없음.");
        res.send(user);
    });
});

router.delete("/:id", (req, res) => {
    userModel.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return res.send("User 삭제 실패");
        res.send(`${user.name} 삭제됨.`);
    });
});

module.exports = router;