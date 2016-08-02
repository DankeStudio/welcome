/**
 * Created by admin on 2016/7/20.
 */
var Form = require('../db/form');
var Event = require('../db/event');
var User = require('../db/user');
var Org = require('../db/org');
var filter = require('../support/filter');

var formFilter = filter.formFilter;
var eventFilter = filter.eventFilter;

exports.submit = (req, res, next) => {
	var form = formFilter(req);
	Form.create(form, function(err, form) {
		if (err) {
			res.json({
				code: -1,
				msg: '提交报名表时数据库错误 ' + err,
				body: {}
			});
		} else {
			//添加报名表ID至个人账号
			User.findOne({
				_id: req.session.user._id
			}, function(err, user) {
				if (err) {
					res.json({
						code: -1,
						msg: '将报名表关联账号时查找用户数据库错误' + err,
						body: {}
					});
				} else {
					if (!user) {
						res.json({
							code: -2,
							msg: '将报名表关联账号时用户查无此人！',
							body: {}
						});
					} else {
						user.formID.push(form._id);
						user.save(function(err) {
							if (err) {
								res.json({
									code: -1,
									msg: '将ID存入账号时数据库出错' + err,
									body: {}
								});
							} else {
								res.json({
									code: 0,
									msg: '提交报名表成功!',
									body: {}
								});
							}
						})
					}
				}
			});
		}
	});
}
exports.design = (req, res, next) => {
	var event = req.body.event;
	event.orgID = req.session.org._id;
	//console.log(event);
	if (!event) {
		res.json({
			code: -3,
			msg: '报名表有误',
			body: {}
		});
	} else {
		//将event存入数据库中
		Event.create(event, function(err, event) {
			if (err) {
				res.json({
					code: -1,
					msg: '存储事项时数据库错误 ' + err,
					body: {}
				});
			} else {
				res.json({
					code: 0,
					msg: '提交成功',
					body: {}
				})
			}
		});

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
    if (!eventID){
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
    if (wish){
        wish = [wish];
        query = query.where({
            'wish.chosen': {
                $in: wish
            }
        })
    }
    //deal with name
    if (name){
    	query = query.where({
    		"baseinfo.name": name
    	})
    }
    //deal with telnumber
    if (telnumber){
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