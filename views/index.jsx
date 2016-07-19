var React = require('react');
var ReactDOM = require('react-dom');

var Login = require('./login.jsx');



var LoginRegister = React.createClass({
   onLogin:function(user){
        console.log("LoginBegin");

       $.ajax({
           url: "/login",
           dataType: 'json',
           type: 'POST',
           data:user,
           success: function(data) {
               console.log(data);
           }.bind(this),
           error: function(xhr, status, err) {
               console.error("ajax请求发起失败");
           }.bind(this)
       });
   },

    render: function(){
       return(
            <div>
                <h1>Welcome</h1>
                <Login onSubmit={this.onLogin}></Login>
            </div>
       );
   }
});

var app = document.createElement('div');
ReactDOM.render(<LoginRegister />, app);
document.body.appendChild(app);
