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
            totalPage:4,
            eventID: '',
            writetime: '',
            browserinfo: '',
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
            skills: {
                delete:'',
                title:'',
                chosen:['']
            },
            introduction: {
                delete:'',
                title: '',
                content: ''
            },
            wish: {
                delete:'',
                title:'',
                chosen:['']
            },
            reason: [''],
            others:[],
            remark:''
        }
    },
    otherComponentInitialize: function(schema){
        var others = this.state.others;
        for(var index=0; index<schema.others.length; index++)
        {
            var otherSchema = schema.others[index];
            var element;
            switch(otherSchema.type){
                case 'single-text' :
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        content: ''
                        //required: tough.required
                    };
                    break;
                case 'multi-text' :
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        content: ''
                        //required: tough.required
                    };
                    break;
                case 'multi-choose' :
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        //max: rough.max,
                        chosen: ['']
                    };
                    break;
                case 'single-choose': //单选暂不实现可自填的功能
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        //max: rough.max,
                        chosen: ''
                    };
                    break;
                case 'file' :
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        url : ''
                    };
                    break;
                case 'image' :
                    element = {
                        type: otherSchema.type,
                        title: otherSchema.title,
                        url : ''
                    };
                    break;
                default:
                    element = {};
            }
            others.push(element);
        }
        this.setState({others:others});
    },

    componentDidMount: function(){

        $.ajax({
            url: "/form/id",
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
                            var j;
                            for(j=0; j<4; j++){
                                pagesNumber[j] = (pagesState[j])?++i:0;
                            }
                            this.setState({totalPage:j});
                            this.setState({pagesNumber: pagesNumber});
                            this.setState({eventID: data.body.event.eventID});
                            this.setState({remark: data.body.event.formschema.remark});
                            this.otherComponentInitialize(data.body.event.formschema);
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
    nextPage: function(){
        var nextPage = (this.state.page)%(this.state.totalPage) + 1;
        this.setState({page: nextPage});
    },
    lastPage: function(){
        var lastPage = (this.state.totalPage + this.state.page -2)%(this.state.totalPage) + 1;
        this.setState({page: lastPage});
    },

    submit: function(){
        if(this.refs.baseinfo)
        {
            this.refs.baseinfo.componentWillUnmount();
        }
        if(this.refs.person)
        {
            this.refs.person.componentWillUnmount();
        }
        if(this.refs.wish)
        {
            this.refs.wish.componentWillUnmount();
        }
        if(this.refs.others)
        {
            this.refs.others.componentWillUnmount();
        }
        $.ajax({
            url: "form/submit",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                eventID: this.state.eventID,
                writetime: this.state.writetime,
                browserinfo: this.state.browserinfo,
                baseinfo: this.state.baseinfo,
                skills: this.state.skills,
                introduction: this.state.introduction,
                wish: this.state.wish,
                reason: this.state.reason,
                others: this.state.others,
                remark: this.state.remark
            }),
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        window.location.href = '/#/person/info';
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
                                    <big className={(this.state.page==1)?"dank-time-node-active":"dank-time-node"} onClick={ function(){this.setState({page:this.state.pagesNumber[0]})}.bind(this) } >{this.state.pagesNumber[0]}</big>
                                    {(this.state.pagesState[1])?<big className={(this.state.page==this.state.pagesNumber[1])?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:this.state.pagesNumber[1]})}.bind(this) }>{this.state.pagesNumber[1]}</big>:null}
                                    {(this.state.pagesState[2])?<big className={(this.state.page==this.state.pagesNumber[2])?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:this.state.pagesNumber[2]})}.bind(this) }>{this.state.pagesNumber[2]}</big>:null}
                                    {(this.state.pagesState[3])?<big className={(this.state.page==this.state.pagesNumber[3])?"dank-time-node-active":"dank-time-node"} style={timeLineStyle} onClick={ function(){this.setState({page:this.state.pagesNumber[3]})}.bind(this) }>{this.state.pagesNumber[3]}</big>:null}
                                </div>
                                {(this.state.page==this.state.pagesNumber[0]&&this.state.pagesState[0])?<Baseinfo ref="baseinfo" data={this.state.baseinfo} dataRecall={this.dataRecall}/>:null}
                                {(this.state.page==this.state.pagesNumber[1]&&this.state.pagesState[1])?<Person ref="person" introduction={this.state.introduction} skills={this.state.skills} schema={this.state.event.formschema} dataRecall={this.dataRecall}/>:null}
                                {(this.state.page==this.state.pagesNumber[2]&&this.state.pagesState[2])?<Wish ref="wish" wish={this.state.wish} reason={this.state.reason} schema={this.state.event.formschema} dataRecall={this.dataRecall}/>:null}
                                {(this.state.page==this.state.pagesNumber[3]&&this.state.pagesState[3])?<Others ref="others" others={this.state.others} schema={this.state.event.formschema} dataRecall={this.dataRecall}/>:null}
                                <div style={buttonGroupStyle}>
                                    <a className="dank-button-2" onClick={this.lastPage}>上一页</a>
                                    <a className="dank-button-2" onClick={this.nextPage}>下一页</a>
                                    <a className="dank-button-2" onClick={this.submit}>提交</a>
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
    componentDidMount: function(){
        window.iCheck();
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
                    <b><table className="center-block dank-form-table"><tbody>
                    <tr className="">
                        <td className="form-group">姓　　名</td><td><input value={this.state.name} onChange={this.handleChange} name="name" className="dank-form-input" type="text"/></td>
                        <td>性　　别</td><td>
                            <label className="dank-checkbox-inline">
                                <input type="radio" name="sex" value="男"/><b> 男</b>
                            </label>
                            <label className="dank-checkbox-inline">
                                <input type="radio" name="sex" value="女"/><b> 女</b>
                            </label>
                        </td>
                    </tr>
                    <tr className="">
                        <td>籍　　贯</td><td><input  value={this.state.origin} onChange={this.handleChange} name="origin" className="dank-form-input" type="text"/></td>
                        <td>民　　族</td><td><input value={this.state.nation} onChange={this.handleChange} name="nation" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>学　　号</td><td><input value={this.state.schoolID} onChange={this.handleChange} name="schoolID" className="dank-form-input" type="text"/></td>
                        <td>政治面貌</td><td><input value={this.state.politicalStatus} onChange={this.handleChange} name="politicalStatus" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>手机长号</td><td><input value={this.state.telnumber} onChange={this.handleChange} name="telnumber" className="dank-form-input" type="text"/></td>
                        <td>手机短号</td><td><input value={this.state.telshort} onChange={this.handleChange} name="telshort" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>邮　　箱</td><td><input value={this.state.email} onChange={this.handleChange} name="email" className="dank-form-input" type="text"/></td>
                        <td>ＱＱ号码</td><td><input value={this.state.qq} onChange={this.handleChange} name="qq" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>专　　业</td><td><input value={this.state.major} onChange={this.handleChange} name="major" className="dank-form-input" type="text"/>
                        </td>
                        <td>出生日期</td><td><input value={this.state.birth} onChange={this.handleChange} name="birth" className="dank-form-input" type="text"/>
                        </td>
                    </tr>
                    <tr className="">
                        <td>寝室地址</td><td><input value={this.state.address} onChange={this.handleChange} name="address" className="dank-form-input" type="text"/></td>
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
            skills: {
                delete:this.props.schema.skills.delete,
                title:this.props.schema.skills.title,
                chosen:this.props.skills.chosen
            },
            introduction: {
                delete:this.props.schema.introduction.delete,
                title: this.props.schema.introduction.title,
                content: this.props.introduction.content
            }
        }
    },

    introHandleChange: function(event){
        this.setState({
            introduction:{
                delete:this.state.introduction.delete,
                title: this.state.introduction.title,
                content: event.target.value
            }
        });
    },

    componentDidMount: function(){
        window.iCheck();
        $("input[type='checkbox']").on('ifChecked', function(event){
            this.checked(event);
        }.bind(this));
        $("input[type='checkbox']").on('ifUnchecked', function(event){
            this.unchecked(event);
        }.bind(this));

    },

    checked: function(event){
        var chosen = this.state.skills.chosen;
        chosen.push(event.target.value);
        this.setState({skills:{
            delete:this.state.skills.delete,
            title:this.state.skills.title,
            chosen: chosen
        }});
    },

    unchecked: function(event){
        var value = event.target.value;
        var chosen = this.state.skills.chosen;
        chosen.splice(chosen.indexOf(value),1);
        this.setState({skills:{
            delete:this.state.skills.delete,
            title:this.state.skills.title,
            chosen: chosen
        }});
    },

    otherCheck: function(event){
        var chosen = this.state.skills.chosen;
        chosen[0] = event.target.value;
        this.setState({skills:{
            delete:this.state.skills.delete,
            title:this.state.skills.title,
            chosen: chosen
        }});
    },

    componentWillUnmount: function(){
        var skills = {
            delete:this.state.skills.delete,
            title:this.state.skills.title,
            chosen: this.state.skills.chosen
        };
        var introduction = {
            delete:this.state.introduction.delete,
            title: this.state.introduction.title,
            content: this.state.introduction.content
        };
        this.props.dataRecall('skills', skills);
        this.props.dataRecall('introduction', introduction);
    },

    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'758px',
            height:'auto',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var skillNodes = this.props.schema.skills.option.map(function(skill){
            return(
                <div className="dank-checkbox-inOneLine" key={skill}>
                    {(this.props.skills.chosen.indexOf(skill)>0)?<input type="checkbox" value={skill} defaultChecked/>:<input type="checkbox" value={skill}/>}
                    <label> {skill} </label>
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
                            <input type="text" defaultValue={this.props.skills.chosen[0]} onBlur={this.otherCheck} className="dank-form-input dank-select-input"/>
                        </div>:null}
                    </div>
                </div>}


                {(this.props.schema.introduction.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>{this.props.schema.introduction.title}</b></h1>
                        <div>
                            <b><textarea name="introduction.content" value={this.state.introduction.content} onChange={this.introHandleChange} className="text-left tt1"/></b>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
});

var Wish = React.createClass({
    getInitialState: function(){
        return {
            wish: {
                delete:this.props.schema.wish.delete,
                title:this.props.schema.wish.title,
                chosen:this.props.wish.chosen
            },
            reason: this.props.reason
        }
    },

    reasonChange: function(event){
        var reason = this.state.reason;
        var index = event.target.getAttribute('title');
        reason[index] = event.target.value;
        this.setState({
            reason: reason
        });
    },

    componentDidMount: function(){
        window.iCheck();
        $("input[type='checkbox']").on('ifChecked', function(event){
            this.checked(event);
        }.bind(this));
        $("input[type='checkbox']").on('ifUnchecked', function(event){
            this.unchecked(event);
        }.bind(this));

    },

    checked: function(event){
        var chosen = this.state.wish.chosen;
        chosen.push(event.target.value);
        this.setState({wish:{
            delete:this.state.wish.delete,
            title:this.state.wish.title,
            chosen: chosen
        }});
    },

    unchecked: function(event){
        var value = event.target.value;
        var chosen = this.state.wish.chosen;
        chosen.splice(chosen.indexOf(value),1);
        this.setState({wish:{
            delete:this.state.wish.delete,
            title:this.state.wish.title,
            chosen: chosen
        }});
    },

    componentWillUnmount: function(){
        var wish = {
            delete:this.state.wish.delete,
            title:this.state.wish.title,
            chosen: this.state.wish.chosen
        };
        var reason = this.state.reason;
        this.props.dataRecall('wish', wish);
        this.props.dataRecall('reason', reason);
    },

    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'758px',
            height:'auto',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var wishNodes = this.props.schema.wish.option.map(function(wish){
            return(
                <div className="dank-checkbox-inOneLine" key={wish}>
                    {(this.props.wish.chosen.indexOf(wish)>0)?<input type="checkbox" value={wish} defaultChecked/>:<input type="checkbox" value={wish}/>}
                    <label> {wish} </label>
                </div>
            )
        }.bind(this));

        var reasonNodes = this.state.wish.chosen.map(function(chosen, i){
            if(i==0){
                return null;
            }
            else{
                return(
                    <div className="d24" key={i}>
                        <div className="text-left d25">
                            <h1 className="h1f dank-form-h2"><b>希望进入第{i}志愿 {chosen} 的原因是</b></h1>
                            <div>
                                <b><textarea title={i} value={this.state.reason[i]} onChange={this.reasonChange} className="text-left tt1"/></b>
                            </div>
                        </div>
                    </div>
                )
            }
        }.bind(this));

        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>志愿选择</b></h1>
                {(this.props.schema.wish.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>{this.props.schema.wish.title}</b></h1>
                        {wishNodes}
                    </div>
                </div>}
                {reasonNodes}
            </div>
        )
    }
});

var Others = React.createClass({
    getInitialState: function(){
        return {
            others:this.props.others
        }
    },

    componentDidMount: function(){
        /*iCheck initialize*/
        window.iCheck();
        $("input[type='checkbox']").on('ifChecked', function(event){
            this.otherComponentUpdater(event, 1);
        }.bind(this));
        $("input[type='checkbox']").on('ifUnchecked', function(event){
            this.otherComponentUpdater(event, 0);
        }.bind(this));
        $("input[type='radio']").on('ifChecked', function(event){
            this.otherComponentUpdater(event, 1);
        }.bind(this));

    },

    otherComponentUpdater: function(event,checkState){
        var object = event.target;
        //console.log(object);
        var index = object.getAttribute('name');
        //console.log(index);
        var others = this.state.others;
        var old = others[index];
        var element;
        switch(old.type){
            case 'single-text' :
                element = {
                    type: old.type,
                    title: old.title,
                    content: object.value
                    //required: tough.required
                };
                break;
            case 'multi-text' :
                element = {
                    type: old.type,
                    title: old.title,
                    content: object.value
                    //required: tough.required
                };
                break;
            case 'multi-choose' :
                var chosen = old.chosen;
                if(checkState == 1)//checked
                {
                    chosen.push(object.value);
                }
                else if(checkState == 0)//unchecked
                {
                    chosen.splice(chosen.indexOf(object.value),1);
                }
                else if(checkState == -1)//check other
                {
                    chosen[0] = object.value;
                }
                element = {
                    type: old.type,
                    title: old.title,
                    //max: rough.max,
                    chosen: chosen
                };
                break;
            case 'single-choose': //单选暂不实现可自填的功能
                var chosen = old.chosen;
                if(checkState == 1)
                {
                    chosen = object.value;
                }
                element = {
                    type: old.type,
                    title: old.title,
                    //max: rough.max,
                    chosen: chosen
                };
                break;
            case 'file' :
                element = {
                    type: old.type,
                    title: old.title,
                    url : object.value
                };
                break;
            case 'image' :
                element = {
                    type: old.type,
                    title: old.title,
                    url : object.value
                };
                break;
            default:
                element = {};
        }
        others[index] = element;
        this.setState({others:others});
    },

    componentWillUnmount: function(){
        this.props.dataRecall('others', this.state.others);
    },

    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'20px',
            border:'5px solid #ffffff',
            borderRadius:'8px',
            width:'758px',
            height:'auto',
            minHeight:'618px',
            _height:'618px',
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
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '20px'

        };
        var otherNodes = this.props.schema.others.map(function(other, i){
            switch(other.type){
                case 'single-text' :
                    return(
                        <div className="d24" key={i}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                <div>
                                    <input type="text" name={i} defaultValue={this.state.others[i].content} onChange={function(event){this.otherComponentUpdater(event,null);}.bind(this)} className="dank-form-single-text"/>
                                </div>
                            </div>
                        </div>
                    );
                    break;
                case 'multi-text' :
                    return(
                        <div className="d24" key={i}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                <div>
                                    <textarea name={i} defaultValue={this.state.others[i].content} onChange={function(event){this.otherComponentUpdater(event,null);}.bind(this)} className="text-left tt1"/>
                                </div>
                            </div>
                        </div>
                    );
                    break;
                case 'multi-choose' :
                    return (
                        <div className="text-left d25" key={i}>
                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                            {
                                other.option.map(function(option){
                                    option = "" + option;
                                    return(
                                        <div className="dank-checkbox-inOneLine" key={option}>
                                            {(this.props.others[i].chosen.indexOf(option)>0)?<input type="checkbox" name={i} value={option} defaultChecked/>:<input type="checkbox" name={i} value={option}/>}
                                            <label> {option} </label>
                                        </div>
                                    )
                                }.bind(this))
                            }
                            {
                                (other.free)?
                                <div className="dank-form-group-inline">
                                    <label className="dank-label dank-select-label">其他</label>
                                    <input type="text" name={i} defaultValue={this.state.others[i].chosen[0]} onBlur={function(event){this.otherComponentUpdater(event,-1);}.bind(this)} className="dank-form-input dank-select-input"/>
                                </div>
                                :null
                            }
                        </div>
                    );
                    break;
                case 'single-choose': //单选暂不实现可自填的功能
                    return (
                        <div className="text-left d25" key={i}>
                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                            {
                                other.option.map(function(option){
                                    option = "" + option;
                                    return(
                                        <div className="dank-radio-inOneLine" key={option}>
                                            {(this.props.others[i].chosen==option)?<input type="radio" name={i} value={option} defaultChecked/>:<input type="radio" name={i} value={option}/>}
                                            <label> {option} </label>
                                        </div>
                                    )
                                }.bind(this))
                            }
                        </div>
                    );
                    break;
                case 'file' :
                    return null;
                    break;
                case 'image' :
                    return null;
                    break;
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