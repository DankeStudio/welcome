/**
 * Created by admin on 2016/7/18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('user', new Schema({
    username:{
        type: String,
        required: 'miss username',
        unique: true
    },
    password:{
        type: String,
        required: 'miss password'
    },
    wechatID:{
        type: String,
        unique : true//为了支持第三方登陆，要求微信号唯一绑定
    },
    baseinfo: {
        //2.0版本再补充
    },
    tableID: [String]
}));

/*
User.login = function(user, callback){

    if(!user.name || !user.password)//检查用户名和密码是否为空
    {
        return;
    }
    //检查用户名是否为空
    User.findOne({username:user.name},
        function(err,doc){
            if(err){
                return callback(0, err);//0表示登陆失败
            }
            else{
                if(!doc){
                    return callback(0, '用户名不存在！');
                }
                else{
                    if(doc.password == user.password){
                        return callback(1, "登陆成功！");
                    }
                    else{
                        return callback(0, "用户名或密码错误！");
                    }
                }
            }
        }
    );
}
*/
