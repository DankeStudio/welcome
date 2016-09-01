/**
 * Created by admin on 2016/8/2.
 */

var Message = require('../db/message');

exports.create = (req, res, next) => {
	var message = req.body.message;
	message.orgID = req.session.org._id;
	Message.create(message)
		.then((message) => {
			// 删除_id
			for (var i = 0; i < message.receiver.length; i++) {
				message.receiver[i]._id=null;
			}

			res.json({
				code: 0,
				msg: 'ok',
				body: {
					message: message
				}
			})
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				console.log(err);
				res.json({
					code: 1,
					msg: '数据库未知错误',
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
			// 删除_id
			for (i in messages) {
				for (j in messages[i].receiver) {
					messages[i].receiver[j]._id=null;
				}
			}

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
			// 删除_id
			for (var i = 0; i < message.receiver.length; i++) {
				message.receiver[i]._id=null;
			}

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