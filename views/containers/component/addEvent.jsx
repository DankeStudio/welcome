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
            name : '请输入纳新事项名称',
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
    dataRecall: function(item, data, callback){
        this.setState({[item]:data}, callback);
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
        var create = function(){
            $.ajax({
                url: "event/create",
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify({
                    name: this.state.name,
                    formschema:{
                        skills: this.state.skills,
                        introduction: this.state.introduction,
                        wish: this.state.wish,
                        others: this.state.others
                    }
                }),
                success: function(data) {
                    console.log(data);
                    switch(data.code){
                        case 0:
                            window.location.href = '/#/back';
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
        }.bind(this);

        if(this.refs.person)
        {
            this.refs.person.componentForceUnmount(create);
        }
        if(this.refs.wish)
        {
            this.refs.wish.componentForceUnmount(create);
        }
        if(this.refs.others)
        {
            this.refs.others.componentForceUnmount(create);
        }

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

    componentDidMount: function(){
        //标题默认光标选中
        this.refs.name.select();
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
                                <big style={titleStyle} className="center-block"><input type="text" value={this.state.name} ref="name" onChange={function(){this.setState({name:this.refs.name.value})}.bind(this)} className="dank-form-title-input" /></big>
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
                                    {(this.state.page==this.state.pagesNumber[3]&&this.state.pagesState[3])?<Others ref="others" others={this.state.others} dataRecall={this.dataRecall} pageDelete={this.pageDelete}/>:null}
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
                {
                    (this.state.page==this.state.pagesNumber[3]&&this.state.pagesState[3])?
                        <div style={libraryStyle}>
                            <div className="d14">
                                <div className="d15">
                                    <h1 className="h1b"><b>报名表组件</b></h1>
                                </div>
                                <div className="dank-library-component" onClick={function(){this.refs.others.componentAdd('single-text')}.bind(this)}>
                                    单行文本框
                                </div>
                                <div className="dank-library-component" onClick={function(){this.refs.others.componentAdd('multi-text')}.bind(this)}>
                                    多行文本框
                                </div>
                                <div className="dank-library-component" onClick={function(){this.refs.others.componentAdd('single-choose')}.bind(this)}>
                                    单选组件
                                </div>
                                <div className="dank-library-component" onClick={function(){this.refs.others.componentAdd('multi-choose')}.bind(this)}>
                                    多选组件
                                </div>
                                <div className="dank-library-component" onClick={function(){this.refs.others.componentAdd('file')}.bind(this)}>
                                    上传文件
                                </div>
                            </div>
                        </div>
                        :
                        <div style={libraryStyle}>
                            <div className="d14">
                                <div className="d15">
                                    <h1 className="h1b"><b>报名表组件</b></h1>
                                    <h2 className="h2b"><b>仅在最后一页可用</b></h2>
                                </div>
                                <div className="dank-library-component-forbidden">
                                    单行文本框
                                </div>
                                <div className="dank-library-component-forbidden">
                                    多行文本框
                                </div>
                                <div className="dank-library-component-forbidden">
                                    单选组件
                                </div>
                                <div className="dank-library-component-forbidden">
                                    多选组件
                                </div>
                                <div className="dank-library-component-forbidden">
                                    上传文件
                                </div>
                            </div>
                        </div>
                }

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
        /*var titleStyle={
            display:'block',
            textAlign: 'center',
            fontSize:'30px',
            color:'#FFFFFF',
            margin:'20px',
            fontWeight: 'bold'
        };*/
        return(
            <div style={bordStyle}>
                <h1 className="h1a"><b>个人信息</b></h1>
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

    componentForceUnmount: function(callback){
        var skills = this.state.skills;
        var introduction = this.state.introduction;
        this.props.dataRecall('skills', skills, function(){
            this.props.dataRecall('introduction', introduction, callback);
        }.bind(this));
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
                                <a className="dank-schema-option"
                                   onClick={function(){this.deleteComponent('skills')}.bind(this)}>删除</a>
                                <a className="dank-schema-option"
                                   onClick={function(){this.save('skill')}.bind(this)}>完成</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d24 " onClick={function(){this.setState({skillsEdit: true})}.bind(this)}>
                        <div className="text-left d25 dank-schema-component-hover">
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
                            <div className="text-left d25 dank-schema-component-hover">
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

    componentForceUnmount: function(callback){
        var wish = this.state.wish;
        this.props.dataRecall('wish', wish, callback);
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
                            <div className="text-left d25 dank-schema-component-hover">
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
        var othersEdit = [];
        for(var i=0; i<this.props.others.length; i++){
            othersEdit.push('false');
        }
        return {
            others:this.props.others,
            othersEdit:othersEdit
        }
    },

    componentDidMount: function(){
        /*iCheck initialize*/
        window.iCheck();
    },
    componentDidUpdate: function(){
        /*iCheck initialize*/
        window.iCheck();
    },
    componentWillUnmount: function(){
        this.props.dataRecall('others', this.state.others);
    },
    componentForceUnmount: function(callback){
        this.props.dataRecall('others', this.state.others,callback);
    },

    decoder: function(options){
        return options.join('#');
    },

    encoder: function(text){
        return text.split('#');
    },

    componentAdd: function(type){
        var others = this.state.others;
        var othersEdit = this.state.othersEdit;
        var element;
        switch (type){
            case 'single-text' :
                element = {
                    type: 'single-text',
                    title: '请在此处输入标题',
                    //content: rough.content
                    required: false
                };
                break;
            case 'multi-text' :
                element = {
                    type: 'multi-text',
                    title: '请在此处输入标题',
                    //content: rough.content
                    required: false
                };
                break;
            case 'multi-choose' :
                element = {
                    type: 'multi-choose',
                    title: '请在此处输入标题',
                    max: null,
                    option: ['选项一', '选项二', '选项三'],
                    free: true
                };
                break;
            case 'single-choose' :
                element = {
                    type: 'single-choose',
                    title: '请在此处输入标题',
                    option: ['选项一', '选项二', '选项三'],
                    free: false
                };
                break;
            case 'file' :
                element = {
                    type: 'file',
                    title: '请在此处输入标题'
                };
                break;
            default:
                element = {};
        }
        if(element){
            others.push(element);
            othersEdit.push('true');
            this.setState({others:others, othersEdit:othersEdit});
        }
    },

    dataUpdate: function(type, index){
        var others = this.state.others;
        var element;
        switch (type){
            case 'single-text':
                var title = $('#othersTitle'+index).val();
                others[index].title = title;
                break;
            case 'multi-text':
                var title = $('#othersTitle'+index).val();
                others[index].title = title;
                break;
            case 'multi-choose':
                var title = $('#othersTitle'+index).val();
                var max = $('#othersMax'+index).val();
                var free = ($('#othersFree'+index).is(":checked"))?true:false;
                var option =this.encoder($('#othersOption'+index).val());
                others[index].title = title;
                others[index].max = max;
                others[index].free = free;
                others[index].option = option;
                break;
            case 'single-choose':
                var title = $('#othersTitle'+index).val();
                var option =this.encoder($('#othersOption'+index).val());
                others[index].title = title;
                others[index].option = option;
                break;
            case 'file':
                var title = $('#othersTitle'+index).val();
                others[index].title = title;
                break;
        }
        this.setState({others:others});
    },

    save: function(type, index){
        this.dataUpdate(type, index);

        var othersEdit = this.state.othersEdit;
        othersEdit[index] = false;
        this.setState({othersEdit: othersEdit});
    },

    deleteComponent: function(index){
        var others = this.state.others;
        var othersEdit = this.state.othersEdit;
        others.splice(index, 1);
        othersEdit.splice(index,1);
        this.setState({others:others, othersEdit:othersEdit});
    },

    editState: function (index) {
        var othersEdit = this.state.othersEdit;
        othersEdit[index] = true;
        this.setState({othersEdit:othersEdit});
    },

    moveBefore: function (type, index){
        this.dataUpdate(type, index);

        var others = this.state.others;
        var othersEdit = this.state.othersEdit;
        var length = others.length;
        var before = (index-1+length)%length

        var temp1 = others[index];
        others[index] = others[before];
        others[before] = temp1;

        var temp2 = othersEdit[index];
        othersEdit[index] = othersEdit[before];
        othersEdit[before] = temp2;

        this.setState({others:others, othersEdit:othersEdit});
    },
    moveBack: function (type, index){
        this.dataUpdate(type, index);

        var others = this.state.others;
        var othersEdit = this.state.othersEdit;
        var length = others.length;
        var next = (index+1+length)%length;

        var temp1 = others[index];
        others[index] = others[next];
        others[next] = temp1;

        var temp2 = othersEdit[index];
        othersEdit[index] = othersEdit[next];
        othersEdit[next] = temp2;

        this.setState({others:others, othersEdit:othersEdit});
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
        var otherNodes = this.state.others.map(function(other, i){
            switch(other.type){
                case 'single-text' :
                    return(
                        <div key={i}>
                            {
                                (this.state.othersEdit[i])?
                                    <div className="d24">
                                        <div className="d25 dank-schema-component">
                                            <div>
                                                <h1 className="dank-schema-label">标题</h1>
                                                <div>
                                                    <input className="dank-schema-input" id={"othersTitle"+i} type="text"
                                                           defaultValue={other.title}/>
                                                </div>
                                            </div>
                                            <div className="dank-schema-option-group">
                                                <a className="dank-schema-option" onClick={function(){this.moveBefore('single-text', i)}.bind(this)}>上移</a>
                                                <a className="dank-schema-option" onClick={function(){this.moveBack('single-text', i)}.bind(this)}>下移</a>
                                                <a className="dank-schema-option" onClick={function(){this.deleteComponent(i)}.bind(this)}>删除</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.save('single-text', i)}.bind(this)}>完成</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d24" onClick={function(){this.editState(i)}.bind(this)}>
                                        <div className="text-left d25 dank-schema-component-hover">
                                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                            <div>
                                                <b><input type="text" className="dank-form-single-text"/></b>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        
                    );
                    break;
                case 'multi-text' :
                    return(
                        <div key={i}>
                            {
                                (this.state.othersEdit[i])?
                                    <div className="d24">
                                        <div className="d25 dank-schema-component">
                                            <div>
                                                <h1 className="dank-schema-label">标题</h1>
                                                <div>
                                                    <input className="dank-schema-input" id={"othersTitle"+i} type="text"
                                                           defaultValue={other.title}/>
                                                </div>
                                            </div>
                                            <div className="dank-schema-option-group">
                                                <a className="dank-schema-option" onClick={function(){this.moveBefore('multi-text', i)}.bind(this)}>上移</a>
                                                <a className="dank-schema-option" onClick={function(){this.moveBack('multi-text', i)}.bind(this)}>下移</a>
                                                <a className="dank-schema-option" onClick={function(){this.deleteComponent(i)}.bind(this)}>删除</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.save('multi-text', i)}.bind(this)}>完成</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d24" onClick={function(){this.editState(i)}.bind(this)}>
                                        <div className="text-left d25 dank-schema-component-hover">
                                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                            <div>
                                                <b><textarea name="introduction.content" className="text-left tt1"/></b>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    );
                    break;
                case 'multi-choose' :
                    return (
                        <div key={i}>
                            {
                                (this.state.othersEdit[i]) ?
                                    <div className="d24">
                                        <div className="d25 dank-schema-component">
                                            <div>
                                                <div className="dank-form-group-inline dank-schema-form-group-inline">
                                                    <h1 className="dank-schema-label">标题</h1>
                                                    <div>
                                                        <input className="dank-schema-input" type="text" id={"othersTitle"+i}
                                                               defaultValue={other.title}/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                                    <h1 className="dank-schema-label">选择数量限制</h1>
                                                    <div>
                                                        <input className="dank-schema-input" type="number" id={"othersMax"+i}
                                                               defaultValue={other.max}/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short">
                                                    <h1 className="dank-schema-label">是否允许自填</h1>
                                                    <div>
                                                        {(other.free) ?
                                                            <input type="checkbox" id={"othersFree"+i} defaultChecked/> :
                                                            <input type="checkbox" id={"othersFree"+i}/>}
                                                        <label>允许自填</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="dank-schema-label">可选项（选项间以#分隔）</h1>
                                                <div>
                                                    <input className="dank-schema-input" type="text" id={"othersOption"+i}
                                                           defaultValue={this.decoder(other.option)}/>
                                                </div>
                                            </div>
                                            <div className="dank-schema-option-group">
                                                <a className="dank-schema-option" onClick={function(){this.moveBefore('multi-choose', i)}.bind(this)}>上移</a>
                                                <a className="dank-schema-option" onClick={function(){this.moveBack('multi-choose', i)}.bind(this)}>下移</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.deleteComponent(i)}.bind(this)}>删除</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.save('multi-choose', i)}.bind(this)}>完成</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d24" onClick={function(){this.editState(i)}.bind(this)}>
                                        <div className="text-left d25 dank-schema-component-hover">
                                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                            {
                                                other.option.map(function(option){
                                                    return(
                                                        <div className="dank-checkbox-inOneLine" key={option}>
                                                            <input type="checkbox" value={option} />
                                                            <label> {option} </label>
                                                        </div>
                                                    )
                                                }.bind(this))
                                            }
                                            {(other.free) ?
                                                <div className="dank-form-group-inline">
                                                    <label className="dank-label dank-select-label">其他</label>
                                                    <input type="text" className="dank-form-input dank-select-input"/>
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                            }
                        </div>
                    );
                    break;
                case 'single-choose': //单选暂不实现可自填的功能
                    return (
                        <div key={i}>
                            {
                                (this.state.othersEdit[i]) ?
                                    <div className="d24">
                                        <div className="d25 dank-schema-component">
                                            <div>
                                                <div className="dank-form-group-inline dank-schema-form-group-inline">
                                                    <h1 className="dank-schema-label">标题</h1>
                                                    <div>
                                                        <input className="dank-schema-input" type="text" id={"othersTitle"+i}
                                                               defaultValue={other.title}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="dank-schema-label">可选项（选项间以#分隔）</h1>
                                                <div>
                                                    <input className="dank-schema-input" type="text" id={"othersOption"+i}
                                                           defaultValue={this.decoder(other.option)}/>
                                                </div>
                                            </div>
                                            <div className="dank-schema-option-group">
                                                <a className="dank-schema-option" onClick={function(){this.moveBefore('single-choose', i)}.bind(this)}>上移</a>
                                                <a className="dank-schema-option" onClick={function(){this.moveBack('single-choose', i)}.bind(this)}>下移</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.deleteComponent(i)}.bind(this)}>删除</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.save('single-choose', i)}.bind(this)}>完成</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d24" onClick={function(){this.editState(i)}.bind(this)}>
                                        <div className="text-left d25 dank-schema-component-hover">
                                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                            {
                                                other.option.map(function(option){
                                                    return(
                                                        <div className="dank-checkbox-inOneLine" key={option}>
                                                            <input type="radio" value={option} />
                                                            <label> {option} </label>
                                                        </div>
                                                    )
                                                }.bind(this))
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    );
                    break;
                case 'file' :
                    return (
                        <div key={i}>
                            {
                                (this.state.othersEdit[i])?
                                    <div className="d24">
                                        <div className="d25 dank-schema-component">
                                            <div>
                                                <h1 className="dank-schema-label">标题</h1>
                                                <div>
                                                    <input className="dank-schema-input" id={"othersTitle"+i} type="text"
                                                           defaultValue={other.title}/>
                                                </div>
                                            </div>
                                            <div className="dank-schema-option-group">
                                                <a className="dank-schema-option" onClick={function(){this.moveBefore('file', i)}.bind(this)}>上移</a>
                                                <a className="dank-schema-option" onClick={function(){this.moveBack('file', i)}.bind(this)}>下移</a>
                                                <a className="dank-schema-option" onClick={function(){this.deleteComponent(i)}.bind(this)}>删除</a>
                                                <a className="dank-schema-option"
                                                   onClick={function(){this.save('file', i)}.bind(this)}>完成</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d24" onClick={function(){this.editState(i)}.bind(this)}>
                                        <div className="text-left d25 dank-schema-component-hover">
                                            <h1 className="h1f dank-form-h2"><b>{other.title}</b></h1>
                                            <div>
                                                <div className="dank-form-file-text"  ref={"file"+i}></div>
                                                <div type="button" className="dank-form-file-button" id={"file"+i} >上传</div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    );
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