/**
 * Created by admin on 2016/9/17.
 */
/**
 *  @file Use Yunpian API to send messages to inteviewers
 *  @author Yang Kefan
 *  Created at 2016-09-17
 */

var request = require('request-promise');
var apikey = require('../../settings/credentials.json').yunpian.apikey;

/**
 * @param state
 * @param interview
 * @param info
 * @returns {promise}
 */
module.exports = (state, interview, info) => {
	var mobile = '';
	var text = '';
	var template; // 和云片后台相符
	var confirmURL;
	var comeTime;
	var receivers = [];
	for (interviewer of interview.interviewer) {
		for (arrangement of interview.arrangement) {
			if (String(interviewer.arrangementID) === String(arrangement._id) && interviewer.state === state) {
				confirmURL = `http://zju-welcome.com/message/${interviewer._id}`;
				comeTime = new Date(arrangement.startTime.valueOf() + interviewer.arrRound * (arrangement.duration + arrangement.interval)).toLocaleString().slice(5,-3);
				//console.log(comeTime);
				if (state === '未面试') {
					// 信息较长，将链接部分分到第二条短信中
					template = `【社团纳新】${info.org} || ${interview.department}第${interview.round}轮面试将于${comeTime}在${arrangement.place}举行，点击链接回复本短信${confirmURL}`;
				} else if (state === '未通过') {
					template = `【社团纳新】${info.org} || ${interviewer.name}同学，抱歉你未通过${interview.department}的${interview.round}轮面试，如有疑问可拨打${info.contact}`;
				}
				mobile += `,${interviewer.telnumber}`;
				text += `,${encodeURI(template)}`;
				receivers.push({
					name: interviewer.name,
					telnumber: interviewer.telnumber,
					reply: '未回复'
				});
				break;
			}
		}
	}
	return request({
			method: 'POST',
			url: 'https://sms.yunpian.com/v1/sms/multi_send.json',
			form: {
				apikey: apikey,
				mobile: mobile.slice(1),// 去逗号
				text: text.slice(1)// 去逗号
			},
			headers:{
				'Accept':'application/json',
				'charset':'utf-8',
				'Content-Type':'application/x-www-form-urlencoded'
			},
			json: true
		})
		.then((body) => {
			console.log(body);
			body.receivers = receivers;
			return body;
		})
}