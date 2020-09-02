const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    avatar_url: String,
    schdule_items: Object
});

const userModel = mongoose.model("User", userSchema);

userModel.findByEmail = function(email) {
    return this.findOne({ email }).exec();
}

module.exports = userModel;