var React = require('react');
var Component = React.Component;
var Link = require('react-router').Link;

module.exports = React.createClass({
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
                <div style={rightPosition} className="pc">
                    <a href="#/orgsign/in" className="dank-a" style={rightItemPosition}>社团入口</a>
                    <a href="#/sign/in" className="dank-a" style={rightItemPosition}>个人入口</a>
                </div>
            </div>
        )
    }
});