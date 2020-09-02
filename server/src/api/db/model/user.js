const mongoose = require("mongoose");
const dayPointSchema = require("./schedule");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    avatar_url: String,
    schedule_items: [dayPointSchema]
});

const userModel = mongoose.model("User", userSchema);

userModel.findByEmail = function(email) {
    return this.findOne({ email }).exec();
}

module.exports = userModel;