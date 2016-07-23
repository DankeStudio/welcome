var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function(){
        return(
            <div>
                <p>hello, world!</p>
                {this.props.children}
            </div>
        )
    }
});