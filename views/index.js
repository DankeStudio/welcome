var React = require('react');
var Component = React.Component;

var ReactDOM = require('react-dom');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var sign = require('./containers/signin.jsx');
var signinBox = require('./containers/component/signinBox.jsx');
var signupBox = require('./containers/component/signupBox.jsx');

render((
    <Router history={browserHistory}>
        <Route path="/sign" component={sign}>
            <IndexRoute component={signupBox} />
            <Route path="in" component={signinBox} />
            <Route path="up" component={signupBox} />
        </Route>
    </Router>
), document.getElementById('content'));