/**
 * Created by admin on 2016/7/24.
 */
var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function(){
        var topStyle ={
            paddingTop: "50px"
        };
        var headStyle = {
            margin: "0px auto 34px auto",
            width: "414px",
            height: "60px",
            textAlign: "center"
        };
        var aStyle1 ={
            display: "inline-block",
            margin: "0px 55px 0px 44px",
            background: "#345062",
            borderRadius: "8px",
            width: "108px",
            height: "60px",
            lineHeight: "60px",
            fontSize: "30px",
            color: "#ffffff"
        };
        var aStyle2 = {
            display: "inline-block",
            margin: "0px 44px 0px 55px",
            borderRadius: "8px",
            width: "108px",
            height: "60px",
            lineHeight: "60px",
            fontSize: "30px",
            color: "#555a63"
        };
        return (
            <div style={topStyle}>
                <div style={headStyle} className="center-block">
                    <a href="#" style={aStyle1}>登陆</a>
                    <a href="#" style={aStyle2}>注册</a>
                </div>
                <FormBox/>
            </div>
        )
    }
});

var FormBox = React.createClass({
    render: function(){
        var formStyle = {
            width: "414px",
            height: "420px",
            padding: "40px"
        };
        var buttonStyle = {
            marginTop:"60px"
        };

        return (
            <form className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group">
                    <label htmlFor="username">账号</label>
                    <input type="text" placeholder="用户名 - 手机号"/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">密码</label>
                    <input type="password" placeholder="密码 - 默认出生日期 如20160901"/>
                </div>
                <div className="dank-form-group">
                    <label className="checkbox-inline" className="remember-me" >
                        <input type="checkbox" id="inlineCheckbox1" value="option1" className="checkbox"/> 记住我
                    </label>
                    <a href="#" className="forget-password">忘记密码</a>
                </div>
                <button type="submit" className="dank-button btn-block" style={buttonStyle}>登陆</button>
            </form>
        )
    }
});