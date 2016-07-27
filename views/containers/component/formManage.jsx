/**
 * Created by admin on 2016/7/25.
 */
var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function(){
        return(
            <div>
                <div className="dank-slider-org">
                    <div>
                        <big className="dank-slider-active"><i className="fa fa-file-text" aria-hidden="true"/><b>报名表管理</b></big>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-commenting" aria-hidden="true"/><b> 消息通知</b></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-trash" aria-hidden="true"/><b> 回收站</b></a>
                    </div>
                </div>
                <div className="dank-slider-right">
                    <Content/>
                </div>
            </div>
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
    componentDidMount: function(){
        $.ajax({
            url: "/event",
            contentType: 'application/json',
            type: 'GET',
            success: function(data) {
                switch(data.code){
                    case 0:
                        if(this.isMounted()){
                            this.setState({events:data.body.events});
                            if(this.state.initial){
                                this.setState({nowEventID:data.body.events[0].eventID, initial:0});
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
                    <div className="col-md-3 c4">
                        <div className="c5">
                            <Event eventID={this.state.nowEventID} events={this.state.events} eventChange={this.eventChange}/>
                        </div>
                    </div>
                    <div className="col-md-9 c4">
                        {(this.state.nowEventID!='')?<Form eventID={this.state.nowEventID}/>:null}
                    </div>
                </div>
            </div>
        )
    }
});

var Event = React.createClass({

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
                                <td><div className="text-center">
                                    <div className="dank-d4">
                                        <b>{eventItem.ym}</b>
                                    </div>
                                </div></td>
                                <td><div className="text-left">
                                    <div>
                                        <h1 className="dank-temp-h1">{eventItem.name}</h1>
                                    </div>
                                </div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }.bind(this));

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-left">
                        <big className="big11" href="#"><b>纳新事项</b></big>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <a className="btn dank-temp-a12" href="#"><b>新增事项</b></a>
                    </div>
                </div>
                {eventNodes}
            </div>
        )
   }
});

var Form = React.createClass({

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
                        <List eventID={this.props.eventID}/>
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
       var myChart3 = new Chart(ctx, {
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
        var a=2;
        $.ajax({
            url: "/event/count/recent",
            contentType: 'application/json',
            type: 'GET',
            data: {
                test:a,
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
        var myChart1 = new Chart(ctx, {
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
        var myChart2 = new Chart(ctx, {
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
    render: function(){
        return(
            <div className="c7 text-center">
                <table className="table">
                    <tbody>
                    <tr>
                        <td><a className="btn a13" href="#"><b>报名表序号 01</b></a></td>
                        <td><a className="btn a14" href="#"><b>导入报名表</b></a></td>
                        <td><a className="btn a14" href="#"><b>导出报名表</b></a></td>
                        <td><a className="btn a15" href="#"><b>全部</b>
                            <table className="center-block t4">
                                <tbody>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-up i3" aria-hidden="true"/></a></td>
                                </tr>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-down i3" aria-hidden="true"/></a></td>
                                </tr>
                                </tbody>
                            </table></a></td>
                        <td><a className="btn a16" href="#"><b>排序</b></a></td>
                        <td><a className="btn a17" href="#"><b>时间</b>
                            <table className="center-block t4">
                                <tbody>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-up i3" aria-hidden="true"/></a></td>
                                </tr>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-down i3" aria-hidden="true"/></a></td>
                                </tr>
                                </tbody>
                            </table></a></td>
                        <td><a className="btn a18" href="#"><b>赞数</b>
                            <table className="center-block t4">
                                <tbody>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-up i3" aria-hidden="true"/></a></td>
                                </tr>
                                <tr className="tr1"><td><a href="?"><i className="fa fa-sort-down i3" aria-hidden="true"/></a></td>
                                </tr>
                                </tbody>
                            </table></a></td>
                    </tr>
                    </tbody>
                </table>

                    <b><table className="table t5">
                        <tbody>
                        <tr>
                            <td>吴昊潜</td>
                            <td>男</td>
                            <td>计算机科学与技术</td>
                            <td>产品</td>
                            <td>2016/7/15</td>
                            <td><i className="fa fa-heart i4" aria-hidden="true"/> 10</td>
                            <td><a className="a19" href="#">删除</a></td>
                        </tr>
                        </tbody>
                    </table></b>
                    <div><b>
                        <a className="a20" href="#">首页</a>
                        <a className="a20" href="#">上一页</a>
                        <a className="a20" href="#">下一页</a>
                        <a className="a20" href="#">尾页</a>
                    </b></div>

            </div>
        )
    }
});