const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegisterInfo = new Schema({
    email: String,
    coursesRegistered: String,
    totalCost: Number
}, {
    versionKey: false
});

module.exports = mongoose.model('RegisterInfo', RegisterInfo)