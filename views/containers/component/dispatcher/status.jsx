var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            infoComplete: true,
            events: [],
            rounds: [],
            departments: [],
            selectedEvent: {},
            selectedDep: '',
            arrangements: [{"duration": 90,
                            "startTime": new Date(2016, 9, 16, 10, 0),
                            "place": "学校", 
                            "interval": 10,
                            "total": 10},
                            {"duration": 120,
                            "startTime": new Date(2016, 8, 4, 10, 0),
                            "place": "家里", 
                            "interval": 10,
                            "total": 10}]
        }
    },
    componentDidMount: function(){
        //get 面试状态
        $.ajax({
            url: "/event",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        this.setState({events: data.body.events});
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
        $(".dropdown").click(function(){
            var body = $(this).children('.dp-body');
            var collapse = $(this).children('.dp-title').children('i');
            var itemNum = $(body).children('label') ? $(body).children('label').length : 0;
            if(body.css('height') == '0px') {
                body.css('height', itemNum + '00%');
                collapse.css('transform', 'rotate(180deg) scale(1.4)');
            }
            else {
                body.css('height', '0px');
                collapse.css('transform', 'rotate(0deg) scale(1.4)');
            }
        });
    },
    exports: function() {

    },
    update: function() {

    },
    search: function() {

    },
    render: function(){
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-status-panel">
                    <div className="panel-heading">
                        <div className="row">

                            <div className="col-md-2">
                                <EventDropdown data={this.state.events} />
                            </div>

                            <div className="col-md-2">
                                <RoundDropdown data={this.state.rounds} />
                            </div>

                            <div className="col-md-2">
                                <DepartDropdown data={this.state.departments} />
                            </div>

                            <div className="col-md-2">
                                <button className="btn" onClick={this.exports}>面试安排信息导出</button>
                            </div>

                            <div className="col-md-2">
                                <button className="btn" onClick={this.update}>本轮面试状态更新</button>
                            </div>

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
                    </div>

                    <div className="panel-body">
                        <div className="container-fluid" id="interview-status">
                            <div className="date-fun">
                                <div className="interview-date">10月1号</div>
                                <div className="interview-date" id="add-date">添加日期</div>
                            </div>
                            <div className="row">
                                <div className="panel">
                                    <div className="panel-heading row">
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">A1</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">19:20 - 20:00</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">地点：东1B-203</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">本场面试人数：3人</div>
                                    </div>
                                    <div className="panel-body">
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
                                </div>

                                <div className="panel">
                                    <div className="panel-heading row">
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">A1</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">19:20 - 20:00</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">地点：东1B-203</div>
                                        <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">本场面试人数：3人</div>
                                    </div>
                                </div>

                                <div id="add-interview">
                                    <i className="fa fa-plus"></i>
                                    添加本日面试场次
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <label className="radio" key={event.eventID}>
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
                        <label className="radio" key={event.eventID}>
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
})

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
                        <label className="radio" onClick={this.handleChecked}>
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