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
            top: "4.38rem",
            bottom: "0",
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
                                    <div className="col-xs-12 col-md-12">
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

var Box = React.createClass({
    render: function(){
        var objectStyle = {
            width: "37.084rem",
            height: "45.114rem"
        };
        return (
            <div>
                <div className="dank-h1">Welcome 社团用户</div>
                <div className="dank-box-1 center-block" style={objectStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
});