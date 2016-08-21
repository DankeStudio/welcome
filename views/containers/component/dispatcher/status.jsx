var React = require('react');
var Dropdown = require('../dropdown');
var MultipleDatePicker = require('../multipleDatePicker.jsx');

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
            interview: {},
            selectedDate: new Date(),
            searchResult: {},
            search: false,
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
                        this.setState({departments: ['全部部门'].concat(data.body.event.formschema.wish.option)});
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
                                element.day.getMonth() == day.getMonth() && element.day.getDate() == day.getDate()) == -1)
                                days.push({day: day, notSelectable: true, selected: true});
                        }
                        this.setState({interview: tmp, days: days, infoComplete: true});
                        if (days.length) this.setState({selectedDate: days[0].day});
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
    exports: function () {
        if (!this.state.infoComplete) {
            alert('请先选择面试活动');
            return;
        }
        var interview = this.state.interview;
        var title = this.state.selectedEvent.name + this.state.selectedDep + '第'+this.state.round + '轮面试安排';
        var data = '面试事项,面试部门,面试轮次\r\n';
        data += this.state.selectedEvent.name+','+interview.department+','+interview.round+'\r\n\r\n\r\n';
        for (let i=0; i<this.state.days.length; i++){
            data += '日期,场次,开始时间,结束时间,地点,面试人数\r\n';
            interview.arrangement.map((arg, j) => {
                if (arg.startTime.getMonth() == this.state.days[i].day.getMonth() &&
                    arg.startTime.getDate() == this.state.days[i].day.getDate()) {
                    var iverdata = '', num=0;
                    interview.interviewer.forEach((iv) => {
                        if (iv.arrangementID == arg._id)
                            iverdata+=(iv.name+','+iv.sex+','+iv.telnumber+','+this.state.selectedDep+','+iv.state+'\r\n'), num++;
                    });
                    let endTime = new Date(arg.startTime.getTime()+60*1000*(arg.duration*arg.total+arg.interval*(arg.total-1)));
                    data += ((this.state.days[i].day.getMonth()+1)+'月'+this.state.days[i].day.getDate()+'日,第'+(j+1)+'场,"'+
                             arg.startTime.getHours()+':'+arg.startTime.getMinutes()+'","'+endTime.getHours()+':'+endTime.getMinutes()+'",'+
                             arg.place+','+num+'\r\n');
                    data += '姓名,性别,联系方式,面试部门,本轮面试状态\r\n';
                    data += iverdata+'\r\n\r\n';
            }})
        } 
        var link = document.createElement("a");    
        link.id="download";
        document.body.appendChild(link);
        var blob = new Blob(["\ufeff",data], { type: 'text/csv' }); 
        var csvUrl = window.URL.createObjectURL(blob);
        var filename = title+'.csv';
        $("#download")
        .attr({
            'download': filename,
            'href': csvUrl
        }); 
	    $('#download')[0].click();
        document.body.removeChild(link);
    },
    update: function() {
        if (!this.state.infoComplete) {
            alert('请先选择面试活动');
            return;
        }
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
    search: function(e) {
        if (!e.target.value || !this.state.infoComplete) {
            this.setState({search: false});
            return;
        }
        let keyword = new RegExp(e.target.value, 'gi'),
            targets = this.state.interview,
            result = [], days = [], args = [];
        for (let i=0; i<targets.interviewer.length; i++)
            for (let attr in targets.interviewer[i])
                if (targets.interviewer[i][attr].match(keyword)) 
                    result.push(targets.interviewer[i]);
        for (let i=0; i<targets.arrangement.length; i++)
            for (let j=0; j<result.length; j++)
                if (targets.arrangement[i]._id == result[j].arrangementID)
                    args.push(targets.arrangement[i]), days.push(targets.arrangement[i].startTime);
        this.setState({
            searchResult: {days: days, arrangement: args, interviewer: result},
            search: true
        });
    },
    changeDay: function(date) {
        this.setState({selectedDate: date});
    },
    addDay: function(date) {
        var days = this.state.days;
        if(days.findIndex((element) => 
           element.day.getMonth() == date.getMonth() && element.day.getDate() == date.getDate()) == -1)
            days.push({day: date, notSelectable: true, selected: true});
        days.sort((a,b)=> a.day-b.day);
        this.setState({days: days,
                       selectedDate: date,
                       dateSelected: true});
        return true;
    },
    addArg: function() {
        alert('coming soon...');
    },
    isActive: function(data) {
        return ((data.getMonth() == this.state.selectedDate.getMonth() &&
               data.getDate() == this.state.selectedDate.getDate()) ? ' active' : '');
    },
    handleClick: function() {
        this.setState({addDay: !this.state.addDay});
    },
    handleIverChange: function(interviewer) {
        var index = this.state.interview.interviewer.findIndex((element) => interviewer._id == element._id);
        var tmp = this.state.interview;
        tmp.interviewer[index] = interviewer;
        this.setState({interview: tmp});
        console.log('change iver ok');
    },
    handleDelete: function(interviewer) {
        var index = this.state.interview.interviewer.findIndex((element) => interviewer.telnumber == element.telnumber);
        var tmp = this.state.interview;
        if(index > -1)
            tmp.interviewer.splice(index, 1);
        this.setState({interview: tmp});
        console.log(this.state.interview);
    },
    render: function(){
        let interview = this.state.search ? this.state.searchResult : this.state.interview;
        let days = this.state.search ? interview.days : this.state.days;
        var section = this.state.infoComplete ?
                    <div className="panel-body">
                        <div className="container-fluid" id="interview-status">
                            <div className="date-fun">
                                {days.map((e, i) =>
                                    <div className={"interview-date"+this.isActive(e.day)}
                                         title={(e.day.getMonth()+1)+'月'+e.day.getDate()+'日'}
                                         onClick={this.changeDay.bind(null, e.day)} key={i}>
                                        {(e.day.getMonth()+1)+'月'+e.day.getDate()+'日'}
                                    </div>
                                )}
                                <div className="interview-date" id="add-date" onClick={this.handleClick}>添加日期</div>
                                <div className={'date-picker' + (this.state.addDay ? ' active':'')}>
                                    <MultipleDatePicker closePicker={this.handleClick} callbackContext={this}
                                                        highlightDays={this.state.days} dayClick={this.addDay}/>
                                </div>
                            </div>
                            <div className="row">
                                {interview.arrangement.map((arg, i) => {
                                    if (arg.startTime.getMonth() == this.state.selectedDate.getMonth() &&
                                        arg.startTime.getDate() == this.state.selectedDate.getDate()) {
                                        var data = [];
                                        interview.interviewer.forEach((iv) => {
                                            if (iv.arrangementID == arg._id)
                                                data.push(iv);
                                        });
                                            return <ArgStatus key={i} index={i} data={data} arg={arg} iv={this.state.interview}
                                                            handleChange={this.handleIverChange} handleDelete={this.handleDelete}/>
                                }})}
                                <div id="add-interview" onClick={this.addArg}>
                                    <i className="fa fa-plus"></i>
                                    增加本日面试场次
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
                                    <input type="text" className="form-control" placeholder="Search" onChange={this.search}></input>
                                    <span className="input-group-btn">
                                        <button className="btn" type="button">
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
    componentWillReceiveProps: function(nextProps) {
        this.setState({interviewers: nextProps.data||[]});
        return true;
    },
    changeArg: function(interviewer) {
        alert('coming soon');
    },
    deleteIv: function(interviewer) {
        $.post('/interview/interviewer/delete', {
            interviewID: this.state.interview._id,
            telnumber: interviewer.telnumber
        }, (data)=> {
            this.props.handleDelete(interviewer);
        });
    },
    changeState: function(interviewer, e) {
        interviewer.state = e.target.checked ? '通过' : '未通过';
        this.props.handleChange(interviewer);
    },
    handleClick: function() {
        $(this.refs[this.props.index]).next().slideToggle(300);
    },
    render: function () {
        var arg = this.state.arg;
        var endTime = new Date(arg.startTime.getTime()+arg.duration*60000);
        return (
            <div className="panel">
                <div className="panel-heading row" onClick={this.handleClick} ref={this.props.index}>
                    <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3">{'第'+(this.props.index+1)+'场'}</div>
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
                    {this.state.interviewers.map((interviewer, i) => {
                        let current = this.state.interview.round == 1 ? '表刷通过' : '第'+(this.state.interview.round-1)+'轮面试通过'
                        return (
                        <div className="row" key={i}>
                            <div className="col-md-1">{interviewer.name}</div>
                            <div className="col-md-1">{interviewer.sex}</div>
                            <div className="col-md-2">{interviewer.telnumber}</div>
                            <div className="col-md-2">{this.state.interview.department}</div>
                            <div className="col-md-2">{current}</div>
                            <div className="col-md-2">
                                <button className="btn" onClick={this.changeArg.bind(null, interviewer)}>修改场次</button>
                                <button className="btn" onClick={this.deleteIv.bind(null, interviewer)}>删除</button>
                            </div>
                            <div className="col-md-2">
                                <div className="check-state">
                                    {'第'+this.state.interview.round+'轮面试'}
                                    <input type="checkbox" id="ivstate" name="check" onChange={this.changeState.bind(null, interviewer)}/>
                                    <label htmlFor="ivstate"></label>
                                </div>
                            </div>
                        </div>
                        )}
                    )}
                </div>
            </div>
        )
    }
})