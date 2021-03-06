/**
 * Created by admin on 2016/7/24.
 */
var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function() {
        return(
            <Signupbox/>
        )
    }
});

var Signupbox = React.createClass({
    getInitialState: function(){
        return {
            step: 1,
            name:'',
            tel:'',
            bossname:'',
            username:'',
            password:'',
            passwordConfirm:''
        }
    },
    stepChange: function(i){
        this.setState({step: i});
    },
    render: function(){
        var topStyle ={
            paddingTop: "3.65rem"
        };
        var headStyle = {
            margin: "0 auto 2.482rem auto",
            width: "30.222rem",
            height: "4.38rem",
            textAlign: "center"
        };
        var aStyle1 ={
            margin: "0 4.015rem 0 3.212rem",
            borderRadius: "0.584rem",
            width: "7.884rem",
            height: "4.38rem",
            lineHeight: "4.38rem",
            fontSize: "2.19rem"
        };
        var aStyle2 = {
            margin: "0 3.212rem 0 4.015rem",
            borderRadius: "0.584rem",
            width: "7.884rem",
            height: "4.38rem",
            lineHeight: "4.38rem",
            fontSize: "2.19rem"
        };
        return (
            <div style={topStyle}>
                <div style={headStyle} className="center-block">
                    <a href="#/orgsign/in" style={aStyle1} className="dank-tag-free">登陆</a>
                    <a href="#/orgsign/up" style={aStyle2} className="dank-tag-chosen">注册</a>
                </div>
                {(this.state.step==1)?<FormBox1 stepChange={this.stepChange} data={this.state} dataChange={function(json){this.setState(json)}.bind(this)}/>
                    : <FormBox2 stepChange={this.stepChange} data={this.state} dataChange={function(json){this.setState(json)}.bind(this)}/>}
            </div>
        )
    }
});

var FormBox1 = React.createClass({
    nameCheck: function(){
        var element = this.refs.name;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.nameErr1.className="err-display";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.nameErr1.className="err-hidden";
            return true;
        }
    },
    bossnameCheck: function(){
        var element = this.refs.bossname;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.bossnameErr1.className="err-display";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.bossnameErr1.className="err-hidden";
            return true;
        }
    },
    telCheck: function(){
        var element = this.refs.tel;
        var test = /^\d{11,}$/;
        if(!element.value){
            element.parentNode.className="dank-form-group-err";
            this.refs.telErr1.className="err-display";
            this.refs.telErr2.className="err-hidden";
            return false;
        }else if(!test.test(element.value)){
            element.parentNode.className="dank-form-group-err";
            this.refs.telErr1.className="err-hidden";
            this.refs.telErr2.className="err-display";
            return false;
        }else{
            element.parentNode.className="dank-form-group";
            this.refs.telErr1.className="err-hidden";
            this.refs.telErr2.className="err-hidden";
            return true;
        }
    },
    next: function(){
        var check1 = this.nameCheck();
        var check2 = this.bossnameCheck();
        var check3 = this.telCheck();

        if(check1 && check2 && check3)
        {
            this.props.dataChange({
                name: this.refs.name.value,
                tel: this.refs.tel.value,
                bossname: this.refs.tel.value
            });
            this.props.stepChange(2);
        }
    },

    render: function(){
        var formStyle = {
            width: "30.222rem",
            height: "32.66rem",
            padding: "2.92rem"
        };
        var buttonStyle = {
            marginTop:"0" //4.38
        };

        return (
            <div id="signup" className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group" >
                    <label htmlFor="name">社团名称</label>
                    <small className="err-hidden" ref="nameErr1">社团名称不能为空</small>
                    <input type="text" name="name" placeholder="请输入社团名称" ref="name" onBlur={this.nameCheck} defaultValue={this.props.data.name}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="bossname">负责人姓名</label>
                    <small className="err-hidden" ref="bossnameErr1">负责人不能为空</small>
                    <input type="text" name="bossname" placeholder="请输入负责人姓名"  ref="bossname" onBlur={this.bossnameCheck} defaultValue={this.props.data.bossname}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="tel">联系方式</label>
                    <small className="err-hidden" ref="telErr1">联系方式不能为空</small>
                    <small className="err-hidden" ref="telErr2">请输入正确的手机号</small>
                    <input type="text" name="tel" placeholder="请输入手机号"  ref="tel" onBlur={this.telCheck} defaultValue={this.props.data.tel}/>
                </div>
                <div className="dank-button" style={buttonStyle} onClick={this.next}>下一步</div>
            </div>
        )
    }
});

var FormBox2 = React.createClass({
    usernameCheck: function(){
        var element = this.refs.username;
        var test = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
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
    last: function(){
        this.props.stepChange(1);

        this.props.dataChange({
            username:this.refs.username.value,
            password:this.refs.password.value,
            passwordConfirm:this.refs.passwordConfirm.value
        });
    },
    handleSubmit: function(){
        var check1 = this.usernameCheck();
        var check2 = this.passwordCheck();
        var check3 = this.passwordConfirmCheck();

        if(check1 && check2 && check3)
        {
            $.ajax({
                url: "/org/signup",
                contentType: 'application/json',
                type: 'POST',
                data:JSON.stringify({
                    username:this.refs.username.value,
                    tel:this.props.data.tel,
                    name:this.props.data.name,
                    bossname:this.props.data.bossname,
                    password:this.refs.password.value
                }),
                success: function(data) {
                    console.log(data);
                    switch(data.code) {
                        case -4:
                            var element = this.refs.username;
                            element.parentNode.className = "dank-form-group";
                            this.refs.usernameErr1.className = "err-hidden";
                            this.refs.usernameErr2.className = "err-hidden";
                            this.refs.usernameErr3.className = "err-display";
                            break;
                        case 0:
                            window.location.href = '/#/back';
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
            width: "30.222rem",
            height: "30.66rem",
            padding: "2.92rem",
            paddingTop: "1.46rem"
        };
        var buttonStyle = {
            marginTop:"0",
            display:"inline-block",
            marginLeft: '0.365rem',
            marginRight: '0.365rem'
        };

        return (
            <div id="signup" className="dank-box-2 center-block" style={formStyle}>
                <div className="dank-form-group" >
                    <label htmlFor="username">账号</label>
                    <small className="err-hidden" ref="usernameErr1">用户名不能为空</small>
                    <small className="err-hidden" ref="usernameErr2">请输入正确的邮箱</small>
                    <small className="err-hidden" ref="usernameErr3">用户名已存在</small>
                    <input type="text" name="username" placeholder="请输入邮箱" ref="username"
                           onBlur={this.usernameCheck} defaultValue={this.props.data.username}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">密码</label>
                    <small className="err-hidden" ref="passwordErr1">密码不能为空</small>
                    <input type="password" name="password" placeholder="请输入密码"  ref="password"
                           onBlur={this.passwordCheck} defaultValue={this.props.data.password}/>
                </div>
                <div className="dank-form-group">
                    <label htmlFor="password">重复密码</label>
                    <small className="err-hidden" ref="passwordConfirmErr1">请再次输入密码</small>
                    <small className="err-hidden" ref="passwordConfirmErr2">密码不一致</small>
                    <input type="password" placeholder="请再次输入密码"  ref="passwordConfirm"
                           onBlur={this.passwordConfirmCheck} defaultValue={this.props.data.passwordConfirm}/>
                </div>
                <div className="block-center text-center">
                    <div className="dank-button" style={buttonStyle} onClick={this.last}>上一步</div>
                    <div className="dank-button" style={buttonStyle} onClick={this.handleSubmit}>注册</div>
                </div>
            </div>
        )
    }
});