/**
 * Created by admin on 2016/7/25.
 */
var React = require('react');
var Component = React.Component;
var Dropdown = require('./dropdown');

//全局变量
//存放chartjs生成的图表 防止重绘
var myChart1;
var myChart2;
var myChart3;

module.exports = React.createClass({
    render: function(){
        return(
            <Content/>
        )
    }
});

var Content = React.createClass({
    getInitialState: function(){
        return {
            initial: 1,
            nowEventID:'',
            events:[{eventID : '', name : '', ym:''}]
        }
    },
    bottomUp: function(array){
        var stack = [];
        var result = [];
        for(var i=0; i<array.length; i++){
            stack.push(array[i]);
        }
        for(var j=0; j<array.length; j++){
            result.push(stack.pop());
        }
        return result;
    },
    componentDidMount: function(){
        $.ajax({
            url: "/event",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            var events = this.bottomUp(data.body.events);
                            this.setState({events:events});
                            if(this.state.initial){
                                this.setState({nowEventID:events[0].eventID, initial:0});
                            }
                        }
                        break;
                    default:
                        alert(data.msg);
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    eventChange: function(eventID){
        this.setState({nowEventID: eventID});
    },
    render : function(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="event">
                            <Event eventID={this.state.nowEventID} events={this.state.events} eventChange={this.eventChange}/>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        {(this.state.nowEventID!='')?<Form eventID={this.state.nowEventID}/>:null}
                    </div>
                </div>
            </div>
        )
    }
});

var Event = React.createClass({
    eventDelete: function(){
        var eventID = this.props.eventID
        $.ajax({
            url: "/event/delete",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                eventID: eventID
            }),
            success: function(data) {
                switch(data.code){
                    case 0:
                        location.reload();
                        break;
                    default:
                        alert(data.msg);
                        break;
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },

    render: function(){
        var overflow = {
            overflow : "hidden"
        };
        var eventNodes = this.props.events.map(function (eventItem) {
            var className =
                (eventItem.eventID==this.props.eventID)?
                    "row dank-temp-table-active":"row dank-temp-table";
            var clickEvent = (eventItem.eventID==this.props.eventID)?
                null:function(){this.props.eventChange(eventItem.eventID)}.bind(this);

            return (
                <div className={className} onClick={clickEvent} key={eventItem.eventID}>
                    <div className="col-md-12">
                        <table className="center-block">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="text-center">
                                        <div className="dank-d4">
                                          {eventItem.ym}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-left">
                                        {eventItem.name}
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {(eventItem.eventID==this.props.eventID)?<big className="dank-event-delete" onClick={this.eventDelete}>删除</big>:null }
                        {(eventItem.eventID==this.props.eventID)?<big className="dank-event-form" onClick={function(){window.open("#/form/"+this.props.eventID)}.bind(this) }>查看报名页面</big>:null }
                    </div>
                </div>
            )
        }.bind(this));

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-left">
                        <div className="panel-title" href="#">
                            纳新事项
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-left">
                        <a className="btn panel-btn" href="#/back/manage/add">
                            新增事项
                        </a>
                    </div>
                </div>

                {eventNodes}
            </div>
        )
   }
});

var Form = React.createClass({

    getInitialState: function(){
        return({
           event:{}
        });
    },
    componentDidMount: function(){
        $.ajax({
            url: "/form/id",
            contentType: 'application/json',
            type: 'GET',
            data:{
                eventID: this.props.eventID
            },
            success: function(data) {
                this.setState({'event':data.body.event});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },

    render:function(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <Graph1 eventID={this.props.eventID} />
                    </div>
                    <div className="col-md-6">
                        <Graph2 eventID={this.props.eventID} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <List eventID={this.props.eventID} departments={(this.state.event.formschema)?this.state.event.formschema.wish.option:[]}/>
                    </div>
                </div>
            </div>
        )
   }
});

var Graph1 = React.createClass({


    getInitialState: function() {
     return{
         data:[]
     }
   },

    print: function(data){
        //console.log(data);
       var ctx = document.getElementById("myChart3");
       myChart3 = new Chart(ctx, {
           type: 'line',
           data: {
               labels: data.labels,
               datasets: [
                   {
                       label: "My First dataset",
                       fill: false,
                       lineTension: 0.1,
                       backgroundColor: "rgba(75,192,192,0.4)",
                       borderColor: "rgba(75,192,192,1)",
                       borderCapStyle: 'butt',
                       borderDash: [],
                       borderDashOffset: 0.0,
                       borderJoinStyle: 'miter',
                       pointBorderColor: "rgba(75,192,192,1)",
                       pointBackgroundColor: "#fff",
                       pointBorderWidth: 2,
                       pointHoverRadius: 5,
                       pointHoverBackgroundColor: "rgba(75,192,192,1)",
                       pointHoverBorderColor: "rgba(220,220,220,1)",
                       pointHoverBorderWidth: 2,
                       pointRadius: 5,
                       pointHitRadius: 10,
                       data: data.counts,
                       spanGaps: false
                   }
               ]
           },
           options: {
               title: {
                   display: true,
                   text: '报名人数',
                   position: 'top',
                   fontStyle: 'normal',
                   fontFamily: "'SimHei', 'STXihei', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light'",
                   fontSize: 24,
                   padding: 20
               },
               legend: {
                   display: false
               }
           }
       });
   },

    componentDidMount: function(){
        //console.log(this.props.eventID);
        $.ajax({
            url: "/event/count/recent",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                num: 7
            },
            success: function(data) {
                //console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            this.print(data.body.data);
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
    componentDidUpdate: function(){
        //console.log(this.props.eventID);
        $.ajax({
            url: "/event/count/recent",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                num: 7
            },
            success: function(data) {
                //console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            if(myChart3){
                                myChart3.destroy();
                            }
                            this.print(data.body.data);
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
        return(
           <div className="c6 text-center">
               <table className="t2">
                   <tbody>
                   <tr><td>
                       <canvas id="myChart3" width="300px" height="220px" className="can1"/>
                   </td></tr>
                   </tbody>
               </table>
           </div>
        )
   }
});

var Graph2 = React.createClass({
    print1 : function(data){
        var value1 = data.counts[2];
        var ctx = document.getElementById("myChart1");
        myChart1 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["男", "女"],
                datasets: [
                    {
                        data: [data.counts[0], data.counts[1]],
                        backgroundColor: [
                            "#79dae7",
                            "#ff8d94"
                        ],
                        hoverBackgroundColor: [
                            "#79dae7",
                            "#ff8d94"
                        ]
                    }]
            },
            options: {
                responsive: false,
                rotation: -0.5*Math.PI,
                title: {
                    display: true,
                    text: '总人数:'+value1,
                    position: 'bottom',
                    fontStyle: 'normal',
                    fontFamily: "'SimHei', 'STXihei', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light'",
                    fontSize: 20
                },
                legend: {
                    display: false,
                    position: 'top',
                    fontFamily: "'SimHei', 'STXihei', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light'"
                }
            }
        });
    },

    print2 : function(data){
        var ctx = document.getElementById("myChart2");
        myChart2 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        data: data.counts,
                        backgroundColor: [
                            "#3D5B6F",
                            "#9887C2",
                            "#2FC5A1",
                            "#2DD7E2",
                            "#A0F5FF",
                            "#FFD666",
                            "#EF7056",
                            "#A95A4C"
                        ]
                    }]
            },
            options: {
                responsive: false,
                rotation: -0.5*Math.PI,
                title: {
                    display: true,
                    text: '各部门报名人数',
                    position: 'bottom',
                    fontStyle: 'normal',
                    fontFamily: "'SimHei', 'STXihei', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light'",
                    fontSize: 20
                },
                legend: {
                    display: false,
                    position: 'bottom'
                }
            }
        });
    },

    componentDidMount: function(){
        //alert(this.props.eventID);
        $.ajax({
            url: "/event/count/all",
            contentType: 'application/json',
            type: 'GET',
            data: {
               eventID: this.props.eventID
            },
            success: function(data) {
                //console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            if(myChart1){
                                myChart1.destroy();
                            }
                            this.print1(data.body.gender);

                            if(myChart2){
                                myChart2.destroy();
                            }
                            this.print2(data.body.department);
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
    componentDidUpdate: function(){
        //alert(this.props.eventID);
        $.ajax({
            url: "/event/count/all",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID
            },
            success: function(data) {
                console.log(data);
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            this.print1(data.body.gender);
                            this.print2(data.body.department);
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

        return(
            <div className="dank-c6 text-center">
                <table className="dank-t3">
                    <tbody>
                    <tr>
                        <td>
                            <canvas id="myChart1" width="150px" height= "200px" className="dank-can2"/>
                    </td>
                        <td>
                            <canvas id="myChart2"  width="150px" height= "200px" className="dank-can2"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
});

var List = React.createClass({
    getInitialState : function(){
        return{
            wish: '全部部门',
            order: -1,
            page: 1,
            forms:[{
                writetime: '',
                browserinfo: '',
                date:'',
                like: '',
                baseinfo: {
                    name : '',
                    sex : '',
                    origin : '',
                    nation : '',
                    schoolID : '',
                    politicalStatus : '',
                    telnumber : '',
                    telshort : '',
                    email :'',
                    qq : '',
                    major : '',
                    birth :'',
                    address :''
                },
                skills: {
                    title:'',
                    chosen: []
                },
                introduction: {
                    title: '',
                    content: ''
                },
                wish: {
                    title:'',
                    chosen:[]
                },
                reason: '',
                remark:'',
                others:[]
            }]
        }
    },
    componentDidMount: function(){
        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: this.state.order,
                page: this.state.page,
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

    componentWillReceiveProps: function(nextProps){
        this.setState({page:1});

        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: nextProps.eventID,
                order: this.state.order,
                page: this.state.page,
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
    selectHandler: function(value, i){
        //当选择现在已经选择的内容时 不采取动作 （如果不returnfalse的话会产生bug
        if(value==this.state.wish){
            return false;
        }

        this.setState({"wish":value});
        this.setState({page:1});

        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: this.state.order,
                page: this.state.page,
                wish: (value=='全部部门')?null:value
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
    orderChange: function(){
        var order=-(this.state.order);
        this.setState({"order":order});
        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: order,
                page: this.state.page,
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
    firstPage: function(){
        this.setState({page:1});
        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: this.state.order,
                page: 1,
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
    lastPage: function(){
        var page = this.state.page;
        if(page>1)
        {
            page--;
        }
        else{
            //若已是第一页 无动作
            return false;
        }

        this.setState({page:page});
        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: this.state.order,
                page: page,
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
    nextPage: function(){
        var page = this.state.page;
        if(page>0)
        {
            page++;
        }
        else{
            //若已是最后一页 无动作
            return false;
        }

        this.setState({page:page});
        $.ajax({
            url: "/form",
            contentType: 'application/json',
            type: 'GET',
            data: {
                eventID: this.props.eventID,
                order: this.state.order,
                page: page,
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
    //删除报名表 发起删除请求 并在前端直接删除
    delete: function(id, i){
        $.ajax({
            url: "/form/delete",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                id: id
            }),
            success: function(data) {
                console.log(data);
                this.setState(state => {
                    state.forms.splice(i, 1);
                    return {forms: state.forms};
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("ajax请求发起失败");
            }.bind(this)
        });
    },
    render: function(){
        var titleStyle1 = {
            textAlign: 'left'
        };
        var titleStyle2 = {
            textAlign: 'left',
            float: 'left'
        };
        var titleStyle3 = {
            textAlign: 'left',
            float:'right'
        };
        var eventIDStyle={
            border:'2px solid #000000',
            borderRadius:'8px',
            width:'144px',
            fontSize:'18px',
            color: '#444852',
            height: '40px',
            lineHeight: '40px',
            display:'block',
            textAlign:'center',
            marginLeft:'10px'
        };
        var deleteStyle={
            textAlign: 'Right'
        };
        var formRecords = this.state.forms.map(function (form, i) {
            return (
                <tr key={i}>
                    <td>{form.baseinfo.name}</td>
                    <td>{form.baseinfo.sex}</td>
                    <td>{form.baseinfo.major}</td>
                    <td>{new function(){
                            var data = [];
                            for(var wish of form.wish.chosen){
                                data.push(wish+' ');
                            }
                            return data
                        }}</td>
                    <td>{form.date.substring(0,10)}</td>
                    <td style={deleteStyle}><a className="a19" onClick={function(){this.delete(form._id, i)}.bind(this)}>删除</a></td>
                </tr>
            )
        }.bind(this));
        return(
            <div className="dank-c7 text-center">
                <div style={titleStyle1}><big style={eventIDStyle}>报名表序号 {this.props.eventID}</big></div>
                <div style={titleStyle2}>
                    <big className="dank-a14" ><b>导入报名表</b></big>
                    <big className="dank-a14" ><b>导出报名表</b></big>
                </div>
                <div style={titleStyle3} className="form-inline" id="form-manage-option">
                    <Dropdown data={this.props.departments.concat(['全部部门'])} handleChecked={this.selectHandler} name={'department'} default={"全部部门"} resetWhenChanged={null}/>
                    <big className="dank-a14" onClick={this.orderChange}><b>时间{(this.state.order>0)?<i className="fa fa-chevron-down i3" aria-hidden="true"/>:<i className="fa fa-chevron-up i3" aria-hidden="true"/>}</b></big>
                </div>
                <b><table className="table dank-t5">
                        <tbody>
                        {(this.state.forms)?formRecords:null}
                        </tbody>
                    </table></b>
                    <div><b>
                        <a className="a20" onClick={this.firstPage}>首页</a>
                        <a className="a20" onClick={this.lastPage}>上一页</a>
                        <a className="a20" onClick={this.nextPage}>下一页</a>
                    </b></div>
            </div>
        )
        /*先删除了<a className="a20" onClick={this.lastPage}>尾页</a>*/
    }
});