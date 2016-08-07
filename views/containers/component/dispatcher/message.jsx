var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            add: false,
            round: 0,
            depart: '全部部门',
            pass: true
        };
    },
    componentDidMount: function(){
        $(".dropdown").click(function(){
            var body = $(this).children('.dp-body');
            var collapse = $(this).children('.dp-title').children('i');
            var item = $(body).children('label');
            if(collapse.css('transform')=='matrix(1.4, 0, 0, 1.4, 0, 0)') {
                if(item) body.css('height', item.outerHeight()*item.length+'px');
                collapse.css('transform', 'rotate(180deg) scale(1.4)');
            }
            else {
                if(item) body.css('height', '0px');
                collapse.css('transform', 'rotate(0deg) scale(1.4)');
            }
        });
        $('#interview-status .panel-heading').click(function(){
            $(this).next().slideToggle(300);
        })
    },
    componentDidUpdate: function(){
        $(".dropdown").click(function(){
            var body = $(this).children('.dp-body');
            var collapse = $(this).children('.dp-title').children('i');
            var item = $(body).children('label');
            if(collapse.css('transform')=='matrix(1.4, 0, 0, 1.4, 0, 0)') {
                if(item) body.css('height', item.outerHeight()*item.length+'px');
                collapse.css('transform', 'rotate(180deg) scale(1.4)');
            }
            else {
                if(item) body.css('height', '0px');
                collapse.css('transform', 'rotate(0deg) scale(1.4)');
            }
        });
        $('#interview-status .panel-heading').click(function(){
            $(this).next().slideToggle(300);
        })
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
            message: "balabala"
        }
    },
    componentDidMount: function() {
        //获取message
        //this.props.param.eventID,param.depart, param.round
    },
    render: function() {
        return (
            <div className="row" id="sended-message">
                <div className="col-md-3">
                    <EventDropdown data={[]} />
                    <RoundDropdown data={[]} />
                    <DepartDropdown data={[]} />
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

var EventDropdown = React.createClass({
    getInitialState: function (){
        return {selectedItem: "选择面试活动"}
    },
    handleChecked: function(eventID, e) {
        this.setState({selectedItem: e.currentTarget.value});
        //this.props.eventChecked(eventID);
    },
    render: function () {
        return ( 
            <div className="dropdown">
                <div className="dp-title">
                    {this.state.selectedItem}
                    <i className="fa fa-caret-down"></i>
                </div>
                <div className="dp-body">
                    {this.props.data.map((event) => 
                        <label key={event.eventID}>
                            <input type="radio" name="event" value={event.name}
                                checked={this.state.selectedItem === event.name} 
                                onChange={this.handleChecked.bind(null, event.eventID)}/>
                                {event.name}
                        </label>
                    )}
                </div>
            </div>
        )
    }
});

var RoundDropdown = React.createClass({
    getInitialState: function (){
        return {selectedItem: "选择面试轮次"}
    },
    handleChecked: function(e) {
        this.setState({selectedItem: e.currentTarget.value});
    },
    render: function () {
        return ( 
            <div className="dropdown">
                <div className="dp-title">
                    {this.state.selectedItem}
                    <i className="fa fa-caret-down"></i>
                </div>
                <div className="dp-body">
                    {this.props.data.map((event) => 
                        <label key={event.eventID}>
                            <input type="radio" name="event" value={event.name}
                                checked={this.state.selectedItem === event.name} 
                                onChange={this.handleChecked.bind(null, event.eventID)}/>
                                {event.name}
                        </label>
                    )}
                </div>
            </div>
        )
    }
});

var DepartDropdown = React.createClass({
    getInitialState: function() {
        return {selectedItem: "选择面试部门"}
    },
    handleChecked: function(e) {
        this.setState({selectedItem: e.currentTarget.value});
        //this.props.departChecked(e.currentTarget.value);
    },
    render: function() {
        return (
            <div className="dropdown">
                <div className="dp-title">
                    {this.state.selectedItem}
                    <i className="fa fa-caret-down"></i>
                </div>
                <div className="dp-body">
                    {this.props.data.map((department) =>
                        <label onClick={this.handleChecked}>
                            <input type="radio" name="department" value={department} 
                                   checked={this.state.selectedItem === department}
                                   onChange={this.handleChecked.bind(null)} />
                            {department}
                        </label>
                    )}
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
                                <div className="col-md-1">{reply.name}Frank</div>
                                <div className="col-md-1">{reply.sex}男</div>
                                <div className="col-md-2">{reply.telnumber}12344567788909</div>
                                <div className="col-md-2">{reply.departmen}产品部门</div>
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
            target: 'pass'
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
                    <EventDropdown data={[]} />
                </div>
                <div className="col-md-8">
                    群发对象：
                    <DepartDropdown data={[]} />
                    <RoundDropdown data={[]} />
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
        //post what and to where?
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