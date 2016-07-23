var React = require('react');
var Component = React.Component;

var ReactDOM = require('react-dom');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var login = require('./containers/login.jsx');


render((
    <Router history={browserHistory}>
        <Route path="/login" component={login}/>
    </Router>
), document.getElementById('content'));