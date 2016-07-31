/**
 * Created by admin on 2016/7/31.
 */
var Interview = require('../db/interview');
var Form = require('../db/form');

exports.create = (req, res, next) => {
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
	// 如果不是一轮面试，继承通过上一次面试的面试者
	if (round > 1) {
		Interview.findOne({
				eventID: eventID,
				department: department,
				round: round
			})
			.then((interview) => {
				var interviewers = [];
				if (interview) {
					for (interviewer of interview.interviewer) {
						if (interviewer.state === '通过') {
							interviewers.push({
								telnumber: interviewer.telnumber,
								state: '未面试'
							})
						}
					}
					return Interview.create({
						eventID: eventID,
						department: department,
						round: round,
						interviewer: interviewers
					})
				} else {
					throw {
						code: -1,
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
				res.json({
					code: 1,
					msg: '数据库未知错误',
					body: {}
				});
			});

	}
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
}

exports.delete = (req, res, next) => {
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
	var eventID = Number(req.query.eventID);
	var department = req.query.department;
	var round = Number(req.query.round);
	var query;
	if (!eventID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	query = Interview.find({
		eventID: eventID
	});
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
			_id: interviewID
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
			_id: interviewID
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
	var interviewID = req.body.interviewID;
	var interviewers = req.body.interviewers;
	if (!interviewID) {
		return res.json({
			code: -1,
			msg: '缺少参数',
			body: {}
		})
	}
	Interview.findById(interviewID)
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
			//console.log(err);
			res.json({
				code: 1,
				msg: '数据库未知错误',
				body: {}
			})
		})
}