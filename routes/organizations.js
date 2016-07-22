/**
 * Created by admin on 2016/7/21.
 */
var Organizations = require('../models/db/organizations');
var supports = require('./../models/supports');

module.exports = require('express').Router()
    .post('/login', function(req,res,next){
        var username = req.body.username;
        var password = req.body.password;

        Organizations.findOne({
            username : username
        },function(err, organization){
            if(err) {
                res.json({
                    code: -1,
                    msg:'登录中数据库错误,错误信息:'+err,
                    body:{}
                });
            }
            else{
                if(!organization){
                    res.json({
                        code: -2,
                        msg:'用户名不存在',
                        body:{}
                    });
                }
                else{
                    if(password != organization.password){
                        res.json({
                            code: -3,
                            msg:'用户名或密码错误',
                            body:{}
                        });
                    }
                    else{
                        organization.password = null;//hide the password
                        req.session.organization = organization;//存入会话
                        res.json({
                            code: 0,
                            msg:'登陆成功',
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
        var tel = req.body.tel;
        var name = req.body.name;
        var bossname = req.body.bossname;

        if(!username || !password || !tel || !name || !bossname) {
            res.json({
                code: -1,
                msg: '有参数为空',
                body:{}
            });
        }
        else{
            var test = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!(test.test(username))){
                res.json({
                    code: -2,
                    msg: '用户名格式错误',
                    body:{}
                });
            }
            else{
                Organizations.findOne({
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
                            new Organizations({
                                username: username,
                                password: password,
                                tel : tel,
                                name : name,
                                bossname : bossname,
                                email: username
                            }).save(function(err, organization){
                                if(err){
                                    console.log(err);
                                    res.json({
                                        code: -3,
                                        msg: '数据库错误'+err,
                                        body: {}
                                    });
                                }
                                else{
                                    organization.password = null;//hide the password
                                    req.session.organization = organization;//存入会话
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