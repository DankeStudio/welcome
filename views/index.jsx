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
               console.log("浏览器接收到登陆成功的信息啦！");
           }.bind(this),
           error: function(xhr, status, err) {
               console.error("浏览器发现登录失败！");
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
