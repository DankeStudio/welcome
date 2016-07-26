/**
 * Created by admin on 2016/7/25.
 */
var Event = require('../db/event');
var Org = require('../db/org');

exports.getEvent = (req, res, next) => {
	var username = req.session.org.username;
	Org.findOne({
			username: username
		})
		.then((org) => {
			if (!org) {
				throw {
					code: -1,
					msg: '用户名不存在',
					body: {}
				}
			} else {
				return Event.find({
					orgID: org._id
				});
			}
		})
		.then((events) => {
			var results = [];
			for (event of events) {
				results.push({
					eventID: event.eventID,
					name: event.name,
					ym: `${event.date.getFullYear()}.${event.date.getMonth()}`
				})
			};
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					events: results
				}
			})
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				res.json({
					code: -2,
					msg: '数据库错误',
					body: {}
				});
			}
		})
}

exports.addCounter = (req, res, next) => {
	res.json({
		code: 0,
		msg: 'ok',
		body:{
			data:{
				labels:["9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7"],
				data: [10, 8, 5, 17, 20, 3, 25]
			}
		}
	});
}

exports.allCounter = (req, res, next) => {
	res.json({
		code: 0,
		msg: 'ok',
		body:{
			data1:{
				number: 400,
				male: 300,
				female:100
			},
			data2:{
				labels:["产品","设计","推广","前端","后端","运营","测试"],
				data:[25,19,15,15,13,8,5],

			}
		}
	});
}

