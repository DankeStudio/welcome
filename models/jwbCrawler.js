/**
 * Created by admin on 2016/7/22.
 */
/**
 *  @file Nodejs crawler for http://jwbinfosys.zju.edu.cn
 *  @author Yang Kefan
 *  Created at 2016-07-22
 */

"use strict";
var request = require('request-promise');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

/**
 * @param username
 * @param password
 * @returns {promise}
 */
module.exports = (username, password) => {
    var raw;
    var j = request.jar();
    request = request.defaults({
        simple: false
    });

    return request.get({
            url: 'http://jwbinfosys.zju.edu.cn/default2.aspx',
            headers: {
                'Host': 'jwbinfosys.zju.edu.cn',
                'Upgrade-Insecure-Requests': '1',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Referer': 'http://jwbinfosys.zju.edu.cn/xsmain_pyjh.htm?xh=3150103856&dqszj=2015',
                'Accept-Encoding': 'gzip, deflate, sdch',
                'Accept-Language': 'zh-CN,zh;q=0.8'
            },
            encoding: null
        })
        .then(function(body) {
            raw = body;
            return request.post({
                url: 'http://jwbinfosys.zju.edu.cn/ajax/zjdx.AjaxForm,zjdx.ashx?_method=Pdmm&_session=no',
                headers: {

                    'Host': 'jwbinfosys.zju.edu.cn',
                    'Origin': 'http://jwbinfosys.zju.edu.cn',
                    'Content-Type': 'text/plain;charset=UTF-8',
                    'Accept': '*/*',
                    'Referer': 'http://jwbinfosys.zju.edu.cn/default2.aspx',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'zh-CN,zh;q=0.8'

                },
                body: `strXh=${username}\r\nstrMm=${password}\r\nstrLx=学生`,
                encoding: null
            })
        })
        .then(function(body) {
            var vs, $;
            $ = cheerio.load(raw);
            vs = encodeURIComponent($('[name=__VIEWSTATE]').attr('value'));
            return request.post({
                url: 'http://jwbinfosys.zju.edu.cn/default2.aspx',
                headers: {

                    'Host': 'jwbinfosys.zju.edu.cn',
                    'Cache-Control': 'max-age=0',
                    'Origin': 'http://jwbinfosys.zju.edu.cn',
                    'Upgrade-Insecure-Requests': '1',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Referer': 'http://jwbinfosys.zju.edu.cn/default2.aspx',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'zh-CN,zh;q=0.8',

                },
                body: `__EVENTTARGET=Button1&__EVENTARGUMENT=&__VIEWSTATE=${vs}&TextBox1=3150103856&TextBox2=zszx1500070271&TextBox3=&RadioButtonList1=%D1%A7%C9%FA&Text1=`,
                jar: j,
                encoding: null
            })
        })
        .then(function(body) {
            return request.get({
                url: 'http://jwbinfosys.zju.edu.cn/xsgrxx.aspx?xh=3150103856',
                headers: {
                    'Host': 'jwbinfosys.zju.edu.cn',
                    'Upgrade-Insecure-Requests': '1',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Referer': 'http://jwbinfosys.zju.edu.cn/xsmain_pyjh.htm?xh=3150103856&dqszj=2015',
                    'Accept-Encoding': 'gzip, deflate, sdch',
                    'Accept-Language': 'zh-CN,zh;q=0.8'
                },
                jar: j,
                encoding: null
            });
        })
        .then(function(body) {
            var $, info;
            body = iconv.decode(body, 'gb2312');
            $ = cheerio.load(body);
            return info = {
                id: $('#xh').text(),
                name: $('#xm').text(),
                sex: $('#Lab_xb').text(),
                grade: $('#dqszj').text(),
                birth_date: $('#Lab_csrq').text(),
                people: $('#Lab_mz').text(),
                college: $('#xy').text(),
                major: $('#zymc').text(),
                class: $('#xzb').text(),
                department: $('#xi').text(),
                high_school: $('#byzx').text(),
                dorm: $('#ssh').text(),
                region: $('#Lab_lydq').text(),
                email: $('#dzyxdz').text(),
                phone: $('#15102325360').text(),
                idcard: $('#Lab_sfzh').text(),
                idcard_gat: $('#gatm').text(),
                address: $('#jtdz').text()
            }
        })
}