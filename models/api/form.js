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
	var first = true;//当已登录 或 原先存在账号时 不将报名表信息存入个人资料
	var _form = formFilter(req);

	//提交报名表过程定义
	var create = function() {
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
				//将报名表信息同步到个人资料
				if(first){
					return User.findOneAndUpdate({
						_id: req.session.user._id
					}, {
						$set: {
							baseinfo: _form.baseinfo
						}
					}, {
						new: true
					});
				}
				else{
					return User.findOne({
						_id: req.session.user._id
					});
				}
			})
			.then((user) => {
				//更新session
				user.password = null; //hide the password
				req.session.user = user; //存入会话
				//console.log(req.session.user);
				var departments = _form.wish.chosen;
				var promises = [];
				if (!user) {
					throw {
						code: -1,
						msg: '将报名表关联账号时用户查无此人！',
						body: {}
					};
				} else {
					// 增加 全部部门 条目
					if (departments.indexOf('全部部门') < 0) {
						departments.push('全部部门');
					}
					//console.log(departments);
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
									state: '通过'
								}
							}
						}));
					}
					return Promise.all(promises);
				}
			})
			.then((interviews) => {
				if (interviews.length != 1 || interviews[0] != null) {
					res.json({
						code: 0,
						msg: '提交报名表成功!',
						body: {
							update: interviews.length
						}
					});
				} else {
					throw {
						code: -2,
						msg: '没有符合条件的事件',
						body: {}
					};
				}
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

	//验证是否登陆
	if(req.session.user){//已登陆
		first = false;
		create();
	}
	else{//未登录
		User.findOne({
			username:_form.baseinfo.telnumber
		},function(err, user){
			if(user){//存在账号
				user.password = null; //hide the password
				req.session.user = user; //存入会话
				first = false;//原先已存在账号 不将报名表信息存入个人基本资料
				create();
			}
			else{//不存在账号 则注册
				var username = _form.baseinfo.telnumber;
				var password = _form.baseinfo.schoolID;
				new User({
					username: username,
					password: password
				}).save(function(err, user) {
					if (err) {
						console.log(err);
					} else {
						user.password = null; //hide the password
						req.session.user = user; //存入会话
					}
					create();
				});
			}
		});
	}
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
			eventID: eventID,
			delete: false
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

//导出报名表 发送所有符合条件的报名表数据
exports.output = (req, res, next) => {
	var eventID = Number(req.query.eventID);
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
			eventID: eventID,
			delete: false
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

//删除报名表
exports.delete = (req, res, next) => {
	var formRet;
	Form.findOneAndUpdate({
			_id: req.body.id
		}, {
			$set: {
				delete: true
			}
		})
		//删除报名表对应的面试信息
		.then((form) => {
			var orgID = req.session.org._id;
			var eventID = form.eventID;
			var telnumber = form.baseinfo.telnumber;
			console.log(telnumber);
			formRet = form;
			if (form) {
				return Interview.update({
					orgID: orgID,
					eventID: eventID
				}, {
					$pull: {
						interviewer: {
							telnumber: telnumber
						}
					}
				}, {
					multi: true
				});
			} else {
				throw {
					code: -1,
					msg: '报名表不存在',
					body: {}
				}
			}
		})
		.then(() => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					form: formRet
				}
			});
		})
		.catch((err) => {
			if (err.code < 0) {
				res.json(err);
			} else {
				res.json({
					code: 1,
					msg: '数据库更新时出错 ' + err,
					body: {}
				});
			}
		})
}