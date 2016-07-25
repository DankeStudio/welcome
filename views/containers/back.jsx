/**
 * Created by admin on 2016/7/25.
 */
var React = require('react');
var Component = React.Component;

var Header = require('./component/orgHeader.jsx');

module.exports = React.createClass({
    render: function(){
        var globalStyle = {
            background: "#EFEFEF",
            height: "100%",
            padding: 0
        };
        return(
            <div style={globalStyle}>
                <Header/>
                {this.props.children}
            </div>
        )
    }
});