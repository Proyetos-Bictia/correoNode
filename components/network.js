const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.post('/',(req,res) => {
    controller.sendEmail(req.body).then(data => {
        res.status(200).send({
            statusCode: 200,
            error: '',
            message: data
        })
    }).catch(e =>{
        res.status(500).send({
            statusCode: 500,
            error: e,
            message:''
        })
    })
})

module.exports = router;