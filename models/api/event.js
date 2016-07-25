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
					_id: org._id
				});
			}
		})
		.then((events) => {
			var result = [];
			for (event of events) {
				result.push({
					eventID: event.eventID,
					name: event.name,
					date: event.date
				})
			};
			res.json({
				code: 0,
				msg: 'ok',
				body: result
			})
		})
		.catch((err)=>{
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