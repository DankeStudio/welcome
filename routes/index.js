var User = require('../models/db/user');
var supports = require('./../models/supports');

var grantUser = supports.grantUser;

module.exports = require('express').Router()
    .post('/login', function(req,res,next){
        var username = req.body.username;
        var password = req.body.password;
        console.log(req.body);
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
                            msg:'登录成功',
                            body:{}
                        });
                    }
                }
            }
        })
    })
    .post('/signup', function(req, res, next){
        var username = req.body.username;
        var password = req.body.password;

        if(!username || !password) {
            res.json({
                code: -1,
                msg: '有参数为空',
                body:{}
            });
        }
        else{
            var test = /^\d{11,}$/;
            if(!(test.test(username))){
                res.json({
                    code: -2,
                    msg: '用户名格式错误',
                    body:{}
                });
            }
            else{
                User.findOne({
                    username : username
                },function(err,doc){
                    if(err){
                        console.log(err);
                        res.json({
                            code: -3,
                            msg: '检验用户名时数据库错误'+err,
                            body: {}
                        });
                    }
                    else{
                        if(doc){
                            res.json({
                                code: -4,
                                msg: '用户名已存在',
                                body: {}
                            });
                        }
                        else{
                            new User({
                                username: username,
                                password: password
                            }).save(function(err, user){
                                if(err){
                                    console.log(err);
                                    res.json({
                                        code: -3,
                                        msg: '数据库错误'+err,
                                        body: {}
                                    });
                                }
                                else{
                                    user.password = null;//hide the password
                                    req.session.user = user;//存入会话
                                    res.json({
                                        code: 0,
                                        msg: '注册成功',
                                        body: {}
                                    });
                                }
                            });
                        }
                    }
                })
            }
        }
    })
    //获取用户个人信息
    .get('/profile',grantUser)
    .get('/profile',function(req,res,next){
        var username = req.session.user.username;
        User.findOne({
            username: username
        }, function(err,user){
            if(err){
                res.json({
                    code : -1,
                    msg : '数据库出错 ' + err,
                    body: {}
                });
            }
            else {
                if(!user){
                    res.json({
                        code : -2,
                        msg:'查无此人',
                        body:{}
                    });
                }
                else{
                    res.json({
                        code : 0,
                        msg: 'ok',
                        body:{
                            user : user
                        }
                    });
                }
            }
        });
    })
    //修改个人信息
    .post('/profile',grantUser)
    .post('/profile',function(req,res,next){
        var username = req.session.user.username;
        var baseinfo = {
            name : req.body.name,
            sex : req.body.sex,
            origin :req.body.origin,
            nation : req.body.nation,
            schoolID : req.body.schoolID,
            politicalStatus : req.body.politicalStatus,
            telnumber :req.body.telnumber,
            telshort : req.body.telshort,
            email : req.body.email,
            qq : req.body.qq,
            major : req.body.majior,
            birth : req.body.birth,
            address : req.body.address
        };
        User.update({
            username : username
        }, { $set:{
            baseinfo : baseinfo
        }}, function(err){
            if(err){
                res.json({
                    code : -1,
                    msg : '数据库更新时出错 '+err,
                    body: {}
                });
            }
            else{
                res.json({
                    code : 0,
                    msg : 'ok',
                    body:{}
                });
            }
        })
    })


