const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

let app = express()

app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}))

router(app)

app.listen(3000, () => {
    console.log('estamos en el puerto 3000');
})