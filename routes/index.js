var express = require('express');
var router = express.Router();

//记账本列表
router.get('/account', function(req, res, next) {
  res.render('list');
});

//调价记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', function(req, res, next) {
  console.log(req.body);
  res.send('添加记录');
});

module.exports = router;
