var React = require('react');
var Component = React.Component;

var Header = require('./component/signHeader.jsx');

module.exports = React.createClass({
    render: function(){
        var containerStyle = {
            height: "100%",
            padding: 0,
            backgroundColor: "#f57a6c"
        };
        var objectStyle = {
            top: "60px",
            bottom: "0px",
            position: "absolute",
            width: "100%",
            overflow: 'auto'
        };
        return(
            <div style={containerStyle}>
                <Header/>
                <div className="container-fluid">
                    <div className="row" style={objectStyle}>
                        <table className="vertical-middle-parent">
                            <tbody>
                            <tr>
                                <td className="vertical-middle-child">
                                    <div className="col-xs-12 col-md-12" id="signin">
                                        <Box children={this.props.children}/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

var News = React.createClass({
    render: function(){
        var objectStyle = {
            width: "734px",
            height: "618px"
        };
        return (
            <div>
                <div className="dank-h1">news</div>
                <div className="dank-box-1 center-block" style={objectStyle}></div>
            </div>
        )
    }
});

var Box = React.createClass({
    render: function(){
        var objectStyle = {
            position: "relative",
            width: "508px",
            height: "618px"
        };
        return (
            <div>
                <div className="dank-h1">Welcome 个人用户</div>
                <div className="dank-box-1 center-block" style={objectStyle}>
                    {this.props.children}
                    <div className="mobile" id="orgs-msg">社团账号登录请访问PC端网页</div>
                </div>
            </div>
        )
    }
});