/**
 * Created by admin on 2016/8/2.
 */

var Message = require('../db/message');
exports.create = (req,res,next)=>{
	var message = req.body.message;
	message.orgID = req.session.org._id;
	Message.create(message)
	.then((message)=>{
		res.json({
			code:0,
			msg:'ok',
			body:{
				message:message
			}
		})
	})
	.catch((err)=>{
		res.json({
			code:1,
			msg:'数据库未知错误',
			body:{}
		})
	})
}

exports.delete = (req,res,next)=>{
	var messageID = req.body.messageID;
	Message.remove({_id:messageID})
	.then((message)=>{
		res.json({
			code:0,
			msg:'ok',
			body:{}
		})
	})
	.catch((err)=>{
		res.json({
			code:1,
			msg:'数据库未知错误',
			body:{}
		})
	})
}

exports.get = (req,res,next)=>{
	var orgID = req.query.orgID;
	//console.log(orgID);
	Message.find({orgID:orgID})
	.then((messages)=>{
		res.json({
			code:0,
			msg:'ok',
			body:{
				messages:messages
			}
		})
	})
	.catch((err)=>{
		res.json({
			code:1,
			msg:'数据库未知错误',
			body:{}
		})
	})
}