var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    getInitialState: function(){
        return{
            name:''
        }
    },
    logout: function(){
        $.ajax({
            url: "/user/logout",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                window.location.href = '/#/sign/in';
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    componentDidMount: function(){
        $.ajax({
            url: "/user/session",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                let name;
                if (data.body.user)
                    name = (data.body.user.baseinfo && data.body.user.baseinfo.name)?data.body.user.baseinfo.name:data.body.user.username;
                else
                {
                    name = '';
                    var array = ['#/person/info', '#/person/info'];
                    var hash = window.location.hash;
                    var path = hash.substr(0, hash.indexOf('?'));
                    if($.inArray(path, array)>-1){//处于未登录该跳转的页面
                        window.location.href = '#/sign/in';
                    }
                    var array2 = ['#/mobile/form'];
                    var path = hash.substr(0, hash.lastIndexOf('/'));
                    console.log(path);
                    if($.inArray(path, array2)>-1){//处于不显示提示信息的页面

                    }
                    else{
                        $('#invite').show();
                    }
                }
                this.setState({name : name});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
                console.log(data.msg);
            }.bind(this)
        });
    },
    render: function(){
       var leftPosition = {
           float: "left"
       };
       var leftPosition2 = {
           float: "left",
           marginTop: "0.73rem"
       };
       var leftItemPosition = {
           marginLeft: "2.92rem",
           marginRight: "2.92rem",
           verticalAlign: "middle"
       };

       var titleStyle = {
           fontFamily: "BenderSolid",
           fontSize: "2.68rem",
           color: "#ffffff",
           background:"#f57a6c",
           minWidth:"15.695rem",
           minHeight:"4.38rem",
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
       var userNav = (
           <div id="sign-func">
               <a onClick={function(){window.location.href=((document.body.clientWidth>800)?"#/sign/up":"#/mobile/signup")}}>注册</a>
               <a onClick={function(){window.location.href=((document.body.clientWidth>800)?"#/sign/in":"#/mobile/signin")}}>登录</a>
           </div>
       );
       var userNavMobile = null;
       if (this.state.name != '') {
           userNav = (
               <div style={rightPosition} className="pc">
                   <small className="dank-small" style={rightItemPosition}>Hi,{this.state.name}</small>
                   <a className="dank-a" href="/#/person/info" style={rightItemPosition}>个人资料</a>|
                   <a className="dank-a" href="/#/orgsign/in" style={rightItemPosition}>社团登陆</a>|
                   <a className="dank-a" onClick={this.logout} style={rightItemPosition}>注销</a>
               </div>
           )
          userNavMobile = <a href="/#/person/info"><i className="mobile fa fa-user"></i></a>
       }
       return(
           <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} onClick={function(){window.location.href="/"}}>WELCOME</big>
                </div>
                <div style={leftPosition2} className="pc">
                    <a className="dank-button-header" href="/" style={leftItemPosition}>首页</a>
                </div>
                {userNav}
                {userNavMobile}
                {(this.state.name != '')?
                    null
                    :
                    <div className="dank-invite-login-frame" id="invite">
                        <div className="dank-invite-login-text">
                            嘿小子，为啥不登录啊<br/>
                            登陆后可以自动填写基本资料<br/>
                            登陆后可以从教务网同步个人资料<br/>
                            提交一次报名表自动注册账号哦<br/>
                            xu~~~账号是手机号 密码是学号<br/>
                        </div>
                        <div className="dank-invite-login-button-group">
                            <div className="dank-invite-login-button" onClick={function(){window.location.href=((document.body.clientWidth>800)?"#/sign/in":"#/mobile/signin")}}>登陆</div>
                            <div className="dank-invite-login-button" onClick={function(){window.location.href=((document.body.clientWidth>800)?"#/sign/up":"#/mobile/signup")}}>注册</div>
                            <div className="dank-invite-login-button" onClick={function(){$('#invite').fadeOut();}}>拒绝</div>
                        </div>
                    </div>
                }
           </div>
       )
   }
});