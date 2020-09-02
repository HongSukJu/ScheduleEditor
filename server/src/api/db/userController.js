const express = require("express");
const router = express.Router();

const userModel = require("./model/user");

router.get("/", (req, res) => {
    userModel.find({}, (err, users) => {
        if (err) return res.json({
            message: "User 전체 조회실패."
        }).status(500);;
        res.json({
            users,
        });
    });
});

router.post("/", async (req, res) => {
    const {name, email, avatar_url} = req.body;
    const user = await userModel.findByEmail(email);

    if (user) return res.json({user});
    userModel.create(
        {
            name,
            email,
            avatar_url,
        },
        (err, createdUser) => {
            if (err) return res.json({
                message: "User 생성 실패."
            }).status(500);
            res.json({
                createdUser
            });
        }
    );
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    userModel.findById(id, (err, user) => {
        if (err) res.json({
            message: "User 조회 실패."
        }).status(500);
        else if (!user) res.json({
            message: "User 없음."
        });
        res.json({
            user
        });
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    userModel.findByIdAndRemove(id, (err, user) => {
        if (err) res.json({
            message: "User 삭제 실패."
        }).status(500);
        res.json({
            message: `${user.name} 삭제됨.`,
        });
    });
});

module.exports = router;
