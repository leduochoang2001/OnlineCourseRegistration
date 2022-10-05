const port = 8080
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')

const Course = require('./models/Course')
const RegisterInfo = require('./models/RegisterInfo')

//connect to database
db.connect()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/courses', (req, res) => {
    Course.find({}, (err, docs) => {
        if (!err) res.send(docs)
    });
})

app.get('/registerinfo', (req, res) => {
    RegisterInfo.find({}, (err, docs) => {
        if (!err) res.send(docs)
    });
})

app.post('/registerinfo', (req, res) => {
    const data = req.body
    console.log(data)
    const info = new RegisterInfo(data)
    info.save()
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})