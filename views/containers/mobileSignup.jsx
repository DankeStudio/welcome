var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function(){
        var containerStyle = {
            height: "100%",
            padding: 0,
            backgroundColor: "#f57a6c"
        };
        var objectStyle = {
            top: "4.38rem",
            bottom: "0",
            position: "absolute",
            width: "100%",
            overflow: 'auto'
        };
        return(
            <div style={containerStyle}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Header/>
                <div style={objectStyle}>
                    <table className="vertical-middle-parent">
                        <tbody>
                        <tr>
                            <td className="vertical-middle-child">
                                <Box/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

var Header=React.createClass({
    render: function() {

        var leftPosition = {
            float: "left"
        };

        var leftItemPosition = {
            marginLeft: "2.92rem",
            marginRight: "2.92rem",
            verticalAlign: "middle"
        };

        var leftPosition2 = {
            float: "left",
            marginTop: "0.803rem"
        };

        var titleStyle = {
            fontFamily: "BenderSolid",
            fontSize: "2.628rem",
            color: "#ffffff",
            background:"#f57a6c",
            minWidth:"15.695rem",
            height:"4.38rem",
            lineHeight:"4.38rem",
            display: "inline-block",
            textAlign: "center"
        };

        var rightPosition = {
            float: "right",
            lineHeight: "4.38rem"
        };

        var rightItemPosition = {
            marginLeft: "2.92rem",
            marginRight: "2.92rem"
        };

        return (
            <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} onClick={function(){window.location.href="/"}}>WELCOME</big>
                </div>
                <div style={leftPosition2} className="pc">
                    <a className="dank-button-header" href="/" style={leftItemPosition}>首页</a>
                </div>
                <div style={rightPosition}>
                    <a href="#/mobile/signin" className="dank-a" style={rightItemPosition}>登陆</a>
                </div>
            </div>
        )
    }
});

var Box = React.createClass({
    render: function(){
        var boxStyle={
            paddingLeft:"1rem",
            paddingRight:"1rem"
        };
        var msgStyle={
            textAlign:"center",
            color:"#ffffff",
            fontSize:"1.5rem"
        };
        return (
            <div style={boxStyle}>
                <div className="dank-h1">SIGN UP</div>
                <div>
                    <Form/>
                    <div style={msgStyle}>社团账号注册请访问PC端网页</div>
                </div>
            </div>
        )
    }
});

var Form = React.createClass({
    usernameCheck: function(){
        var element = this.refs.username;
        var test = /^\d{11,}$/;
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
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.passwordErr1.className="err-hidden";
            return true;
        }
    },
    passwordConfirmCheck: function(){
        var element = this.refs.passwordConfirm;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.passwordConfirmErr1.className="err-display";
            this.refs.passwordConfirmErr2.className="err-hidden";
            return false;
        }else if(element.value!=this.refs.password.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.passwordConfirmErr1.className="err-hidden";
            this.refs.passwordConfirmErr2.className="err-display";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.passwordConfirmErr1.className="err-hidden";
            this.refs.passwordConfirmErr2.className="err-hidden";
            return true;
        }
    },
    handleSubmit: function(){
        var check1 = this.usernameCheck();
        var check2 = this.passwordCheck();
        var check3 = this.passwordConfirmCheck();

        if(check1 && check2 && check3)
        {
            $.ajax({
                url: "user/signup",
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify({
                    username: this.refs.username.value,
                    password: this.refs.password.value
                }),
                success: function(data) {
                    console.log(data);
                    switch(data.code){
                        case -4:
                            var element = this.refs.username;
                            element.parentNode.className="dank-form-group";
                            this.refs.usernameErr1.className="err-hidden";
                            this.refs.usernameErr2.className="err-hidden";
                            this.refs.usernameErr3.className="err-display";
                            break;
                        case 0:
                            window.location.href = '/#/person/info';
                            break;
                        default:
                            alert(data.msg);
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
            height: "34rem",
            padding: "2.92rem 2rem",
            paddingTop:"1.46rem"
        };
        var buttonStyle = {
            marginTop:"4.38rem"
        };

        return (
            <div id="signup" className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group" >
                    <label htmlFor="username">账号</label>
                    <small className="err-hidden" ref="usernameErr1">用户名不能为空</small>
                    <small className="err-hidden" ref="usernameErr2">请输入正确的手机号</small>
                    <small className="err-hidden" ref="usernameErr3">用户名已存在</small>
                    <input type="text" name="username" placeholder="请输入手机号" ref="username" onBlur={this.usernameCheck}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">密码</label>
                    <small className="err-hidden" ref="passwordErr1">密码不能为空</small>
                    <input type="password" name="password" placeholder="请输入密码"  ref="password" onBlur={this.passwordCheck}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">重复密码</label>
                    <small className="err-hidden" ref="passwordConfirmErr1">请再次输入密码</small>
                    <small className="err-hidden" ref="passwordConfirmErr2">密码不一致</small>
                    <input type="password" placeholder="请再次输入密码"  ref="passwordConfirm" onBlur={this.passwordConfirmCheck}/>
                </div>
                <div onClick={this.handleSubmit} className="dank-button" style={buttonStyle}>注册</div>
            </div>
        )
    }
});