var express = require('express')

var router = express.Router()
const db = require('./queries')

//HTTP Request
router.get('/hello', function (req, res ){
    res.json('Hello World')

})
router.get('/applications',db.getApplications)
router.get('/applications/:AppID',db.getApplicationByID)

module.exports = router
