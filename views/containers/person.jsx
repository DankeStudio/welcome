var React = require('react');
var Component = React.Component;

var Header = require('./component/inHeader.jsx');

module.exports = React.createClass({
   render: function(){
       var globalStyle = {
           background: "#EFEFEF",
           height: "100%",
           padding: 0
       };
       return(
           <div style={globalStyle}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <Header/>
               {this.props.children}
           </div>
       )
   }
});