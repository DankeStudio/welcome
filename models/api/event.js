/**
 * Created by admin on 2016/7/25.
 */
var Event = require('../db/event');
var Form = require('../db/form');
var Org = require('../db/org');
var date = require('../support/date');

exports.getEvent = (req, res, next) => {
	var username = req.session.org.username;
	Org.findOne({
		username: username
	}).then((org) => {
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
	}).then((events) => {
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
	}).catch((err) => {
		if (err.code < 0) {
			res.json(err);
		} else {
			res.json({
				code: -2,
				msg: '数据库未知错误',
				body: {}
			});
		}
	})
}

exports.getRecentCount = (req, res, next) => {
	var counts = [];
	var eventID = req.query.eventID;
	var dateNum = req.query.num;
	var dates = date.getDates(dateNum);
	console.log(dates);
	Form.find({
			eventID: eventID,
		})
		.then((forms) => {
			console.log(forms);
			for (var i = 0; i < dates.length; i++) {
				counts[i] = 0;
			}
			for(form of forms){
				var index;
				index=date.indexOfDate(form.date,dates);
				if(index>=0){
					counts[index]++;
				}
			}
			for (var i = 0; i < dates.length; i++) {
				dates[i] = `${dates[i].getMonth()}.${dates[i].getDate()}`
			}
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					data: {
						labels: dates,
						counts: counts
					}
				}
			})
		})
		.catch((err) => {
			res.json({
				code: -1,
				msg: '数据库未知错误',
				body: {}
			})
		})
}

exports.getAllCount = (req, res, next) => {
	var gender = {
			labels: ['男', '女', '全体'],
			counts: []
		},
		department = {
			labels: [],
			counts: []
		};
	var eventID = req.query.eventID;
	Event.findOne({
			eventID: eventID
		})
		.then((event) => {
			if (event) {
				department.labels = event.formschema.wish.option;
				for (var i = 0; i < department.labels.length; i++) {
					department.counts[i] = 0;
				}
				return Form.find({
					eventID: eventID
				})
			} else {
				throw {
					code: -1,
					msg: '事件不存在',
					body: {}
				}
			}
		})
		.then((forms) => {
			for (i = 0; i < gender.labels.length; i++) {
				gender.counts[i] = 0;
			}
			for (form of forms) {
				if (form.baseinfo.sex === '男') {
					gender.counts[0]++;
				} else {
					gender.counts[1]++;
				}
				for (wish of form.wish.chosen) {
					department.counts[department.labels.indexOf(wish)]++;
				}
				gender.counts[2]++;
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						gender: gender,
						department: department
					}
				})
			}
		})
		.catch((err) => {
			console.log(err);
			if (err.code < 0) {
				res.json(err);
			} else {
				res.json({
					code: -2,
					msg: '数据库未知错误',
					body: {}
				})
			}
		})
}