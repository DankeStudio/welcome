/**
 * Created by admin on 2016/7/20.
 */
var Forms = require('../model/form');
var User = require('../model/user');
var supports = require('./supports');

var grantUser = supports.grantUser;
var formFilter = supports.formFilter;

module.exports = require('express').Router()
    //若未登录，由前端先发起注册请求，然后再发起提交请求
    .post('/submit', grantUser)
    .post('/submit', function(req,res,next){
        var form = formFilter(req);
        Forms.create(form,function(err, form){
           if(err){
               res.json({
                   code: -1,
                   msg: '提交报名表时数据库错误 ' + err,
                   body: {}
               });
           }
           else{
               //添加报名表ID至个人账号
               User.findOne({
                   _id:req.session.user._id
               }, function(err, user){
                   if(err){
                       res.json({
                           code:-1,
                           msg:'将报名表关联账号时查找用户数据库错误' + err,
                           body:{}
                       });
                   }
                   else{
                       if(!user){
                           res.json({
                               code:-2,
                               msg:'将报名表关联账号时用户查无此人！' + err,
                               body:{}
                           });
                       }
                       else{
                           user.formID.push(form._id);
                           user.save(function(err){
                               if(err){
                                   res.json({
                                       code: -1,
                                       msg: '将ID存入账号时数据库出错' + err,
                                       body: {}
                                   });
                               }
                               else{
                                   res.json({
                                       code: 0,
                                       msg: '提交报名表成功!',
                                       body: {}
                                   });
                               }
                           })
                       }
                   }
               });
           }
        });
    })