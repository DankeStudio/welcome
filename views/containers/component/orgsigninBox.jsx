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
            margin: "0px 55px 0px 44px",
            borderRadius: "8px",
            width: "108px",
            height: "60px",
            lineHeight: "60px",
            fontSize: "30px"
        };
        var aStyle2 = {
            margin: "0px 44px 0px 55px",
            borderRadius: "8px",
            width: "108px",
            height: "60px",
            lineHeight: "60px",
            fontSize: "30px"
        };
        return (
            <div style={topStyle}>
                <div style={headStyle} className="center-block">
                    <a href="#/orgsign/in" style={aStyle1} className="dank-tag-chosen">登陆</a>
                    <a href="#/orgsign/up" style={aStyle2} className="dank-tag-free">注册</a>
                </div>
                <FormBox/>
            </div>
        )
    }
});

var FormBox = React.createClass({
    usernameCheck: function(){
        var element = this.refs.username;
        var test = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.usernameErr1.className="err-display";
            this.refs.usernameErr2.className="err-hidden";
            this.refs.usernameErr3.className="err-hidden";
            return false;
        }else if(!test.test(element.value)){
            element.parentNode.className="dank-form-group-err";
            this.refs.usernameErr1.className="err-hidden";
            this.refs.usernameErr2.className="err-display";
            this.refs.usernameErr3.className="err-hidden";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.usernameErr1.className="err-hidden";
            this.refs.usernameErr2.className="err-hidden";
            this.refs.usernameErr3.className="err-hidden";
            return true;
        }
    },
    passwordCheck: function(){
        var element = this.refs.password;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.passwordErr1.className="err-display";
            this.refs.passwordErr2.className="err-hidden";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.passwordErr1.className="err-hidden";
            this.refs.passwordErr2.className="err-hidden";
            return true;
        }
    },
    handleSubmit: function(){
        var check1 = this.usernameCheck;
        var check2 = this.passwordCheck;

        if(check1 && check2)
        {
            $.ajax({
                url: "/org/login",
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify({
                    username: this.refs.username.value,
                    password: this.refs.password.value
                }),
                success: function(data) {
                    console.log(data);
                    switch(data.code){
                        case -2:
                            var element = this.refs.username;
                            element.parentNode.className="dank-form-group";
                            this.refs.usernameErr1.className="err-hidden";
                            this.refs.usernameErr2.className="err-hidden";
                            this.refs.usernameErr3.className="err-display";
                            break;
                        case -3:
                            var element = this.refs.password;
                            element.parentNode.className="dank-form-group";
                            this.refs.passwordErr1.className="err-hidden";
                            this.refs.passwordErr2.className="err-display";
                            break;
                        case 0:
                            window.location.href = "#/back";
                            break;
                        default:
                            alert(msg);
                            break;
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error("ajax请求发起失败");
                }.bind(this)
            });
        }
    },
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
            <div id="orgSignin" className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group">
                    <label htmlFor="username">账号</label>
                    <small className="err-hidden" ref="usernameErr1">请输入用户名</small>
                    <small className="err-hidden" ref="usernameErr2">请输入正确的邮箱</small>
                    <small className="err-hidden" ref="usernameErr3">用户名不存在</small>
                    <input type="text" placeholder="请输入邮箱地址" ref="username" onBlur={this.usernameCheck}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">密码</label>
                    <small className="err-hidden" ref="passwordErr1">请输入密码</small>
                    <small className="err-hidden" ref="passwordErr2">用户名或密码有误</small>
                    <input type="password" placeholder="请输入密码"  ref="password" onBlur={this.passwordCheck}/>
                </div>
                <div onClick={this.handleSubmit} className="dank-button" style={buttonStyle}>登陆</div>
            </div>
        )
        /*<div className="dank-form-group">
         <label className="checkbox-inline" className="remember-me" >
         <input type="checkbox" id="inlineCheckbox1" value="option1" className="checkbox"/> 记住我
         </label>
         <a href="#" className="forget-password">忘记密码</a>
         </div>*/
    }
});