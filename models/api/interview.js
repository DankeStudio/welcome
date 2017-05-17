/**
 * Created by admin on 2016/7/31.
 */
var Interview = require('../db/interview');
var Event = require('../db/event');
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

	if (round > 0) {
		// 模式判断
		Event.findOne({
				orgID: orgID,
				eventID: eventID
			})
			.then((event) => {
				if (event) {
					if (department === '全部部门') {
						if (!event.allMode) {
							throw {
								code: -4,
								msg: '全部部门面试模式未开启',
								body: {}
							}
						}
					} else {
						if (event.allMode) {
							throw {
								code: -5,
								msg: '全部部门面试模式已开启，无法进行部门面试',
								body: {}
							}
						} else {
							//检查是否更新maxRound
							if (event.maxRound < round) {
								event.maxRound = round;
							}
						}
					}
					return event.save();
				} else {
					throw {
						code: -6,
						msg: '事件不存在',
						body: {}
					};
				}
			})
			// 继承通过上一次面试的面试者
			.then((event) => {
				return Interview.findOne({
					orgID: orgID,
					eventID: eventID,
					department: department,
					round: round - 1
				})
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
	var arrangements = req.body.arrangements;
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
				arrangement: {
					$each: arrangements
				}
			}
		}, {
			new: true
		})
		.then((interview) => {
			var interviewer = interview.interviewer;
			var arrangements = interview.arrangement;
			var i;
			// 自动安排面试人员
			if (interview) {
				for (arrangement of arrangements) {
					i = 0;
					for (index in interviewer) {
						if (i >= arrangement.total) {
							break;
						}
						if (interviewer[index].arrangementID) {
							continue;
						}
						interviewer[index].arrangementID = arrangement._id;
						interviewer[index].arrRound = Math.floor(i/arrangement.each);
						i++;
					}
					// 如果全部面试者都已安排完成，跳出循环
					if (!i) {
						break;
					}
				}
				return interview.save();
			} else {
				throw {
					code: -2,
					msg: '更新安排后面试不存在',
					body: {}
				}
			}
		})
		.then((interview) => {
			if (interview) {
				res.json({
					code: 0,
					msg: 'ok',
					body: {
						interview: interview
					}
				});
			} else {
				throw {
					code: -3,
					msg: '自动安排面试人员后面试不存在',
					body: {}
				}
			}
		})
		.catch((err) => {
			console.log(err);
			res.json({
				code: 1,
				msg: '未知错误' + err,
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
				interviewer: {
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

exports.allModeOn = (req, res, next) => {
	var orgID = req.session.org._id;
	var eventID = Number(req.body.eventID);
	Event.findOne({
			orgID: orgID,
			eventID: eventID
		})
		.then((event) => {
			if (event) {
				if (event.maxRound) {
					throw {
						code: -1,
						msg: '存在不为0轮的部门面试，模式无法开启',
						body: {}
					}
				} else {
					event.allMode = true;
					return event.save()
				}
			} else {
				throw {
					code: -2,
					msg: '事件不存在',
					body: {}
				}
			}
		})
		.then((event) => {
			res.json({
				code: 0,
				msg: 'ok',
				body: {
					event: event
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

exports.allModeOff = (req, res, next) => {
	var orgID = req.session.org._id;
	var eventID = Number(req.body.eventID);
	var interviewers;
	Event.findOne({
			orgID: orgID,
			eventID: eventID
		})
		.then((event) => {
			if (event) {
				if (event.allMode) {
					event.allMode = false;
					return event.save();
				} else {
					throw {
						code: -1,
						msg: '模式未开启，操作无效',
						body: {}
					}
				}
			} else {
				throw {
					code: -2,
					msg: '事件不存在',
					body: {}
				}
			}
		})
		.then((event) => {
			return Interview.find({
				orgID: orgID,
				eventID: eventID,
				department: '全部部门'
			}).sort({
				round: -1
			}).limit(1);
		})
		.then((interviews) => {
			interviewers = interviews[0].interviewer;
			return Interview.find({
				orgID: orgID,
				eventID: eventID,
				round: 0,
				department: {
					$ne: '全部部门'
				}
			})
		})
		// 更新部门面试情况
		.then((interviews) => {
			var promises = [];
			for (i in interviews) {
				oldInterviewers = interviews[i].interviewer;
				for (j in interviewers) {
					for (index in oldInterviewers) {
						if (interviewers[j].telnumber === oldInterviewers[index].telnumber) {
							oldInterviewers[index].state = interviewers[j].state;
						}
					}
				}
				promises.push(interviews[i].save());
			}
			return Promise.all(promises);
		})
		.then((interviews) => {
			res.json({
				code:0,
				msg:'ok',
				body:{
					interviews:interviews
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