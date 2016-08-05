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
                            "total": 10}],
            days: [new Date(2016, 8, 5)],
            interviews: [{},{}],
            selectedDate: new Date(2016, 8, 5)
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
    exports: function() {

    },
    update: function() {

    },
    search: function() {

    },
    changeDay: function(date) {
        this.setState({selectedDate: date});
    },
    addDay: function(date) {
        var tmp = this.state.days.length;
        var last = this.state.days[tmp-1];
        var newDate = new Date();
        newDate.setMonth(last.getMonth());
        newDate.setDate(last.getDate()+1);
        this.setState({days: this.state.days.concat([newDate]),
                       selectedDate: newDate});
    },
    addArg: function() {

    },
    isActive: function(data) {
        return ((data.getMonth() == this.state.selectedDate.getMonth() &&
               data.getDate() == this.state.selectedDate.getDate()) ? ' active' : '');
    },
    render: function(){
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-status-panel">
                    <div className="panel-heading">
                        <div className="row" id="interview-select-bar">

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
                                {this.state.days.map((day, i) =>
                                    <div className={"interview-date"+this.isActive(day)} 
                                         onClick={this.changeDay.bind(null, day)} key={i}>
                                        {day.getMonth()+'月'+day.getDate()+'日'}
                                    </div>
                                )}
                                <div className="interview-date" id="add-date" onClick={this.addDay}>添加日期</div>
                            </div>
                            <div className="row">
                                {this.state.interviews.map((interview, i) => 
                                    <ArgStatus num={i} key={i}/>    
                                )}

                                <div id="add-interview" onClick={this.addArg}>
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

var ArgStatus = React.createClass({
    getInitialState: function() {
        return {
            isActive: false,
            startTime: new Date(),
            interviewers: [{
                name: "Frank",
                sex: "男",
                telnumber: "12345678901",
                department: "产品部门",
                state: "表刷通过",
                round: '一轮面试'
            },
            {
                name: "Frank",
                sex: "男",
                telnumber: "12345678901",
                department: "产品部门",
                state: "表刷通过",
                round: '一轮面试'
            }],
            arg: {
                startTime: new Date(),
                duration: 90,
                place: '学校'
            }
        }
    },
    render: function () {
        var arg = this.state.arg;
        var endTime = new Date(arg.startTime.getTime()+arg.duration*60000);
        return (
            <div className="panel">
                <div className="panel-heading row" onClick={this.handleClick}>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">{this.props.num}</div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        {arg.startTime.getHours()+':'+ arg.startTime.getMinutes()} - 
                        {endTime.getHours()+':'+ endTime.getMinutes()}
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        地点：{arg.place}
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        本场面试人数：{this.state.interviewers.length}人
                    </div>
                </div>
                <div className="panel-body">
                    {this.state.interviewers.map((interviewer, i) =>
                        <div className="row" key={i}>
                            <div className="col-md-1">{interviewer.name}</div>
                            <div className="col-md-1">{interviewer.sex}</div>
                            <div className="col-md-2">{interviewer.telnumber}</div>
                            <div className="col-md-2">{interviewer.department}</div>
                            <div className="col-md-2">{interviewer.state}</div>
                            <div className="col-md-2">
                                <button className="btn">修改场次</button>
                                <button className="btn">删除</button>
                            </div>
                            <div className="col-md-2">{interviewer.round}</div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
})