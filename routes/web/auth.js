var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel');
const md5 = require('md5');
//注册
router.get('/reg', (req, res) => {
  //响应html内容
  res.render('auth/reg');
});

router.post('/reg', (req, res) => {
  //做表单验证
  //获取请求体数据
  UserModel.create({ ...req.body, password: md5(req.body.password) }, (err, data) => {
    if (err) {
      res.status(500).send('注册失败，请稍后再试');
      return
    }
    res.render('success', { msg: '注册成功', url: '/login' });
  });

});

module.exports = router;
