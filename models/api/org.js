/**
 * Created by admin on 2016/7/21.
 */
var Org = require('../db/org');
var Form= require('../db/form');

exports.login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    Org.findOne({
        username: username
    }, function(err, org) {
        if (err) {
            res.json({
                code: -1,
                msg: '登录中数据库错误,错误信息:' + err,
                body: {}
            });
        } else {
            if (!org) {
                res.json({
                    code: -2,
                    msg: '用户名不存在',
                    body: {}
                });
            } else {
                if (password != org.password) {
                    res.json({
                        code: -3,
                        msg: '用户名或密码错误',
                        body: {}
                    });
                } else {
                    org.password = null; //hide the password
                    req.session.org = org; //存入会话
                    res.json({
                        code: 0,
                        msg: '登陆成功',
                        body: {}
                    });
                }
            }
        }
    })
}

exports.signup = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var tel = req.body.tel;
    var name = req.body.name;
    var bossname = req.body.bossname;

    if (!username || !password || !tel || !name || !bossname) {
        res.json({
            code: -1,
            msg: '有参数为空',
            body: {}
        });
    } else {
        var test = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!(test.test(username))) {
            res.json({
                code: -2,
                msg: '用户名格式错误',
                body: {}
            });
        } else {
            Org.findOne({
                username: username
            }, function(err, doc) {
                if (err) {
                    console.log(err);
                    res.json({
                        code: -3,
                        msg: '检验用户名时数据库错误' + err,
                        body: {}
                    });
                } else {
                    if (doc) {
                        res.json({
                            code: -4,
                            msg: '用户名已存在',
                            body: {}
                        });
                    } else {
                        new Org({
                            username: username,
                            password: password,
                            tel: tel,
                            name: name,
                            bossname: bossname,
                            email: username
                        }).save(function(err, org) {
                            if (err) {
                                console.log(err);
                                res.json({
                                    code: -3,
                                    msg: '数据库错误' + err,
                                    body: {}
                                });
                            } else {
                                org.password = null; //hide the password
                                req.session.org = org; //存入会话
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
}

//从会话中获取组织信息
exports.getOrgInSession = (req, res, next) => {
    res.json({
        code: 0,
        msg: 'ok',
        body: {
            org: req.session.org
        }
    });
}

//获取报名表
exports.getForm = (req, res, next) => {
    var max = 10;
    var order = Number(req.query.order);
    var eventID = Number(req.query.eventID);
    var page = Number(req.query.page);
    var wish = req.query.wish;
    var query;
    //按时间升序
    if (order > 0) {
        order = 1
    }
    //按时间降序
    else {
        order = -1
    }

    if (wish === 'all') {
        query = Form.find({
            eventID: eventID
        })
    } else {
        wish = [wish];
        query = Form.find({
            eventID: eventID,
            wish: {
                chosen:{
                    $in: wish
                }
            }
        })
    }
    query = query.sort({
        date: order
    }).skip((page-1) * max).limit(max);
    query.exec()
        .then((forms) => {
            res.json({
                code: 0,
                msg: 'ok',
                body: {
                    forms: forms
                }
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
                code: -1,
                msg: '数据库错误',
                body: {}
            })
        })
}