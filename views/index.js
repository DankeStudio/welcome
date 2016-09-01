var React = require('react');
var Component = React.Component;

var ReactDOM = require('react-dom');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var IndexRedirect = require('react-router').IndexRedirect;

import index from './containers/index.jsx';

var sign = require('./containers/signin.jsx');
var signinBox = require('./containers/component/signinBox.jsx');
var signupBox = require('./containers/component/signupBox.jsx');

var orgSign = require('./containers/orgSign.jsx');
var orgSigninBox = require('./containers/component/orgsigninBox.jsx');
var orgSignupBox = require('./containers/component/orgsignupBox.jsx');

var person = require('./containers/person.jsx');
var info = require('./containers/component/info.jsx');
var infoChange = require('./containers/component/infoChange.jsx');

var back = require('./containers/back.jsx');
var formOutput = require('./containers/formOutput.jsx');
//var dispatcher;
var time = require('./containers/component/dispatcher/time.jsx');
var status = require('./containers/component/dispatcher/status.jsx');
var message = require('./containers/component/dispatcher/message.jsx');
var trashbin;
var formManager = require('./containers/component/formManage.jsx');
var addEvent = require('./containers/component/addEvent.jsx');

var form = require('./containers/form.jsx');
var mform = require('./containers/mform.jsx');

render((
    <Router history={hashHistory}>
        <Route path="/" component={index} />
        <Route path="/sign" component={sign}>
            <IndexRedirect to="/sign/in" />
            <Route path="in" component={signinBox} />
            <Route path="up" component={signupBox} />
        </Route>
        <Route path="/orgsign" component={orgSign}>
            <IndexRedirect to="/orgsign/in" />
            <Route path="in" component={orgSigninBox} />
            <Route path="up" component={orgSignupBox} />
        </Route>
        <Route path="/person" component={person}>
            <Route path="info" component={info} />
            <Route path="info/change" component={infoChange} />
        </Route>
        <Route path="/back" component={back}>
            <IndexRedirect to="manage" />
            <Route path="manage">
                <IndexRedirect to="form" />
                <Route path="form" component={formManager} />
                <Route path="add" component={addEvent}/>
            </Route>
            <Route path="dispatcher">
                <IndexRedirect to="time" />
                <Route path="time" component={time} />
                <Route path="status" component={status} />
                <Route path="message" component={message} />
            </Route>
            <Route path="transhbin" />
        </Route>
        <Route path="/form/:id" component={form}/>
        <Route path="/forms/output/:eventID/:wish" component={formOutput}/>
        <Route path="/mobile/form/:id" component={mform}/>
    </Router>
), document.getElementById('content'));