var React = require('react');
var Header = require('./component/inHeader.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="m-form">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Header/>
                <Content eventID={this.props.params.id}/>
            </div>
        )
    }
});

var Content = React.createClass({
    getInitialState: function(){
        return{
            event: {},
            baseInfo: {
                name:'',
                sex: '男',
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
            wish: {
                chosen:[],
                reason: []
            },
            person: {
                skills: {
                    chosen:[],
                    other: ''
                },
                introduction: {
                    content: ''
                },
            },
            others:[],
            remark:''
        }
    },
    componentDidMount: function(){
        $.get('/form/id?eventID='+this.props.eventID, function(data) {
                switch(data.code){
                    case 0: 
                        let otherSchema = data.body.event.formschema.others,
                            tmp = this.state.others;
                        for(let i=0; i<otherSchema.length;i++) {
                            let e = {
                                type: otherSchema[i].type,
                                title: otherSchema[i].title,
                                content: '',
                                chosen: otherSchema.type == 'multi-choose' ? [''] : '',
                                url: ''
                            }
                            tmp.push(e);
                        }
                        this.setState({
                            event:data.body.event,
                            others: tmp
                        });
                        break;
                    default:
                        alert('获取面试表信息失败');
                        break;
                }
            }.bind(this)
        );
    },
    submit: function(){
        var required = ['name', 'telnumber', 'major', 'birth', 'address', 'schoolID'];
        var name = ['姓名', '电话号码', '专业/大类', '出生日期', '寝室地址', '学号'];
        for(let i=0; i<required.length; i++) {
            if (this.state.baseInfo[required[i]] == '') {
                alert(name[i]+'未填写!');
                return;
            }
        }
        if (this.state.wish.chosen.length == 0) {
            alert('志愿未选择!');
            return;        
        }
        var browserinfo = '';
        var skills = this.state.person.skills;
        skills.chosen = [skills.other].concat(skills.chosen);
        var wish = {chosen: this.state.wish.chosen};
        $.ajax({
            url: "form/submit",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                eventID: this.state.event.eventID,
                writetime: (new Date()).getTime(),
                browserinfo: browserinfo,
                baseinfo: this.state.baseInfo,
                skills: skills,
                introduction: this.state.person.introduction,
                wish: wish,
                reason: this.state.wish.reason,
                others: this.state.others,
                remark: this.state.remark
            }),
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        alert('提交成功');
                        window.location.href = '/#/person/info';
                        break;
                    default:
                        alert('提交失败: '+data.msg);
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    handleChange: function(title, i, e) {
        var newState = this.state;
        if (i == -1)
            newState[title][e.target.getAttribute('name')] = e.target.value;
        else
            newState[title][e.target.getAttribute('name')][i] = e.target.value;
        this.setState({data: newState});
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
            width: '100%'
        };
        var titleStyle = {
            textAlign:'center',
            fontSize:'30px',
            color:'#ffffff',
            marginTop:'28px',
            marginBottom:'28px'
        };
        var buttonGroupStyle = {
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
        };
        var personSchema, forms = null;
        if (this.state.event.eventID) {
            forms = (
             <div className="center-block" style={bordStyle}>
                 <Baseinfo data={this.state.baseInfo} handleChange={this.handleChange}/>
                 <Wish schema={this.state.event.formschema.wish} data={this.state.wish} handleChange={this.handleChange}/>
                 <Person schema={{ introduction: this.state.event.formschema.introduction, 
                                   skills: this.state.event.formschema.skills}} 
                         data={this.state.person} handleChange={this.handleChange}/>
                 <Others schema={this.state.event.formschema.others} data={this.state.others} handleChange={this.handleChange}/>
                 <div style={buttonGroupStyle}>
                     <a className="dank-button-2" onClick={this.submit}>提交</a>
                 </div>
            </div> );
        }
        return (
            <div style={backgroundStyle}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <big style={titleStyle} className="center-block">{this.state.event.name}</big>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                           {forms}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Baseinfo = React.createClass({
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'100%',
            minHeight:'618px',
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
        var title = 'baseInfo';
        return(
            <div style={bordStyle}>
                <h1 style={titleStyle}><b>个人信息</b></h1>
                <div className="d8">
                    <table className="center-block dank-form-table">
                    <tbody>
                        <tr className="">
                            <td className="form-group">姓　　名*</td>
                            <td><input  type="text" name="name" value={this.props.data.name} 
                                        onChange={this.props.handleChange.bind(null, title, -1)} 
                                        className="dank-form-input" required/></td>
                        </tr>
                        <tr>
                            <td>性　　别*</td>
                            <td>
                                <label className="dank-checkbox-inline">
                                    <label>
                                        <input type="radio" name="sex" value="男"
                                               checked={!this.props.data.sex || this.props.data.sex == '男'} 
                                               onChange={this.props.handleChange.bind(null, title, -1)}/><b> 男</b>
                                    </label>
                                    <label>
                                        <input type="radio" name="sex" value="女"
                                               checked={this.props.data.sex == '女'}
                                               onChange={this.props.handleChange.bind(null, title, -1)}/><b> 女</b>
                                    </label>
                                </label>
                            </td>
                        </tr>
                        <tr className="">
                            <td>学　　号</td>
                            <td><input value={this.props.data.schoolID} onChange={this.props.handleChange.bind(null, title, -1)} name="schoolID" className="dank-form-input" type="text"/></td>
                        </tr>
                        <tr className="">
                            <td>手机长号*</td>
                            <td><input value={this.props.data.telnumber} onChange={this.props.handleChange.bind(null, title, -1)} name="telnumber" className="dank-form-input" type="text" required/></td>
                        </tr>
                        <tr>
                            <td>手机短号</td>
                            <td><input value={this.props.data.telshort} onChange={this.props.handleChange.bind(null, title, -1)} name="telshort" className="dank-form-input" type="text"/></td>
                        </tr>
                        <tr className="">
                            <td>邮　　箱</td>
                            <td><input value={this.props.data.email} onChange={this.props.handleChange.bind(null, title, -1)} name="email" className="dank-form-input" type="text"/></td>
                        </tr>
                        <tr>
                            <td>ＱＱ号码</td>
                            <td><input value={this.props.data.qq} onChange={this.props.handleChange.bind(null, title, -1)} name="qq" className="dank-form-input" type="text"/></td>
                        </tr>
                        <tr className="">
                            <td>专 业/大 类*</td>
                            <td><input value={this.props.data.major} onChange={this.props.handleChange.bind(null, title, -1)} name="major" className="dank-form-input" type="text" required/></td>
                        </tr>
                        <tr>
                            <td>出生日期*</td>
                            <td><input value={this.props.data.birth} onChange={this.props.handleChange.bind(null, title, -1)} name="birth" className="dank-form-input" type="text" required/></td>
                        </tr>
                        <tr className="">
                            <td>寝室地址*</td>
                            <td><input value={this.props.data.address} onChange={this.props.handleChange.bind(null, title, -1)} name="address" className="dank-form-input" type="text" required/></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="d9">
                    <div className="d10">
                        <img src="img/photo.png" className="i6"/>
                    </div>
                </div>
            </div>
        )
    }
});

var Wish = React.createClass({
    handleChange: function(title, i, e) {
        var tmp = this.props.data;
        if (e.target.checked) {
            tmp.chosen.push(e.target.value);
            tmp.reason.concat(['']);
        }
        else {
            let index = tmp.chosen.indexOf(e.target.value);
            tmp.chosen.splice(index, 1);
            tmp.reason.splice(index, 1);
        }
        this.props.handleChange(title, -1, {
            target: {
                getAttribute: function() {
                    return 'chosen';
                },
                value: tmp.chosen
            }
        });
        this.props.handleChange(title, -1, {
            target: {
                getAttribute: function() {
                    return 'reason';
                },
                value: tmp.reason
            }    
        });
    },
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'100%',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var title = 'wish';
        var wishNodes = this.props.schema.option.map(function(wish, i){
            return(
                <div className="dank-checkbox-inOneLine" key={wish}>
                    <label> 
                        <input type="checkbox" value={wish} name='chosen'
                               checked={this.props.data.chosen.indexOf(wish)>=0}
                               onChange={this.handleChange.bind(null, title, i)}/>
                        {wish} 
                    </label>
                </div>
            )
        }.bind(this));

        var reasonNodes = this.props.data.chosen.map(function(chosen, i){
                return(
                    <div className="d24" key={i}>
                        <div className="text-left d25">
                            <h1 className="h1f dank-form-h2"><b>希望进入第{i+1}志愿 {chosen} 的原因是</b></h1>
                            <div>
                                <b><textarea value={this.props.data.reason[i]} name='reason'
                                             onChange={this.props.handleChange.bind(null, title, i)} 
                                             className="text-left tt1"/></b>
                            </div>
                        </div>
                    </div>
                )
        }.bind(this));

        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>报名志愿</b></h1>
                {(this.props.schema.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>{this.props.schema.title}*</b></h1>
                        {wishNodes}
                    </div>
                </div>}
                {reasonNodes}
            </div>
        )
    }
});

var Person = React.createClass({
    handleChange: function(title, i, e) {
        var tmp = this.props.data[e.target.getAttribute('name')][i].slice();
        if (e.target.checked)
            tmp.push(e.target.value);
        else
            tmp.splice(tmp.indexOf(e.target.value),1);
        let name = e.target.getAttribute('name');
        this.props.handleChange(title, i, {
            target: {
                getAttribute: function() {
                    return name;
                },
                value: tmp
            }
        });
    },
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'100%',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var title = 'person';
        var skillNodes = this.props.schema.skills.option.map(function(skill){
            return(
                <div className="dank-checkbox-inOneLine" key={skill}>
                    <label> 
                        <input type="checkbox" value={skill} name='skills' 
                            checked={this.props.data.skills.chosen.indexOf(skill)>=0}
                            onChange={this.handleChange.bind(null, title, 'chosen')}/>
                        {skill} 
                    </label>
                </div>
            )
        }.bind(this));
        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>个人介绍</b></h1>
                {(this.props.schema.skills.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>{this.props.schema.skills.title}</b></h1>
                        {skillNodes}
                        {(this.props.schema.skills.free)?
                        <div className="dank-form-group-inline">
                            <label className="dank-label dank-select-label">其他</label>
                            <input type="text" name="skills"
                                   value={this.props.data.skills.other}
                                   onChange={this.props.handleChange.bind(null, title, 'other')}
                                   className="dank-form-input dank-select-input"/>
                        </div>:null}
                    </div>
                </div>}
                {(this.props.schema.introduction.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>{this.props.schema.introduction.title}</b></h1>
                        <div>
                            <b><textarea name="introduction" value={this.props.data.introduction.content} 
                                         onChange={this.props.handleChange.bind(null, title, 'content')} className="text-left tt1"/></b>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
});

var Others = React.createClass({
    handleChange: function(title) {
        var tmp = this.props.schema;
        tmp.push(e.target.value);
        e.target.value = tmp;
        this.props.handleChange(title, -1, e);
    },
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'100%',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var title = 'others';
        var otherNodes = this.props.schema.map(function(other, i){
            switch(other.type){
                case 'single-text' :
                    return(
                        <div className="d24" key={i}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                <div>
                                    <input type="text" name={i} 
                                           value={this.props.data[i].content} 
                                           onChange={this.props.handleChange.bind(null, title, 'content')} 
                                           className="dank-form-single-text"/>
                                </div>
                            </div>
                        </div>
                    );
                case 'multi-text' :
                    return(
                        <div className="d24" key={i}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                <div>
                                    <textarea name={i} value={this.props.data[i].content} 
                                              onChange={this.props.handleChange.bind(null, title, 'content')} 
                                              className="text-left tt1"/>
                                </div>
                            </div>
                        </div>
                    );
                case 'multi-choose' :
                    return (
                        <div className="text-left d25" key={i}>
                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                            {
                                other.option.map(function(option){
                                    option = "" + option;
                                    return(
                                        <div className="dank-checkbox-inOneLine" key={option}>
                                            <label>
                                                <input type="checkbox" name={i} value={option} 
                                                       checked={this.props.data[i].chosen.indexOf(option)>=0}
                                                       onChange={this.handleChange.bind(null, title, 'chosen')}/>
                                                {option} 
                                            </label>
                                        </div>
                                    )
                                }.bind(this))
                            }
                            {
                                (other.free)?
                                <div className="dank-form-group-inline">
                                    <label className="dank-label dank-select-label">其他</label>
                                    <input type="text" name={i} value={this.props.data[i].chosen[0]} 
                                           onBlur={null} className="dank-form-input dank-select-input"/>
                                </div>
                                :null
                            }
                        </div>
                    );
                case 'single-choose': //单选暂不实现可自填的功能
                    return (
                        <div className="text-left d25" key={i}>
                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                            {
                                other.option.map(function(option){
                                    option = "" + option;
                                    return(
                                        <div className="dank-radio-inOneLine" key={option}>
                                            <label>
                                                <input type="radio" name={i} value={option} 
                                                       checked={this.props.data[i].chosen==option}
                                                       onChange={this.props.handleChange.bind(null, title, 'chosen')}/>
                                                {option} 
                                            </label>
                                        </div>
                                    )
                                }.bind(this))
                            }
                        </div>
                    );
                case 'file' :
                    return null;
                case 'image' :
                    return null;
                default:
                    return null;
            }
        }.bind(this));
        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>其他问题</b></h1>
                {otherNodes}
            </div>
        )
    }
});