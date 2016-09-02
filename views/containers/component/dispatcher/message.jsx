var React = require('react');
var Dropdown = require('../dropdown');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            add: false,
            depart: '全部部门',
            pass: true,
            events: [],
            eventsNames: [],
            selectedEvent: {},
            departments: [],
            selectedDep: '',
            rounds: [],
            round: 0
        };
    },
    componentDidMount: function(){
        $.get("/event", (data) => {
            if(data.code == 0) {
                this.setState({events: data.body.events});
                var eventsNames = [];
                for (var i=0; i<this.state.events.length; i++)
                    eventsNames.push(this.state.events[i].name);
                this.setState({eventsNames: eventsNames});
            }
        })
    },
    eventChecked: function(eventName, i) {
        var event = this.state.events[i];
        if (event.eventID == this.state.selectedEvent.eventID)
            return false;
        this.setState({selectedEvent: event,
                       selectedDep: '',
                       infoComplete: false});
        $.ajax({
            url: "/form/id?eventID="+event.eventID,
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        this.setState({departments: data.body.event.formschema.wish.option});
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
    departChecked: function(department, i) {
        if (department == this.state.selectedDep)
            return false;
        this.setState({selectedDep: department,
                       infoComplete: false});
        var num = 1;
        $.ajax({
            url: "/interview?eventID="+this.state.selectedEvent.eventID+'&department='+department+'&new=1',
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        num = data.body.interviews[0].round;
                        var tmp = [];
                        for (var i=1; i<=num; i++)
                            tmp.push('第'+i+'轮面试');
                        this.setState({rounds: tmp});
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
    roundChecked: function(round, i) {
        this.setState({round: i+1});
        $.ajax({
            url: "/interview?eventID="+this.state.selectedEvent.eventID+'&department='+this.state.selectedDep+'&round='+(i+1),
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        this.setState({interview: data.body.interviews[0], infoComplete: true});
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
    addMessage: function() {
        this.setState({add: true});
    },
    checkMessage: function() {
        this.setState({add: false});
    },
    changeTarget: function(value) {
        this.setState({pass: value});
    },
    render: function(){
        var section1, section2, section3,
            class1, class2;
        if (this.state.add == false) {
            section1 = <SendedMessage />, section2 = null, section3 = <ReplyMessage />;
            class1 = "", class2 = " active";
        }
        else {
            section1 = <NewMessageInfoSelect changeTarget={this.changeTarget}/>, 
            section2 = <NewMessageEdit round={this.state.round} 
                       depart={this.state.depart} pass={this.state.pass}/>,
            section3 = null;
            class1 = " active", class2 = "";
        }
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="content">
                        <h1>群发消息</h1>
                        <div id="message-fun">
                            <button className={"btn" + class1} onClick={this.addMessage}>新建群发消息</button>
                            <button className={"btn" + class2} onClick={this.checkMessage}>已发送</button>
                        </div>
                        {section1}
                        {section2}
                    </div>
                </div>
                {section3}
            </div>
        )
    }
});

var SendedMessage = React.createClass({
    getInitialState: function() {
        return {
            events: [],
            eventsNames: [],
            selectedEvent: {},
            departments: [],
            selectedDep: '',
            rounds: [],
            round: 0,
            message: ''
        }
    },
    componentDidMount: function() {
        $.ajax({
            url: "/message",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        this.setState({messages: data.body.messages});
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
        //获取message
        //this.props.param.eventID,param.depart, param.round
    },
    render: function() {
        return (
            <div className="row" id="sended-message">
                <div className="col-md-3">
                    <Dropdown data={this.state.eventsNames} handleChecked={this.eventChecked} 
                              name={'event'} default={"选择面试活动"} resetWhenChanged={null} />
                    <Dropdown data={this.state.departments} handleChecked={this.departChecked} 
                              name={'depart'} default={"选择面试部门"} resetWhenChanged={this.state.selectedEvent} />
                    <Dropdown data={this.state.rounds} handleChecked={this.roundChecked} 
                              name={'round'} default={"选择面试轮次"} 
                              resetWhenChanged={this.state.selectedDep + this.state.selectedEvent} />
                </div>
                <div className="col-md-6">
                    <p>{this.state.message}</p>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        )
    }
});

var ReplyMessage = React.createClass({
    getInitialState: function() {
        return {
            reply: []
        }
    },
    componentDidMount: function() {
        //get reply messages
        //this.setState({reply: reply});
    },
    render: function() {
        return (
            <div className="col-md-12">
                <div className="content">
                    <h1>回复详情</h1>
                    <div id="reply-fun">
                        <button className="btn order">
                            面试场次
                            <i className="fa fa-lg fa-caret-up"></i>
                            <i className="fa fa-lg fa-caret-down"></i>
                        </button>
                        <button className="btn order">
                            状态
                            <i className="fa fa-lg fa-caret-up"></i>
                            <i className="fa fa-lg fa-caret-down"></i>
                        </button>
                        <div className="col-md-2">
                            <div className="input-group search-bar">
                                <input type="text" className="form-control" placeholder="Search"></input>
                                <span className="input-group-btn">
                                    <button className="btn" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="reply-table">
                        {this.state.reply.map((reply, i) =>
                            <div className="row" key={i}>
                                <div className="col-md-1">{reply.name}</div>
                                <div className="col-md-1">{reply.sex}</div>
                                <div className="col-md-2">{reply.telnumber}</div>
                                <div className="col-md-2">{reply.departmen}</div>
                                <div className="col-md-2">{reply.order}</div>
                                <div className="col-md-2">{reply.state}</div>
                                <div className="col-md-2"><button className="btn">修改场次</button></div>
                            </div>
                        )}
                    </div>
                    <div className="page-nav">
                        <a href="">首页</a>
                        <a href="">上一页</a>
                        <a href="">下一页</a>
                        <a href="">尾页</a>
                    </div>
                </div>
            </div>
        )
    }
})

var NewMessageInfoSelect = React.createClass({
    getInitialState: function() {
        return {
            target: 'pass',
            events: [],
            eventsNames: [],
            selectedEvent: {},
            departments: [],
            selectedDep: '',
            rounds: [],
            round: 0
        }
    },
    isActive: function(value) {
        return this.state.target == value ? ' active' : '';
    },
    changeTarget: function(e) {
        this.setState({target: e.target.value})
        this.props.changeTarget(e.target.value=='pass');
    },
    render: function() {
        return (
            <div className="row" id="message-info-select">
                <div className="col-md-4">
                    <Dropdown data={this.state.eventsNames} handleChecked={this.eventChecked} 
                              name={'event'} default={"选择面试活动"} resetWhenChanged={this.state.reset}/>
                </div>
                <div className="col-md-8">
                    群发对象：
                    <Dropdown data={[]} />
                    <Dropdown data={[]} />
                    <button className={'btn'+this.isActive('pass')} 
                            onClick={this.changeTarget} value="pass">通过者</button>
                    <button className={'btn'+this.isActive('fail')} 
                            onClick={this.changeTarget} value="fail">未通过者</button>
                </div>
            </div>
        )
    }
});

var NewMessageEdit = React.createClass({
    getInitialState: function (){
        return {
            preset: this.props.pass ? 
                    '蛋壳工作室 || 第' + (this.props.round+1) + '轮面试通知，【姓名】同学，恭喜你通过了【部门】的第'+
                    this.props.round+'轮面试，你的第'+(this.props.round+1)+'轮面试时间为【时间】，时长约【时长】分钟，'+
                    '地点为【地点】，请准时到达！\n联系人：'
                    : '蛋壳工作室 || 【姓名】同学，非常遗憾你没有通过【部门】的第'+this.props.round+'轮面试。',
                    
            preview: '',
            remain: 500
        }
    },
    componentDidMount: function() {
        //获取一个interviewer信息用于带入短信模板
        //获取剩余短信数
        //this.props.pass, this.props.depart, this.props.event, this.props.round
        this.translate({target: {value: this.state.preset}});
    },
    componentWillReceiveProps: function(newProps) {
        var tmp = newProps.pass ? 
                  '蛋壳工作室 || 第' + (newProps.round+1) + '论面试通知，【姓名】同学，恭喜你通过了【部门】的第'+
                  newProps.round+'轮面试，你的第'+(newProps.round+1)+'轮面试时间为【时间】，时长约【时长】分钟，'+
                  '地点为【地点】，请准时到达！\n联系人：'
                  : '蛋壳工作室 || 【姓名】同学，非常遗憾你没有通过【部门】的第'+newProps.round+'轮面试。';
        this.setState({preset: tmp});
        this.translate({target: {value: tmp}});
    },
    translate: function(e) {
        var preview = e.target.value;
        //...
        preview = preview.replace(/【姓名】/g, '嘿嘿嘿');
        preview = preview.replace(/【部门】/g, '全部部门');
        preview = preview.replace(/【时间】/g, '8月31号25:00');
        preview = preview.replace(/【时长】/g, '2333');
        preview = preview.replace(/【地点】/g, 'ZJG行政楼楼顶');
        this.setState({
            preset: e.target.value,
            preview: preview
        })
    },
    send: function() {
        $.ajax({
            url: "/message/create",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                message: {
                    orgID: '',
                    department: this.state.depart,
                    date: new Date(),
                    telnumber: ['17764519167'],
                    text: this.state.preset,
                    cost: 0.5
                }
            }),
            success: function(data) {
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="row" id="message-edit">
                <div className="col-md-6">
                    <div className="content highlight">
                        <h1>短信编辑</h1>
                        <div>
                            <button className="btn">姓名</button>
                            <button className="btn">部门</button>
                            <button className="btn">时间</button>
                            <button className="btn">时长</button>
                            <button className="btn">地点</button>
                            <button className="btn">回复确认</button>
                        </div>
                        <div>
                            <textarea type="text" value={this.state.preset} onChange={this.translate}></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content highlight"> 
                        <h1>短信预览</h1>
                        <div>
                            <button className="btn" onClick={this.send}>确认发送</button>
                            您还有{this.state.remain}条短信余量
                        </div>
                        <div>
                            <textarea type="text" value={this.state.preview}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});