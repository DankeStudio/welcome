var React = require('react');
var Component = React.Component;

var Header = require('./component/signHeader.jsx');

module.exports = React.createClass({
    render: function(){
        var containerStyle = {
            height: "100%",
            padding: 0
        };
        var objectStyle = {
            top: "60px",
            bottom: "0px",
            position: "absolute",
            width: "100%"
        };
        return(
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row" style={objectStyle}>
                    <tabel className="vertical-middle-parent">
                        <tr>
                            <td className="vertical-middle-child">
                                <div className="col-xs-12 col-md-12">
                                    <Box children={this.props.children}/>
                                </div>
                            </td>
                        </tr>
                    </tabel>
                </div>
            </div>
        )
    }
});

var Box = React.createClass({
    render: function(){
        var objectStyle = {
            width: "508px",
            height: "618px"
        };
        return (
            <div>
                <div className="dank-h1">Welcome</div>
                <div className="dank-box-1 center-block" style={objectStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
});