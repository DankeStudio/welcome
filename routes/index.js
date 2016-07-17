var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '待建设' });
});

router.get('/login',function(req,res,next){
  res.render('login',{title:'Welcome'});
  //console.log("1");
});
router.post('/login',function(req,res,next){
  console.log(req.body.UserName);
  console.log("log");
  res.json({
    msg:'ok'
  });
});
module.exports = router;

