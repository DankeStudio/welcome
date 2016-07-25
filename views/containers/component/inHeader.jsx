var React = require('react');
var Component = React.Component;

module.exports = React.createClass({
   render: function(){
       var leftPosition = {
           float: "left"
       };
       var leftPosition2 = {
           float: "left",
           marginTop: "11px"
       };
       var leftItemPosition = {
           marginLeft: "40px",
           marginRight: "40px",
           verticalAlign: "middle"
       };

       var titleStyle = {
           fontFamily: "BenderSolid",
           fontSize: "36px",
           color: "#ffffff",
           background:"#f57a6c",
           width:"215px",
           height:"60px",
           lineHeight:"60px",
           display: "inline-block",
           textAlign: "center"
       };

       var rightPosition = {
           float: "right",
           lineHeight: "60px"
       };

       var rightItemPosition = {
           marginLeft: "40px",
           marginRight: "40px"
       };
       return(
           <div className="dank-header">
                <div style={leftPosition}>
                    <big style={titleStyle} >WELCOME</big>
                </div>
                <div style={leftPosition2}>
                    <a className="dank-button-header" style={leftItemPosition} href="#">首页</a>
                    <a className="dank-button-header" style={leftItemPosition} href="#">社团目录</a>
                </div>
                <div style={rightPosition}>
                    <a className="dank-a" href="#" style={rightItemPosition}>Hi,XXX</a>
                    <a className="dank-a" href="#" style={rightItemPosition}>我的报名</a>|
                    <a className="dank-a" href="/#/person/info" style={rightItemPosition}>个人资料</a>|
                    <a className="dank-a" href="#" style={rightItemPosition}>注销</a>
                </div>
           </div>
       )
   }
});