var React = require('react');
var Component = React.Component;

var Output = React.createClass({
    getInitialState: function(){
        return{
            eventID:this.props.params.eventID,
            wish: this.props.params.eventID.wish,
            forms:[]
        }
    },
    componentDidMount: function(){
        $.ajax({
            url: "/form/output",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.state.eventID,
                wish: (this.state.wish=='全部部门')?null:this.state.wish
            },
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            this.setState({forms: data.body.forms});
                        }
                        break;
                    default:
                        //alert(this.props.eventID);
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
        var forms = this.state.forms.map(function(form, i){
            return(
                <div className="dank-output-form" key={i}>
                    <div className="dank-output-caption">报名表 NO.{i+1}</div>
                    <div className="dank-output-title">基本信息</div>
                    <table className="dank-output-table">
                        <tbody>
                        <tr>
                            <td className="dank-output-baseinfo-label">姓　　名</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.name}</td>
                            <td className="dank-output-baseinfo-label">性　　别</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.sex}</td>
                            <td className="dank-output-baseinfo-photo" rowSpan="7">img</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">籍　　贯</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.origin}</td>
                            <td className="dank-output-baseinfo-label">民　　族</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.nation}</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">学　　号</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.schoolID}</td>
                            <td className="dank-output-baseinfo-label">政治面貌</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.politicalStatus}</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">手机长号</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.telnumber}</td>
                            <td className="dank-output-baseinfo-label">手机短号</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.telshort}</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">邮　　箱</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.email}</td>
                            <td className="dank-output-baseinfo-label">ＱＱ号码</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.qq}</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">专　　业</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.major}</td>
                            <td className="dank-output-baseinfo-label">出生日期</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.birth}</td>
                        </tr>
                        <tr>
                            <td className="dank-output-baseinfo-label">寝室地址</td>
                            <td className="dank-output-baseinfo-info">{form.baseinfo.address}</td>
                        </tr>
                        </tbody>
                    </table>
                    {(form.skills.delete&&form.introduction.delete)?
                        null
                        :
                        <div className="dank-output-title">个人介绍</div>
                    }
                    {(form.skills.delete)?
                        null
                        :
                        <div>
                            <div className="dank-output-label">{form.skills.title}</div>
                            <div className="dank-output-content">{new function(){
                                var data = [];
                                for(var skill of form.skills.chosen){
                                    data.push(skill+'　　');
                                }
                                return data
                            }}</div>
                        </div>
                    }
                    {(form.introduction.delete)?
                        null
                        :
                        <div>
                            <div className="dank-output-label">{form.introduction.title}</div>
                            <div className="dank-output-content">{form.introduction.content}</div>
                        </div>
                    }
                    {(form.wish.delete)?
                        null
                        :
                        <div>
                            <div className="dank-output-label">{form.wish.title}</div>
                            <div className="dank-output-content">{new function(){
                                var data = [];
                                for(var wish of form.wish.chosen){
                                    data.push(wish+'　　');
                                }
                                return data
                            }}</div>
                            {
                                form.wish.chosen.map(function(wish, j){
                                    if(j==0){
                                        return null
                                    }
                                    else{
                                        return(
                                            <div key={j}>
                                                <div className="dank-output-label">希望进入第{j}志愿 {wish} 的原因是</div>
                                                <div className="dank-output-content">{form.reason[j]}</div>
                                            </div>
                                        )
                                    }
                                }.bind(this))
                            }
                        </div>
                    }
                </div>
            )
        }.bind(this));
        return(
            <div>
                <div onClick={function(){window.print()}} className="dank-button-print">打印</div>
                {forms}
            </div>
        )
    }
});

module.exports = Output;