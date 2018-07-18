var express = require('express');
const shell = require('shelljs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Balevs Server' });
});
router.get('/go', function(req, res, next){
 shell.exec('../command');
 res.redirect('/');
})
module.exports = router;
