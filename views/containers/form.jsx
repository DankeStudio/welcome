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
                <Header/>
                <Content eventID={this.props.params.id}/>
            </div>
        )
    }
});

var Content = React.createClass({
    getInitialState: function(){
        return{
            page: 1,
            event: {},
            pagesState:[true, false, false, false],
            pagesNumber:[1, 2, 3, 4],
            baseinfo:{
                name:'',
                sex: '',
                origin:'',
                nation:'',
                schoolID:'',
                politicalStatus:'',
                telnumber:'',
                telshort:'',
                email:'',
                qq:'',
                major:'',
                birth:'',
                address:''
            },

        }
    },

    componentDidMount: function(){
        var baseinfoHandle = function(data){
            this.setState({event:data.body.event});
            var pagesState = [];
            pagesState[0] = true;
            pagesState[1] = !(data.body.event.formschema.skills.delete
            && data.body.event.formschema.introduction.delete);
            pagesState[2] = !(data.body.event.formschema.wish.delete);
            pagesState[3] = (data.body.event.formschema.others)?true:false;
            this.setState({pagesState:pagesState});
            var i = 0;
            var pagesNumber = [];
            for(var j=0; j<4; j++){
                pagesNumber[j] = (pagesState[j])?++i:0;
            }
            this.setState({pagesNumber: pagesNumber});
        };


        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data:{
                eventID: this.props.eventID
            },
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            baseinfoHandle(data).bind(this);
                        }
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
    dataRecall: function(item, data){
        this.setState({[item]:data});
    },
    render: function(){
        var backgroundStyle = {
            top: '60px',
            bottom:'0px',
            left: '0px',
            right: '0px',
            position: 'fixed',
            overflow:'auto',
            background:'#f77968'
        };
        var timeLineStyle = {
            marginTop: '110px'
        };
        var bordStyle={
            width:'1000px'
        };
        var titleStyle = {
            textAlign:'center',
            fontSize:'30px',
            color:'#ffffff',
            marginTop:'28px',
            marginBottom:'28px'
        };
        var buttonGroupStyle = {
            float:'right',
            marginTop:'160px'
        };
        return (
            <div style={backgroundStyle}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {(this.state.event)?<big style={titleStyle} className="center-block">{this.state.event.name}</big>:null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="center-block" style={bordStyle}>
                                <div className="dank-time-line">
                                    <big className={(this.state.page==1)?"dank-time-node-active":"dank-time-node"} onClick={ function(){this.setState({page:1})}.bind(this) } >{this.state.pagesNumber[0]}</big>
                                    {(this.state.pagesState[1])?<big className={(this.state.page==2)?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:2})}.bind(this) }>{this.state.pagesNumber[1]}</big>:null}
                                    {(this.state.pagesState[2])?<big className={(this.state.page==3)?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:3})}.bind(this) }>{this.state.pagesNumber[2]}</big>:null}
                                    {(this.state.pagesState[3])?<big className={(this.state.page==4)?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:4})}.bind(this) }>{this.state.pagesNumber[3]}</big>:null}
                                </div>
                                {(this.state.page==1)?<Baseinfo data={this.state.baseinfo} dataRecall={this.dataRecall}/>:null}
                                {(this.state.page==2)?<Person skills={this.state.skills} introduction={this.state.introduction} dataRecall={this.dataRecall}/>:null}
                                <div style={buttonGroupStyle}>
                                    <a className="dank-button-2">上一页</a>
                                    <a className="dank-button-2">下一页</a>
                                    <a className="dank-button-2">预览</a>
                                    <a className="dank-button-2">提交</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

var Baseinfo = React.createClass({
    getInitialState: function(){
        return {
            name:this.props.data.name,
            sex: this.props.data.sex,
            origin:this.props.data.origin,
            nation:this.props.data.nation,
            schoolID:this.props.data.schoolID,
            politicalStatus:this.props.data.politicalStatus,
            telnumber:this.props.data.telnumber,
            telshort:this.props.data.telshort,
            email:this.props.data.email,
            qq:this.props.data.qq,
            major:this.props.data.major,
            birth:this.props.data.birth,
            address:this.props.data.address
        }
    },

    handleChange: function(event){
        this.setState({[event.target.getAttribute('name')]: event.target.value});
    },

    componentWillUnmount: function(){
        var data = {
            name:this.state.name,
            sex: this.state.sex,
            origin:this.state.origin,
            nation:this.state.nation,
            schoolID:this.state.schoolID,
            politicalStatus:this.state.politicalStatus,
            telnumber:this.state.telnumber,
            telshort:this.state.telshort,
            email:this.state.email,
            qq:this.state.qq,
            major:this.state.major,
            birth:this.state.birth,
            address:this.state.address
        };
        this.props.dataRecall('baseinfo', data);
    },

    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'758px',
            height:'618px',
            marginLeft:'30px',
            marginBottom:'30px'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'30px',
            color:'#FFFFFF',
            margin:'20px',
            fontWeight: 'bold'
        };
        return(
            <div style={bordStyle}>
                <h1 style={titleStyle}><b>个人信息</b></h1>
                <div className="d8">
                    <b><table className="center-block t6"><tbody>
                    <tr className="tr2">
                        <td className="form-group">姓名<input value={this.state.name} onChange={this.handleChange} name="name" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td>性别
                            <label className="checkbox-inline">
                                <input type="radio" name="optionsRadiosinline" id="optionsRadios3" value="option1"/><b> 男</b>
                            </label>
                            <label className="checkbox-inline">
                                <input type="radio" name="optionsRadiosinline" id="optionsRadios4" value="option2"/><b> 女</b>
                            </label>
                        </td>
                    </tr>
                    <tr className="tr2">
                        <td>籍贯<input  value={this.state.origin} onChange={this.handleChange} name="origin" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td>民族<input value={this.state.nation} onChange={this.handleChange} name="nation" className="text-center i11" type="text" placeholder="_____________"/></td>
                    </tr>
                    <tr className="tr2">
                        <td>学号 <input value={this.state.schoolID} onChange={this.handleChange} name="schoolID" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td>政治面貌<input value={this.state.politicalStatus} onChange={this.handleChange} name="politicalStatus" className="text-center i11" type="text" placeholder="_____________"/></td>
                    </tr>
                    <tr className="tr2">
                        <td>*手机长号<input value={this.state.telnumber} onChange={this.handleChange} name="telnumber" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td>手机短号 <input value={this.state.telshort} onChange={this.handleChange} name="telshort" className="text-center i11" type="text" placeholder="_____________"/></td>
                    </tr>
                    <tr className="tr2">
                        <td>邮箱<input value={this.state.email} onChange={this.handleChange} name="email" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td>QQ<input value={this.state.qq} onChange={this.handleChange} name="qq" className="text-center i11" type="text" placeholder="_____________"/></td>
                    </tr>
                    <tr className="tr2">
                        <td>专业 <input value={this.state.major} onChange={this.handleChange} name="major" className="text-center i11" type="text" placeholder="_____________"/>
                        </td>
                        <td>出生日期 <input value={this.state.birth} onChange={this.handleChange} name="birth" className="text-center i11" type="text" placeholder="_____________"/>
                        </td>
                    </tr>
                    <tr className="tr2">
                        <td>寝室地址 <input value={this.state.address} onChange={this.handleChange} name="address" className="text-center i11" type="text" placeholder="_____________"/></td>
                        <td></td>
                    </tr>
                    </tbody>
                    </table></b>
                </div>
                <div className="d9">
                    <div className="d10">
                        <img src="img/photo.png" className="i6"/>
                        <a className="a21"><b>上传照片</b></a>
                    </div>
                </div>
            </div>
        )
    }
});

var Person = React.createClass({
    getInitialState: function(){
        return {
            skills: this.props.skills,
            introduction: this.props.introduction
        }
    },

    handleChange: function(event){
        this.setState({
            introduction:{
                delete:this.state.introduction.delete,
                title: this.state.introduction.title,
                content: event.target.value,
                require: this.state.introduction.require
            }
        });
    },

    /*componentWillUnmount: function(){
        var data = {
            name:this.state.name,
            sex: this.state.sex,
            origin:this.state.origin,
            nation:this.state.nation,
            schoolID:this.state.schoolID,
            politicalStatus:this.state.politicalStatus,
            telnumber:this.state.telnumber,
            telshort:this.state.telshort,
            email:this.state.email,
            qq:this.state.qq,
            major:this.state.major,
            birth:this.state.birth,
            address:this.state.address
        };
        this.props.dataRecall('baseinfo', data);
    },*/

    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'758px',
            height:'618px',
            marginLeft:'30px',
            marginBottom:'30px'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'30px',
            color:'#FFFFFF',
            margin:'10px',
            fontWeight: 'bold'
        };
        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>个人介绍</b></h1>

                <div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f"><b>{this.state.introduction.title}</b></h1>
                        <div>
                            <b><textarea name="introduction.content" value={this.state.introduction.content} onChange={this.handleChange} className="text-left tt1"/></b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});