const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    id: Number,
    name: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model('Course', Course)