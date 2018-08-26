const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

require('./routes')(app, router)

app.listen(8080, function() {
    console.log('Listening on 8080')
})