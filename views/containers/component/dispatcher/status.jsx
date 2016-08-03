var React = require('react');

module.exports = React.createClass({
    render: function(){
        return(
            <div className="container-fluid">
                <div className="panel" id="interview-status-panel">
                    <div className="panel-heading">
                        <div className="row">

                            <div className="col-md-2">
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

                            <div className="col-md-2">
                                <div className="dropdown">
                                    <div className="dp-title">
                                        第一轮面试
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

                            <div className="col-md-2">
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

                            <div className="col-md-2">
                                <button className="btn">面试安排信息导出</button>
                            </div>

                            <div className="col-md-2">
                                <button className="btn">本轮面试状态更新</button>
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
                            <div className="interview-date">10月1号</div>
                            <div className="interview-date" id="add-date">添加日期</div>
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