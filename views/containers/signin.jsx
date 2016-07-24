var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
    render: function(){
        var containerStyle = {
            height: "100%",
            padding: 0
        };
        var objectStyle = {
            top: "60px",
            bottom: "0px",
            position: "absolute",
            width: "100%"
        };
        return(
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row" style={objectStyle}>
                    <tabel className="vertical-middle-parent">
                        <tr>
                            <td className="vertical-middle-child">
                                <div className="col-xs-7 col-md-7">
                                    <News/>
                                </div>
                                <div className="col-xs-5 col-md-5">
                                    <Box children={this.props.children}/>
                                </div>
                            </td>
                        </tr>
                    </tabel>
                </div>
            </div>
        )
    }
});

var Header = React.createClass({
    render: function() {

        var leftPosition = {
            float: "left"
        };

        var leftItemPosition = {
            marginLeft: "40px",
            marginRight: "40px",
            verticalAlign: "middle"
        };

        var rightPosition = {
            float: "right",
            lineHeight: "60px"
        };

        var rightItemPosition = {
            marginLeft: "40px",
            marginRight: "40px"
        };

        return (
           <div className="dank-header">
               <div style={leftPosition}>
                   <img src="./img/logo.png" style={leftItemPosition} alt="logo" className="logo"/>
                   <a className="dank-button-header" style={leftItemPosition} href="#">首页</a>
                   <a className="dank-button-header" style={leftItemPosition} href="#">社团目录</a>
               </div>
                <div style={rightPosition}>
                    <a href="#" className="dank-a" style={rightItemPosition}>登陆</a>
                    <a href="#" className="dank-a" style={rightItemPosition}>注册</a>
                </div>
           </div>
       )
   }
});

var News = React.createClass({
    render: function(){
        var objectStyle = {
            width: "734px",
            height: "618px"
        };
        return (
            <div>
                <div className="dank-h1">news</div>
                <div className="dank-box-1 center-block" style={objectStyle}></div>
            </div>
        )
    }
});

var Box = React.createClass({
    render: function(){
        var objectStyle = {
            width: "508px",
            height: "618px"
        };
        return (
            <div>
                <div className="dank-h1">Welcome</div>
                <div className="dank-box-1 center-block" style={objectStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
});