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

//登录操作
router.get('/login', (req, res) => {
  //响应html内容
  res.render('auth/login');
});


router.post('/login', (req, res) => {
  //获取用户名和密码
  let { username, password } = req.body;
  //查询数据库
  UserModel.findOne({ username: username, password: md5(password) }, (err, data) => {
    //判断
    console.log(username);
    if (err) {
      res.status(500).send('登录失败，请稍后再试');
      return
    }
    //判断data
    if (!data) {
      return res.send('账号或密码错误');
    }
    //写入session
    req.session.username = data.username;
    req.session._id = data.id;

    //登录成功响应
    res.render('success', { msg: '登录成功', url: '/account' });
  });
});

module.exports = router;
