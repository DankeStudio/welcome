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
                if(data.body.org){
                    this.setState({name : data.body.org.name});
                }
                else{
                    window.location.href = '#/orgsign/in';
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
                alert(data.msg);
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
            marginTop: "0.73rem"
        };
        var leftItemPosition = {
            marginLeft: "2.92rem",
            marginRight: "2.92rem",
            verticalAlign: "middle"
        };

        var titleStyle = {
            fontFamily: "BenderSolid",
            fontSize: "2.62rem",
            color: "#ffffff",
            background:"#f57a6c",
            width:"15.695rem",
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
            marginRight: "4.92rem"
        };
        return(
            <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} >WELCOME</big>
                </div>
                <div style={leftPosition2}>
                    <a className="dank-button-header" style={leftItemPosition} href="/">首页</a>
                </div>
                <div style={rightPosition}>
                    <small className="dank-small" onClick={null} style={rightItemPosition}>辛苦了，{this.state.name}</small>
                    <a className="dank-a" onClick={this.logout} style={rightItemPosition}>注销</a>
                </div>
            </div>
        )
    }
});