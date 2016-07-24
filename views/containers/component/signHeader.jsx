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
                    <img src="./img/logo.png" style={leftItemPosition} alt="logo" className="logo"/>
                    <a className="dank-button-header" style={leftItemPosition} href="#">首页</a>
                    <a className="dank-button-header" style={leftItemPosition} href="#">社团目录</a>
                </div>
                <div style={rightPosition}>
                    <a href="#/orgsign/in" className="dank-a" style={rightItemPosition}>社团入口</a>
                    <a href="#/sign/in" className="dank-a" style={rightItemPosition}>个人入口</a>
                </div>
            </div>
        )
    }
});