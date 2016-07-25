var user = require('../models/api/user');
var form = require('../models/api/form');
var org = require('../models/api/org');
var event = require('../models/api/event');
var auth = require('../models/support/auth');
var filter = require('../models/support/filter');

var grantUser = auth.grantUser;
var grantOrg = auth.grantOrg;
var eventFilter = filter.eventFilter;

module.exports = require('express').Router()
	//user login
    .post('/user/login', user.login)

    //user signup
    .post('/user/signup', user.signup)

    //get user profile
    .get('/user/profile',grantUser)
    .get('/user/profile',user.getProfile)

    //update user profile
    .post('/user/profile',grantUser)
    .post('/user/profile',user.updateProfile)

    //synchronize user profile with http://jwbinfosys.zju.edu.cn/
    .post('/user/syncprofile',grantUser)
    .post('/user/syncprofile',user.syncProfile)

    //get user info in session
    .get('/user/session',user.getUserInSession)

    //organization login
    .post('/org/login', org.login)

    //organization signup
    .post('/org/signup', org.signup)

    //get org info in session
    .get('/org/session',org.getOrgInSession)

    //form submit
    //若未登录，由前端先发起注册请求，然后再发起提交请求
    .post('/form/submit', grantUser)
    .post('/form/submit', form.submit)

    //form design
    .post('/form/design', grantOrg)
    .post('/form/design', eventFilter)
    .post('/form/design', form.design)

    //get org events
    .get('/event',grantOrg)
    .get('/event',event.getEvent)