/**
 * Created by admin on 2016/7/25.
 */
var Event = require('../db/event');
var Form = require('../db/form');
var Interview = require('../db/interview');
var Org = require('../db/org');
var date = require('../support/date');

exports.create = (req, res, next) => {
	var event = req.body.event;
	var orgID = event.orgID = req.session.org._id;
	var eventRet;
	if (!event || !event.eventID) {
		res.json({
			code: -1,
			msg: '报名表有误',
			body: {}
		});
	} else {
		//将event存入数据库中
		Event.create(event)
			//按照部门创建面试
			.then((event) => {
				//console.log(event);
				var docs = [];
				var option = event.formschema.wish.option;
				eventRet = event;
				//增加 全部部门 条目
				if (option.indexOf('全部部门') < 0) {
					option.push('全部部门');
				}
				for (department of option) {
					docs.push({
						orgID: orgID,
						eventID: event.eventID,
						department: department,
						round: 0
					});
				}
				return Interview.insertMany(docs);
			})
			.then((interviews) => {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						interviews: interviews,
						event: eventRet
					}
				})
			})
			.catch((err) => {
				//console.log(err);
				if (code.err < 0) {
					res.json(err);
				} else {
					res.json({
						code: 1,
						msg: '数据库未知错误',
						body: {}
					});
				}

			})

		/*Org.findOne({
		    _id:req.session.organization._id
		}, function(err, organization){
		    if(err){
		        res.json({
		            code:-1,
		            msg:'查找社团时数据库错误' + err,
		            body:{}
		        });
		    }
		    else{
		        if(!organization){
		            res.json({
		                code:-2,
		                msg:'将事项添加入社团时用户查无此号',
		                body:{}
		            });
		        }
		        else{
		            organization.events.push(event);
		            organization.save(function(err){
		                if(err){
		                    res.json({
		                        code: -1,
		                        msg: '将事项添加入社团时数据库出错' + err,
		                        body: {}
		                    });
		                }
		                else{
		                    res.json({
		                        code: 0,
		                        msg: '添加事项成功!',
		                        body: {}
		                    });
		                }
		            });
		        }
		    }
		});*/
	}
}

exports.delete = (req, res, next) => {
	var eventID = req.body.eventID;
	var orgID = req.session.org._id;
	if (!eventID || !orgID) {
		res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Event.remove({
			orgID: orgID,
			eventID: eventID
		})
		.then(() => {
			return Interview.remove({
				orgID: orgID,
				eventID: eventID
			})
		})
		.then(() => {
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
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				});
			}
		})
}
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
				}).sort({
					date: -1
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
					code: 1,
					msg: '数据库未知错误',
					body: {}
				});
			}
		})
}

exports.getRecentEvent = (req, res, next) => {
	Event.aggregate([
     	{$limit:5},
     	{$sort:{date:-1}}
	])
	.then((events) => {
		var results = [];
		for (event of events) {
			results.push({
				eventID: event.eventID,
				name: event.name,
				wishes: event.formschema.wish.option,
				date: event.date.getTime()
			})
		}
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
				code: 1,
				msg: '数据库未知错误',
				body: {}
			});
		}
	})
}

exports.getEventByID = (req, res, next) => {
	var eventID = req.query.eventID;
	//console.log(eventID);
	Event.findOne({
		eventID: eventID
	}).then((event) => {
		if (!event) {
			res.json({
				code: -1,
				msg: '报名事项不存在',
				body: {}
			})
		} else {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					event: event
				}
			})
		}
	}).catch((err) => {
		if (err.code < 0) {
			res.json(err);
		} else {
			res.json({
				code: 1,
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
	//console.log(req);
	//console.log(req.body);
	//console.log(req.query);
	//console.log(req.query.eventID);
	//console.log(eventID);
	//console.log(dates);
	Form.find({
			eventID: eventID,
			delete: false
		})
		.then((forms) => {
			//console.log(forms);
			for (var i = 0; i < dates.length; i++) {
				counts[i] = 0;
			}
			for (form of forms) {
				var index;
				index = date.indexOfDate(form.date, dates);
				if (index >= 0) {
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
				code: 1,
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
					eventID: eventID,
					delete: false
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
				console.log(form);
				if (form.baseinfo.sex === '男') {
					gender.counts[0]++;
				} else {
					gender.counts[1]++;
				}
				for (wish of form.wish.chosen) {
					department.counts[department.labels.indexOf(wish)]++;
				}
				gender.counts[2]++;
			}
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					gender: gender,
					department: department
				}
			})
		})
		.catch((err) => {
			//console.log(err);
			if (err.code < 0) {
				res.json(err);
			} else {
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				})
			}
		})
}