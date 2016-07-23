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
                                    <Box/>
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
       return (
           <div className="my-header">

           </div>
       )
   }
});

var News = React.createClass({
    render: function(){
        return (
            <div>
                <div className="my-h1">news</div>
                <div className="my-box-1 center-block"></div>
            </div>
        )
    }
});

var Box = React.createClass({
    render: function(){
        return (
            <div>
                <div className="my-h1">news</div>
                <div className="my-box-2 center-block"></div>
            </div>
        )
    }
});