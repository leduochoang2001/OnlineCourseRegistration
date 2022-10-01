const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model('Course', Course)