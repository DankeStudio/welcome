var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    getInitialState: function(){
        return {
            name:''
        }
    },
    componentDidMount: function(){
        $.ajax({
            url: "/org/session",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                this.setState({name : data.body.org.name});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    logout: function(){
        $.ajax({
            url: "/org/logout",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                window.location.href = '/#/orgsign/in';
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
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
                    <a className="dank-button-header" style={leftItemPosition} href="#/sign/in">首页</a>
                    <a className="dank-button-header" style={leftItemPosition} onClick={null}>社团目录</a>
                </div>
                <div style={rightPosition}>
                    <small className="dank-small" onClick={null} style={rightItemPosition}>辛苦了，{this.state.name}</small>
                    <a className="dank-a" onClick={this.logout} style={rightItemPosition}>注销</a>
                </div>
            </div>
        )
    }
});