const express = require("express");
const router = express.Router();

const userModel = require("./model/user");

router.get("/", async (req, res) => {
    res.json({
        message: "User Id 필요."
    });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    userModel.findById(id, (err, user) => {
        if (err) return res.json({
            message: "User Schedule 찾기 실패."
        }).status(500);
        if (!user) return res.json({
            message: "User 없음."
        })
        res.json({
            schedule_items: user.schedule_items
        })
    });
});

router.post("/:id", async (req, res) => {
    const { email, year, month, schedule } = req.body;
    const user = await userModel.findByEmail(email);

    // userModel.findByIdAndUpdate(
    //     user._id,
    //     {
    //         $push: {
    //             schedule_items: {
    //                 year, month
    //             }
    //         }
    //     },
    //     { new: true },
    //     (err, updatedUser) => {
    //         if (err) return res.send(err);
    //         res.send(updatedUser);
    //     }
    // );
    /*
        들어온 아이템에 대하여 dayPoint가 없으면 생성해야함.
        그리고 push해주면됨.
    */
});

router.delete("/:id", async (req, res) => {
    /*
        들어온 아이템을 지우기.
    */
});

module.exports = router;
