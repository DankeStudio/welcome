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
           marginTop: "11px"
       };
       var leftItemPosition = {
           marginLeft: "40px",
           marginRight: "40px",
           verticalAlign: "middle"
       };

       var titleStyle = {
           fontFamily: "BenderSolid",
           fontSize: "36px",
           color: "#ffffff",
           background:"#f57a6c",
           width:"215px",
           height:"60px",
           lineHeight:"60px",
           display: "inline-block",
           textAlign: "center"
       };

       var rightPosition = {
           float: "right",
           lineHeight: "60px"
       };

       var rightItemPosition = {
           marginLeft: "40px",
           marginRight: "40px"
       };
       var userNav = (
           <div id="sign-func">
               <a href="#/sign/up">注册</a>
               <a href="#/sign/in">登录</a>
           </div>
       );
       if (this.state.name != '')
           userNav = (
               <div style={rightPosition} className="pc">
                   <small className="dank-small" style={rightItemPosition}>Hi,{this.state.name}</small>
                   <a className="dank-a" href="/#/person/info" style={rightItemPosition}>个人资料</a>|
                   <a className="dank-a" onClick={this.logout} style={rightItemPosition}>注销</a>
                   <i className="mobile fa fa-user"><a href="/#/person/info"></a></i>
               </div>
           )
       return(
           <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} >WELCOME</big>
                </div>
                <div style={leftPosition2} className="pc">
                    <a className="dank-button-header" href="/" style={leftItemPosition}>首页</a>
                </div>
                <a href="/" className="mobile index-link">首页</a>
                {userNav}
                {(this.state.name != '')?
                    null
                    :
                    <div className="dank-invite-login-frame" id="invite">
                        <div className="dank-invite-login-text">
                            嘿小子，为啥不登录啊<br/>
                            登陆后可以自动填写基本资料<br/>
                            登陆后可以从教务网同步个人资料<br/>
                            登陆后可以嘿嘿嘿<br/>
                        </div>
                        <div className="dank-invite-login-button-group">
                            <div className="dank-invite-login-button" onClick={function(){window.location.href="#/sign/in"}}>登陆</div>
                            <div className="dank-invite-login-button" onClick={function(){window.location.href="#/sign/up"}}>注册</div>
                            <div className="dank-invite-login-button" onClick={function(){$('#invite').fadeOut();}}>拒绝</div>
                        </div>
                    </div>
                }
           </div>
       )
   }
});