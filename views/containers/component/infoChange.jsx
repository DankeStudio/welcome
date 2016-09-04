var React = require('react');
var Component = React.Component;

module.exports = React.createClass({

    render: function(){
        return(
            <div>
                <div className="dank-slider">
                    <div>
                        <big className="dank-slider-active"><i className="fa fa-user" aria-hidden="true"></i><b> 个人信息</b></big>
                    </div>
                </div>
                <div className="dank-slider-right">
                    <InfoBox/>
                </div>
            </div>
        )
    }
});

var InfoBox = React.createClass({
    getInitialState: function(){
        //console.log("ok");
        return {
            _id :"",
            username:"",
            address: "",
            birth: "",
            email: "",
            name: "",
            nation: "",
            origin: "",
            politicalStatus: "",
            qq: "",
            schoolID: "",
            sex: "",
            telnumber: "",
            telshort: "",
            major:""
        }
    },
    componentDidMount: function(){
        console.log('abc');
        $.ajax({
            url: "/user/profile",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                console.log(data.code);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            console.log(data.body.user);
                            this.setState({
                                _id :data.body.user._id,
                                username:data.body.user.username,
                                address: data.body.user.baseinfo.address,
                                birth: data.body.user.baseinfo.birth,
                                email: data.body.user.baseinfo.email,
                                name: data.body.user.baseinfo.name,
                                nation: data.body.user.baseinfo.nation,
                                origin: data.body.user.baseinfo.origin,
                                politicalStatus: data.body.user.baseinfo.politicalStatus,
                                qq: data.body.user.baseinfo.qq,
                                schoolID: data.body.user.baseinfo.schoolID,
                                sex: data.body.user.baseinfo.sex,
                                telnumber: data.body.user.baseinfo.telnumber,
                                telshort: data.body.user.baseinfo.telshort,
                                major: data.body.user.baseinfo.major
                            });
                            console.log(this.state.data);
                        }
                        break;
                    default:
                        console.log(data.msg);
                        //this.setState({data:empty});
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    submitHandler: function(){
        $.ajax({
            url: "user/profile",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                address: this.refs.address.value,
                birth: this.refs.birth.value,
                email: this.refs.email.value,
                name: this.refs.name.value,
                nation: this.refs.nation.value,
                origin: this.refs.origin.value,
                politicalStatus: this.refs.politicalStatus.value,
                qq: this.refs.qq.value,
                schoolID: this.refs.schoolID.value,
                sex: this.refs.sex.value,
                telnumber: this.refs.telnumber.value,
                telshort: this.refs.telshort.value
            }),
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        window.location.href = '/#/person/info';
                        break;
                    default:
                        alert(data.msg);
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    handleChange: function(event) {
        console.log(event.target);
        this.setState({[event.target.getAttribute('name')]: event.target.value});
    },
    crawlerSubmit: function(){
        var username = this.refs.crawlerUsername.value;
        var password = this.refs.crawlerPassword.value;
        if( !(username&&password) ){
            $("#crawlerErr").show();
            return null;
        }
        $.ajax({
            url: "/user/syncprofile",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                jwbpwd: username,
                password: password
            }),
            success: function(data) {
                switch(data.code){
                    case -1://账号或密码错误
                        $("#crawlerErr").show();
                        break;
                    case 0:
                        $("#crawler").hide();
                        $("#crawlerSuccess").show();
                        break;
                    default:
                        console.log(data.msg);
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });

    },
    render : function(){
        /*console.log(this.state.data);
        var data = this.state.data;
        var baseinfo = data.baseinfo;*/

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 c4">
                        <div className="container-fluid">
                            <div className="dank-d2">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-1 text-left">
                                        <div className="btn-group btn-group-lg d3">
                                            <a className="btn dank-a5" onClick={this.submitHandler}><b className="b1">保存</b></a>
                                            <a className="btn dank-a6" onClick={function(){$("#crawler").fadeIn();}}><b className="b1">从教务网导入</b></a>
                                            <div className="crawler" id="crawler">
                                                <div className="crawler-title">请输入教务网账号信息</div>
                                                <div className="crawler-icon" onClick={function(){$("#crawler").fadeOut()}}>
                                                    <i className="fa fa-times"/>
                                                </div>
                                                <div className="crawler-error" id="crawlerErr">请输入正确的账号密码</div>
                                                <div className="crawler-form">
                                                    <div className="crawler-form-group">
                                                        <label className="crawler-label">账号:</label>
                                                        <input type="text" ref="crawlerUsername" className="crawler-input"/>
                                                    </div>
                                                    <div className="crawler-form-group">
                                                        <label className="crawler-label">密码:</label>
                                                        <input type="password" ref="crawlerPassword" className="crawler-input"/>
                                                    </div>
                                                </div>
                                                <div className="crawler-button" onClick={this.crawlerSubmit}>提交</div>
                                            </div>
                                            <div className="crawler-success" id="crawlerSuccess">
                                                <div className="crawler-success-icon"><i className="fa fa-check fa-2x"/></div>
                                                <div className="crawler-success-text">导入成功</div>
                                                <div className="crawler-button" onClick={function(){$("#crawlerSuccess").fadeOut();window.location.href="#/person/info"}}>返回</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1 col-md-offset-1 text-right">
                                        <img src="img/label.png" className="dank-i1"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-9 c4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <table className="dank-t1">
                                                        <tbody>
                                                        <tr>
                                                            <td className="td-title">用户名</td>
                                                            <td className="td-content">{this.state.username}</td>
                                                            <td className="td-title"></td>
                                                            <td className="td-content"></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">密码</td>
                                                            <td className="td-content">{this.state.password}</td>
                                                            <td className="td-title"></td>
                                                            <td className="td-content"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <table className="dank-t1">
                                                        <tbody>
                                                        <tr>
                                                            <td className="td-title">姓名</td>
                                                            <td className="td-content"><input type="text" ref="name" name="name" className="dank-input" value={this.state.name?this.state.name:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">性别</td>
                                                            <td className="td-content"><input type="text" ref="sex" name="sex" className="dank-input" value={this.state.sex?this.state.sex:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">籍贯</td>
                                                            <td className="td-content"><input type="text" ref="origin" name="origin" className="dank-input" value={this.state.origin?this.state.origin:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">民族</td>
                                                            <td className="td-content"><input type="text" ref="nation" name="nation" className="dank-input" value={this.state.nation?this.state.nation:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">学号</td>
                                                            <td className="td-content"><input type="text" ref="schoolID" name="schoolID" className="dank-input" value={this.state.schoolID?this.state.schoolID:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">政治面貌</td>
                                                            <td className="td-content"><input type="text" ref="politicalStatus" name="politicalStatus" className="dank-input" value={this.state.politicalStatus?this.state.politicalStatus:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">手机长号</td>
                                                            <td className="td-content"><input type="text" ref="telnumber" name="telnumber" className="dank-input" value={this.state.telnumber?this.state.telnumber:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">手机短号</td>
                                                            <td className="td-content"><input type="text" ref="telshort" name="telshort" className="dank-input" value={this.state.telshort?this.state.telshort:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">邮箱</td>
                                                            <td className="td-content"><input type="text" ref="email" name="email" className="dank-input" value={this.state.email?this.state.email:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">QQ</td>
                                                            <td className="td-content"><input type="text" ref="qq" name="qq" className="dank-input" value={this.state.qq?this.state.qq:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">专业</td>
                                                            <td className="td-content"><input type="text" ref="major" name="major" className="dank-input" value={this.state.major?this.state.major:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title">寝室地址</td>
                                                            <td className="td-content"><input type="text" ref="address" name="address" className="dank-input" value={this.state.address?this.state.address:''} onChange={this.handleChange}/></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-title">生日</td>
                                                            <td className="td-content"><input type="text" ref="birth" name="birth" className="dank-input" value={this.state.birth?this.state.birth:''} onChange={this.handleChange}/></td>
                                                            <td className="td-title"></td>
                                                            <td className="td-content"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center c4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <img src="img/male.png" className="i2"/>
                                            </div>
                                            <div className="row">
                                                <a className="a7" href="#"><b>修改头像</b></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
