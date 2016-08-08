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
            round: 0,
            reset: false
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
        this.setState({selectedDep: department});
        $.ajax({
            url: "/interview?eventID="+this.state.selectedEvent.eventID+'&department='+this.state.selectedDep+'&new=1',
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        console.log(data);
                        this.setState({round: data.body.interviews[0].round+1, infoComplete: true});
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
    handlePost: function() {
        this.setState({infoComplete: false, reset: !this.state.reset, selectedEvent: {}, round: 0}); 
    },
    render: function(){
        var section1 = this.state.infoComplete == false ? null : 
                       <Interviews event={this.state.selectedEvent} department={this.state.selectedDep} 
                                   round={this.state.round} handlePost={this.handlePost} />;
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-select-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">请完善您的面试场次安排信息</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <Dropdown data={this.state.eventsNames} handleChecked={this.eventChecked} 
                                               name={'event'} default={"选择面试活动"} resetWhenChanged={this.state.reset}/>
                            </div>
                            <div className="col-md-4">
                                <Dropdown data={this.state.departments} handleChecked={this.departChecked} name={'depart'} 
                                                default={'请选择面试部门'} resetWhenChanged={this.state.selectedEvent}/>
                            </div>
                            <div className="col-md-4">
                                <a className="thumbnail">
                                    {'>>第'+ this.state.round + '次面试<<'}
                                </a>
                            </div>
                        </div>
                        {section1}
                    </div>
                </div>
            </div>
        )
    }
});

var Interviews = React.createClass({
    getInitialState: function() {
        return {
            event: this.props.event,
            department: this.props.department,
            round: this.props.round,
            selectedDate: new Date(),
            days: [new Date()],
            arrangements: [],
            initial: [],
            initialDays: [new Date()],
            addDay: false,
        }
    },
    changeDay: function(date) {
        this.setState({selectedDate: date});
                console.log(this.state.arrangements);

    },
    isActive: function(data) {
        if (this.state.selectedDate)
            return ((data.getMonth() == this.state.selectedDate.getMonth() &&
                data.getDate() == this.state.selectedDate.getDate()) ? ' active' : '');
        else return '';
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
    addCard: function() {
        var selected = this.state.selectedDate;
        var voidArg = {
            "duration": 0,
            "startTime": selected,
            "place": '',
            "interval": 0,
            "total": 0
        };
        this.setState({arrangements: this.state.arrangements.concat([voidArg])});
    },
    deleteArg: function(i, e) {
        var cardIndex = parseInt(e.target.value, 10);
        this.setState(state => {
            state.arrangements.splice(i, 1);
            return {arrangements: state.arrangements};
        });
    },
    postArgs: function() {
        console.log(this.state.event);
        console.log(this.state.department);
        console.log(this.state.round);
        $.post('/interview/create',{
            eventID: this.state.event.eventID,
            round: this.state.round,
            department: this.state.department
        }, (data) => {
            console.log(data);
            console.log(this.state.arrangements);
            var ivID = data.body.interview._id;
            var argData = JSON.stringify({arrangement: this.state.arrangements, interviewID: ivID});
            console.log(argData);
            $.ajax({
                url: "/interview/arrangement/create",
                contentType: 'application/json',
                type: 'POST',
                data: argData,
                success: (data) => {
                    console.log(data);
                    if(data.code == 0)
                        alert(this.state.event.name+this.state.department+'部门第'+this.state.round+'轮面试场次安排成功');
                    this.props.handlePost();
                },
                error: function(xhr, status, err) {
                    console.error("ajax请求发起失败");
                }.bind(this)
            });
        });
    },
    resetCard: function() {
        this.setState({arrangements: this.state.initial, days: this.state.initialDays});
    },
    handleChange: function(name, i, e) {
        var change = this.state.arrangements;
        if(name == 'minutes' || name=='hours') {
            var date = this.state.selectedDate;
            if (name=='minutes')
                date.setMinutes(e.target.value)
            else date.setHours(e.target.value);
            name = 'startTime';
            change[i][name] = date;
        }
        else change[i][name] = e.target.value;
        this.setState({arrangements: change});
    },
    handleClick: function() {
        this.setState({addDay: true});
    },
    render: function() {
        return (
            <div className="container-fluid" id="interview-info">
                <div className="date-fun">
                    {this.state.days.map((data, i) =>
                        <div className={"interview-date"+this.isActive(data)} 
                             onClick={this.changeDay.bind(null, data)} key={i}>
                            {data.getMonth()+'月'+data.getDate()+'日'}
                        </div>
                    )}
                    <input type="date" className={this.state.addDay ? 'active':''} required onChange={this.addDay}/>
                    <div className="interview-date" id="add-date" onClick={this.handleClick}>添加日期</div>
                </div>

                <Cards items={this.state.arrangements} selectedDate={this.state.selectedDate} 
                       addCard={this.addCard} handleDelete={this.deleteArg} handleChange={this.handleChange} />

                <button className="btn" id="gen-btn" onClick={this.postArgs}>生成</button>
                <button className="btn" id="cancle-btn" onClick={this.resetCard}>重置</button>
            </div>
        )
    }
});

var Cards = React.createClass({
    render: function() {
        return (
            <div className="row">
                {this.props.items.map((arg, i) => {
                    if (arg.startTime.getMonth() == this.props.selectedDate.getMonth() && 
                        arg.startTime.getDate() == this.props.selectedDate.getDate())
                    return (
                    <div className="col-md-6" key={i}>
                        <div className="interview-card">
                            <div className="card-heading">
                                <p>{arg.startTime.getMonth()+'月'+arg.startTime.getDate()+'日'}面试场次</p>
                                <i className="fa fa-times" onClick={this.props.handleDelete.bind(null, i)} value={i}></i>
                            </div>
                            <label>面试地点<input type="text" name="place" value={arg.place} 
                                                 onChange={this.props.handleChange.bind(null, "place", i)} /></label>
                            <label>此场点安排的场数为<input type="text" name="total" value={arg.total} 
                                                           onChange={this.props.handleChange.bind(null, "total", i)} />
                            </label>
                            <label>
                                每场次面试时间为
                                <p>分钟</p>
                                <input type="text" name="duration" value={arg.duration} 
                                       onChange={this.props.handleChange.bind(null, "duration", i)}/>
                            </label>
                            <label>
                                每场次面试休息时间
                                <p>分钟</p>
                                <input type="text" value={arg.interval} onChange={this.props.handleChange.bind(null, "interval", i)} />
                            </label>
                            <label>
                                该场地面试开始于
                                <input type="text" value={arg.startTime.toTimeString().split(':')[1]} 
                                                   onChange={this.props.handleChange.bind(null, "minutes", i)} />
                                <p>:</p>
                                <input type="text" value={arg.startTime.toTimeString().split(':')[0]}
                                                   onChange={this.props.handleChange.bind(null, "hours", i)} />
                            </label>
                            <label>
                                面试将结束于
                                <input type="text"/>
                                <p>:</p>
                                <input type="text"/>
                            </label>
                        </div>
                    </div>
                    )}
                )}
                <div className="col-md-6">
                    <div className="interview-card" id="add-interview-card">
                        <i className="fa fa-3x fa-plus" onClick={this.props.addCard}></i>
                    </div>
                </div>
            </div>
        )
    }
});