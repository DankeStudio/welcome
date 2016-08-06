var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {add: false};
    },
    addMessage: function() {
        this.setState({add: true});
    },
    checkMessage: function() {
        this.setState({add: false});
    },
    render: function(){
        var section1, section2, section3,
            class1, class2;
        if (this.state.add == false) {
            section1 = <SendedMessage />, section2 = null, section3 = <ReplyMessage />;
            class1 = "", class2 = " active";
        }
        else {
            section1 = <NewMessageInfoSelect />, section2 = <NewMessageEdit />, section3 = null;
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
    render: function() {
        return (
            <div className="row" id="sended-message">
                <div className="col-md-3">
                    <div className="dropdown">
                        <div className="dp-title">
                            蛋壳工作室秋季纳新
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2016春季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015秋季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015春季纳新
                            </label>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dp-title">
                            所有部门
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2016春季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015秋季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015春季纳新
                            </label>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dp-title">
                            一轮面试
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2016春季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015秋季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015春季纳新
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>balabala...</p>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        )
    }
})

var ReplyMessage = React.createClass({
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
                            <div className="row">
                                <div className="col-md-1">Frank</div>
                                <div className="col-md-1">男</div>
                                <div className="col-md-2">12344567788909</div>
                                <div className="col-md-2">产品部门</div>
                                <div className="col-md-2">表刷通过</div>
                                <div className="col-md-2">修改场次 删除</div>
                                <div className="col-md-2">一轮面试</div>
                            </div>
                            <div className="row">
                                <div className="col-md-1">Frank</div>
                                <div className="col-md-1">男</div>
                                <div className="col-md-2">12344567788909</div>
                                <div className="col-md-2">产品部门</div>
                                <div className="col-md-2">表刷通过</div>
                                <div className="col-md-2">修改场次 删除</div>
                                <div className="col-md-2">一轮面试</div>
                            </div>
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
    render: function() {
        return (
            <div className="row" id="message-info-select">
                <div className="col-md-4">
                    <div className="dropdown">
                        <div className="dp-title">
                            蛋壳工作室秋季纳新
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2016春季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015秋季纳新
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                蛋壳工作室2015春季纳新
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    群发对象：
                    <div className="dropdown">
                        <div className="dp-title">
                            所有部门
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                所有部门（混面）
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                产品
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                运营
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                推广
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"></input>
                                前端
                            </label>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dp-title">
                            一轮面试
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dp-body">
                        </div>
                    </div>
                    <button className="btn">通过者</button>
                    <button className="btn">未通过者</button>
                </div>
            </div>
        )
    }
});

var NewMessageEdit = React.createClass({
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
                            <textarea type="text" placeholder="这是要造个编辑器吗0 0"></textarea>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="content highlight"> 
                        <h1>短信预览</h1>
                        <div>
                            <button className="btn">确认发送</button>
                            您还有500条短信余量
                        </div>
                        <div>
                            <textarea type="text" placeholder="这是要造个编辑器吗0 0"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});