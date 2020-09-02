const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    day: Number,
    title: String,
    subtitle: String
}, { _id: false });

const dayPointSchema = new mongoose.Schema({
    year: Number,
    month: Number,
    schedule: [scheduleSchema]
}, { _id: false });

/**
 * 날짜가 넘어가는경우는 어쩌지?
 * subtitle은 필요 없을듯.
 * 색깔?
 */

module.exports = dayPointSchema;