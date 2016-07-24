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
                    <a href="#" style={aStyle2}>登陆</a>
                    <a href="#" style={aStyle1}>注册</a>
                </div>
                <FormBox/>
            </div>
        )
    }
});

var FormBox = React.createClass({
    usernameCheck: function(){
        var element = this.refs.username;
        var test = /^\d{11,}$/;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.usernameErr1.className="err-display";
            this.refs.usernameErr2.className="err-hidden";
        }else if(!test.test(element.value)){
            element.parentNode.className="dank-form-group-err";
            this.refs.usernameErr1.className="err-hidden";
            this.refs.usernameErr2.className="err-display";
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.usernameErr1.className="err-hidden";
            this.refs.usernameErr2.className="err-hidden";
        }
    },

    handleSubmit: function(){
        $.ajax({
            url: "/signup",
            dataType: 'json',
            type: 'POST',
            data: $("#signup").serialize(),
            success: function(data) {
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },

    render: function(){
        var formStyle = {
            width: "414px",
            height: "420px",
            padding: "40px",
            paddingTop: "20px"
        };
        var buttonStyle = {
            marginTop:"0px"
        };

        return (
            <form id="signup" onSubmit={this.handleSubmit} className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group" >
                    <label htmlFor="username">账号</label>
                    <small className="err-hidden" ref="usernameErr1">用户名不能为空</small>
                    <small className="err-hidden" ref="usernameErr2">请输入正确的手机号</small>
                    <input type="text" name="username" placeholder="请输入手机号" ref="username" onBlur={this.usernameCheck}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">密码</label>
                    <small className="err-hidden" id="passwordErr1">密码不能为空</small>
                    <input type="password" name="password" placeholder="请输入密码"  ref="password" onBlur={this.passwordCheck}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">重复密码</label>
                    <small className="err-hidden" id="passwordConfirmErr1">两次密码不同</small>
                    <input type="password" placeholder="请再次输入密码"  ref="passwordConfirm" onBlur={this.passwordConfirmCheck}/>
                </div>
                <button type="submit" className="dank-button btn-block" style={buttonStyle}>注册</button>
            </form>
        )
    }
});