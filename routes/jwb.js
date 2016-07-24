var jwbCrawler = require('../models/jwbCrawler');
var User = require('../models/db/user');

module.exports = require('express').Router()
	.post('/submit', (req, res, next) => {
		var username = req.body.username;
		var jwbpwd = req.body.jwbpwd;
		jwbCrawler(username, jwbpwd)
			.then((info) => {
				//console.log(info);
				if (info.schoolID === '') {
					throw ({
						code: -1,
						msg: '学号或密码错误',
						body: {}
					})
				} else {
					var user = {
						baseinfo: {
							name: info.name,
							sex: info.sex,
							origin: info.origin,
							nation: info.nation,
							schoolID: info.schoolID,
							politicalStatus: info.politicalStatus,
							telnumber: info.telnumber,
							email: info.email,
							qq: info.qq,
							major: info.major,
							birth: info.birth,
							address: info.address
						}
					};
					return User.update({
						username: username
					}, {
						$set: user
					});
				}
			})
			.then((result) => {
				//console.log(result);
				// throw error if user is not found in the database
				if (!result.n) {
					throw ({
						code: -2,
						msg: '本地不存在该用户',
						body: {}
					});
				} else {
					res.json({
						code: 0,
						msg: 'ok',
						body: {}
					});
				}
			})
			.catch((err) => {
				if (err.code < 0) {
					res.json(err);
				} else {
					res.json({
						code: -3,
						msg: '数据库错误',
						body: {}
					});
				}
			})
	})