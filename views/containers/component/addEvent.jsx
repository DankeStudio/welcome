var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
   render: function(){
       return(
           <Content/>
       )
   }
});

var Content = React.createClass({
    getInitialState: function(){
        return{
            page: 1,
            pagesState:[true, true, true, true],
            pagesNumber:[1, 2, 3, 4],
            totalPage:4,
            skills: {
                delete:false,
                title:'技能',
                max:null,
                option:['ppt', '视频', '主持', '摄影', 'ps'],
                free: true
            },
            introduction: {
                delete:false,
                title: '个人履历（经历，荣誉）',
                require: true
            },
            wish: {
                delete:false,
                title:'请选择您的志愿',
                max: 2,
                option:['产品','设计','前端','后端','运营','推广'],
                free: false
            },
            others:[],
            remark:'无'
        }
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

    pageDelete: function(i) {
        var pagesState = this.state.pagesState;
        var pagesNumber = this.state.pagesNumber;
        var totalPage = this.state.totalPage;

        pagesState[i-1] = false;
        for (var j = i; j < 4; j++) {
            pagesNumber[j]--;
        }
        totalPage--;

        this.setState({
            pagesState:pagesState,
            pagesNumber:pagesNumber,
            totalPage:totalPage
        });

    },

    render: function(){
        var backgroundStyle = {
            top: '60px',
            bottom:'0px',
            left: '215px',
            right: '292px',
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
        var libraryStyle={
            position: 'fixed',
            right:'0',
            bottom:'0',
            top:'60px',
            width:'292px'
        };
        return (
            <div>
                <div style={backgroundStyle}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <big style={titleStyle} className="center-block"><input type="text" className="dank-form-title-input" /></big>
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
                                    {(this.state.page==this.state.pagesNumber[0]&&this.state.pagesState[0])?<Baseinfo ref="baseinfo" data={this.state.baseinfo} dataRecall={this.dataRecall} pageDelete={this.pageDelete}/>:null}
                                    {(this.state.page==this.state.pagesNumber[1]&&this.state.pagesState[1])?<Person ref="person" introduction={this.state.introduction} skills={this.state.skills} dataRecall={this.dataRecall} pageDelete={this.pageDelete}/>:null}
                                    {(this.state.page==this.state.pagesNumber[2]&&this.state.pagesState[2])?<Wish ref="wish" wish={this.state.wish} dataRecall={this.dataRecall} pageDelete={this.pageDelete}/>:null}
                                    {(this.state.page==this.state.pagesNumber[3]&&this.state.pagesState[3])?<Others ref="other" other={this.state.other} dataRecall={this.dataRecall} pageDelete={this.pageDelete}/>:null}
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
                <div style={libraryStyle}>
                    <div className="d14">
                        <div className="d15">
                            <h1 className="h1b"><b>报名表组件</b></h1>
                        </div>
                        <div className="dank-library-component">
                            单行文本框
                        </div>
                        <div className="dank-library-component">
                            多行文本框
                        </div>
                        <div className="dank-library-component">
                            单选组件
                        </div>
                        <div className="dank-library-component">
                            多选组件
                        </div>
                        <div className="dank-library-component">
                            上传文件
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

});

var Baseinfo = React.createClass({
    componentDidMount: function(){
        window.iCheck();
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
                        <td className="form-group">姓　　名</td><td><input name="name" className="dank-form-input" type="text"/></td>
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
                        <td>籍　　贯</td><td><input name="origin" className="dank-form-input" type="text"/></td>
                        <td>民　　族</td><td><input name="nation" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>学　　号</td><td><input name="schoolID" className="dank-form-input" type="text"/></td>
                        <td>政治面貌</td><td><input name="politicalStatus" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>手机长号</td><td><input name="telnumber" className="dank-form-input" type="text"/></td>
                        <td>手机短号</td><td><input name="telshort" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>邮　　箱</td><td><input name="email" className="dank-form-input" type="text"/></td>
                        <td>ＱＱ号码</td><td><input name="qq" className="dank-form-input" type="text"/></td>
                    </tr>
                    <tr className="">
                        <td>专　　业</td><td><input name="major" className="dank-form-input" type="text"/>
                    </td>
                        <td>出生日期</td><td><input name="birth" className="dank-form-input" type="text"/>
                    </td>
                    </tr>
                    <tr className="">
                        <td>寝室地址</td><td><input name="address" className="dank-form-input" type="text"/></td>
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
            introduction: this.props.introduction,
            skillsEdit: false,
            introductionEdit: false
        }
    },

    componentDidMount: function(){
        window.iCheck();
    },
    componentDidUpdate: function(){
        window.iCheck();
    },

    componentWillUnmount: function(){
        var skills = this.state.skills;
        var introduction = this.state.introduction;
        this.props.dataRecall('skills', skills);
        this.props.dataRecall('introduction', introduction);
        if(skills.delete && introduction.delete)
        {
            this.props.pageDelete(2);
        }
    },

    decoder: function(options){
        return options.join('#');
    },

    encoder: function(text){
        return text.split('#');
    },

    save: function(type){
        switch (type){
            case 'skill':
                var title = this.refs.skillsTitle.value;
                var max = this.refs.skillsMax.value;
                var free = (this.refs.skillsFree.checked)?true:false;
                var option = this.encoder(this.refs.skillsOption.value);

                this.setState({
                    skills:{
                        title: title,
                        max: max,
                        free: free,
                        option: option,
                        require: this.state.skills.require
                    },
                    skillsEdit: false
                });
                break;
            case 'introduction':
                var title = this.refs.introductionTitle.value;
                this.setState({
                    introduction:{
                        title: title,
                        delete: this.state.introduction.delete
                    },
                    introductionEdit: false
                });

        }
    },

    deleteComponent: function (type) {
        switch (type){
            case 'skills':
                var skills = this.state.skills;
                skills.delete = true;
                this.setState({skills:skills});
                break;
            case 'introduction':
                var introduction = this.state.introduction;
                introduction.delete = true;
                this.setState({introduction: introduction});
                break;
        }

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
        var skillNodes = this.state.skills.option.map(function(skill){
            return(
                <div className="dank-checkbox-inOneLine" key={skill}>
                    <input type="checkbox" value={skill} />
                    <label> {skill} </label>
                </div>
            )
        }.bind(this));
        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>个人介绍</b></h1>
                {(this.state.skills.delete)?null:
                (this.state.skillsEdit) ?
                    <div className="d24">
                        <div className="d25 dank-schema-component">
                            <div>
                                <div className="dank-form-group-inline dank-schema-form-group-inline">
                                    <h1 className="dank-schema-label">标题</h1>
                                    <div>
                                        <input className="dank-schema-input" type="text" ref="skillsTitle"
                                               defaultValue={this.state.skills.title}/>
                                    </div>
                                </div>
                                <div
                                    className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                    <h1 className="dank-schema-label">选择数量限制</h1>
                                    <div>
                                        <input className="dank-schema-input" type="number" ref="skillsMax"
                                               defaultValue={this.state.skills.max}/>
                                    </div>
                                </div>
                                <div
                                    className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                    <h1 className="dank-schema-label">是否允许自填</h1>
                                    <div>
                                        {(this.state.skills.free) ?
                                            <input type="checkbox" ref="skillsFree" defaultChecked/> :
                                            <input type="checkbox" ref="skillsFree"/>}
                                        <label>允许自填</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="dank-schema-label">可选项（选项间以#分隔）</h1>
                                <div>
                                    <input className="dank-schema-input" type="text" ref="skillsOption"
                                           defaultValue={this.decoder(this.state.skills.option)}/>
                                </div>
                            </div>
                            <div className="dank-schema-option-group">
                                <a className="dank-schema-option">上移</a>
                                <a className="dank-schema-option">下移</a>
                                <a className="dank-schema-option"
                                   onClick={function(){this.deleteComponent('skills')}.bind(this)}>删除</a>
                                <a className="dank-schema-option"
                                   onClick={function(){this.save('skill')}.bind(this)}>完成</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d24" onClick={function(){this.setState({skillsEdit: true})}.bind(this)}>
                        <div className="text-left d25">
                            <h1 className="h1f dank-form-h2"><b>{this.state.skills.title}</b></h1>
                            {skillNodes}
                            {(this.state.skills.free) ?
                                <div className="dank-form-group-inline">
                                    <label className="dank-label dank-select-label">其他</label>
                                    <input type="text" className="dank-form-input dank-select-input"/>
                                </div>
                                : null}
                        </div>
                    </div>

                }


                {(this.state.introduction.delete)?null:
                    ((this.state.introductionEdit)?
                        <div className="d24">
                            <div className="d25 dank-schema-component">
                                <div>
                                    <h1 className="dank-schema-label">标题</h1>
                                    <div>
                                        <input className="dank-schema-input" ref="introductionTitle" type="text"
                                               defaultValue={this.state.introduction.title}/>
                                    </div>
                                </div>
                                <div className="dank-schema-option-group">
                                    <a className="dank-schema-option" onClick={function(){this.deleteComponent('introduction')}.bind(this)}>删除</a>
                                    <a className="dank-schema-option"
                                       onClick={function(){this.save('introduction')}.bind(this)}>完成</a>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="d24" onClick={function(){this.setState({introductionEdit: true})}.bind(this)}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{this.state.introduction.title}</b></h1>
                                <div>
                                    <b><textarea name="introduction.content" className="text-left tt1"/></b>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
});

var Wish = React.createClass({
    getInitialState: function(){
        return {
            wish: this.props.wish,
            wishEdit: false
        }
    },

    componentDidMount: function(){
        window.iCheck();
    },
    componentDidUpdate: function(){
        window.iCheck();
    },

    componentWillUnmount: function(){
        var wish = this.state.wish;
        this.props.dataRecall('wish', wish);
        if(wish.delete)
        {
            this.props.pageDelete(3);
        }
    },
    decoder: function(options){
        return options.join('#');
    },

    encoder: function(text){
        return text.split('#');
    },
    deleteComponent: function (type) {
        switch (type){
            case 'wish':
                var wish = this.state.wish;
                wish.delete = true;
                this.setState({skills:wish});
                break;
        }

    },
    save: function(type){
        switch (type){
            case 'wish':
                var title = this.refs.wishTitle.value;
                var max = this.refs.wishMax.value;
                var free = (this.refs.wishFree.checked)?true:false;
                var option = this.encoder(this.refs.wishOption.value);

                this.setState({
                    wish:{
                        title: title,
                        max: max,
                        free: free,
                        option: option,
                        require: this.state.wish.require
                    },
                    wishEdit: false
                });
                break;
        }
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
        var wishNodes = this.state.wish.option.map(function(wish){
            return(
                <div className="dank-checkbox-inOneLine" key={wish}>
                    <input type="checkbox" value={wish}/>
                    <label> {wish} </label>
                </div>
            )
        }.bind(this));

        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>志愿选择</b></h1>
                {(this.state.wish.delete)?null:
                    (this.state.wishEdit) ?
                        <div className="d24">
                            <div className="d25 dank-schema-component">
                                <div>
                                    <div className="dank-form-group-inline dank-schema-form-group-inline">
                                        <h1 className="dank-schema-label">标题</h1>
                                        <div>
                                            <input className="dank-schema-input" type="text" ref="wishTitle"
                                                   defaultValue={this.state.wish.title}/>
                                        </div>
                                    </div>
                                    <div
                                        className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                        <h1 className="dank-schema-label">选择数量限制</h1>
                                        <div>
                                            <input className="dank-schema-input" type="number" ref="wishMax"
                                                   defaultValue={this.state.wish.max}/>
                                        </div>
                                    </div>
                                    <div
                                        className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                        <h1 className="dank-schema-label">是否允许自填</h1>
                                        <div>
                                            {(this.state.wish.free) ?
                                                <input type="checkbox" ref="wishFree" defaultChecked/> :
                                                <input type="checkbox" ref="wishFree"/>}
                                            <label>允许自填</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="dank-schema-label">可选项（选项间以#分隔）</h1>
                                    <div>
                                        <input className="dank-schema-input" type="text" ref="wishOption"
                                               defaultValue={this.decoder(this.state.wish.option)}/>
                                    </div>
                                </div>
                                <div className="dank-schema-option-group">
                                    <a className="dank-schema-option"
                                       onClick={function(){this.deleteComponent('wish')}.bind(this)}>删除</a>
                                    <a className="dank-schema-option"
                                       onClick={function(){this.save('wish')}.bind(this)}>完成</a>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="d24" onClick={function(){this.setState({wishEdit: true})}.bind(this)}>
                            <div className="text-left d25">
                                <h1 className="h1f dank-form-h2"><b>{this.state.wish.title}</b></h1>
                                {wishNodes}
                                {(this.state.wish.free) ?
                                    <div className="dank-form-group-inline">
                                        <label className="dank-label dank-select-label">其他</label>
                                        <input type="text" className="dank-form-input dank-select-input"/>
                                    </div>
                                    : null}
                            </div>
                        </div>

                }
                {(this.state.wish.delete)?null:<div className="d24">
                    <div className="text-left d25">
                        <h1 className="h1f dank-form-h2"><b>希望进入第1志愿 {this.state.wish.option[0]} 的原因是</b></h1>
                        <div>
                            <b><textarea value={'此组件会自动根据面试者的选择生成'} className="text-left tt1" readOnly/></b>
                        </div>
                    </div>
                </div>}
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