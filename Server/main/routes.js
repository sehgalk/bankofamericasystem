var express = require('express')

var router = express.Router()


//HTTP Request
router.get('/hello', function (req, res ){
    res.json('Hello World')

})

module.exports = router
