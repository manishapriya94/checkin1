var express = require('express');
var router = express.Router();

///* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

/* GET user listings */
router.get('/:id', function(req, res){
    var id = req.params.id;

    // TODO: Determine if user exists and display their logs
    console.log('User with ID ' + id + ' viewing their logs.');
    res.send('Display log ejs template here!');
});

module.exports = router;
