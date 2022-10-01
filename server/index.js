const port = 8080
const express = require('express')
const app = express()
const cors = require('cors')


const courses = [
    {
        "id": 1,
        "name": "HTML Course",
        "description": "About HTML",
        "image": "https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/htm16157919239459.jpg",
        "price": 200
    },
    {
        "id": 2,
        "name": "CSS Course",
        "description": "About CSS",
        "image": "https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/css16209623842115.jpeg",
        "price": 300
    },
    {
        "id": 3,
        "name": "JavaScript Course",
        "description": "About JS",
        "image": "https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg",
        "price": 500
    },
    {
        "id": 4,
        "name": "BootStrap Course",
        "description": "About BS",
        "image": "https://mona.media/wp-content/uploads/2021/06/bootstrap.png",
        "price": 300
    },
    {
        "id": 5,
        "name": "NodeJs Course",
        "description": "About NodeJs",
        "image": "https://wiki.matbao.net/wp-content/uploads/2022/07/image-168-1024x576.png",
        "price": 600
    },
    {
        "id": 6,
        "name": "ReactJs Course",
        "description": "About ReactJs",
        "image": "https://wiki.tino.org/wp-content/uploads/2021/09/pasted-image-0.png",
        "price": 500
    }
]

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})