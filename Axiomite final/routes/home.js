/**
 * Created by Ishan on 5/6/2016.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index');
});


module.exports = router;