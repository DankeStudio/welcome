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
                var name = (data.body.user.baseinfo.name)?data.body.user.baseinfo.name:data.body.user.username;
                this.setState({name : name});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
                alert(data.msg);
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
       return(
           <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} >WELCOME</big>
                </div>
                <div style={leftPosition2}>
                    <a className="dank-button-header" style={leftItemPosition} onClick={null}>首页</a>
                    <a className="dank-button-header" style={leftItemPosition} onClick={null}>社团目录</a>
                </div>
                <div style={rightPosition}>
                    <small className="dank-small" style={rightItemPosition}>Hi,{this.state.name}</small>
                    <a className="dank-a" onClick={null} style={rightItemPosition}>我的报名</a>|
                    <a className="dank-a" href="/#/person/info" style={rightItemPosition}>个人资料</a>|
                    <a className="dank-a" onClick={this.logout} style={rightItemPosition}>注销</a>
                </div>
           </div>
       )
   }
});