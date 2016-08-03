var React = require('react');
var Link = require('react-router').Link;

var Header = require('./component/orgHeader.jsx');

module.exports = React.createClass({
    render: function(){
        return(
            <div>
                <Header/>
                <div>
                    <Slider/>
                    <div className="dank-slider-right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
});

var Slider = React.createClass({
    render: function () {
        return (
            <div className="dank-slider-org">
                <div>
                    <Link to="/back/formManage" activeClassName="dank-slider-active">
                        <i className="fa fa-lg fa-fw fa-file-text-o" aria-hidden="true"/>
                        <b>报名表管理</b>
                    </Link>
                </div>

                <div>
                    <Link to="/back/dispatcher" activeClassName="dank-slider-active">
                        <i className="fa fa-lg fa-fw fa-calendar" aria-hidden="true"/>
                        <b>面试调度</b>
                        <p>{' >'}</p>
                    </Link>
                    <ul id="dispatcher-menu">
                        <Link to="/back/dispatcher/time" activeClassName="active"><li><i className="fa fa-angle-right"></i>面试场次安排</li></Link>
                        <Link to="/back/dispatcher/status" activeClassName="active"><li><i className="fa fa-angle-right"></i>面试状态查看/管理</li></Link>
                        <Link to="/back/dispatcher/message" activeClassName="active"><li><i className="fa fa-angle-right"></i>消息发送</li></Link>
                    </ul>
                </div>

                <div>
                    <Link to="/back/transhbin" activeClassName="dank-slider-active">
                        <i className="fa fa-lg fa-fw fa-trash" aria-hidden="true"/>
                        <b>回收站</b>
                        <p>{' >'}</p>
                    </Link>
                </div>
            </div>
        )
    }
});