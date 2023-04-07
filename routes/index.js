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

module.exports = router;
