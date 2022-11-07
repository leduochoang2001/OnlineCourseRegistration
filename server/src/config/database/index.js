const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hoangtn1:4olkOvEv5aRYm6jW@onlcr.kanlprq.mongodb.net/courses_dev?retryWrites=true&w=majority');
        console.log('Connect Successfully!')
    } catch (error) {
        console.log('Connect failure!')
    }
}

module.exports = { connect }