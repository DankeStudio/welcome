var User = require('../model/user');

module.exports = require('express').Router()
    .post('/login', function(req,res,next){
        var username = req.body.username;
        var password = req.body.password;

        User.findOne({
            username : username
        },function(err,user){
            if(err) {
                res.json({
                    code: -1,
                    msg:'登录中数据库错误,错误信息:'+err,
                    body:{}
                });
            }
            else{
                if(!user){
                    res.json({
                        code: -2,
                        msg:'用户名不存在',
                        body:{}
                    });
                }
                else{
                    if(password != user.password){
                        res.json({
                            code: -3,
                            msg:'用户名或密码错误',
                            body:{}
                        });
                    }
                    else{
                        user.password = null;//hide the password
                        req.session.user = user;//存入会话
                        res.json({
                            code: 0,
                            msg:'登陆成功',
                            body:{}
                        });
                    }
                }
            }
        })
    });

