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
        unique : true,//为了支持第三方登陆，要求微信号唯一绑定
        sparse : true//稀疏索引，允许该字段虽然唯一但允许为空
    },
    baseinfo: {
        //2.0版本再补充
    },
    tableID: [String]
}));


