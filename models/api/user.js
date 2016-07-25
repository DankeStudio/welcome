var User = require('../db/user');

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
    var props = ["name", "sex", "origin", "nation", "schoolID", "politicalStatus", "telnumber", "telshort", "email", "qq", "major", "birth", "address"];
    var baseinfo = {};
    for (prop of props) {
        if (req.body[prop] != undefined) {
            baseinfo[prop] = req.body[prop];
        } else {
            baseinfo[prop] = null;
        }
    }
    User.update({
        username: username
    }, {
        $set: {
            baseinfo: baseinfo
        }
    }, function(err) {
        if (err) {
            res.json({
                code: -1,
                msg: '数据库更新时出错 ' + err,
                body: {}
            });
        } else {
            res.json({
                code: 0,
                msg: 'ok',
                body: {}
            });
        }
    })
}

//同步教网信息
exports.syncProfile = (req, res, next) => {
    var username = req.body.username;
    var jwbpwd = req.body.jwbpwd;
    jwbCrawler(username, jwbpwd)
        .then((info) => {
            //console.log(info);
            if (info.schoolID === '') {
                throw {
                    code: -1,
                    msg: '学号或密码错误',
                    body: {}
                }
            } else {
                var user = {
                    baseinfo: {
                        name: info.name,
                        sex: info.sex,
                        origin: info.origin,
                        nation: info.nation,
                        schoolID: info.schoolID,
                        politicalStatus: info.politicalStatus,
                        telnumber: info.telnumber,
                        email: info.email,
                        qq: info.qq,
                        major: info.major,
                        birth: info.birth,
                        address: info.address
                    }
                };
                return User.update({
                    username: username
                }, {
                    $set: user
                });
            }
        })
        .then((result) => {
            //console.log(result);
            // throw error if user is not found in the database
            if (!result.n) {
                throw {
                    code: -2,
                    msg: '本地不存在该用户',
                    body: {}
                };
            } else {
                res.json({
                    code: 0,
                    msg: 'ok',
                    body: {}
                });
            }
        })
        .catch((err) => {
            if (err.code < 0) {
                res.json(err);
            } else {
                res.json({
                    code: -3,
                    msg: '数据库错误',
                    body: {}
                });
            }
        })
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