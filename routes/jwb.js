var jwbCrawler = require('../models/jwbCrawler');
var User = require('../models/db/user');

module.exports = require('express').Router()
	.post('/submit', (req, res, next) => {
		var username = req.body.username;
		var jwbpwd = req.body.jwbpwd;
		jwbCrawler(username, jwbpwd)
			.then((info) => {
				var user = {
					baseInfo: {
						name: info.name,
						sex: info.sex,
						origin: info.origin
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
				return User.update({username:username},{$set:user})
			})
			.then((user) => {
				if(user){
					res.json({
						code:-3
						msg:'本地不存在该用户'
						body:{}
					})
				}
				else{
					res.json({
						code:0
						msg:'ok'
						body:{}
					})
				}
			})
			.catch((err) => {
				
			})
	})