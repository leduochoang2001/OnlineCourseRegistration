const port = 8080
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')

const Course = require('./models/Course')

//connect to database
db.connect()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/courses', (req, res) => {
    Course.find({}, function (err, docs) {
        if (!err) res.send(docs)
    });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})