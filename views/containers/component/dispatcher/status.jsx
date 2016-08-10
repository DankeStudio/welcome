var React = require('react');
var Dropdown = require('../dropdown');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            infoComplete: false,
            events: [],
            eventsNames: [],
            selectedEvent: {},
            departments: [],
            selectedDep: '',
            rounds: [],
            round: 0,
            days: [],
            interview: [],
            selectedDate: new Date(),
            addDay: false
        }
    },
    componentDidMount: function(){
        $.ajax({
            url: "/event",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        this.setState({events: data.body.events});
                        var eventsNames = [];
                        for (var i=0; i<this.state.events.length; i++)
                            eventsNames.push(this.state.events[i].name);
                        this.setState({eventsNames: eventsNames});
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
        $('#interview-status .panel-heading').click(function(){
            $(this).next().slideToggle(300);
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
                       round: 0,
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
                        var tmp = data.body.interviews[0];
                        var days = [];
                        for (var i=0; i<tmp.arrangement.length; i++) {
                            tmp.arrangement[i].startTime = new Date(Date.parse(tmp.arrangement[i].startTime));
                            var day = tmp.arrangement[i].startTime;
                            if(days.findIndex((element) => 
                                element.getMonth() == day.getMonth() && element.getDate() == day.getDate()) == -1)
                                days.push(day);
                        }
                        console.log(days);
                        this.setState({interview: tmp, days: days, infoComplete: true});
                        if (days.length) this.setState({selectedDate: days[0]});
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
    exports: function() {
        alert('coming soon...');
    },
    update: function() {
        $.ajax({
            url: '/interview/interviewer/update',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                interviewers: this.state.interview.interviewer,
                interviewID: this.state.interview._id
            }),
            success: function(data) {
                
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    search: function() {
        alert('coming soon...');
    },
    changeDay: function(date) {
        this.setState({selectedDate: date});
    },
    addDay: function(e) {
        var str = e.target.value;
        var date = new Date();
        date.setMonth(str.split('-')[1]);
        date.setDate(str.split('-')[2]);
        var days = this.state.days;
        if(days.findIndex((element) => 
           element.getMonth() == date.getMonth() && element.getDate() == date.getDate()) == -1)
            days.push(date);
        this.setState({days: days,
                       selectedDate: date,
                       addDay: false});
    },
    addArg: function() {
        alert('coming soon...');
    },
    isActive: function(data) {
        return ((data.getMonth() == this.state.selectedDate.getMonth() &&
               data.getDate() == this.state.selectedDate.getDate()) ? ' active' : '');
    },
    handleClick: function() {
        this.setState({addDay: true});
    },
    handleIverChange: function(interviwer) {
        var index = this.state.interview.interviwer.findIndex((element) => interviwer._id == element._id);
        var tmp = this.state.interview;
        tmp.interviewer[index] = interviwer;
        this.setState({interview: tmp});
        console.log('change iver ok');
    },
    handleDelete: function(interviwer) {
        var index = this.state.interview.interviwer.findIndex((element) => interviwer._id == element._id);
        var tmp = this.state.interview;
        if(index > -1)
            tmp.splice(index, 1);
        this.setState({interview: tmp});
        console.log('delete ok');
    },
    render: function(){
        var section = this.state.infoComplete ?
                    <div className="panel-body">
                        <div className="container-fluid" id="interview-status">
                            <div className="date-fun">
                                {this.state.days.map((day, i) =>
                                    <div className={"interview-date"+this.isActive(day)} 
                                         onClick={this.changeDay.bind(null, day)} key={i}>
                                        {day.getMonth()+'月'+day.getDate()+'日'}
                                    </div>
                                )}
                                <input type="date" className={this.state.addDay ? 'active':''} required onChange={this.addDay}/>
                                <div className="interview-date" id="add-date" onClick={this.handleClick}>添加日期</div>
                            </div>
                            <div className="row">
                                {this.state.interview.arrangement.map((arg, i) => {
                                    if (arg.startTime.getMonth() == this.state.selectedDate.getMonth() &&
                                        arg.startTime.getDate() == this.state.selectedDate.getDate()) {
                                        var data = this.state.interview.interviewer.map((iv) => {
                                            if (iv.arrangementID == arg._id)
                                                return iv;
                                        });
                                            return <ArgStatus key={i} index={i} data={data} arg={arg} iv={this.state.interview}
                                                            handleChange={this.handleIverChange} handleDelete={this.handleDelete}/>
                                }})}
                                <div id="add-interview" onClick={this.addArg}>
                                    <i className="fa fa-plus"></i>
                                    添加本日面试场次
                                </div>
                            </div>
                        </div>
                    </div>
                    : null;
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-status-panel">
                    <div className="panel-heading">
                        <div className="row" id="interview-select-bar">
                            <div className="col-md-2">
                                <Dropdown data={this.state.eventsNames} handleChecked={this.eventChecked} 
                                               name={'event'} default={"选择面试活动"} resetWhenChanged={null} />
                            </div>
                            <div className="col-md-2">
                                <Dropdown data={this.state.departments} handleChecked={this.departChecked} 
                                               name={'depart'} default={"选择面试部门"} resetWhenChanged={this.state.selectedEvent} />
                            </div>
                            <div className="col-md-2">
                                <Dropdown data={this.state.rounds} handleChecked={this.roundChecked} 
                                               name={'round'} default={"选择面试轮次"} 
                                               resetWhenChanged={this.state.selectedDep + this.state.selectedEvent} />
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
                                        <button className="btn" type="button" onClick={this.search}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                             </div>
                        </div>
                    </div>
                    {section}
                </div>
            </div>
        )
    }
});

var ArgStatus = React.createClass({
    getInitialState: function() {
        return {
            isActive: false,
            startTime: this.props.arg.startTime,
            interviewers: this.props.data || [],
            arg: this.props.arg,
            interview: this.props.iv
        }
    },
    changeArg: function(interviewer) {
        alert('coming soon');
    },
    deleteIv: function(interviewer) {
        $.post('/interview/interviwer/delete', {
            interviewID: interview._id,
            telnumber: interviewer.telnumber
        }, function(data) {
            this.props.handleDelete(interviewer);
        });
    },
    changeState: function(interviwer, e) {
        interviwer.state = e.target.checked ? '通过' : '未通过';
        this.props.handleChange(interviewer);
    },
    render: function () {
        var arg = this.state.arg;
        var endTime = new Date(arg.startTime.getTime()+arg.duration*60000);
        return (
            <div className="panel">
                <div className="panel-heading row" onClick={this.handleClick}>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">{'第'+(this.props.index+1)+'场'}</div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        {arg.startTime.getHours()+':'+ arg.startTime.getMinutes()} - 
                        {endTime.getHours()+':'+ endTime.getMinutes()}
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        地点：{arg.place}
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">
                        本场面试人数：{this.state.arg.total}人
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
                                <button className="btn" onClick={this.changeArg.bind(null, interviewer)}>修改场次</button>
                                <button className="btn" onClick={this.deleteIv.bind(null, interviewer)}>删除</button>
                            </div>
                            <div className="col-md-2">
                                <label>
                                    {this.state.round}
                                    <input type="checkbox" onChange={this.changeState.bind(null, interviewer)} />
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
})