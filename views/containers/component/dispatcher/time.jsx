var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {infoComplete: true};
    },
    checkInfo: function() {
        this.setState({infoComplete: !this.state.infoComplete});
    },
    render: function(){
        var section1 = this.state.infoComplete == false ? null : <InterviewCard />;
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-select-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">请完善您的面试场次安排信息</h3>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="dropdown">
                                    <div className="dp-title">
                                        蛋壳工作室纳新
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

                            <div className="col-md-4">
                                <a className="thumbnail" onClick={this.checkInfo}>
                                    {'>>第一轮面试<<'}
                                </a>
                            </div>

                            <div className="col-md-4">
                                <div className="dropdown">
                                    <div className="dp-title">
                                        部门选择
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
                            </div>
                        </div>
                        {section1}
                    </div>
                </div>
            </div>
        )
    }
});

var InterviewCard = React.createClass({
    render: function() {
        return (
            <div className="container-fluid" id="interview-info">
                <div className="interview-date">10月1号</div>
                <div className="interview-date" id="add-date">添加日期</div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="interview-card">
                            <div className="card-heading">
                                <p>10月1日面试场次A</p>
                                <i className="fa fa-times"></i>
                            </div>
                            <label>面试地点<input type="text"/></label>
                            <label>此场点安排的场数为<input type="text"/></label>
                            <label>
                                每场次面试时间为
                                <p>分钟</p>
                                <input type="text"/>
                            </label>
                            <label>
                                每场次面试休息时间
                                <p>分钟</p>
                                <input type="text"/>
                            </label>
                            <label>
                                该场地面试开始于
                                <input type="text"/>
                                <p>:</p>
                                <input type="text"/>
                            </label>
                            <label>
                                面试将结束于
                                <input type="text"/>
                                <p>:</p>
                                <input type="text"/>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="interview-card" id="add-interview-card">
                            <i className="fa fa-3x fa-plus"></i>
                        </div>
                    </div>
                </div>
                <button className="btn" id="gen-btn">生成</button>
                <button className="btn" id="cancle-btn">取消</button>
            </div>
        )
    }
})