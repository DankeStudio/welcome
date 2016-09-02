var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function() {

        var leftPosition = {
            float: "left"
        };

        var leftItemPosition = {
            marginLeft: "40px",
            marginRight: "40px",
            verticalAlign: "middle"
        };

        var leftPosition2 = {
            float: "left",
            marginTop: "11px"
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

        return (
            <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} >WELCOME</big>
                </div>
                <div style={leftPosition2} className="pc">
                    <a className="dank-button-header" href="/" style={leftItemPosition}>首页</a>
                </div>
                <div style={rightPosition}>
                    <a href="#/orgsign/in" className="dank-a" style={rightItemPosition}>社团入口</a>
                    <a href="#/sign/in" className="dank-a" style={rightItemPosition}>个人入口</a>
                </div>
            </div>
        )
    }
});