/**
 * Created by admin on 2016/7/31.
 */
var Interview = require('../db/interview');
var Form = require('../db/form');

//使用orgID判断调用者合法性

exports.create = (req, res, next) => {
	var orgID = req.session.org._id;
	var eventID = Number(req.body.eventID);
	var department = req.body.department;
	var round = Number(req.body.round);
	if (!eventID || !department || !round) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	// 如果不是表刷，继承通过上一次面试的面试者
	if (round > 0) {
		Interview.findOne({
				orgID: orgID,
				eventID: eventID,
				department: department,
				round: round - 1
			})
			.then((interview) => {
				var interviewers = [];
				if (interview) {
					for (interviewer of interview.interviewer) {
						if (interviewer.state === '通过') {
							interviewers.push({
								telnumber: interviewer.telnumber,
								name: interviewer.name,
								state: '未面试'
							})
						}
					}
					return Interview.create({
						orgID: orgID,
						eventID: eventID,
						department: department,
						round: round,
						interviewer: interviewers
					})
				} else {
					throw {
						code: -2,
						msg: '上一次面试不存在',
						body: {}
					}
				}
			})
			.then((interview) => {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						interview: interview
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

	} else {
		res.json({
			code: -3,
			msg: '面试轮数错误',
			body: {}
		})
	}
	/*
	// 如果是一轮面试，从申请表中继承面试者
	else {
		var wish = [department];
		Form.find({
				eventID: eventID
			}).where({
				'wish.chosen': {
					$in: wish
				}
			})
			.then((forms) => {
				var interviewers = [];
				for (form of forms) {
					interviewers.push({
						telnumber: form.baseinfo.telnumber,
						name: form.baseinfo.name,
						state: '未面试'
					})
				}
				return Interview.create({
					eventID: eventID,
					department: department,
					round: round,
					interviewer: interviewers
				})
			})
			.then((interview) => {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						interview: interview
					}
				});
			})
			.catch((err) => {
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				});
			});
	}
	*/
}

exports.delete = (req, res, next) => {
	var orgID = req.session.org._id;
	var eventID = Number(req.body.eventID);
	var department = req.body.department;
	var round = Number(req.body.round);
	var query;
	if (!eventID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}

	query = Interview.remove({
		orgID: orgID,
		eventID: eventID,
		department: department,
		round: round,
	})
	if (department) {
		query = query.where({
			department: department
		});
	}
	if (round) {
		query = query.where({
			round: round
		});
	}
	query.then(() => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {}
			});
		})
		.catch((err) => {
			res.json({
				code: 1,
				msg: '数据库未知错误',
				body: {}
			});
		});
}

exports.get = (req, res, next) => {
	var orgID = req.session.org._id;
	var eventID = Number(req.query.eventID);
	var department = req.query.department;
	var round = Number(req.query.round);
	var isNew = Number(req.query.new);
	var query;
	if (!eventID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	query = Interview.find({
		orgID: orgID,
		eventID: eventID
	});
	if (department) {
		query = query.where({
			department: department
		});
	}
	if (round >= 0) {
		query = query.where({
			round: round
		});
	}
	if (isNew > 0) {
		query = query.sort({
			round: -1
		}).limit(1);
	}
	query.then((interviews) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					interviews: interviews
				}
			});
		})
		.catch((err) => {
			res.json({
				code: 1,
				msg: '数据库未知错误',
				body: {}
			});
		});
}

exports.createArrangement = (req, res, next) => {
	var orgID = req.session.org._id;
	var interviewID = req.body.interviewID;
	var arrangement = req.body.arrangement;
	//console.log(req.body);
	if (!interviewID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Interview.findOneAndUpdate({
			_id: interviewID,
			orgID: orgID
		}, {
			$addToSet: {
				arrangement: arrangement
			}
		}, {
			new: true
		})
		.then((interview) => {
			if (interview) {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						arrangement: interview.arrangement
					}
				});
			} else {
				throw {
					code: -2,
					msg: '面试不存在',
					body: {}
				}
			}
		})
		.catch((err) => {
			//console.log(err);
			res.json({
				code: 1,
				msg: '数据库未知错误',
				body: {}
			})
		})
}

exports.deleteArrangement = (req, res, next) => {
	var orgID = req.session.org._id;
	var interviewID = req.body.interviewID;
	var arrangementID = req.body.arrangementID;
	if (!interviewID || !arrangementID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Interview.findOneAndUpdate({
			_id: interviewID,
			orgID: orgID
		}, {
			$pull: {
				arrangement: {
					_id: arrangementID
				}
			}
		}, {
			new: true
		})
		.then((interview) => {
			if (interview) {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						arrangement: interview.arrangement
					}
				});
			} else {
				throw {
					code: -2,
					msg: '面试不存在',
					body: {}
				}
			}
		})
		.catch((err) => {
			//console.log(err);
			res.json({
				code: 1,
				msg: '数据库未知错误',
				body: {}
			})
		})
}

exports.interviewerUpdate = (req, res, next) => {
	var orgID = req.session.org._id;
	var interviewID = req.body.interviewID;
	var interviewers = req.body.interviewers;
	if (!interviewID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Interview.findOne({
			_id: interviewID,
			orgID: orgID
		})
		.then((interview) => {
			var oldInterviewers = interview.interviewer;
			if (interview) {
				for (interviewer of interviewers) {
					for (index in oldInterviewers) {
						if (interviewer.telnumber === oldInterviewers[index].telnumber) {
							if (interviewer.state) {
								oldInterviewers[index].state = interviewer.state;
							}
							if (interviewer.arrangementID) {
								oldInterviewers[index].arrangementID = interviewer.arrangementID;
							}
						}
					}
				}
				return interview.save();
			} else {
				throw {
					code: -2,
					msg: '面试不存在',
					body: {}
				}
			}
		})
		.then((interview) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: interview
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

exports.interviewerDelete = (req, res, next) => {
	var orgID = req.session.org._id;
	var interviewID = req.body.interviewID;
	var telnumber = req.body.telnumber;
	if (!interviewID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Interview.findOneAndUpdate({
			_id: interviewID,
			orgID: orgID
		}, {
			$pull: {
				interview: {
					telnumber: telnumber
				}
			}
		})
		.then((interview) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {}
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