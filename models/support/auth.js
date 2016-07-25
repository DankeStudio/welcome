/**
 * Created by admin on 2016/7/20.
 */
var modelIDs = require('../db/modelid');

module.exports = {
    grantUser: function(req,res,next){
        if(req.session.user){
            next();
        }
        else{
            res.json({
                code: 403,
                msg: '未登录！',
                body:{}
            });
        }
    },
    grantOrg: function(req,res,next){
        if(req.session.org){
            next();
        }
        else{
            res.json({
                code: 403,
                msg: '未登录！',
                body:{}
            });
        }
    }
}