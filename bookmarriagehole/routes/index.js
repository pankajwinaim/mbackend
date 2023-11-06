var express = require('express');
var router = express.Router();
var dbConn  = require('../common/db.config');

/* GET home page. */
router.get('/', function(req, res, next) {
          res.send('heelo testing');
});

/* GET home page. */
router.get('/admin', function(req, res, next) {
  dbConn.query('SELECT * FROM admin ORDER BY id desc',function(err,rows)     {
      if(err) {
          // render to views/users/index.ejs
          res.json('users');
      } else {
          // render to views/users/index.ejs
          res.json(rows);
      }
  });
});
module.exports = router;
