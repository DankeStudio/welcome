var User = require('../db/user');
var jwbCrawler = require("../crawler/jwbCrawler.js");
var props = ["name", "sex", "origin", "nation", "schoolID", "politicalStatus", "telnumber", "telshort", "email", "qq", "major", "birth", "address", "img", "grade"];

exports.login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            res.json({
                code: -1,
                msg: '登录中数据库错误,错误信息:' + err,
                body: {}
            });
        } else {
            if (!user) {
                res.json({
                    code: -2,
                    msg: '用户名不存在',
                    body: {}
                });
            } else {
                if (password != user.password) {
                    res.json({
                        code: -3,
                        msg: '用户名或密码错误',
                        body: {}
                    });
                } else {
                    user.password = null; //hide the password
                    req.session.user = user; //存入会话
                    res.json({
                        code: 0,
                        msg: '登录成功',
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

    if (!username || !password) {
        res.json({
            code: -1,
            msg: '有参数为空',
            body: {}
        });
    } else {
        var test = /^\d{11,}$/;
        if (!(test.test(username))) {
            res.json({
                code: -2,
                msg: '用户名格式错误',
                body: {}
            });
        } else {
            User.findOne({
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
                        new User({
                            username: username,
                            password: password
                        }).save(function(err, user) {
                            if (err) {
                                console.log(err);
                                res.json({
                                    code: -3,
                                    msg: '数据库错误' + err,
                                    body: {}
                                });
                            } else {
                                user.password = null; //hide the password
                                req.session.user = user; //存入会话
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

//获取用户个人信息
exports.getProfile = (req, res, next) => {
    var username = req.session.user.username;
    User.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            res.json({
                code: -1,
                msg: '数据库出错 ' + err,
                body: {}
            });
        } else {
            if (!user) {
                res.json({
                    code: -2,
                    msg: '查无此人',
                    body: {}
                });
            } else {
                res.json({
                    code: 0,
                    msg: 'ok',
                    body: {
                        user: user
                    }
                });
            }
        }
    });
}

//修改个人信息
exports.updateProfile = (req, res, next) => {
    var username = req.session.user.username;
    var baseinfo = {};
    for (prop of props) {
        if (req.body[prop]) {
            baseinfo[prop] = req.body[prop];
        }
    }
    User.findOne({
            username: username
        })
        .then((user) => {
            if (!user) {
                throw {
                    code: -2,
                    msg: '本地不存在该用户',
                    body: {}
                };
            } else {
                for (prop of props) {
                    if (req.body[prop]) {
                        user.baseinfo[prop] = req.body[prop];
                    }
                }
                return user.save();
            }
        })
        .then((user) => {
            res.json({
                code: 0,
                msg: 'ok',
                body: {
                    user: user
                }
            });
        })
        .catch((err) => {
            console.log(err);
            if (err.code < 0) {
                res.json(err);
            } else {
                res.json({
                    code: 1,
                    msg: '数据库未知错误',
                    body: {}
                });
            }
        })
}

//同步教网信息
exports.syncProfile = (req, res, next) => {
    var jwbusr = req.body.jwbusr;
    var jwbpwd = req.body.jwbpwd;
    var username = req.session.user.username;
    var _info;
    jwbCrawler(jwbusr, jwbpwd)
        .then((info) => {
            //console.log(info);
            _info = info;
            if (info.schoolID === '') {
                throw {
                    code: -1,
                    msg: '教务网学号或密码错误',
                    body: {}
                }
            } else {
                return User.findOne({
                    username: username
                });
            }
        })
        .then((user) => {
            var info = _info;
            // throw error if user is not found in the database
            if (!user) {
                throw {
                    code: -2,
                    msg: '本地不存在该用户',
                    body: {}
                };
            } else {
                var props = ["name", "sex", "origin", "nation", "schoolID", "politicalStatus", "telnumber", "email", "qq", "major", "birth", "address"];
                for (prop of props) {
                    if (info[prop]) {
                        user.baseinfo[prop] = info[prop];
                    }
                }
                return user.save();
            }
        })
        .then((user) => {
            res.json({
                code: 0,
                msg: 'ok',
                body: {
                    user: user
                }
            });
        })
        .catch((err) => {
            console.log(err);
            if (err.code < 0) {
                res.json(err);
            } else {
                res.json({
                    code: 1,
                    msg: '数据库未知错误',
                    body: {}
                });
            }
        })
}

//logout
exports.logout = (req, res, next) => {
    req.session.user = null;
    res.json({
        code: 0,
        msg: 'ok',
        body: {}
    });
}

//从会话中获取用户信息
exports.getUserInSession = (req, res, next) => {
    res.json({
        code: 0,
        msg: 'ok',
        body: {
            user: req.session.user
        }
    });
}