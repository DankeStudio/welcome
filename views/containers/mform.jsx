var React = require('react');
var Header = require('./component/inHeader.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="m-form">
                <meta name="viewport" content="width=device-width" />
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
                address:'',
                img:'',
                grade: ''
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
                }
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
                                chosen: otherSchema[i].type == 'multi-choose' ? [''] : '',
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
        //自动填写基本信息
        $.ajax({
            url: "/user/profile",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            var baseinfo = {
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
                                major: data.body.user.baseinfo.major,
                                img:data.body.user.baseinfo.img,
                                grade: data.body.user.baseinfo.grade
                            };
                            this.setState({baseInfo:baseinfo});
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
    submit: function(){
        var required = ['name', 'telnumber', 'major', 'birth', 'address', 'schoolID'];
        var name = ['姓名', '电话号码', '专业/大类', '学号'];
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
                        window.location.href = '/';
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
        this.setState({newState});
    },
    dataPipe: function(json){
        this.setState(json);
    },
    render: function(){
        var backgroundStyle = {
            top: '4.38rem',
            bottom:'0',
            left: '0',
            right: '0',
            position: 'fixed',
            overflow:'auto',
            background:'#f77968'
        };
        var timeLineStyle = {
            marginTop: '8.03rem'
        };
        var bordStyle={
            width:'100%'
        };
        var titleStyle = {
            textAlign:'center',
            fontSize:'2.19rem',
            color:'#ffffff',
            marginTop:'2.044rem',
            marginBottom:'2.044rem'
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
                 <Baseinfo data={this.state.baseInfo} handleChange={this.handleChange}  dataPipe={this.dataPipe}/>
                 <Wish schema={this.state.event.formschema.wish} data={this.state.wish} handleChange={this.handleChange}/>
                 <Person schema={{ introduction: this.state.event.formschema.introduction,
                                   skills: this.state.event.formschema.skills}}
                         data={this.state.person} handleChange={this.handleChange}/>
                 <Others schema={this.state.event.formschema.others} data={this.state.others} handleChange={this.handleChange}  dataPipe={this.dataPipe}/>
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
                    <div id="loading">
                        <div className="cssload-container">
                            <div className="cssload-shaft1"></div>
                            <div className="cssload-shaft2"></div>
                            <div className="cssload-shaft3"></div>
                            <div className="cssload-shaft4"></div>
                            <div className="cssload-shaft5"></div>
                            <div className="cssload-shaft6"></div>
                            <div className="cssload-shaft7"></div>
                            <div className="cssload-shaft8"></div>
                            <div className="cssload-shaft9"></div>
                            <div className="cssload-shaft10"></div>
                        </div>
                        <div className="loading-text" id="loadingPercentage"></div>
                        <div className="loading-text" id="loadingSpeed"></div>
                        <div className="loading-button" id="cancel">取消上传</div>
                    </div>
                </div>
            </div>
        )
    }
});

var Baseinfo = React.createClass({
    componentDidMount: function(){
      //七牛初始化
        Qiniu.uploader({
            runtimes: 'html5,flash,html4',
            browse_button: 'img',
            uptoken_url: '/uptoken',
            domain: 'http://ocsdd1fl7.bkt.clouddn.com/',   //bucket 域名，下载资源时用到，**必需**
            get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
            max_file_size: '20mb',           //最大文件体积限制
            flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
            max_retries: 3,                   //上传失败最大重试次数
            dragdrop: true,                   //开启可拖曳上传
            chunk_size: '4mb',                //分块上传时，每片的体积
            auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
            unique_names: true,              //自动生成key
            multi_selection: false,         //一次只允许一个文件上传
            init: {
                'BeforeUpload': function(up, file) {
                    $('#loading').fadeIn();
                    $(document).on('click', '#cancel', function(){
                        this.stop();
                        $('#loading').fadeOut();
                        $(document).off('click', '#cancel');
                    }.bind(this));
                },
                'UploadProgress': function(up, file) {
                    $('#loadingPercentage').text('已上传 '+file.percent+'%');
                    $('#loadingSpeed').text(file.speed/1000+'kb/s');
                },
                'FileUploaded': function(up, file, info) {
                    var domain = up.getOption('domain');
                    var res = $.parseJSON(info);
                    this.props.dataPipe({img:domain + res.key});
                    var target = this.refs['img'];
                    $(target).text(file.name);

                    //上传提示消失 相关事件解绑
                    $('#loading').fadeOut();
                    $(document).off('click', '#cancel');
                }.bind(this),
                'Error': function(up, err, errTip) {

                    //上传提示消失 相关事件解绑
                    $('#loading').fadeOut();
                    $(document).off('click', '#cancel');

                    //上传出错时,处理相关的事情
                    if(err.code== -600){//文件大小过大
                        var limit = up.getOption('max_file_size');
                        alert('上传文件大小不得超过'+limit);
                    }
                    else {
                        alert('上传出错，请重试\n'+errTip);
                    }

                }.bind(this)
            }
        });

        //date time picker 初始化
        $("#dtBox").DateTimePicker({
            mode: "date",
            dateFormat: "yyyy-MM-dd",
            afterHide:function(element){
                var value = $(element).val();
                var baseinfo = this.props.data;
                baseinfo.birth = value;
                this.props.dataPipe({baseInfo:baseinfo});
            }.bind(this)
        });
    },
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'1.46rem',
            border:'0.365rem solid #ffffff',
            borderRadius:'0.584rem',
            width:'100%',
            minHeight:'45.114rem',
            marginBottom:'2.19rem'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'2.19rem',
            color:'#FFFFFF',
            margin:'1.46rem',
            fontWeight: 'bold'
        };
        var title = 'baseInfo';
        return(
            <div style={bordStyle}>
                <h1 style={titleStyle}><b>个人信息</b></h1>
                <div className="d8">
                    <table className="dank-form-table">
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
                            <td>学　　号*</td>
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
                        <tr className="">
                            <td>专业大类*</td>
                            <td><input value={this.props.data.major} onChange={this.props.handleChange.bind(null, title, -1)} name="major" className="dank-form-input" type="text" required/></td>
                        </tr>
                        <tr>
                            <td>年　　级</td>
                            <td><input value={this.props.data.grade} onChange={this.props.handleChange.bind(null, title, -1)} name="grade" className="dank-form-input" type="text" required/></td>
                        </tr>
                        <tr>
                            <td>出生日期*</td>
                            <td><input value={this.props.data.birth} data-field="date" data-format="yyyy-MM-dd" onChange={this.props.handleChange.bind(null, title, -1)} name="birth" className="dank-form-input" type="text" readOnly/></td>
                        </tr>
                        <tr className="">
                            <td>寝室地址*</td>
                            <td><input value={this.props.data.address} onChange={this.props.handleChange.bind(null, title, -1)} name="address" className="dank-form-input" type="text"/></td>
                        </tr>
                        <tr>
                            <td>照　　片</td>
                            <td  id="img">
                                <div className="dank-form-file-text" ref="img">{this.props.data.img}</div>
                                <div type="button" className="dank-form-file-button">上传</div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div id="dtBox"></div>
            </div>
        )
    }
});

var Wish = React.createClass({
    handleChange: function(title, i, e) {
        var tmp = this.props.data;
        if (e.target.checked) {
            //判断是否达到数量上限
            var max = this.props.schema.max;
            if(max==null || max=='' || tmp.chosen.length<max){
                tmp.chosen.push(e.target.value);
                tmp.reason.concat(['']);
            }
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
            padding:'1.46rem',
            border:'0.365rem solid #ffffff',
            borderRadius:'0.584rem',
            width:'100%',
            minHeight:'45.114rem',
            _height:'45.114rem',
            marginBottom:'2.19rem'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'2.19rem',
            color:'#FFFFFF',
            margin:'0.73rem',
            fontWeight: 'bold'
        };
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '1.46rem'

        };
        var title = 'wish';
        var wishNodes = this.props.schema.option.map(function(wish, i){
            let chosen = this.props.data.chosen.indexOf(wish);
            return(
                <div className="dank-checkbox-inOneLine" key={wish}>
                    <label>
                        <input type="checkbox" value={wish} name='chosen'
                               checked={chosen>=0}
                               onChange={this.handleChange.bind(null, title, i)}
                               disabled={this.props.schema.max && this.props.data.chosen.length >= this.props.schema.max && chosen < 0} />
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
                <h1 className="h1a"><b>报名志愿{this.props.schema.max <= 0 ? '':'（至多选'+this.props.schema.max+'个）'}</b></h1>
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
        if (e.target.checked){
            //判断是否达到数量上限
            var max = this.props.schema.skills.max;
            if(max==null || max=='' || tmp.length<max){
                tmp.push(e.target.value);
            }
        }
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
            padding:'1.46rem',
            border:'0.365rem solid #ffffff',
            borderRadius:'0.584rem',
            width:'100%',
            minHeight:'45.114rem',
            _height:'45.114rem',
            marginBottom:'2.19rem'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'2.19rem',
            color:'#FFFFFF',
            margin:'0.73rem',
            fontWeight: 'bold'
        };
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '1.46rem'

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
    componentDidMount: function(){
        var others = this.props.data;
        for(var i=0; i<others.length; i++){
            var other = others[i];
            if(other.type=='file'){
                Qiniu.uploader({
                    index: i,
                    runtimes: 'html5,flash,html4',
                    browse_button: 'file'+i,
                    uptoken_url: '/uptoken',
                    domain: 'http://ocsdd1fl7.bkt.clouddn.com/',   //bucket 域名，下载资源时用到，**必需**
                    get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
                    max_file_size: '100mb',           //最大文件体积限制
                    flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
                    max_retries: 3,                   //上传失败最大重试次数
                    dragdrop: true,                   //开启可拖曳上传
                    chunk_size: '4mb',                //分块上传时，每片的体积
                    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    unique_names: true,              //自动生成key
                    multi_selection: false,         //一次只允许一个文件上传
                    init: {
                        'BeforeUpload': function(up, file) {
                            $('#loading').fadeIn();
                            $(document).on('click', '#cancel', function(){
                                this.stop();
                                $('#loading').fadeOut();
                                $(document).off('click', '#cancel');
                            }.bind(this));
                        },
                        'UploadProgress': function(up, file) {
                            $('#loadingPercentage').text('已上传 '+file.percent+'%');
                            $('#loadingSpeed').text(file.speed/1000+'kb/s');
                        },
                        'FileUploaded': function(up, file, info) {
                            var domain = up.getOption('domain');
                            var i = up.getOption('index');
                            var res = $.parseJSON(info);
                            others[i].url = domain + res.key;
                            this.props.dataPipe({others:others});
                            var target = this.refs['file'+i];
                            $(target).text(file.name);

                            //上传提示消失 相关事件解绑
                            $('#loading').fadeOut();
                            $(document).off('click', '#cancel');
                        }.bind(this),
                        'Error': function(up, err, errTip) {

                            //上传提示消失 相关事件解绑
                            $('#loading').fadeOut();
                            $(document).off('click', '#cancel');

                            //上传出错时,处理相关的事情
                            if(err.code== -600){//文件大小过大
                                var limit = up.getOption('max_file_size');
                                alert('上传文件大小不得超过'+limit);
                            }
                            else {
                                alert('上传出错，请重试\n'+errTip);
                            }

                        }.bind(this)
                    }
                });
            }
        }
    },
    handleChange: function(title, zero, e) {
        let index = e.target.getAttribute('name'),
            tmp = this.props.data[index]['chosen'].slice(),
            i = tmp.indexOf(e.target.value);
        if (zero == 0)
            tmp[0] = e.target.value;
        else if (i<0)
            tmp.push(e.target.value);
        else if (i>0)
            tmp.splice(i, 1);
        this.props.handleChange(title, 'chosen', {
            target: {
                getAttribute: function() {
                    return index;
                },
                value: tmp
            }
        });
    },
    render: function(){
        var bordStyle={
            display:'inline-block',
            padding:'1.46rem',
            border:'0.365rem solid #ffffff',
            borderRadius:'0.584rem',
            width:'100%',
            minHeight:'45.114rem',
            _height:'45.114rem',
            marginBottom:'2.19rem'
        };
        var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'2.19rem',
            color:'#FFFFFF',
            margin:'0.73rem',
            fontWeight: 'bold'
        };
        var checkboxStyle = {
            color:'#FFFFFF',
            marginBottom: '1.46rem'

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
                                    let chosen = this.props.data[i].chosen;
                                    let len = chosen[0] == '' ? chosen.length-1 : chosen.length;
                                    return(
                                        <div className="dank-checkbox-inOneLine" key={option}>
                                            <label>
                                                <input type="checkbox" name={i} value={option} 
                                                       checked={chosen.indexOf(option)>=0}
                                                       onChange={this.handleChange.bind(null, title, -1)}
                                                       disabled={other.max && len >= other.max && chosen.indexOf(option) < 0}/>
                                                {option} 
                                            </label>
                                        </div>
                                    )
                                }.bind(this))
                            }
                            {
                                (other.free)?
                                <div className={'dank-form-group-inline' + 
                                                (other.max && this.props.data[i].chosen[0] == '' && this.props.data[i].chosen.length-1 >= other.max 
                                                ? ' disable' : '') }>
                                    <label className="dank-label dank-select-label">其他</label>
                                    <input type="text" name={i} value={this.props.data[i].chosen[0]}
                                           onChange = {this.handleChange.bind(null, title, 0)}
                                           onBlur={null} className="dank-form-input dank-select-input"
                                           disabled={other.max && this.props.data[i].chosen[0] == '' && this.props.data[i].chosen.length-1 >= other.max}/>
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
                    return (
                        <div className="text-left d25" key={i}>
                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                            <div>
                                <div className="dank-form-file-text"  ref={"file"+i}></div>
                                <div type="button" className="dank-form-file-button" id={"file"+i} >上传</div>
                            </div>
                        </div>
                    );
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