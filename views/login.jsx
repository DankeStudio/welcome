var React = require('react');

module.exports = React.createClass({
    displayName : 'Login',
    handleSubmit: function(e){
        console.log("in");
      e.preventDefault();
        var LoginUserName = this.refs.LoginUserName.value.trim();
        var LoginPassWord = this.refs.LoginPassword.value.trim();
        if(!(LoginPassWord&&LoginUserName)){
            return;
        }
        console.log("LoginSubmit");
        this.props.onSubmit({UserName:LoginUserName, Password:LoginPassWord});
        console.log("LoginSubmitOK");
    },
    render:function(){
        return(
          <form onSubmit={this.handleSubmit}>
              <input type="text" ref="LoginUserName" placeholder="用户名 - 手机号"/>
              <input type="password" ref="LoginPassword" placeholder="密码 - 默认出生日期"/>
              <input type="submit" value="登陆"/>
          </form>
        );
    }
})