var React = require('react');

module.exports = React.createClass({
    getInitialState: function (){
        return {
            infoComplete: true,
            events: [],
            round: 0,
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
    },
    eventChecked: function(eventID) {
        //获取**当前**面试轮次,可面试部门
        //this.setState({round: round, departments: departments});
    },
    departChecked: function(department) {
        this.setState({department: department});
        $.get('/interview?eventID=' + this.state.selectedEvent.eventID + '&department=' + department, function(data){
            this.setState({arrangements: data.arrangement});
        });
        this.setState({infoComplete: true});
    },
    render: function(){
        var section1 = this.state.infoComplete == false ? null : <Interviews data={this.state.arrangements}/>;
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-select-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">请完善您的面试场次安排信息</h3>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <EventDropdown data={this.state.events} eventChecked={this.eventChecked} />
                            </div>

                            <div className="col-md-4">
                                <a className="thumbnail" onClick={this.checkInfo}>
                                    {'>>第'+ this.state.round + '次面试<<'}
                                </a>
                            </div>

                            <div className="col-md-4">
                                <DepartDropdown data={this.state.departments} departChecked={this.departChecked}/>
                            </div>
                        </div>
                        {section1}
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
        this.props.eventChecked(eventID);
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
        this.props.departChecked(e.currentTarget.value);
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

var Interviews = React.createClass({
    getInitialState: function() {
        var tmp = (this.props.data.map((data) => data.startTime))
                  .sort((a,b) => new Date(a.date) - new Date(b.date));
        return {
            selectedDate: tmp[0] ? tmp[0] : new Date(),
            days: tmp[0] ? tmp : [new Date()],
            arrangements: this.props.data,
            initial: this.props.data,
            initialDays: []
        }
    },
    componentDidMount: function() {
        var tmp = this.state.days;
        var unique = [tmp[0]];
        for (var i = 0; i < tmp.length-1; i++) {
            if (tmp[i+1].getMonth() != tmp[i].getMonth() || tmp[i+1].getDate() != tmp[i].getDate()) {
                unique.push(tmp[i+1]);
            }
        }
        this.setState({days: unique, initialDays: unique});
    },
    changeDay: function(date) {
        this.setState({selectedDate: date});
    },
    isActive: function(data) {
        return ((data.getMonth() == this.state.selectedDate.getMonth() &&
               data.getDate() == this.state.selectedDate.getDate()) ? ' active' : '');
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
    addCard: function() {
        var selected = this.state.selectedDate;
        var voidArg = [{
            "duration": 0,
            "startTime": selected,
            "place": '',
            "interval": 0,
            "total": 0
        }];
        this.setState({arrangements: this.state.arrangements.concat(voidArg)});
    },
    deleteArg: function(i, e) {
        var cardIndex = parseInt(e.target.value, 10);
        this.setState(state => {
            state.arrangements.splice(i, 1);
            return {arrangements: state.arrangements};
        });
    },
    postArgs: function() {
        //interview/arrangement/update, this.state.arrangements
        //interview/arrangement/create, this.state.newArgs
        this.setState({initial: this.state.arrangements});
    },
    resetCard: function() {
        this.setState({arrangements: this.state.initial, days: this.state.initialDays});
    },
    handleChange: function(name, i, e) {
        var change = this.state.arrangements;
        change[i][name] = e.target.value;
        this.setState({arrangements: change});
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
                    <div className="interview-date" id="add-date" onClick={this.addDay}>添加日期</div>
                </div>

                <Cards items={this.state.arrangements} selectedDate={this.state.selectedDate} 
                       addCard={this.addCard} handleDelete={this.deleteArg} handleChange={this.handleChange} />

                <button className="btn" id="gen-btn" onClick={this.postArg}>生成</button>
                <button className="btn" id="cancle-btn" onClick={this.resetCard}>重置</button>
            </div>
        )
    }
})

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
                                <input type="text" name="total" value={arg.duration} 
                                       onChange={this.props.handleChange.bind(null, "total", i)}/>
                            </label>
                            <label>
                                每场次面试休息时间
                                <p>分钟</p>
                                <input type="text" value={arg.interval} onChange={this.props.handleChange.bind(null, "interval", i)} />
                            </label>
                            <label>
                                该场地面试开始于
                                <input type="text" value={arg.startTime.getMinutes()} 
                                                   onChange={this.props.handleChange.bind(null, "minutes", i)} />
                                <p>:</p>
                                <input type="text" value={arg.startTime.getHours()}
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
