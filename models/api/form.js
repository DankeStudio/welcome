/**
 * Created by admin on 2016/7/20.
 */
var Form = require('../db/form');
var Event = require('../db/event');
var User = require('../db/user');
var Org = require('../db/org');
var Interview = require('../db/interview');
var filter = require('../support/filter');

var formFilter = filter.formFilter;
var eventFilter = filter.eventFilter;

exports.submit = (req, res, next) => {
	var _form = formFilter(req);
	Form.create(_form)
		.then((form) => {
			_form = form;
			//添加报名表ID至个人账号
			return User.findOneAndUpdate({
				_id: req.session.user._id
			}, {
				$addToSet: {
					formID: form._id
				}
			});
		})
		.then((user) => {
			var departments = _form.wish.chosen;
			var promises = [];
			if (!user) {
				throw {
					code: -1,
					msg: '将报名表关联账号时用户查无此人！',
					body: {}
				};
			} else {
				// 添加面试者至0轮面试
				for (department of departments) {
					promises.push(Interview.findOneAndUpdate({
						eventID: _form.eventID,
						department: department,
						round: 0
					}, {
						$addToSet: {
							interviewer: {
								telnumber: _form.baseinfo.telnumber,
								name: _form.baseinfo.name,
								state: '未通过'
							}
						}
					}));
					return Promise.all(promises);
				}
			}
		})
		.then((interviews) => {
			res.json({
				code: 0,
				msg: '提交报名表成功!',
				body: {
					update: interviews.length
				}
			});
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
				});
			}
		});
}


//获取报名表
exports.getForm = (req, res, next) => {
	var max = 10;
	var name = req.query.name;
	var telnumber = req.query.telnumber;
	var order = Number(req.query.order);
	var eventID = Number(req.query.eventID);
	var page = Number(req.query.page);
	var wish = req.query.wish;
	var query;
	//check eventID
	if (!eventID) {
		return res.json({
			code: -1,
			msg: '需要参数eventID',
			body: {}
		})
	}
	//初始query
	query = Form.find({
			eventID: eventID
		})
		//deal with wish
	if (wish) {
		wish = [wish];
		query = query.where({
			'wish.chosen': {
				$in: wish
			}
		})
	}
	//deal with name
	if (name) {
		query = query.where({
			"baseinfo.name": name
		})
	}
	//deal with telnumber
	if (telnumber) {
		query = query.where({
			"baseinfo.telnumber": telnumber
		})
	}
	//deal with date order, -1 by default
	if (order > 0) {
		order = 1
	} else {
		order = -1
	}
	query = query.sort({
			date: order
		})
		//deal with page, 10 forms in one page
	if (page) {
		query = query.skip((page - 1) * max).limit(max);
	}

	query.then((forms) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					forms: forms
				}
			})
		})
		.catch((err) => {
			//console.log(err);
			res.json({
				code: -2,
				msg: '数据库未知错误',
				body: {}
			})
		})
}