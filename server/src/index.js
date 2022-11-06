const port = 8080
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')
const path = require('path');

const Course = require('./models/Course')
const RegisterInfo = require('./models/RegisterInfo')

// const nodemailer = require('nodemailer')

//mailing

//connect to database
db.connect()

//routing
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'))

    app.get('*', (res, req) => {
        res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'))
    })

}

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})