const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    dayPoint: {
        year: Number,
        month: Number
    },
});