var user = require('../models/api/user');
var form = require('../models/api/form');
var org = require('../models/api/org');
var event = require('../models/api/event');
var interview = require('../models/api/interview');
var message = require('../models/api/message');
var auth = require('../models/support/auth');
var filter = require('../models/support/filter');
var qiniuFile = require('../models/api/qiniuFile');

var grantUser = auth.grantUser;
var grantOrg = auth.grantOrg;
var eventFilter = filter.eventFilter;

module.exports = require('express').Router()
	//user login
    .post('/user/login', user.login)

    //user signup
    .post('/user/signup', user.signup)

    //user logout
    .get('/user/logout', user.logout)

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

    //organization logout
    .get('/org/logout', org.logout)

    //get org info in session
    .get('/org/session',org.getOrgInSession)

    //get form
    .get('/form',grantOrg)
    .get('/form',form.getForm)

    //form output
    .get('/form/output',grantOrg)
    .get('/form/output',form.output)

    //delete form
    .post('/form/delete', grantOrg)
    .post('/form/delete', form.delete)

     //get form to write
    .get('/form/id', event.getEventByID)

    //form submit
    //若未登录，由前端先发起注册请求，然后再发起提交请求
    .post('/form/submit', grantUser)
    .post('/form/submit', form.submit)

    //form design
    .post('/form/design', grantOrg)
    .post('/form/design', eventFilter)
    .post('/form/design', event.create)

    //get org events
    .get('/event',grantOrg)
    .get('/event',event.getEvent)

    //get recent events
    .get('/event/recent',event.getRecentEvent)

    //create an event
    .post('/event/create',grantOrg)
    .post('/event/create',eventFilter)
    .post('/event/create',event.create)

    //delete an event and its interviews
    .post('/event/delete',grantOrg)
    .post('/event/delete',event.delete)

    //get event count data
    .get('/event/count/recent',grantOrg)
    .get('/event/count/recent',event.getRecentCount)

    //get event count data
    .get('/event/count/all',grantOrg)
    .get('/event/count/all',event.getAllCount)

    //get interview
    .get('/interview',grantOrg)
    .get('/interview',interview.get)

    //create a new interview
    .post('/interview/create',grantOrg)
    .post('/interview/create',interview.create)

    //delete a interview
    .post('/interview/delete',grantOrg)
    .post('/interview/delete',interview.delete)

    //add a new arrangment to the interview
    .post('/interview/arrangement/create',grantOrg)
    .post('/interview/arrangement/create',interview.createArrangement)

    //delete an arrangment in the interview
    .post('/interview/arrangement/delete',grantOrg)
    .post('/interview/arrangement/delete',interview.deleteArrangement)

    //update interviewer information in the interview schema
    .post('/interview/interviewer/update',grantOrg)
    .post('/interview/interviewer/update',interview.interviewerUpdate)

    //delete interviewer in the interview schema
    .post('/interview/interviewer/delete',grantOrg)
    .post('/interview/interviewer/delete',interview.interviewerDelete)

    //interview-all mode on
    .post('/interview/all/on',grantOrg)
    .post('/interview/all/on',interview.allModeOn)

    //interview-all mode off
    .post('/interview/all/off',grantOrg)
    .post('/interview/all/off',interview.allModeOff)

    //get messages using orgID
    .get('/message',grantOrg)
    .get('/message',message.get)

    //create a message
    .post('/message/create',grantOrg)
    .post('/message/create',message.create)

    //delete a message
    .post('/message/delete',grantOrg)
    .post('/message/delete',message.delete)

    //update message receiver
    .post('/message/receiver/update',message.updateReceiver)

    //qiniu storage
    .get('/uptoken', qiniuFile.uptoken)