/**
 * Created by admin on 2016/8/2.
 */

var Message = require('../db/message');
exports.create = (req, res, next) => {
	var message = req.body.message;
	message.orgID = req.session.org._id;
	Message.create(message)
		.then((message) => {
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
				//console.log(err);
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
	var orgID = req.session.org._id;
	var messageID = req.body.messageID;
	var receivers = req.body.receivers;
	Message.findOne({
			orgID: orgID,
			_id: messageID
		})
		.then((message) => {
			var oldReceivers = message.receiver;
			if (message) {
				for (receiver of receivers) {
					for (index in oldReceivers) {
						if (receiver.telnumber === oldReceivers[index].telnumber && receiver.reply) {
							oldReceivers[index].reply = receiver.reply;
						}
					}
				}
				return message.save();
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