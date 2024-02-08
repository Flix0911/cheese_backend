//import dependencies
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const CheeseRouter = require('./controllers/cheese')

//create app
const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/cheese', CheeseRouter)

//route to show it is working
app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Running on port ${PORT}`))