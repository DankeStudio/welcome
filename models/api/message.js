/**
 * Created by admin on 2016/8/2.
 */

var Message = require('../db/message');
var Interview = require('../db/interview');
var Org = require('../db/org');
var sendMsg = require('../support/sendMsg');

exports.create = (req, res, next) => {
	var interviewID = req.body.interviewID;
	var contact = req.body.contact;
	var state = req.body.state;
	var org = req.session.org;
	var _message;

	if (state != '未面试' && state != '未通过') {
		return res.json({
			code: -2,
			msg: 'state参数不合法',
			body: {}
		})
	}

	Interview.findOne({
			_id: interviewID,
			orgID: org._id
		})
		.then((interview) => {
			if (interview) {
				return sendMsg(state, interview, {
					org: org.name,
					contact: contact
				})
			} else {
				throw {
					code: -1,
					msg: '面试不存在',
					body: {}
				}
			}
		})
		.then((body) => {
			var fee = 0;
			console.log(body);
			if (body.code) {
				// error handler
				throw {
					code: -3,
					msg: '短信发送错误:' + body.msg,
					body: {
						detail: body.detail
					}
				}
			} else {
				for (var i = 0; i < body.length; i++) {
					fee += body[i].result.fee;
				}
				return Message.create({
					orgID: org._id,
					interviewID: interviewID,
					receiver: body.receivers,
					fee: fee,
					date: new Date()
				})
			}
		})
		.then((message) => {
			_message = message;
			// 扣除金钱
			return Org.findOneAndUpdate({
				_id: org._id
			}, {
				$inc: {
					money: -message.fee
				}
			}, {
				new: true
			});
		})
		.then((org) => {
			console.log(org);
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					message: _message,
					money: org.money
				}
			});
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				console.log(err);
				res.json({
					code: 1,
					msg: '未知错误' + err,
					body: {}
				})
			}
		})
}

exports.delete = (req, res, next) => {
	var orgID = req.session.org._id;
	var messageID = req.body.messageID;
	var department = req.body.department;
	var query;
	query = Message.remove({
		orgID: orgID
	});
	if (messageID) {
		query = query.where({
			_id: messageID
		});
	}
	if (department) {
		query = query.where({
			department: department
		});
	}
	query.then((message) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {}
			})
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				//console.log(err);
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				})
			}
		})
}

exports.get = (req, res, next) => {
	var orgID = req.session.org._id;
	var messageID = req.query.messageID;
	var department = req.query.department;
	var query;
	//console.log(orgID);
	query = Message.find({
		orgID: orgID
	});
	if (messageID) {
		query = query.where({
			_id: messageID
		});
	}
	if (department) {
		query = query.where({
			department: department
		});
	}
	query.then((messages) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					messages: messages
				}
			})
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				//console.log(err);
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				})
			}
		})
}

exports.updateReceiver = (req, res, next) => {
	var messageID = req.body.messageID;
	var receiverID = req.body.receiverID;
	var reply = req.body.reply;
	Message.findOne({
			_id: messageID,
		})
		.then((message) => {
			var flag = false;
			if (message) {
				for (var i = 0; i < message.receiver.length; i++) {
					if (message.receiver[i]._id == receiverID) {
						message.receiver[i].reply = reply;
						flag = true;
						break;
					}
				}
				if (flag) {
					return message.save();
				} else {
					throw {
						code: -2,
						msg: '接受者不存在',
						body: {}
					}
				}
			} else {
				throw {
					code: -1,
					msg: '消息不存在',
					body: {}
				}
			}
		})
		.then((message) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					message: message
				}
			});
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				//console.log(err);
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				})
			}
		})
}