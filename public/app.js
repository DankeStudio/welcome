var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Component = React.Component;

	var ReactDOM = __webpack_require__(2);
	var render = __webpack_require__(2).render;

	var Router = __webpack_require__(3).Router;
	var Route = __webpack_require__(3).Route;
	var IndexRoute = __webpack_require__(3).IndexRoute;
	var Link = __webpack_require__(3).Link;
	var hashHistory = __webpack_require__(3).hashHistory;
	var IndexRedirect = __webpack_require__(3).IndexRedirect;

	var sign = __webpack_require__(67);
	var signinBox = __webpack_require__(69);
	var signupBox = __webpack_require__(70);

	var orgSign = __webpack_require__(71);
	var orgSigninBox = __webpack_require__(72);
	var orgSignupBox = __webpack_require__(73);

	var person = __webpack_require__(74);
	var info = __webpack_require__(76);
	var infoChange = __webpack_require__(77);

	var back = __webpack_require__(78);
	//var dispatcher;
	var time = __webpack_require__(80);
	var status = __webpack_require__(81);
	var message = __webpack_require__(82);
	var trashbin;
	var formManager = __webpack_require__(83);
	var addEvent = __webpack_require__(84);

	var form = __webpack_require__(85);

	var Root = React.createClass({
	    displayName: 'Root',

	    render: function render() {
	        return React.createElement('div', null);
	    }
	});

	render(React.createElement(
	    Router,
	    { history: hashHistory },
	    React.createElement(Route, { path: '/', component: Root }),
	    React.createElement(
	        Route,
	        { path: '/sign', component: sign },
	        React.createElement(IndexRedirect, { to: '/sign/in' }),
	        React.createElement(Route, { path: 'in', component: signinBox }),
	        React.createElement(Route, { path: 'up', component: signupBox })
	    ),
	    React.createElement(
	        Route,
	        { path: '/orgsign', component: orgSign },
	        React.createElement(IndexRedirect, { to: '/orgsign/in' }),
	        React.createElement(Route, { path: 'in', component: orgSigninBox }),
	        React.createElement(Route, { path: 'up', component: orgSignupBox })
	    ),
	    React.createElement(
	        Route,
	        { path: '/person', component: person },
	        React.createElement(Route, { path: 'info', component: info }),
	        React.createElement(Route, { path: 'info/change', component: infoChange })
	    ),
	    React.createElement(
	        Route,
	        { path: '/back', component: back },
	        React.createElement(IndexRedirect, { to: 'manage' }),
	        React.createElement(
	            Route,
	            { path: 'manage' },
	            React.createElement(IndexRedirect, { to: 'form' }),
	            React.createElement(Route, { path: 'form', component: formManager }),
	            React.createElement(Route, { path: 'add', component: addEvent })
	        ),
	        React.createElement(
	            Route,
	            { path: 'dispatcher' },
	            React.createElement(IndexRedirect, { to: 'time' }),
	            React.createElement(Route, { path: 'time', component: time }),
	            React.createElement(Route, { path: 'status', component: status }),
	            React.createElement(Route, { path: 'message', component: message })
	        ),
	        React.createElement(Route, { path: 'transhbin' })
	    ),
	    React.createElement(Route, { path: '/form/:id', component: form })
	), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(4);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(5);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(11);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(13);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(44);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(45);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(46);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(48);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(50);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(49);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(51);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(52);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(53);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(54);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(55);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(41);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(56);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(57);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(61);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(62);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(63);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(66);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(58);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(1);

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(10);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(9);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function warning() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createHashHistory = __webpack_require__(14);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(10);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(4);

	var _RouterUtils = __webpack_require__(43);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',

	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;

	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;

	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;

	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },

	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _DOMStateStorage = __webpack_require__(20);

	var _createDOMHistory = __webpack_require__(21);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function warning() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _createHistory = __webpack_require__(22);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(23);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(17);

	var _AsyncUtils = __webpack_require__(26);

	var _Actions = __webpack_require__(16);

	var _createLocation2 = __webpack_require__(27);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(24);
	var isArguments = __webpack_require__(25);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	    // 7.3. Other pairs that do not both pass typeof value == 'object',
	    // equivalence is determined by ==.
	  } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	    // 7.4. For all other Object pairs, including Array objects, equivalence is
	    // determined by having the same number of owned properties (as verified
	    // with Object.prototype.hasOwnProperty.call), the same set of keys
	    // (although not necessarily the same order), equivalent values for every
	    // corresponding key, and an identical 'prototype' property. Note: this
	    // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	};

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer(x) {
	  if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {
	    //happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length) return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i]) return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

	exports.shim = shim;
	function shim(obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var supportsArgumentsClass = function () {
	  return Object.prototype.toString.call(arguments);
	}() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object) {
	  return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(31);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(17);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && _typeof(object[p]) === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var strictUriEncode = __webpack_require__(32);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(16);

	var _computeChangedRoutes2 = __webpack_require__(34);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(35);

	var _isActive2 = __webpack_require__(37);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(38);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(40);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;

	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(11);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(36);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(11);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(36);

	var _makeStateWithLocation = __webpack_require__(39);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(7);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(36);

	var _makeStateWithLocation = __webpack_require__(39);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(11);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(4);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(42);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(4);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',

	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },

	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(11);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(7);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;

	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;

	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(44);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.default = withRouter;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(47);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent) {
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    render: function render() {
	      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {}
	            }
	        }
	    }

	    return targetComponent;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(49);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',

	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _PatternUtils = __webpack_require__(11);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',

	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',

	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(4);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',

	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(10);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(8);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(58);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(33);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(4);

	var _RouterUtils = __webpack_require__(43);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(59);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(60);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _PathUtils = __webpack_require__(17);

	var _runTransitionHook = __webpack_require__(28);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(29);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(17);

	var _Actions = __webpack_require__(16);

	var _createHistory = __webpack_require__(22);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if ((typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(30);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(59);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(41);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  var withContext = middlewares.map(function (m) {
	    return m.renderRouterContext;
	  }).filter(function (f) {
	    return f;
	  });
	  var withComponent = middlewares.map(function (m) {
	    return m.renderRouteComponent;
	  }).filter(function (f) {
	    return f;
	  });
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(64);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(65);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _invariant = __webpack_require__(12);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(16);

	var _PathUtils = __webpack_require__(17);

	var _ExecutionEnvironment = __webpack_require__(18);

	var _DOMUtils = __webpack_require__(19);

	var _DOMStateStorage = __webpack_require__(20);

	var _createDOMHistory = __webpack_require__(21);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	        window.history.pushState(historyState, null, path);
	      }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	        window.history.replaceState(historyState, null, path);
	      }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(61);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(14);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(65);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Component = React.Component;

	var Header = __webpack_require__(68);

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        var containerStyle = {
	            height: "100%",
	            padding: 0,
	            backgroundColor: "#f57a6c"
	        };
	        var objectStyle = {
	            top: "60px",
	            bottom: "0px",
	            position: "absolute",
	            width: "100%"
	        };
	        return React.createElement(
	            'div',
	            { style: containerStyle },
	            React.createElement(Header, null),
	            React.createElement(
	                'div',
	                { className: 'container-fluid' },
	                React.createElement(
	                    'div',
	                    { className: 'row', style: objectStyle },
	                    React.createElement(
	                        'tabel',
	                        { className: 'vertical-middle-parent' },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                React.createElement(
	                                    'td',
	                                    { className: 'vertical-middle-child' },
	                                    React.createElement(
	                                        'div',
	                                        { className: 'col-xs-7 col-md-7' },
	                                        React.createElement(News, null)
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        { className: 'col-xs-5 col-md-5' },
	                                        React.createElement(Box, { children: this.props.children })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var News = React.createClass({
	    displayName: 'News',

	    render: function render() {
	        var objectStyle = {
	            width: "734px",
	            height: "618px"
	        };
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'dank-h1' },
	                'news'
	            ),
	            React.createElement('div', { className: 'dank-box-1 center-block', style: objectStyle })
	        );
	    }
	});

	var Box = React.createClass({
	    displayName: 'Box',

	    render: function render() {
	        var objectStyle = {
	            width: "508px",
	            height: "618px"
	        };
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'dank-h1' },
	                'Welcome'
	            ),
	            React.createElement(
	                'div',
	                { className: 'dank-box-1 center-block', style: objectStyle },
	                this.props.children
	            )
	        );
	    }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {

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

	        return React.createElement(
	            "div",
	            { className: "dank-header" },
	            React.createElement(
	                "div",
	                { style: leftPosition },
	                React.createElement("img", { src: "./img/logo.png", style: leftItemPosition, alt: "logo", className: "logo" }),
	                React.createElement(
	                    "a",
	                    { className: "dank-button-header", style: leftItemPosition, href: "#" },
	                    "首页"
	                ),
	                React.createElement(
	                    "a",
	                    { className: "dank-button-header", style: leftItemPosition, href: "#" },
	                    "社团目录"
	                )
	            ),
	            React.createElement(
	                "div",
	                { style: rightPosition },
	                React.createElement(
	                    "a",
	                    { href: "#/orgsign/in", className: "dank-a", style: rightItemPosition },
	                    "社团入口"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#/sign/in", className: "dank-a", style: rightItemPosition },
	                    "个人入口"
	                )
	            )
	        );
	    }
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Created by admin on 2016/7/24.
	 */
	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
	        var topStyle = {
	            paddingTop: "50px"
	        };
	        var headStyle = {
	            margin: "0px auto 34px auto",
	            width: "414px",
	            height: "60px",
	            textAlign: "center"
	        };
	        var aStyle1 = {
	            margin: "0px 55px 0px 44px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        var aStyle2 = {
	            margin: "0px 44px 0px 55px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        return React.createElement(
	            "div",
	            { style: topStyle },
	            React.createElement(
	                "div",
	                { style: headStyle, className: "center-block" },
	                React.createElement(
	                    "a",
	                    { href: "#/sign/in", style: aStyle1, className: "dank-tag-chosen" },
	                    "登陆"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#/sign/up", style: aStyle2, className: "dank-tag-free" },
	                    "注册"
	                )
	            ),
	            React.createElement(FormBox, null)
	        );
	    }
	});

	var FormBox = React.createClass({
	    displayName: "FormBox",

	    usernameCheck: function usernameCheck() {
	        var element = this.refs.username;
	        var test = /^\d{11,}$/;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-display";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else if (!test.test(element.value)) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-display";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordCheck: function passwordCheck() {
	        var element = this.refs.password;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordErr1.className = "err-display";
	            this.refs.passwordErr2.className = "err-hidden";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordErr1.className = "err-hidden";
	            this.refs.passwordErr2.className = "err-hidden";
	            return true;
	        }
	    },
	    handleSubmit: function handleSubmit() {
	        var check1 = this.usernameCheck();
	        var check2 = this.passwordCheck();

	        if (check1 && check2) {
	            $.ajax({
	                url: "user/login",
	                contentType: 'application/json',
	                type: 'POST',
	                data: JSON.stringify({
	                    username: this.refs.username.value,
	                    password: this.refs.password.value
	                }),
	                success: function (data) {
	                    console.log(data);
	                    switch (data.code) {
	                        case -1:
	                            alert("数据库错误");
	                            break;
	                        case -2:
	                            var element = this.refs.username;
	                            element.parentNode.className = "dank-form-group";
	                            this.refs.usernameErr1.className = "err-hidden";
	                            this.refs.usernameErr2.className = "err-hidden";
	                            this.refs.usernameErr3.className = "err-display";
	                            break;
	                        case -3:
	                            var element = this.refs.password;
	                            element.parentNode.className = "dank-form-group";
	                            this.refs.passwordErr1.className = "err-hidden";
	                            this.refs.passwordErr2.className = "err-display";
	                            break;
	                        case 0:
	                            window.location.href = '/#/person/info';
	                            break;
	                        default:
	                            alert("未知错误");
	                            break;
	                    }
	                }.bind(this),
	                error: function (xhr, status, err) {
	                    console.error("ajax请求发起失败");
	                }.bind(this)
	            });
	        }
	    },
	    render: function render() {
	        var formStyle = {
	            width: "414px",
	            height: "420px",
	            padding: "40px"
	        };
	        var buttonStyle = {
	            marginTop: "60px"
	        };

	        return React.createElement(
	            "div",
	            { id: "signin", className: "dank-box-2 center-block", style: formStyle },
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "username" },
	                    "账号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr1" },
	                    "请输入用户名"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr2" },
	                    "请输入正确的手机号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr3" },
	                    "用户名不存在"
	                ),
	                React.createElement("input", { type: "text", placeholder: "用户名 - 手机号", ref: "username", onBlur: this.usernameCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr1" },
	                    "请输入密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr2" },
	                    "密码错误"
	                ),
	                React.createElement("input", { type: "password", placeholder: "密码 - 默认出生日期 如20160901", ref: "password", onBlur: this.passwordCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    _defineProperty({ className: "checkbox-inline" }, "className", "remember-me"),
	                    React.createElement("input", { type: "checkbox", id: "inlineCheckbox1", value: "option1", className: "checkbox" }),
	                    " 记住我"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#", className: "forget-password" },
	                    "忘记密码"
	                )
	            ),
	            React.createElement(
	                "button",
	                { onClick: this.handleSubmit, className: "dank-button btn-block", style: buttonStyle },
	                "登陆"
	            )
	        );
	    }
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Created by admin on 2016/7/24.
	 */
	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
	        var topStyle = {
	            paddingTop: "50px"
	        };
	        var headStyle = {
	            margin: "0px auto 34px auto",
	            width: "414px",
	            height: "60px",
	            textAlign: "center"
	        };
	        var aStyle1 = {
	            margin: "0px 55px 0px 44px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        var aStyle2 = {
	            margin: "0px 44px 0px 55px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        return React.createElement(
	            "div",
	            { style: topStyle },
	            React.createElement(
	                "div",
	                { style: headStyle, className: "center-block" },
	                React.createElement(
	                    "a",
	                    { href: "#/sign/in", style: aStyle1, className: "dank-tag-free" },
	                    "登陆"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#/sign/up", style: aStyle2, className: "dank-tag-chosen" },
	                    "注册"
	                )
	            ),
	            React.createElement(FormBox, null)
	        );
	    }
	});

	var FormBox = React.createClass({
	    displayName: "FormBox",

	    usernameCheck: function usernameCheck() {
	        var element = this.refs.username;
	        var test = /^\d{11,}$/;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-display";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else if (!test.test(element.value)) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-display";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordCheck: function passwordCheck() {
	        var element = this.refs.password;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordErr1.className = "err-display";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordErr1.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordConfirmCheck: function passwordConfirmCheck() {
	        var element = this.refs.passwordConfirm;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordConfirmErr1.className = "err-display";
	            this.refs.passwordConfirmErr2.className = "err-hidden";
	            return false;
	        } else if (element.value != this.refs.password.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordConfirmErr1.className = "err-hidden";
	            this.refs.passwordConfirmErr2.className = "err-display";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordConfirmErr1.className = "err-hidden";
	            this.refs.passwordConfirmErr2.className = "err-hidden";
	            return true;
	        }
	    },
	    handleSubmit: function handleSubmit() {
	        var check1 = this.usernameCheck();
	        var check2 = this.passwordCheck();
	        var check3 = this.passwordConfirmCheck();

	        if (check1 && check2 && check3) {
	            $.ajax({
	                url: "user/signup",
	                contentType: 'application/json',
	                type: 'POST',
	                data: JSON.stringify({
	                    username: this.refs.username.value,
	                    password: this.refs.password.value
	                }),
	                success: function (data) {
	                    console.log(data);
	                    switch (data.code) {
	                        case -4:
	                            var element = this.refs.username;
	                            element.parentNode.className = "dank-form-group";
	                            this.refs.usernameErr1.className = "err-hidden";
	                            this.refs.usernameErr2.className = "err-hidden";
	                            this.refs.usernameErr3.className = "err-display";
	                            break;
	                        case 0:
	                            window.location.href = '/#/person/info';
	                            break;
	                        default:
	                            alert(data.msg);
	                            break;
	                    }
	                }.bind(this),
	                error: function (xhr, status, err) {
	                    console.error("ajax请求发起失败");
	                }.bind(this)
	            });
	        }
	    },

	    render: function render() {
	        var formStyle = {
	            width: "414px",
	            height: "420px",
	            padding: "40px",
	            paddingTop: "20px"
	        };
	        var buttonStyle = {
	            marginTop: "0px"
	        };

	        return React.createElement(
	            "div",
	            { id: "signup", className: "dank-box-2 center-block", style: formStyle },
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "username" },
	                    "账号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr1" },
	                    "用户名不能为空"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr2" },
	                    "请输入正确的手机号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr3" },
	                    "用户名已存在"
	                ),
	                React.createElement("input", { type: "text", name: "username", placeholder: "请输入手机号", ref: "username", onBlur: this.usernameCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr1" },
	                    "密码不能为空"
	                ),
	                React.createElement("input", { type: "password", name: "password", placeholder: "请输入密码", ref: "password", onBlur: this.passwordCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "重复密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordConfirmErr1" },
	                    "请再次输入密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordConfirmErr2" },
	                    "密码不一致"
	                ),
	                React.createElement("input", { type: "password", placeholder: "请再次输入密码", ref: "passwordConfirm", onBlur: this.passwordConfirmCheck })
	            ),
	            React.createElement(
	                "button",
	                { onClick: this.handleSubmit, className: "dank-button btn-block", style: buttonStyle },
	                "注册"
	            )
	        );
	    }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Component = React.Component;

	var Header = __webpack_require__(68);

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        var containerStyle = {
	            height: "100%",
	            padding: 0,
	            backgroundColor: "#f57a6c"
	        };
	        var objectStyle = {
	            top: "60px",
	            bottom: "0px",
	            position: "absolute",
	            width: "100%"
	        };
	        return React.createElement(
	            'div',
	            { style: containerStyle },
	            React.createElement(Header, null),
	            React.createElement(
	                'div',
	                { className: 'container-fluid' },
	                React.createElement(
	                    'div',
	                    { className: 'row', style: objectStyle },
	                    React.createElement(
	                        'tabel',
	                        { className: 'vertical-middle-parent' },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                React.createElement(
	                                    'td',
	                                    { className: 'vertical-middle-child' },
	                                    React.createElement(
	                                        'div',
	                                        { className: 'col-xs-12 col-md-12' },
	                                        React.createElement(Box, { children: this.props.children })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Box = React.createClass({
	    displayName: 'Box',

	    render: function render() {
	        var objectStyle = {
	            width: "508px",
	            height: "618px"
	        };
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { className: 'dank-h1' },
	                'Welcome'
	            ),
	            React.createElement(
	                'div',
	                { className: 'dank-box-1 center-block', style: objectStyle },
	                this.props.children
	            )
	        );
	    }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Created by admin on 2016/7/24.
	 */
	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
	        var topStyle = {
	            paddingTop: "50px"
	        };
	        var headStyle = {
	            margin: "0px auto 34px auto",
	            width: "414px",
	            height: "60px",
	            textAlign: "center"
	        };
	        var aStyle1 = {
	            margin: "0px 55px 0px 44px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        var aStyle2 = {
	            margin: "0px 44px 0px 55px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        return React.createElement(
	            "div",
	            { style: topStyle },
	            React.createElement(
	                "div",
	                { style: headStyle, className: "center-block" },
	                React.createElement(
	                    "a",
	                    { href: "#/orgsign/in", style: aStyle1, className: "dank-tag-chosen" },
	                    "登陆"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#/orgsign/up", style: aStyle2, className: "dank-tag-free" },
	                    "注册"
	                )
	            ),
	            React.createElement(FormBox, null)
	        );
	    }
	});

	var FormBox = React.createClass({
	    displayName: "FormBox",

	    usernameCheck: function usernameCheck() {
	        var element = this.refs.username;
	        var test = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-display";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else if (!test.test(element.value)) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-display";
	            this.refs.usernameErr3.className = "err-hidden";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-hidden";
	            this.refs.usernameErr3.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordCheck: function passwordCheck() {
	        var element = this.refs.password;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordErr1.className = "err-display";
	            this.refs.passwordErr2.className = "err-hidden";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordErr1.className = "err-hidden";
	            this.refs.passwordErr2.className = "err-hidden";
	            return true;
	        }
	    },
	    handleSubmit: function handleSubmit() {
	        var check1 = this.usernameCheck;
	        var check2 = this.passwordCheck;

	        if (check1 && check2) {
	            $.ajax({
	                url: "/org/login",
	                contentType: 'application/json',
	                type: 'POST',
	                data: JSON.stringify({
	                    username: this.refs.username.value,
	                    password: this.refs.password.value
	                }),
	                success: function (data) {
	                    console.log(data);
	                    switch (data.code) {
	                        case -2:
	                            var element = this.refs.username;
	                            element.parentNode.className = "dank-form-group";
	                            this.refs.usernameErr1.className = "err-hidden";
	                            this.refs.usernameErr2.className = "err-hidden";
	                            this.refs.usernameErr3.className = "err-display";
	                            break;
	                        case -3:
	                            var element = this.refs.password;
	                            element.parentNode.className = "dank-form-group";
	                            this.refs.passwordErr1.className = "err-hidden";
	                            this.refs.passwordErr2.className = "err-display";
	                            break;
	                        case 0:
	                            alert("登陆成功");
	                            break;
	                        default:
	                            alert(msg);
	                            break;
	                    }
	                }.bind(this),
	                error: function (xhr, status, err) {
	                    console.error("ajax请求发起失败");
	                }.bind(this)
	            });
	        }
	    },
	    render: function render() {
	        var formStyle = {
	            width: "414px",
	            height: "420px",
	            padding: "40px"
	        };
	        var buttonStyle = {
	            marginTop: "60px"
	        };

	        return React.createElement(
	            "form",
	            { id: "orgSignin", className: "dank-box-2 center-block", style: formStyle },
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "username" },
	                    "账号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr1" },
	                    "请输入用户名"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr2" },
	                    "请输入正确的邮箱"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr3" },
	                    "用户名不存在"
	                ),
	                React.createElement("input", { type: "text", placeholder: "请输入邮箱地址", ref: "username", onBlur: this.usernameCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr1" },
	                    "请输入密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr2" },
	                    "用户名或密码有误"
	                ),
	                React.createElement("input", { type: "password", placeholder: "请输入密码", ref: "password", onBlur: this.passwordCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    _defineProperty({ className: "checkbox-inline" }, "className", "remember-me"),
	                    React.createElement("input", { type: "checkbox", id: "inlineCheckbox1", value: "option1", className: "checkbox" }),
	                    " 记住我"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#", className: "forget-password" },
	                    "忘记密码"
	                )
	            ),
	            React.createElement(
	                "button",
	                { onClick: this.handleSubmit, className: "dank-button btn-block", style: buttonStyle },
	                "登陆"
	            )
	        );
	    }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Created by admin on 2016/7/24.
	 */
	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
	        var topStyle = {
	            paddingTop: "50px"
	        };
	        var headStyle = {
	            margin: "0px auto 34px auto",
	            width: "414px",
	            height: "60px",
	            textAlign: "center"
	        };
	        var aStyle1 = {
	            margin: "0px 55px 0px 44px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        var aStyle2 = {
	            margin: "0px 44px 0px 55px",
	            borderRadius: "8px",
	            width: "108px",
	            height: "60px",
	            lineHeight: "60px",
	            fontSize: "30px"
	        };
	        return React.createElement(
	            "div",
	            { style: topStyle },
	            React.createElement(
	                "div",
	                { style: headStyle, className: "center-block" },
	                React.createElement(
	                    "a",
	                    { href: "#/orgsign/in", style: aStyle1, className: "dank-tag-free" },
	                    "登陆"
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#/orgsign/up", style: aStyle2, className: "dank-tag-chosen" },
	                    "注册"
	                )
	            ),
	            React.createElement(FormBox, null)
	        );
	    }
	});

	var FormBox = React.createClass({
	    displayName: "FormBox",

	    usernameCheck: function usernameCheck() {
	        var element = this.refs.username;
	        var test = /^\d{11,}$/;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-display";
	            this.refs.usernameErr2.className = "err-hidden";
	            return false;
	        } else if (!test.test(element.value)) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-display";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.usernameErr1.className = "err-hidden";
	            this.refs.usernameErr2.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordCheck: function passwordCheck() {
	        var element = this.refs.password;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordErr1.className = "err-display";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordErr1.className = "err-hidden";
	            return true;
	        }
	    },
	    passwordConfirmCheck: function passwordConfirmCheck() {
	        var element = this.refs.passwordConfirm;
	        if (!element.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordConfirmErr1.className = "err-display";
	            this.refs.passwordConfirmErr2.className = "err-hidden";
	            return false;
	        } else if (element.value != this.refs.password.value) {
	            element.parentNode.className = "dank-form-group-err";
	            this.refs.passwordConfirmErr1.className = "err-hidden";
	            this.refs.passwordConfirmErr2.className = "err-display";
	            return false;
	        } else {
	            element.parentNode.className = "dank-form-group";
	            this.refs.passwordConfirmErr1.className = "err-hidden";
	            this.refspasswordConfirmErr2.className = "err-hidden";
	            return true;
	        }
	    },
	    handleSubmit: function handleSubmit() {
	        var check1 = this.usernameCheck;
	        var check2 = this.passwordCheck;
	        var check3 = this.passwordConfirmCheck;

	        if (check1 && check2 && check3) {
	            $.ajax({
	                url: "/signup",
	                dataType: 'json',
	                type: 'POST',
	                data: $("#signup").serialize(),
	                success: function (data) {
	                    console.log(data);
	                }.bind(this),
	                error: function (xhr, status, err) {
	                    console.error("ajax请求发起失败");
	                }.bind(this)
	            });
	        }
	    },

	    render: function render() {
	        var formStyle = {
	            width: "414px",
	            height: "420px",
	            padding: "40px",
	            paddingTop: "20px"
	        };
	        var buttonStyle = {
	            marginTop: "0px"
	        };

	        return React.createElement(
	            "form",
	            { id: "signup", onSubmit: this.handleSubmit, className: "dank-box-2 center-block", style: formStyle },
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "username" },
	                    "账号"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr1" },
	                    "用户名不能为空"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "usernameErr2" },
	                    "请输入正确的手机号"
	                ),
	                React.createElement("input", { type: "text", name: "username", placeholder: "请输入手机号", ref: "username", onBlur: this.usernameCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordErr1" },
	                    "密码不能为空"
	                ),
	                React.createElement("input", { type: "password", name: "password", placeholder: "请输入密码", ref: "password", onBlur: this.passwordCheck })
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-form-group" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "password" },
	                    "重复密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordConfirmErr1" },
	                    "请再次输入密码"
	                ),
	                React.createElement(
	                    "small",
	                    { className: "err-hidden", ref: "passwordConfirmErr2" },
	                    "密码不一致"
	                ),
	                React.createElement("input", { type: "password", placeholder: "请再次输入密码", ref: "passwordConfirm", onBlur: this.passwordConfirmCheck })
	            ),
	            React.createElement(
	                "button",
	                { type: "submit", className: "dank-button btn-block", style: buttonStyle },
	                "注册"
	            )
	        );
	    }
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Component = React.Component;

	var Header = __webpack_require__(75);

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        var globalStyle = {
	            background: "#EFEFEF",
	            height: "100%",
	            padding: 0
	        };
	        return React.createElement(
	            'div',
	            { style: globalStyle },
	            React.createElement(Header, null),
	            this.props.children
	        );
	    }
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
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
	            background: "#f57a6c",
	            width: "215px",
	            height: "60px",
	            lineHeight: "60px",
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
	        return React.createElement(
	            "div",
	            { className: "dank-header" },
	            React.createElement(
	                "div",
	                { style: leftPosition },
	                React.createElement(
	                    "big",
	                    { style: titleStyle },
	                    "WELCOME"
	                )
	            ),
	            React.createElement(
	                "div",
	                { style: leftPosition2 },
	                React.createElement(
	                    "a",
	                    { className: "dank-button-header", style: leftItemPosition, href: "#" },
	                    "首页"
	                ),
	                React.createElement(
	                    "a",
	                    { className: "dank-button-header", style: leftItemPosition, href: "#" },
	                    "社团目录"
	                )
	            ),
	            React.createElement(
	                "div",
	                { style: rightPosition },
	                React.createElement(
	                    "a",
	                    { className: "dank-a", href: "#", style: rightItemPosition },
	                    "Hi,XXX"
	                ),
	                React.createElement(
	                    "a",
	                    { className: "dank-a", href: "#", style: rightItemPosition },
	                    "我的报名"
	                ),
	                "|",
	                React.createElement(
	                    "a",
	                    { className: "dank-a", href: "/#/person/info", style: rightItemPosition },
	                    "个人资料"
	                ),
	                "|",
	                React.createElement(
	                    "a",
	                    { className: "dank-a", href: "#", style: rightItemPosition },
	                    "注销"
	                )
	            )
	        );
	    }
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",


	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                { className: "dank-slider" },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "big",
	                        { className: "dank-slider-active" },
	                        React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" }),
	                        React.createElement(
	                            "b",
	                            null,
	                            " 个人信息"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#" },
	                        React.createElement("i", { className: "fa fa-file-text", "aria-hidden": "true" }),
	                        React.createElement(
	                            "b",
	                            null,
	                            " 我的报名"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-slider-right" },
	                React.createElement(InfoBox, null)
	            )
	        );
	    }
	});

	var InfoBox = React.createClass({
	    displayName: "InfoBox",

	    getInitialState: function getInitialState() {
	        return {
	            _id: "",
	            username: "",
	            address: "",
	            birth: "",
	            email: "",
	            name: "",
	            nation: "",
	            origin: "",
	            politicalStatus: "",
	            qq: "",
	            schoolID: "",
	            sex: "",
	            telnumber: "",
	            telshort: "",
	            major: ""
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        $.ajax({
	            url: "/user/profile",
	            contentType: 'application/json',
	            type: 'GET',
	            success: function (data) {
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.setState({
	                                _id: data.body.user._id,
	                                username: data.body.user.username,
	                                address: data.body.user.baseinfo.address,
	                                birth: data.body.user.baseinfo.birth,
	                                email: data.body.user.baseinfo.email,
	                                name: data.body.user.baseinfo.name,
	                                nation: data.body.user.baseinfo.nation,
	                                origin: data.body.user.baseinfo.origin,
	                                politicalStatus: data.body.user.baseinfo.politicalStatus,
	                                qq: data.body.user.baseinfo.qq,
	                                schoolID: data.body.user.baseinfo.schoolID,
	                                sex: data.body.user.baseinfo.sex,
	                                telnumber: data.body.user.baseinfo.telnumber,
	                                telshort: data.body.user.baseinfo.telshort,
	                                major: data.body.user.baseinfo.major
	                            });
	                        }
	                        break;
	                    default:
	                        alert(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "container-fluid" },
	            React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    { className: "col-md-12 c4" },
	                    React.createElement(
	                        "div",
	                        { className: "container-fluid" },
	                        React.createElement(
	                            "div",
	                            { className: "dank-d2" },
	                            React.createElement(
	                                "div",
	                                { className: "row" },
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-8 col-md-offset-1 text-left" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "btn-group btn-group-lg d3" },
	                                        React.createElement(
	                                            "a",
	                                            { className: "btn dank-a5", href: "/#/person/info/change" },
	                                            React.createElement(
	                                                "b",
	                                                { className: "b1" },
	                                                "修改"
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "a",
	                                            _defineProperty({ className: "btn dank-a6", href: "#" }, "href", "#"),
	                                            React.createElement(
	                                                "b",
	                                                { className: "b1" },
	                                                "从教务网导入"
	                                            )
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-1 col-md-offset-1 text-right" },
	                                    React.createElement("img", { src: "img/label.png", className: "dank-i1" })
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "row" },
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-9 c4" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "container-fluid" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "col-md-12" },
	                                                React.createElement(
	                                                    "table",
	                                                    { className: "dank-t1" },
	                                                    React.createElement(
	                                                        "tbody",
	                                                        null,
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "用户名"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.username
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "微信号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "未绑定"
	                                                                )
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "密码"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "修改"
	                                                                )
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "col-md-12" },
	                                                React.createElement(
	                                                    "table",
	                                                    { className: "dank-t1" },
	                                                    React.createElement(
	                                                        "tbody",
	                                                        null,
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "姓名"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.name
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "性别"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.sex
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "籍贯"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.origin
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "民族"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.nation
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "学号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.schoolID
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "政治面貌"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.politicalStatus
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "手机长号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.telnumber
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "手机短号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.telshort
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "邮箱"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.email
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "QQ"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.qq
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "专业"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.major
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "寝室地址"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.address
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "生日"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.birth
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-3 text-center c4" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "container-fluid" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement("img", { src: "img/male.png", className: "i2" })
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "a",
	                                                { className: "a7", href: "#" },
	                                                React.createElement(
	                                                    "b",
	                                                    null,
	                                                    "修改头像"
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: "exports",


	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "div",
	                { className: "dank-slider" },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "big",
	                        { className: "dank-slider-active" },
	                        React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" }),
	                        React.createElement(
	                            "b",
	                            null,
	                            " 个人信息"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#" },
	                        React.createElement("i", { className: "fa fa-file-text", "aria-hidden": "true" }),
	                        React.createElement(
	                            "b",
	                            null,
	                            " 我的报名"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "dank-slider-right" },
	                React.createElement(InfoBox, null)
	            )
	        );
	    }
	});

	var InfoBox = React.createClass({
	    displayName: "InfoBox",

	    getInitialState: function getInitialState() {
	        //console.log("ok");
	        return {
	            _id: "",
	            username: "",
	            address: "",
	            birth: "",
	            email: "",
	            name: "",
	            nation: "",
	            origin: "",
	            politicalStatus: "",
	            qq: "",
	            schoolID: "",
	            sex: "",
	            telnumber: "",
	            telshort: "",
	            major: ""
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        console.log('abc');
	        $.ajax({
	            url: "/user/profile",
	            contentType: 'application/json',
	            type: 'GET',
	            success: function (data) {
	                console.log(data.code);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            console.log(data.body.user);
	                            this.setState({
	                                _id: data.body.user._id,
	                                username: data.body.user.username,
	                                address: data.body.user.baseinfo.address,
	                                birth: data.body.user.baseinfo.birth,
	                                email: data.body.user.baseinfo.email,
	                                name: data.body.user.baseinfo.name,
	                                nation: data.body.user.baseinfo.nation,
	                                origin: data.body.user.baseinfo.origin,
	                                politicalStatus: data.body.user.baseinfo.politicalStatus,
	                                qq: data.body.user.baseinfo.qq,
	                                schoolID: data.body.user.baseinfo.schoolID,
	                                sex: data.body.user.baseinfo.sex,
	                                telnumber: data.body.user.baseinfo.telnumber,
	                                telshort: data.body.user.baseinfo.telshort,
	                                major: data.body.user.baseinfo.major
	                            });
	                            console.log(this.state.data);
	                        }
	                        break;
	                    default:
	                        alert(data.msg);
	                        //this.setState({data:empty});
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    submitHandler: function submitHandler() {
	        $.ajax({
	            url: "user/profile",
	            contentType: 'application/json',
	            type: 'POST',
	            data: JSON.stringify({
	                address: this.refs.address.value,
	                birth: this.refs.birth.value,
	                email: this.refs.email.value,
	                name: this.refs.name.value,
	                nation: this.refs.nation.value,
	                origin: this.refs.origin.value,
	                politicalStatus: this.refs.politicalStatus.value,
	                qq: this.refs.qq.value,
	                schoolID: this.refs.schoolID.value,
	                sex: this.refs.sex.value,
	                telnumber: this.refs.telnumber.value,
	                telshort: this.refs.telshort.value
	            }),
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        window.location.href = '/#/person/info';
	                        break;
	                    default:
	                        alert(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    handleChange: function handleChange(event) {
	        console.log(event.target);
	        this.setState(_defineProperty({}, event.target.getAttribute('name'), event.target.value));
	    },
	    render: function render() {
	        /*console.log(this.state.data);
	        var data = this.state.data;
	        var baseinfo = data.baseinfo;*/

	        return React.createElement(
	            "div",
	            { className: "container-fluid" },
	            React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    { className: "col-md-12 c4" },
	                    React.createElement(
	                        "div",
	                        { className: "container-fluid" },
	                        React.createElement(
	                            "div",
	                            { className: "dank-d2" },
	                            React.createElement(
	                                "div",
	                                { className: "row" },
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-8 col-md-offset-1 text-left" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "btn-group btn-group-lg d3" },
	                                        React.createElement(
	                                            "a",
	                                            { className: "btn dank-a5", onClick: this.submitHandler },
	                                            React.createElement(
	                                                "b",
	                                                { className: "b1" },
	                                                "保存"
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "a",
	                                            _defineProperty({ className: "btn dank-a6", href: "#" }, "href", "#"),
	                                            React.createElement(
	                                                "b",
	                                                { className: "b1" },
	                                                "从教务网导入"
	                                            )
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-1 col-md-offset-1 text-right" },
	                                    React.createElement("img", { src: "img/label.png", className: "dank-i1" })
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "row" },
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-9 c4" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "container-fluid" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "col-md-12" },
	                                                React.createElement(
	                                                    "table",
	                                                    { className: "dank-t1" },
	                                                    React.createElement(
	                                                        "tbody",
	                                                        null,
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "用户名"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                this.state.username
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "微信号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "未绑定"
	                                                                )
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "密码"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement(
	                                                                    "a",
	                                                                    { href: "#" },
	                                                                    "修改"
	                                                                )
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "div",
	                                                { className: "col-md-12" },
	                                                React.createElement(
	                                                    "table",
	                                                    { className: "dank-t1" },
	                                                    React.createElement(
	                                                        "tbody",
	                                                        null,
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "姓名"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "name", name: "name", className: "dank-input", value: this.state.name ? this.state.name : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "性别"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "sex", name: "sex", className: "dank-input", value: this.state.sex ? this.state.sex : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "籍贯"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "origin", name: "origin", className: "dank-input", value: this.state.origin ? this.state.origin : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "民族"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "nation", name: "nation", className: "dank-input", value: this.state.nation ? this.state.nation : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "学号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "schoolID", name: "schoolID", className: "dank-input", value: this.state.schoolID ? this.state.schoolID : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "政治面貌"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "politicalStatus", name: "politicalStatus", className: "dank-input", value: this.state.politicalStatus ? this.state.politicalStatus : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "手机长号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "telnumber", name: "telnumber", className: "dank-input", value: this.state.telnumber ? this.state.telnumber : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "手机短号"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "telshort", name: "telshort", className: "dank-input", value: this.state.telshort ? this.state.telshort : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "邮箱"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "email", name: "email", className: "dank-input", value: this.state.email ? this.state.email : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "QQ"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "qq", name: "qq", className: "dank-input", value: this.state.qq ? this.state.qq : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "专业"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "major", name: "major", className: "dank-input", value: this.state.major ? this.state.major : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "寝室地址"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "address", name: "address", className: "dank-input", value: this.state.address ? this.state.address : '', onChange: this.handleChange })
	                                                            )
	                                                        ),
	                                                        React.createElement(
	                                                            "tr",
	                                                            null,
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-title" },
	                                                                "生日"
	                                                            ),
	                                                            React.createElement(
	                                                                "td",
	                                                                { className: "td-content" },
	                                                                React.createElement("input", { type: "text", ref: "birth", name: "birth", className: "dank-input", value: this.state.birth ? this.state.birth : '', onChange: this.handleChange })
	                                                            ),
	                                                            React.createElement("td", { className: "td-title" }),
	                                                            React.createElement("td", { className: "td-content" })
	                                                        )
	                                                    )
	                                                )
	                                            )
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "col-md-3 text-center c4" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "container-fluid" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement("img", { src: "img/male.png", className: "i2" })
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "row" },
	                                            React.createElement(
	                                                "a",
	                                                { className: "a7", href: "#" },
	                                                React.createElement(
	                                                    "b",
	                                                    null,
	                                                    "修改头像"
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Link = __webpack_require__(3).Link;

	var Header = __webpack_require__(79);

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(Header, null),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(Slider, null),
	                React.createElement(
	                    'div',
	                    { className: 'dank-slider-right' },
	                    this.props.children
	                )
	            )
	        );
	    }
	});

	var Slider = React.createClass({
	    displayName: 'Slider',

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'dank-slider-org' },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Link,
	                    { to: '/back/manage', activeClassName: 'dank-slider-active' },
	                    React.createElement('i', { className: 'fa fa-lg fa-fw fa-file-text-o', 'aria-hidden': 'true' }),
	                    React.createElement(
	                        'b',
	                        null,
	                        '报名表管理'
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Link,
	                    { to: '/back/dispatcher', activeClassName: 'dank-slider-active' },
	                    React.createElement('i', { className: 'fa fa-lg fa-fw fa-calendar', 'aria-hidden': 'true' }),
	                    React.createElement(
	                        'b',
	                        null,
	                        '面试调度'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        ' >'
	                    )
	                ),
	                React.createElement(
	                    'ul',
	                    { id: 'dispatcher-menu' },
	                    React.createElement(
	                        Link,
	                        { to: '/back/dispatcher/time', activeClassName: 'active' },
	                        React.createElement(
	                            'li',
	                            null,
	                            React.createElement('i', { className: 'fa fa-angle-right' }),
	                            '面试场次安排'
	                        )
	                    ),
	                    React.createElement(
	                        Link,
	                        { to: '/back/dispatcher/status', activeClassName: 'active' },
	                        React.createElement(
	                            'li',
	                            null,
	                            React.createElement('i', { className: 'fa fa-angle-right' }),
	                            '面试状态查看/管理'
	                        )
	                    ),
	                    React.createElement(
	                        Link,
	                        { to: '/back/dispatcher/message', activeClassName: 'active' },
	                        React.createElement(
	                            'li',
	                            null,
	                            React.createElement('i', { className: 'fa fa-angle-right' }),
	                            '消息发送'
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Link,
	                    { to: '/back/transhbin', activeClassName: 'dank-slider-active' },
	                    React.createElement('i', { className: 'fa fa-lg fa-fw fa-trash', 'aria-hidden': 'true' }),
	                    React.createElement(
	                        'b',
	                        null,
	                        '回收站'
	                    ),
	                    React.createElement(
	                        'p',
	                        null,
	                        ' >'
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: 'exports',

	    getInitialState: function getInitialState() {
	        return {
	            name: ''
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        $.ajax({
	            url: "/org/session",
	            contentType: 'application/json',
	            type: 'GET',
	            success: function (data) {
	                this.setState({ name: data.body.org.name });
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    logout: function logout() {
	        $.ajax({
	            url: "/org/logout",
	            contentType: 'application/json',
	            type: 'GET',
	            success: function (data) {
	                window.location.href = '/#/orgsign/in';
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    render: function render() {
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
	            background: "#f57a6c",
	            width: "215px",
	            height: "60px",
	            lineHeight: "60px",
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
	        return React.createElement(
	            'div',
	            { className: 'dank-header' },
	            React.createElement(
	                'div',
	                { style: leftPosition },
	                React.createElement(
	                    'big',
	                    { style: titleStyle },
	                    'WELCOME'
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: leftPosition2 },
	                React.createElement(
	                    'a',
	                    { className: 'dank-button-header', style: leftItemPosition, href: '#/sign/in' },
	                    '首页'
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'dank-button-header', style: leftItemPosition, onClick: null },
	                    '社团目录'
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: rightPosition },
	                React.createElement(
	                    'small',
	                    { className: 'dank-small', onClick: null, style: rightItemPosition },
	                    '辛苦了，',
	                    this.state.name
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'dank-a', onClick: this.logout, style: rightItemPosition },
	                    '注销'
	                )
	            )
	        );
	    }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	    displayName: "exports",

	    getInitialState: function getInitialState() {
	        return { infoComplete: true };
	    },
	    checkInfo: function checkInfo() {
	        this.setState({ infoComplete: !this.state.infoComplete });
	    },
	    render: function render() {
	        var section1 = this.state.infoComplete == false ? null : React.createElement(InterviewCard, null);
	        return React.createElement(
	            "div",
	            { className: "container-fluid" },
	            React.createElement(
	                "div",
	                { className: "panel", id: "interview-select-panel" },
	                React.createElement(
	                    "div",
	                    { className: "panel-heading" },
	                    React.createElement(
	                        "h3",
	                        { className: "panel-title" },
	                        "请完善您的面试场次安排信息"
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "panel-body" },
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4" },
	                            React.createElement(
	                                "div",
	                                { className: "dropdown" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-title" },
	                                    "蛋壳工作室纳新",
	                                    React.createElement("i", { className: "fa fa-caret-down" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-body" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2016春季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015秋季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015春季纳新"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4" },
	                            React.createElement(
	                                "a",
	                                { className: "thumbnail", onClick: this.checkInfo },
	                                '>>第一轮面试<<'
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-4" },
	                            React.createElement(
	                                "div",
	                                { className: "dropdown" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-title" },
	                                    "部门选择",
	                                    React.createElement("i", { className: "fa fa-caret-down" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-body" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "所有部门（混面）"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "产品"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "运营"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "推广"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "前端"
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    section1
	                )
	            )
	        );
	    }
	});

	var InterviewCard = React.createClass({
	    displayName: "InterviewCard",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "container-fluid", id: "interview-info" },
	            React.createElement(
	                "div",
	                { className: "interview-date" },
	                "10月1号"
	            ),
	            React.createElement(
	                "div",
	                { className: "interview-date", id: "add-date" },
	                "添加日期"
	            ),
	            React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    { className: "col-md-6" },
	                    React.createElement(
	                        "div",
	                        { className: "interview-card" },
	                        React.createElement(
	                            "div",
	                            { className: "card-heading" },
	                            React.createElement(
	                                "p",
	                                null,
	                                "10月1日面试场次A"
	                            ),
	                            React.createElement("i", { className: "fa fa-times" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "面试地点",
	                            React.createElement("input", { type: "text" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "此场点安排的场数为",
	                            React.createElement("input", { type: "text" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "每场次面试时间为",
	                            React.createElement(
	                                "p",
	                                null,
	                                "分钟"
	                            ),
	                            React.createElement("input", { type: "text" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "每场次面试休息时间",
	                            React.createElement(
	                                "p",
	                                null,
	                                "分钟"
	                            ),
	                            React.createElement("input", { type: "text" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "该场地面试开始于",
	                            React.createElement("input", { type: "text" }),
	                            React.createElement(
	                                "p",
	                                null,
	                                ":"
	                            ),
	                            React.createElement("input", { type: "text" })
	                        ),
	                        React.createElement(
	                            "label",
	                            null,
	                            "面试将结束于",
	                            React.createElement("input", { type: "text" }),
	                            React.createElement(
	                                "p",
	                                null,
	                                ":"
	                            ),
	                            React.createElement("input", { type: "text" })
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-md-6" },
	                    React.createElement(
	                        "div",
	                        { className: "interview-card", id: "add-interview-card" },
	                        React.createElement("i", { className: "fa fa-3x fa-plus" })
	                    )
	                )
	            ),
	            React.createElement(
	                "button",
	                { className: "btn", id: "gen-btn" },
	                "生成"
	            ),
	            React.createElement(
	                "button",
	                { className: "btn", id: "cancle-btn" },
	                "取消"
	            )
	        );
	    }
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	    displayName: "exports",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "container-fluid" },
	            React.createElement(
	                "div",
	                { className: "panel", id: "interview-status-panel" },
	                React.createElement(
	                    "div",
	                    { className: "panel-heading" },
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "div",
	                                { className: "dropdown" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-title" },
	                                    "蛋壳工作室纳新",
	                                    React.createElement("i", { className: "fa fa-caret-down" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-body" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2016春季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015秋季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015春季纳新"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "div",
	                                { className: "dropdown" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-title" },
	                                    "第一轮面试",
	                                    React.createElement("i", { className: "fa fa-caret-down" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-body" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2016春季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015秋季纳新"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "蛋壳工作室2015春季纳新"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "div",
	                                { className: "dropdown" },
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-title" },
	                                    "部门选择",
	                                    React.createElement("i", { className: "fa fa-caret-down" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "dp-body" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "所有部门（混面）"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "产品"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "运营"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "推广"
	                                    ),
	                                    React.createElement(
	                                        "label",
	                                        { className: "radio" },
	                                        React.createElement("input", { type: "radio", name: "radio" }),
	                                        "前端"
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "button",
	                                { className: "btn" },
	                                "面试安排信息导出"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "button",
	                                { className: "btn" },
	                                "本轮面试状态更新"
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement(
	                                "div",
	                                { className: "input-group search-bar" },
	                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Search" }),
	                                React.createElement(
	                                    "span",
	                                    { className: "input-group-btn" },
	                                    React.createElement(
	                                        "button",
	                                        { className: "btn", type: "button" },
	                                        React.createElement("i", { className: "fa fa-search" })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "panel-body" },
	                    React.createElement(
	                        "div",
	                        { className: "container-fluid", id: "interview-status" },
	                        React.createElement(
	                            "div",
	                            { className: "interview-date" },
	                            "10月1号"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "interview-date", id: "add-date" },
	                            "添加日期"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "row" },
	                            React.createElement(
	                                "div",
	                                { className: "panel" },
	                                React.createElement(
	                                    "div",
	                                    { className: "panel-heading row" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "A1"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "19:20 - 20:00"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "地点：东1B-203"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "本场面试人数：3人"
	                                    )
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "panel-body" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "row" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-1" },
	                                            "Frank"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-1" },
	                                            "男"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "12344567788909"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "产品部门"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "表刷通过"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "修改场次 删除"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "一轮面试"
	                                        )
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "row" },
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-1" },
	                                            "Frank"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-1" },
	                                            "男"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "12344567788909"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "产品部门"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "表刷通过"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "修改场次 删除"
	                                        ),
	                                        React.createElement(
	                                            "div",
	                                            { className: "col-md-2" },
	                                            "一轮面试"
	                                        )
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { className: "panel" },
	                                React.createElement(
	                                    "div",
	                                    { className: "panel-heading row" },
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "A1"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "19:20 - 20:00"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "地点：东1B-203"
	                                    ),
	                                    React.createElement(
	                                        "div",
	                                        { className: "col-md-3 col-lg-3 col-sm-3 col-xs-3" },
	                                        "本场面试人数：3人"
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                "div",
	                                { id: "add-interview" },
	                                React.createElement("i", { className: "fa fa-plus" }),
	                                "添加本日面试场次"
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	    displayName: "exports",

	    getInitialState: function getInitialState() {
	        return { add: false };
	    },
	    addMessage: function addMessage() {
	        this.setState({ add: true });
	    },
	    checkMessage: function checkMessage() {
	        this.setState({ add: false });
	    },
	    render: function render() {
	        var section1, section2, section3, class1, class2;
	        if (this.state.add == false) {
	            section1 = React.createElement(SendedMessage, null), section2 = null, section3 = React.createElement(ReplyMessage, null);
	            class1 = "", class2 = " active";
	        } else {
	            section1 = React.createElement(NewMessageInfoSelect, null), section2 = React.createElement(NewMessageEdit, null), section3 = null;
	            class1 = " active", class2 = "";
	        }
	        return React.createElement(
	            "div",
	            { className: "container-fluid" },
	            React.createElement(
	                "div",
	                { className: "col-md-12" },
	                React.createElement(
	                    "div",
	                    { className: "content" },
	                    React.createElement(
	                        "h1",
	                        null,
	                        "群发消息"
	                    ),
	                    React.createElement(
	                        "div",
	                        { id: "message-fun" },
	                        React.createElement(
	                            "button",
	                            { className: "btn" + class1, onClick: this.addMessage },
	                            "新建群发消息"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" + class2, onClick: this.checkMessage },
	                            "已发送"
	                        )
	                    ),
	                    section1,
	                    section2
	                )
	            ),
	            section3
	        );
	    }
	});

	var SendedMessage = React.createClass({
	    displayName: "SendedMessage",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row", id: "sended-message" },
	            React.createElement(
	                "div",
	                { className: "col-md-3" },
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "蛋壳工作室秋季纳新",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "dp-body" },
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2016春季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015秋季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015春季纳新"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "所有部门",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "dp-body" },
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2016春季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015秋季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015春季纳新"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "一轮面试",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "dp-body" },
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2016春季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015秋季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015春季纳新"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-md-6" },
	                React.createElement(
	                    "p",
	                    null,
	                    "balabala..."
	                )
	            ),
	            React.createElement("div", { className: "col-md-3" })
	        );
	    }
	});

	var ReplyMessage = React.createClass({
	    displayName: "ReplyMessage",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "col-md-12" },
	            React.createElement(
	                "div",
	                { className: "content" },
	                React.createElement(
	                    "h1",
	                    null,
	                    "回复详情"
	                ),
	                React.createElement(
	                    "div",
	                    { id: "reply-fun" },
	                    React.createElement(
	                        "button",
	                        { className: "btn order" },
	                        "面试场次",
	                        React.createElement("i", { className: "fa fa-lg fa-caret-up" }),
	                        React.createElement("i", { className: "fa fa-lg fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "button",
	                        { className: "btn order" },
	                        "状态",
	                        React.createElement("i", { className: "fa fa-lg fa-caret-up" }),
	                        React.createElement("i", { className: "fa fa-lg fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "col-md-2" },
	                        React.createElement(
	                            "div",
	                            { className: "input-group search-bar" },
	                            React.createElement("input", { type: "text", className: "form-control", placeholder: "Search" }),
	                            React.createElement(
	                                "span",
	                                { className: "input-group-btn" },
	                                React.createElement(
	                                    "button",
	                                    { className: "btn", type: "button" },
	                                    React.createElement("i", { className: "fa fa-search" })
	                                )
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { id: "reply-table" },
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-1" },
	                            "Frank"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-1" },
	                            "男"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "12344567788909"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "产品部门"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "表刷通过"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "修改场次 删除"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "一轮面试"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-1" },
	                            "Frank"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-1" },
	                            "男"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "12344567788909"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "产品部门"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "表刷通过"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "修改场次 删除"
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            "一轮面试"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "page-nav" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        "首页"
	                    ),
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        "上一页"
	                    ),
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        "下一页"
	                    ),
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        "尾页"
	                    )
	                )
	            )
	        );
	    }
	});

	var NewMessageInfoSelect = React.createClass({
	    displayName: "NewMessageInfoSelect",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row", id: "message-info-select" },
	            React.createElement(
	                "div",
	                { className: "col-md-4" },
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "蛋壳工作室秋季纳新",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "dp-body" },
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2016春季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015秋季纳新"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "蛋壳工作室2015春季纳新"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-md-8" },
	                "群发对象：",
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "所有部门",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "dp-body" },
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "所有部门（混面）"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "产品"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "运营"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "推广"
	                        ),
	                        React.createElement(
	                            "label",
	                            { className: "radio" },
	                            React.createElement("input", { type: "radio", name: "radio" }),
	                            "前端"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "dropdown" },
	                    React.createElement(
	                        "div",
	                        { className: "dp-title" },
	                        "一轮面试",
	                        React.createElement("i", { className: "fa fa-caret-down" })
	                    ),
	                    React.createElement("div", { className: "dp-body" })
	                ),
	                React.createElement(
	                    "button",
	                    { className: "btn" },
	                    "通过者"
	                ),
	                React.createElement(
	                    "button",
	                    { className: "btn" },
	                    "未通过者"
	                )
	            )
	        );
	    }
	});

	var NewMessageEdit = React.createClass({
	    displayName: "NewMessageEdit",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row", id: "message-edit" },
	            React.createElement(
	                "div",
	                { className: "col-md-6" },
	                React.createElement(
	                    "div",
	                    { className: "content highlight" },
	                    React.createElement(
	                        "h1",
	                        null,
	                        "短信编辑"
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "姓名"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "部门"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "时间"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "时长"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "地点"
	                        ),
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "回复确认"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement("textarea", { type: "text", placeholder: "这是要造个编辑器吗0 0" })
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-md-6" },
	                React.createElement(
	                    "div",
	                    { className: "content highlight" },
	                    React.createElement(
	                        "h1",
	                        null,
	                        "短信预览"
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            "button",
	                            { className: "btn" },
	                            "确认发送"
	                        ),
	                        "您还有500条短信余量"
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement("textarea", { type: "text", placeholder: "这是要造个编辑器吗0 0" })
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by admin on 2016/7/25.
	 */
	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        return React.createElement(Content, null);
	    }
	});

	var Content = React.createClass({
	    displayName: 'Content',

	    getInitialState: function getInitialState() {
	        return {
	            initial: 1,
	            nowEventID: '',
	            events: [{ eventID: '', name: '', ym: '' }]
	        };
	    },
	    bottomUp: function bottomUp(array) {
	        var stack = [];
	        var result = [];
	        for (var i = 0; i < array.length; i++) {
	            stack.push(array[i]);
	        }
	        for (var j = 0; j < array.length; j++) {
	            result.push(stack.pop());
	        }
	        return result;
	    },
	    componentDidMount: function componentDidMount() {
	        $.ajax({
	            url: "/event",
	            contentType: 'application/json',
	            type: 'GET',
	            success: function (data) {
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            var events = this.bottomUp(data.body.events);
	                            this.setState({ events: events });
	                            if (this.state.initial) {
	                                this.setState({ nowEventID: events[0].eventID, initial: 0 });
	                            }
	                        }
	                        break;
	                    default:
	                        alert(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    eventChange: function eventChange(eventID) {
	        this.setState({ nowEventID: eventID });
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'container-fluid' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-4 col-sm-4' },
	                    React.createElement(
	                        'div',
	                        { className: 'event' },
	                        React.createElement(Event, { eventID: this.state.nowEventID, events: this.state.events, eventChange: this.eventChange })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'col-md-8 col-sm-8' },
	                    this.state.nowEventID != '' ? React.createElement(Form, { eventID: this.state.nowEventID }) : null
	                )
	            )
	        );
	    }
	});

	var Event = React.createClass({
	    displayName: 'Event',


	    render: function render() {
	        var overflow = {
	            overflow: "hidden"
	        };
	        var eventNodes = this.props.events.map(function (eventItem) {
	            var className = eventItem.eventID == this.props.eventID ? "row dank-temp-table-active" : "row dank-temp-table";
	            var clickEvent = eventItem.eventID == this.props.eventID ? null : function () {
	                this.props.eventChange(eventItem.eventID);
	            }.bind(this);

	            return React.createElement(
	                'div',
	                { className: className, onClick: clickEvent, key: eventItem.eventID },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-12' },
	                    React.createElement(
	                        'table',
	                        { className: 'center-block' },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(
	                                        'div',
	                                        { className: 'text-center' },
	                                        React.createElement(
	                                            'div',
	                                            { className: 'dank-d4' },
	                                            eventItem.ym
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(
	                                        'div',
	                                        { className: 'text-left' },
	                                        eventItem.name
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }.bind(this));

	        return React.createElement(
	            'div',
	            { className: 'container-fluid' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-12 text-left' },
	                    React.createElement(
	                        'div',
	                        { className: 'panel-title', href: '#' },
	                        '纳新事项'
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-12 text-left' },
	                    React.createElement(
	                        'a',
	                        { className: 'btn panel-btn', href: '#/back/manage/add' },
	                        '新增事项'
	                    )
	                )
	            ),
	            eventNodes
	        );
	    }
	});

	var Form = React.createClass({
	    displayName: 'Form',


	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'container-fluid' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-6' },
	                    React.createElement(Graph1, { eventID: this.props.eventID })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'col-md-6' },
	                    React.createElement(Graph2, { eventID: this.props.eventID })
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-md-12' },
	                    React.createElement(List, { eventID: this.props.eventID })
	                )
	            )
	        );
	    }
	});

	var Graph1 = React.createClass({
	    displayName: 'Graph1',

	    getInitialState: function getInitialState() {
	        return {
	            data: []
	        };
	    },

	    print: function print(data) {
	        //console.log(data);
	        var ctx = document.getElementById("myChart3");
	        var myChart3 = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: data.labels,
	                datasets: [{
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
	                }]
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

	    componentDidMount: function componentDidMount() {
	        //console.log(this.props.eventID);
	        $.ajax({
	            url: "/event/count/recent",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID,
	                num: 7
	            },
	            success: function (data) {
	                //console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.print(data.body.data);
	                        }
	                        break;
	                    default:
	                        //alert(this.props.eventID);
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        //console.log(this.props.eventID);
	        $.ajax({
	            url: "/event/count/recent",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID,
	                num: 7
	            },
	            success: function (data) {
	                //console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.print(data.body.data);
	                        }
	                        break;
	                    default:
	                        //alert(this.props.eventID);
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'c6 text-center' },
	            React.createElement(
	                'table',
	                { className: 't2' },
	                React.createElement(
	                    'tbody',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'td',
	                            null,
	                            React.createElement('canvas', { id: 'myChart3', width: '300px', height: '220px', className: 'can1' })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Graph2 = React.createClass({
	    displayName: 'Graph2',

	    print1: function print1(data) {
	        var value1 = data.counts[2];
	        var ctx = document.getElementById("myChart1");
	        var myChart1 = new Chart(ctx, {
	            type: 'doughnut',
	            data: {
	                labels: ["男", "女"],
	                datasets: [{
	                    data: [data.counts[0], data.counts[1]],
	                    backgroundColor: ["#79dae7", "#ff8d94"],
	                    hoverBackgroundColor: ["#79dae7", "#ff8d94"]
	                }]
	            },
	            options: {
	                responsive: false,
	                rotation: -0.5 * Math.PI,
	                title: {
	                    display: true,
	                    text: '总人数:' + value1,
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

	    print2: function print2(data) {
	        var ctx = document.getElementById("myChart2");
	        var myChart2 = new Chart(ctx, {
	            type: 'doughnut',
	            data: {
	                labels: data.labels,
	                datasets: [{
	                    data: data.counts,
	                    backgroundColor: ["#3D5B6F", "#9887C2", "#2FC5A1", "#2DD7E2", "#A0F5FF", "#FFD666", "#EF7056", "#A95A4C"]
	                }]
	            },
	            options: {
	                responsive: false,
	                rotation: -0.5 * Math.PI,
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

	    componentDidMount: function componentDidMount() {
	        //alert(this.props.eventID);
	        $.ajax({
	            url: "/event/count/all",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID
	            },
	            success: function (data) {
	                //console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
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
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        //alert(this.props.eventID);
	        $.ajax({
	            url: "/event/count/all",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID
	            },
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
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
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    render: function render() {

	        return React.createElement(
	            'div',
	            { className: 'dank-c6 text-center' },
	            React.createElement(
	                'table',
	                { className: 'dank-t3' },
	                React.createElement(
	                    'tbody',
	                    null,
	                    React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                            'td',
	                            null,
	                            React.createElement('canvas', { id: 'myChart1', width: '150px', height: '200px', className: 'dank-can2' })
	                        ),
	                        React.createElement(
	                            'td',
	                            null,
	                            React.createElement('canvas', { id: 'myChart2', width: '150px', height: '200px', className: 'dank-can2' })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var List = React.createClass({
	    displayName: 'List',

	    getInitialState: function getInitialState() {
	        return {
	            wish: '全部部门',
	            departments: [],
	            order: -1,
	            page: 1,
	            forms: [{
	                writetime: '',
	                browserinfo: '',
	                date: '',
	                like: '',
	                baseinfo: {
	                    name: '',
	                    sex: '',
	                    origin: '',
	                    nation: '',
	                    schoolID: '',
	                    politicalStatus: '',
	                    telnumber: '',
	                    telshort: '',
	                    email: '',
	                    qq: '',
	                    major: '',
	                    birth: '',
	                    address: ''
	                },
	                skills: {
	                    title: '',
	                    chosen: []
	                },
	                introduction: {
	                    title: '',
	                    content: ''
	                },
	                wish: {
	                    title: '',
	                    chosen: []
	                },
	                reason: '',
	                remark: '',
	                others: []
	            }]
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        $.ajax({
	            url: "/form",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID,
	                order: this.state.order,
	                page: this.state.page,
	                wish: this.state.wish == '全部部门' ? null : this.state.wish
	            },
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.setState({ forms: data.body.forms });
	                        }
	                        break;
	                    default:
	                        //alert(this.props.eventID);
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ page: 1 });

	        $.ajax({
	            url: "/form",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: nextProps.eventID,
	                order: this.state.order,
	                page: this.state.page,
	                wish: this.state.wish == '全部部门' ? null : this.state.wish
	            },
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.setState({ forms: data.body.forms });
	                        }
	                        break;
	                    default:
	                        //alert(this.props.eventID);
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },

	    render: function render() {
	        var titleStyle1 = {
	            textAlign: 'left'
	        };
	        var titleStyle2 = {
	            textAlign: 'left',
	            float: 'left'
	        };
	        var titleStyle3 = {
	            textAlign: 'left',
	            float: 'right'
	        };
	        var eventIDStyle = {
	            border: '2px solid #000000',
	            borderRadius: '8px',
	            width: '144px',
	            fontSize: '18px',
	            color: '#444852',
	            height: '40px',
	            lineHeight: '40px',
	            display: 'block',
	            textAlign: 'center',
	            marginLeft: '10px'
	        };
	        var selectStyle = {
	            marginRight: '50px'
	        };
	        var deleteStyle = {
	            textAlign: 'Right'
	        };
	        var formRecords = this.state.forms.map(function (form, i) {
	            return React.createElement(
	                'tr',
	                { key: i },
	                React.createElement(
	                    'td',
	                    null,
	                    form.baseinfo.name
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    form.baseinfo.sex
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    form.baseinfo.major
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    new function () {
	                        var data = [];
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = form.wish.chosen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var wish = _step.value;

	                                data.push(wish + ' ');
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }

	                        return data;
	                    }()
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    form.date.substring(0, 10)
	                ),
	                React.createElement(
	                    'td',
	                    { style: deleteStyle },
	                    React.createElement(
	                        'a',
	                        { className: 'a19', href: '#' },
	                        '删除'
	                    )
	                )
	            );
	        }.bind(this));
	        return React.createElement(
	            'div',
	            { className: 'dank-c7 text-center' },
	            React.createElement(
	                'div',
	                { style: titleStyle1 },
	                React.createElement(
	                    'big',
	                    { style: eventIDStyle },
	                    '报名表序号 ',
	                    this.props.eventID
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: titleStyle2 },
	                React.createElement(
	                    'a',
	                    { className: 'btn dank-a14', href: '#' },
	                    React.createElement(
	                        'b',
	                        null,
	                        '导入报名表'
	                    )
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'btn dank-a14', href: '#' },
	                    React.createElement(
	                        'b',
	                        null,
	                        '导出报名表'
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: titleStyle3, className: 'form-inline' },
	                React.createElement(
	                    'select',
	                    { className: 'form-control', style: selectStyle },
	                    React.createElement(
	                        'option',
	                        null,
	                        '全部部门'
	                    )
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'btn dank-a14', href: '#' },
	                    React.createElement(
	                        'b',
	                        null,
	                        '时间',
	                        React.createElement('i', { className: 'fa fa-chevron-up i3', 'aria-hidden': 'true' })
	                    )
	                )
	            ),
	            React.createElement(
	                'b',
	                null,
	                React.createElement(
	                    'table',
	                    { className: 'table dank-t5' },
	                    React.createElement(
	                        'tbody',
	                        null,
	                        this.state.forms ? formRecords : null
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'b',
	                    null,
	                    React.createElement(
	                        'a',
	                        { className: 'a20', href: '#' },
	                        '首页'
	                    ),
	                    React.createElement(
	                        'a',
	                        { className: 'a20', href: '#' },
	                        '上一页'
	                    ),
	                    React.createElement(
	                        'a',
	                        { className: 'a20', href: '#' },
	                        '下一页'
	                    ),
	                    React.createElement(
	                        'a',
	                        { className: 'a20', href: '#' },
	                        '尾页'
	                    )
	                )
	            )
	        );
	    }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(1);
	var Component = React.Component;

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        return React.createElement(Content, null);
	    }
	});

	var Content = React.createClass({
	    displayName: 'Content',

	    getInitialState: function getInitialState() {
	        return {
	            page: 1,
	            pagesState: [true, true, true, true],
	            pagesNumber: [1, 2, 3, 4],
	            totalPage: 4,
	            name: '请输入纳新事项名称',
	            skills: {
	                delete: false,
	                title: '技能',
	                max: null,
	                option: ['ppt', '视频', '主持', '摄影', 'ps'],
	                free: true
	            },
	            introduction: {
	                delete: false,
	                title: '个人履历（经历，荣誉）',
	                require: true
	            },
	            wish: {
	                delete: false,
	                title: '请选择您的志愿',
	                max: 2,
	                option: ['产品', '设计', '前端', '后端', '运营', '推广'],
	                free: false
	            },
	            others: [],
	            remark: '无'
	        };
	    },
	    dataRecall: function dataRecall(item, data) {
	        this.setState(_defineProperty({}, item, data));
	    },
	    nextPage: function nextPage() {
	        var nextPage = this.state.page % this.state.totalPage + 1;
	        this.setState({ page: nextPage });
	    },
	    lastPage: function lastPage() {
	        var lastPage = (this.state.totalPage + this.state.page - 2) % this.state.totalPage + 1;
	        this.setState({ page: lastPage });
	    },

	    submit: function submit() {
	        if (this.refs.baseinfo) {
	            this.refs.baseinfo.componentWillUnmount();
	        }
	        if (this.refs.person) {
	            this.refs.person.componentWillUnmount();
	        }
	        if (this.refs.wish) {
	            this.refs.wish.componentWillUnmount();
	        }
	        if (this.refs.others) {
	            this.refs.others.componentWillUnmount();
	        }
	        $.ajax({
	            url: "form/design",
	            contentType: 'application/json',
	            type: 'POST',
	            data: JSON.stringify({
	                name: this.state.name,
	                formschema: {
	                    skills: this.state.skills,
	                    introduction: this.state.introduction,
	                    wish: this.state.wish,
	                    others: this.state.others
	                }
	            }),
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        window.location.href = '/#/back';
	                        break;
	                    default:
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },

	    pageDelete: function pageDelete(i) {
	        var pagesState = this.state.pagesState;
	        var pagesNumber = this.state.pagesNumber;
	        var totalPage = this.state.totalPage;

	        pagesState[i - 1] = false;
	        for (var j = i; j < 4; j++) {
	            pagesNumber[j]--;
	        }
	        totalPage--;

	        this.setState({
	            pagesState: pagesState,
	            pagesNumber: pagesNumber,
	            totalPage: totalPage
	        });
	    },

	    render: function render() {
	        var backgroundStyle = {
	            top: '60px',
	            bottom: '0px',
	            left: '215px',
	            right: '292px',
	            position: 'fixed',
	            overflow: 'auto',
	            background: '#f77968'
	        };
	        var timeLineStyle = {
	            marginTop: '110px'
	        };
	        var bordStyle = {
	            width: '1000px'
	        };
	        var titleStyle = {
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#ffffff',
	            marginTop: '28px',
	            marginBottom: '28px'
	        };
	        var buttonGroupStyle = {
	            float: 'right',
	            marginTop: '160px'
	        };
	        var libraryStyle = {
	            position: 'fixed',
	            right: '0',
	            bottom: '0',
	            top: '60px',
	            width: '292px'
	        };
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                { style: backgroundStyle },
	                React.createElement(
	                    'div',
	                    { className: 'container-fluid' },
	                    React.createElement(
	                        'div',
	                        { className: 'row' },
	                        React.createElement(
	                            'div',
	                            { className: 'col-md-12' },
	                            React.createElement(
	                                'big',
	                                { style: titleStyle, className: 'center-block' },
	                                React.createElement('input', { type: 'text', value: this.state.name, ref: 'name', onChange: function () {
	                                        this.setState({ name: this.refs.name.value });
	                                    }.bind(this), className: 'dank-form-title-input' })
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'row' },
	                        React.createElement(
	                            'div',
	                            { className: 'col-md-12' },
	                            React.createElement(
	                                'div',
	                                { className: 'center-block', style: bordStyle },
	                                React.createElement(
	                                    'div',
	                                    { className: 'dank-time-line' },
	                                    React.createElement(
	                                        'big',
	                                        { className: this.state.page == 1 ? "dank-time-node-active" : "dank-time-node", onClick: function () {
	                                                this.setState({ page: this.state.pagesNumber[0] });
	                                            }.bind(this) },
	                                        this.state.pagesNumber[0]
	                                    ),
	                                    this.state.pagesState[1] ? React.createElement(
	                                        'big',
	                                        { className: this.state.page == this.state.pagesNumber[1] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                                this.setState({ page: this.state.pagesNumber[1] });
	                                            }.bind(this) },
	                                        this.state.pagesNumber[1]
	                                    ) : null,
	                                    this.state.pagesState[2] ? React.createElement(
	                                        'big',
	                                        { className: this.state.page == this.state.pagesNumber[2] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                                this.setState({ page: this.state.pagesNumber[2] });
	                                            }.bind(this) },
	                                        this.state.pagesNumber[2]
	                                    ) : null,
	                                    this.state.pagesState[3] ? React.createElement(
	                                        'big',
	                                        { className: this.state.page == this.state.pagesNumber[3] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                                this.setState({ page: this.state.pagesNumber[3] });
	                                            }.bind(this) },
	                                        this.state.pagesNumber[3]
	                                    ) : null
	                                ),
	                                this.state.page == this.state.pagesNumber[0] && this.state.pagesState[0] ? React.createElement(Baseinfo, { ref: 'baseinfo', data: this.state.baseinfo, dataRecall: this.dataRecall, pageDelete: this.pageDelete }) : null,
	                                this.state.page == this.state.pagesNumber[1] && this.state.pagesState[1] ? React.createElement(Person, { ref: 'person', introduction: this.state.introduction, skills: this.state.skills, dataRecall: this.dataRecall, pageDelete: this.pageDelete }) : null,
	                                this.state.page == this.state.pagesNumber[2] && this.state.pagesState[2] ? React.createElement(Wish, { ref: 'wish', wish: this.state.wish, dataRecall: this.dataRecall, pageDelete: this.pageDelete }) : null,
	                                this.state.page == this.state.pagesNumber[3] && this.state.pagesState[3] ? React.createElement(Others, { ref: 'others', others: this.state.others, dataRecall: this.dataRecall, pageDelete: this.pageDelete }) : null,
	                                React.createElement(
	                                    'div',
	                                    { style: buttonGroupStyle },
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-button-2', onClick: this.lastPage },
	                                        '上一页'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-button-2', onClick: this.nextPage },
	                                        '下一页'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-button-2', onClick: this.submit },
	                                        '提交'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: libraryStyle },
	                React.createElement(
	                    'div',
	                    { className: 'd14' },
	                    React.createElement(
	                        'div',
	                        { className: 'd15' },
	                        React.createElement(
	                            'h1',
	                            { className: 'h1b' },
	                            React.createElement(
	                                'b',
	                                null,
	                                '报名表组件'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-library-component', onClick: function () {
	                                this.refs.others.componentAdd('single-text');
	                            }.bind(this) },
	                        '单行文本框'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-library-component', onClick: function () {
	                                this.refs.others.componentAdd('multi-text');
	                            }.bind(this) },
	                        '多行文本框'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-library-component', onClick: function () {
	                                this.refs.others.componentAdd('single-choose');
	                            }.bind(this) },
	                        '单选组件'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-library-component', onClick: function () {
	                                this.refs.others.componentAdd('multi-choose');
	                            }.bind(this) },
	                        '多选组件'
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-library-component', onClick: function () {
	                                this.refs.others.componentAdd('file');
	                            }.bind(this) },
	                        '上传文件'
	                    )
	                )
	            )
	        );
	    }

	});

	var Baseinfo = React.createClass({
	    displayName: 'Baseinfo',

	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '20px',
	            fontWeight: 'bold'
	        };
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { style: titleStyle },
	                React.createElement(
	                    'b',
	                    null,
	                    '个人信息'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'd8' },
	                React.createElement(
	                    'b',
	                    null,
	                    React.createElement(
	                        'table',
	                        { className: 'center-block dank-form-table' },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    { className: 'form-group' },
	                                    '姓　　名'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'name', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '性　　别'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(
	                                        'label',
	                                        { className: 'dank-checkbox-inline' },
	                                        React.createElement('input', { type: 'radio', name: 'sex', value: '男' }),
	                                        React.createElement(
	                                            'b',
	                                            null,
	                                            ' 男'
	                                        )
	                                    ),
	                                    React.createElement(
	                                        'label',
	                                        { className: 'dank-checkbox-inline' },
	                                        React.createElement('input', { type: 'radio', name: 'sex', value: '女' }),
	                                        React.createElement(
	                                            'b',
	                                            null,
	                                            ' 女'
	                                        )
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '籍　　贯'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'origin', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '民　　族'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'nation', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '学　　号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'schoolID', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '政治面貌'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'politicalStatus', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '手机长号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'telnumber', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '手机短号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'telshort', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '邮　　箱'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'email', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    'ＱＱ号码'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'qq', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '专　　业'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'major', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '出生日期'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'birth', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '寝室地址'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { name: 'address', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement('td', null)
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'd9' },
	                React.createElement(
	                    'div',
	                    { className: 'd10' },
	                    React.createElement('img', { src: 'img/photo.png', className: 'i6' }),
	                    React.createElement(
	                        'a',
	                        { className: 'a21' },
	                        React.createElement(
	                            'b',
	                            null,
	                            '上传照片'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Person = React.createClass({
	    displayName: 'Person',

	    getInitialState: function getInitialState() {
	        return {
	            skills: this.props.skills,
	            introduction: this.props.introduction,
	            skillsEdit: false,
	            introductionEdit: false
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        window.iCheck();
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        var skills = this.state.skills;
	        var introduction = this.state.introduction;
	        this.props.dataRecall('skills', skills);
	        this.props.dataRecall('introduction', introduction);
	        if (skills.delete && introduction.delete) {
	            this.props.pageDelete(2);
	        }
	    },

	    decoder: function decoder(options) {
	        return options.join('#');
	    },

	    encoder: function encoder(text) {
	        return text.split('#');
	    },

	    save: function save(type) {
	        switch (type) {
	            case 'skill':
	                var title = this.refs.skillsTitle.value;
	                var max = this.refs.skillsMax.value;
	                var free = this.refs.skillsFree.checked ? true : false;
	                var option = this.encoder(this.refs.skillsOption.value);

	                this.setState({
	                    skills: {
	                        title: title,
	                        max: max,
	                        free: free,
	                        option: option,
	                        require: this.state.skills.require
	                    },
	                    skillsEdit: false
	                });
	                break;
	            case 'introduction':
	                var title = this.refs.introductionTitle.value;
	                this.setState({
	                    introduction: {
	                        title: title,
	                        delete: this.state.introduction.delete
	                    },
	                    introductionEdit: false
	                });

	        }
	    },

	    deleteComponent: function deleteComponent(type) {
	        switch (type) {
	            case 'skills':
	                var skills = this.state.skills;
	                skills.delete = true;
	                this.setState({ skills: skills });
	                break;
	            case 'introduction':
	                var introduction = this.state.introduction;
	                introduction.delete = true;
	                this.setState({ introduction: introduction });
	                break;
	        }
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'

	        };
	        var skillNodes = this.state.skills.option.map(function (skill) {
	            return React.createElement(
	                'div',
	                { className: 'dank-checkbox-inOneLine', key: skill },
	                React.createElement('input', { type: 'checkbox', value: skill }),
	                React.createElement(
	                    'label',
	                    null,
	                    ' ',
	                    skill,
	                    ' '
	                )
	            );
	        }.bind(this));
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '个人介绍'
	                )
	            ),
	            this.state.skills.delete ? null : this.state.skillsEdit ? React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'd25 dank-schema-component' },
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'div',
	                            { className: 'dank-form-group-inline dank-schema-form-group-inline' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '标题'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('input', { className: 'dank-schema-input', type: 'text', ref: 'skillsTitle',
	                                    defaultValue: this.state.skills.title })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            {
	                                className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '选择数量限制'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('input', { className: 'dank-schema-input', type: 'number', ref: 'skillsMax',
	                                    defaultValue: this.state.skills.max })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            {
	                                className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '是否允许自填'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                this.state.skills.free ? React.createElement('input', { type: 'checkbox', ref: 'skillsFree', defaultChecked: true }) : React.createElement('input', { type: 'checkbox', ref: 'skillsFree' }),
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    '允许自填'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'h1',
	                            { className: 'dank-schema-label' },
	                            '可选项（选项间以#分隔）'
	                        ),
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement('input', { className: 'dank-schema-input', type: 'text', ref: 'skillsOption',
	                                defaultValue: this.decoder(this.state.skills.option) })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-schema-option-group' },
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option' },
	                            '上移'
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option' },
	                            '下移'
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option',
	                                onClick: function () {
	                                    this.deleteComponent('skills');
	                                }.bind(this) },
	                            '删除'
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option',
	                                onClick: function () {
	                                    this.save('skill');
	                                }.bind(this) },
	                            '完成'
	                        )
	                    )
	                )
	            ) : React.createElement(
	                'div',
	                { className: 'd24', onClick: function () {
	                        this.setState({ skillsEdit: true });
	                    }.bind(this) },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.state.skills.title
	                        )
	                    ),
	                    skillNodes,
	                    this.state.skills.free ? React.createElement(
	                        'div',
	                        { className: 'dank-form-group-inline' },
	                        React.createElement(
	                            'label',
	                            { className: 'dank-label dank-select-label' },
	                            '其他'
	                        ),
	                        React.createElement('input', { type: 'text', className: 'dank-form-input dank-select-input' })
	                    ) : null
	                )
	            ),
	            this.state.introduction.delete ? null : this.state.introductionEdit ? React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'd25 dank-schema-component' },
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'h1',
	                            { className: 'dank-schema-label' },
	                            '标题'
	                        ),
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement('input', { className: 'dank-schema-input', ref: 'introductionTitle', type: 'text',
	                                defaultValue: this.state.introduction.title })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-schema-option-group' },
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option', onClick: function () {
	                                    this.deleteComponent('introduction');
	                                }.bind(this) },
	                            '删除'
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option',
	                                onClick: function () {
	                                    this.save('introduction');
	                                }.bind(this) },
	                            '完成'
	                        )
	                    )
	                )
	            ) : React.createElement(
	                'div',
	                { className: 'd24', onClick: function () {
	                        this.setState({ introductionEdit: true });
	                    }.bind(this) },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.state.introduction.title
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'b',
	                            null,
	                            React.createElement('textarea', { name: 'introduction.content', className: 'text-left tt1' })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Wish = React.createClass({
	    displayName: 'Wish',

	    getInitialState: function getInitialState() {
	        return {
	            wish: this.props.wish,
	            wishEdit: false
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        window.iCheck();
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        var wish = this.state.wish;
	        this.props.dataRecall('wish', wish);
	        if (wish.delete) {
	            this.props.pageDelete(3);
	        }
	    },
	    decoder: function decoder(options) {
	        return options.join('#');
	    },

	    encoder: function encoder(text) {
	        return text.split('#');
	    },
	    deleteComponent: function deleteComponent(type) {
	        switch (type) {
	            case 'wish':
	                var wish = this.state.wish;
	                wish.delete = true;
	                this.setState({ skills: wish });
	                break;
	        }
	    },
	    save: function save(type) {
	        switch (type) {
	            case 'wish':
	                var title = this.refs.wishTitle.value;
	                var max = this.refs.wishMax.value;
	                var free = this.refs.wishFree.checked ? true : false;
	                var option = this.encoder(this.refs.wishOption.value);

	                this.setState({
	                    wish: {
	                        title: title,
	                        max: max,
	                        free: free,
	                        option: option,
	                        require: this.state.wish.require
	                    },
	                    wishEdit: false
	                });
	                break;
	        }
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'

	        };
	        var wishNodes = this.state.wish.option.map(function (wish) {
	            return React.createElement(
	                'div',
	                { className: 'dank-checkbox-inOneLine', key: wish },
	                React.createElement('input', { type: 'checkbox', value: wish }),
	                React.createElement(
	                    'label',
	                    null,
	                    ' ',
	                    wish,
	                    ' '
	                )
	            );
	        }.bind(this));

	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '志愿选择'
	                )
	            ),
	            this.state.wish.delete ? null : this.state.wishEdit ? React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'd25 dank-schema-component' },
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'div',
	                            { className: 'dank-form-group-inline dank-schema-form-group-inline' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '标题'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('input', { className: 'dank-schema-input', type: 'text', ref: 'wishTitle',
	                                    defaultValue: this.state.wish.title })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            {
	                                className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '选择数量限制'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('input', { className: 'dank-schema-input', type: 'number', ref: 'wishMax',
	                                    defaultValue: this.state.wish.max })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            {
	                                className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                            React.createElement(
	                                'h1',
	                                { className: 'dank-schema-label' },
	                                '是否允许自填'
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                this.state.wish.free ? React.createElement('input', { type: 'checkbox', ref: 'wishFree', defaultChecked: true }) : React.createElement('input', { type: 'checkbox', ref: 'wishFree' }),
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    '允许自填'
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'h1',
	                            { className: 'dank-schema-label' },
	                            '可选项（选项间以#分隔）'
	                        ),
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement('input', { className: 'dank-schema-input', type: 'text', ref: 'wishOption',
	                                defaultValue: this.decoder(this.state.wish.option) })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'dank-schema-option-group' },
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option',
	                                onClick: function () {
	                                    this.deleteComponent('wish');
	                                }.bind(this) },
	                            '删除'
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'dank-schema-option',
	                                onClick: function () {
	                                    this.save('wish');
	                                }.bind(this) },
	                            '完成'
	                        )
	                    )
	                )
	            ) : React.createElement(
	                'div',
	                { className: 'd24', onClick: function () {
	                        this.setState({ wishEdit: true });
	                    }.bind(this) },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.state.wish.title
	                        )
	                    ),
	                    wishNodes,
	                    this.state.wish.free ? React.createElement(
	                        'div',
	                        { className: 'dank-form-group-inline' },
	                        React.createElement(
	                            'label',
	                            { className: 'dank-label dank-select-label' },
	                            '其他'
	                        ),
	                        React.createElement('input', { type: 'text', className: 'dank-form-input dank-select-input' })
	                    ) : null
	                )
	            ),
	            this.state.wish.delete ? null : React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            '希望进入第1志愿 ',
	                            this.state.wish.option[0],
	                            ' 的原因是'
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'b',
	                            null,
	                            React.createElement('textarea', { value: '此组件会自动根据面试者的选择生成', className: 'text-left tt1', readOnly: true })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Others = React.createClass({
	    displayName: 'Others',

	    getInitialState: function getInitialState() {
	        var othersEdit = [];
	        for (var i = 0; i < this.props.others.length; i++) {
	            othersEdit.push('false');
	        }
	        return {
	            others: this.props.others,
	            othersEdit: othersEdit
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        /*iCheck initialize*/
	        window.iCheck();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        /*iCheck initialize*/
	        window.iCheck();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.dataRecall('others', this.state.others);
	    },

	    decoder: function decoder(options) {
	        return options.join('#');
	    },

	    encoder: function encoder(text) {
	        return text.split('#');
	    },

	    componentAdd: function componentAdd(type) {
	        var others = this.state.others;
	        var othersEdit = this.state.othersEdit;
	        var element;
	        switch (type) {
	            case 'single-text':
	                element = {
	                    type: 'single-text',
	                    title: '请在此处输入标题',
	                    //content: rough.content
	                    required: false
	                };
	                break;
	            case 'multi-text':
	                element = {
	                    type: 'multi-text',
	                    title: '请在此处输入标题',
	                    //content: rough.content
	                    required: false
	                };
	                break;
	            case 'multi-choose':
	                element = {
	                    type: 'multi-choose',
	                    title: '请在此处输入标题',
	                    max: null,
	                    option: ['选项一', '选项二', '选项三'],
	                    free: true
	                };
	                break;
	            case 'single-choose':
	                element = {
	                    type: 'single-choose',
	                    title: '请在此处输入标题',
	                    option: ['选项一', '选项二', '选项三'],
	                    free: false
	                };
	                break;
	            case 'file':
	                element = {
	                    type: 'file',
	                    title: '请在此处输入标题'
	                };
	                break;
	            case 'image':
	                element = {
	                    type: 'image',
	                    title: '请在此处输入标题'
	                };
	                break;
	            default:
	                element = {};
	        }
	        if (element) {
	            others.push(element);
	            othersEdit.push('true');
	            this.setState({ others: others, othersEdit: othersEdit });
	        }
	    },

	    dataUpdate: function dataUpdate(type, index) {
	        var others = this.state.others;
	        var element;
	        switch (type) {
	            case 'single-text':
	                var title = $('#othersTitle' + index).val();
	                others[index].title = title;
	                break;
	            case 'multi-text':
	                var title = $('#othersTitle' + index).val();
	                others[index].title = title;
	                break;
	            case 'multi-choose':
	                var title = $('#othersTitle' + index).val();
	                var max = $('#othersMax' + index).val();
	                var free = $('#othersFree' + index).is(":checked") ? true : false;
	                var option = this.encoder($('#othersOption' + index).val());
	                others[index].title = title;
	                others[index].max = max;
	                others[index].free = free;
	                others[index].option = option;
	                break;
	            case 'single-choose':
	                var title = $('#othersTitle' + index).val();
	                var option = this.encoder($('#othersOption' + index).val());
	                others[index].title = title;
	                others[index].option = option;
	                break;
	        }
	        this.setState({ others: others });
	    },

	    save: function save(type, index) {
	        this.dataUpdate(type, index);

	        var othersEdit = this.state.othersEdit;
	        othersEdit[index] = false;
	        this.setState({ othersEdit: othersEdit });
	    },

	    deleteComponent: function deleteComponent(index) {
	        var others = this.state.others;
	        var othersEdit = this.state.othersEdit;
	        others.splice(index, 1);
	        othersEdit.splice(index, 1);
	        this.setState({ others: others, othersEdit: othersEdit });
	    },

	    editState: function editState(index) {
	        var othersEdit = this.state.othersEdit;
	        othersEdit[index] = true;
	        this.setState({ othersEdit: othersEdit });
	    },

	    moveBefore: function moveBefore(type, index) {
	        this.dataUpdate(type, index);

	        var others = this.state.others;
	        var othersEdit = this.state.othersEdit;
	        var length = others.length;
	        var before = (index - 1 + length) % length;

	        var temp1 = others[index];
	        others[index] = others[before];
	        others[before] = temp1;

	        var temp2 = othersEdit[index];
	        othersEdit[index] = othersEdit[before];
	        othersEdit[before] = temp2;

	        this.setState({ others: others, othersEdit: othersEdit });
	    },
	    moveBack: function moveBack(type, index) {
	        this.dataUpdate(type, index);

	        var others = this.state.others;
	        var othersEdit = this.state.othersEdit;
	        var length = others.length;
	        var next = (index + 1 + length) % length;

	        var temp1 = others[index];
	        others[index] = others[next];
	        others[next] = temp1;

	        var temp2 = othersEdit[index];
	        othersEdit[index] = othersEdit[next];
	        othersEdit[next] = temp2;

	        this.setState({ others: others, othersEdit: othersEdit });
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'
	        };
	        var otherNodes = this.state.others.map(function (other, i) {
	            switch (other.type) {
	                case 'single-text':
	                    return React.createElement(
	                        'div',
	                        { key: i },
	                        this.state.othersEdit[i] ? React.createElement(
	                            'div',
	                            { className: 'd24' },
	                            React.createElement(
	                                'div',
	                                { className: 'd25 dank-schema-component' },
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'h1',
	                                        { className: 'dank-schema-label' },
	                                        '标题'
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        null,
	                                        React.createElement('input', { className: 'dank-schema-input', id: "othersTitle" + i, type: 'text',
	                                            defaultValue: other.title })
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'dank-schema-option-group' },
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBefore('single-text', i);
	                                            }.bind(this) },
	                                        '上移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBack('single-text', i);
	                                            }.bind(this) },
	                                        '下移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.deleteComponent(i);
	                                            }.bind(this) },
	                                        '删除'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.save('single-text', i);
	                                            }.bind(this) },
	                                        '完成'
	                                    )
	                                )
	                            )
	                        ) : React.createElement(
	                            'div',
	                            { className: 'd24', onClick: function () {
	                                    this.editState(i);
	                                }.bind(this) },
	                            React.createElement(
	                                'div',
	                                { className: 'text-left d25' },
	                                React.createElement(
	                                    'h1',
	                                    { className: 'h1f dank-form-h2' },
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        other.title
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        React.createElement('input', { type: 'text', className: 'dank-form-single-text' })
	                                    )
	                                )
	                            )
	                        )
	                    );
	                    break;
	                case 'multi-text':
	                    return React.createElement(
	                        'div',
	                        { key: i },
	                        this.state.othersEdit[i] ? React.createElement(
	                            'div',
	                            { className: 'd24' },
	                            React.createElement(
	                                'div',
	                                { className: 'd25 dank-schema-component' },
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'h1',
	                                        { className: 'dank-schema-label' },
	                                        '标题'
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        null,
	                                        React.createElement('input', { className: 'dank-schema-input', id: "othersTitle" + i, type: 'text',
	                                            defaultValue: other.title })
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'dank-schema-option-group' },
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBefore('multi-text', i);
	                                            }.bind(this) },
	                                        '上移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBack('multi-text', i);
	                                            }.bind(this) },
	                                        '下移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.deleteComponent(i);
	                                            }.bind(this) },
	                                        '删除'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.save('multi-text', i);
	                                            }.bind(this) },
	                                        '完成'
	                                    )
	                                )
	                            )
	                        ) : React.createElement(
	                            'div',
	                            { className: 'd24', onClick: function () {
	                                    this.editState(i);
	                                }.bind(this) },
	                            React.createElement(
	                                'div',
	                                { className: 'text-left d25' },
	                                React.createElement(
	                                    'h1',
	                                    { className: 'h1f dank-form-h2' },
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        other.title
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        React.createElement('textarea', { name: 'introduction.content', className: 'text-left tt1' })
	                                    )
	                                )
	                            )
	                        )
	                    );
	                    break;
	                case 'multi-choose':
	                    return React.createElement(
	                        'div',
	                        { key: i },
	                        this.state.othersEdit[i] ? React.createElement(
	                            'div',
	                            { className: 'd24' },
	                            React.createElement(
	                                'div',
	                                { className: 'd25 dank-schema-component' },
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'div',
	                                        { className: 'dank-form-group-inline dank-schema-form-group-inline' },
	                                        React.createElement(
	                                            'h1',
	                                            { className: 'dank-schema-label' },
	                                            '标题'
	                                        ),
	                                        React.createElement(
	                                            'div',
	                                            null,
	                                            React.createElement('input', { className: 'dank-schema-input', type: 'text', id: "othersTitle" + i,
	                                                defaultValue: other.title })
	                                        )
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        {
	                                            className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                                        React.createElement(
	                                            'h1',
	                                            { className: 'dank-schema-label' },
	                                            '选择数量限制'
	                                        ),
	                                        React.createElement(
	                                            'div',
	                                            null,
	                                            React.createElement('input', { className: 'dank-schema-input', type: 'number', id: "othersMax" + i,
	                                                defaultValue: other.max })
	                                        )
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        {
	                                            className: 'dank-form-group-inline dank-schema-form-group-inline dank-schema-form-group-short' },
	                                        React.createElement(
	                                            'h1',
	                                            { className: 'dank-schema-label' },
	                                            '是否允许自填'
	                                        ),
	                                        React.createElement(
	                                            'div',
	                                            null,
	                                            other.free ? React.createElement('input', { type: 'checkbox', id: "othersFree" + i, defaultChecked: true }) : React.createElement('input', { type: 'checkbox', id: "othersFree" + i }),
	                                            React.createElement(
	                                                'label',
	                                                null,
	                                                '允许自填'
	                                            )
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'h1',
	                                        { className: 'dank-schema-label' },
	                                        '可选项（选项间以#分隔）'
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        null,
	                                        React.createElement('input', { className: 'dank-schema-input', type: 'text', id: "othersOption" + i,
	                                            defaultValue: this.decoder(other.option) })
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'dank-schema-option-group' },
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBefore('multi-choose', i);
	                                            }.bind(this) },
	                                        '上移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBack('multi-choose', i);
	                                            }.bind(this) },
	                                        '下移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.deleteComponent(i);
	                                            }.bind(this) },
	                                        '删除'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.save('multi-choose', i);
	                                            }.bind(this) },
	                                        '完成'
	                                    )
	                                )
	                            )
	                        ) : React.createElement(
	                            'div',
	                            { className: 'd24', onClick: function () {
	                                    this.editState(i);
	                                }.bind(this) },
	                            React.createElement(
	                                'div',
	                                { className: 'text-left d25' },
	                                React.createElement(
	                                    'h1',
	                                    { className: 'h1f dank-form-h2' },
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        other.title
	                                    )
	                                ),
	                                other.option.map(function (option) {
	                                    return React.createElement(
	                                        'div',
	                                        { className: 'dank-checkbox-inOneLine', key: option },
	                                        React.createElement('input', { type: 'checkbox', value: option }),
	                                        React.createElement(
	                                            'label',
	                                            null,
	                                            ' ',
	                                            option,
	                                            ' '
	                                        )
	                                    );
	                                }.bind(this)),
	                                other.free ? React.createElement(
	                                    'div',
	                                    { className: 'dank-form-group-inline' },
	                                    React.createElement(
	                                        'label',
	                                        { className: 'dank-label dank-select-label' },
	                                        '其他'
	                                    ),
	                                    React.createElement('input', { type: 'text', className: 'dank-form-input dank-select-input' })
	                                ) : null
	                            )
	                        )
	                    );
	                    break;
	                case 'single-choose':
	                    //单选暂不实现可自填的功能
	                    return React.createElement(
	                        'div',
	                        { key: i },
	                        this.state.othersEdit[i] ? React.createElement(
	                            'div',
	                            { className: 'd24' },
	                            React.createElement(
	                                'div',
	                                { className: 'd25 dank-schema-component' },
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'div',
	                                        { className: 'dank-form-group-inline dank-schema-form-group-inline' },
	                                        React.createElement(
	                                            'h1',
	                                            { className: 'dank-schema-label' },
	                                            '标题'
	                                        ),
	                                        React.createElement(
	                                            'div',
	                                            null,
	                                            React.createElement('input', { className: 'dank-schema-input', type: 'text', id: "othersTitle" + i,
	                                                defaultValue: other.title })
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    null,
	                                    React.createElement(
	                                        'h1',
	                                        { className: 'dank-schema-label' },
	                                        '可选项（选项间以#分隔）'
	                                    ),
	                                    React.createElement(
	                                        'div',
	                                        null,
	                                        React.createElement('input', { className: 'dank-schema-input', type: 'text', id: "othersOption" + i,
	                                            defaultValue: this.decoder(other.option) })
	                                    )
	                                ),
	                                React.createElement(
	                                    'div',
	                                    { className: 'dank-schema-option-group' },
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBefore('single-choose', i);
	                                            }.bind(this) },
	                                        '上移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option', onClick: function () {
	                                                this.moveBack('single-choose', i);
	                                            }.bind(this) },
	                                        '下移'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.deleteComponent(i);
	                                            }.bind(this) },
	                                        '删除'
	                                    ),
	                                    React.createElement(
	                                        'a',
	                                        { className: 'dank-schema-option',
	                                            onClick: function () {
	                                                this.save('single-choose', i);
	                                            }.bind(this) },
	                                        '完成'
	                                    )
	                                )
	                            )
	                        ) : React.createElement(
	                            'div',
	                            { className: 'd24', onClick: function () {
	                                    this.editState(i);
	                                }.bind(this) },
	                            React.createElement(
	                                'div',
	                                { className: 'text-left d25' },
	                                React.createElement(
	                                    'h1',
	                                    { className: 'h1f dank-form-h2' },
	                                    React.createElement(
	                                        'b',
	                                        null,
	                                        other.title
	                                    )
	                                ),
	                                other.option.map(function (option) {
	                                    return React.createElement(
	                                        'div',
	                                        { className: 'dank-checkbox-inOneLine', key: option },
	                                        React.createElement('input', { type: 'radio', value: option }),
	                                        React.createElement(
	                                            'label',
	                                            null,
	                                            ' ',
	                                            option,
	                                            ' '
	                                        )
	                                    );
	                                }.bind(this))
	                            )
	                        )
	                    );
	                    break;
	                case 'file':
	                    return null;
	                    break;
	                case 'image':
	                    return null;
	                    break;
	                default:
	                    return null;
	            }
	        }.bind(this));
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '其他问题'
	                )
	            ),
	            otherNodes
	        );
	    }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(1);
	var Component = React.Component;

	var Header = __webpack_require__(75);

	module.exports = React.createClass({
	    displayName: 'exports',

	    render: function render() {
	        var globalStyle = {
	            background: "#EFEFEF",
	            height: "100%",
	            padding: 0
	        };
	        return React.createElement(
	            'div',
	            { style: globalStyle },
	            React.createElement(Header, null),
	            React.createElement(Content, { eventID: this.props.params.id })
	        );
	    }
	});

	var Content = React.createClass({
	    displayName: 'Content',

	    getInitialState: function getInitialState() {
	        return {
	            page: 1,
	            event: {},
	            pagesState: [true, false, false, false],
	            pagesNumber: [1, 2, 3, 4],
	            totalPage: 4,
	            eventID: '',
	            writetime: '',
	            browserinfo: '',
	            baseinfo: {
	                name: '',
	                sex: '',
	                origin: '',
	                nation: '',
	                schoolID: '',
	                politicalStatus: '',
	                telnumber: '',
	                telshort: '',
	                email: '',
	                qq: '',
	                major: '',
	                birth: '',
	                address: ''
	            },
	            skills: {
	                delete: '',
	                title: '',
	                chosen: ['']
	            },
	            introduction: {
	                delete: '',
	                title: '',
	                content: ''
	            },
	            wish: {
	                delete: '',
	                title: '',
	                chosen: ['']
	            },
	            reason: [''],
	            others: [],
	            remark: ''
	        };
	    },
	    otherComponentInitialize: function otherComponentInitialize(schema) {
	        var others = this.state.others;
	        for (var index = 0; index < schema.others.length; index++) {
	            var otherSchema = schema.others[index];
	            var element;
	            switch (otherSchema.type) {
	                case 'single-text':
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        content: ''
	                        //required: tough.required
	                    };
	                    break;
	                case 'multi-text':
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        content: ''
	                        //required: tough.required
	                    };
	                    break;
	                case 'multi-choose':
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        //max: rough.max,
	                        chosen: ['']
	                    };
	                    break;
	                case 'single-choose':
	                    //单选暂不实现可自填的功能
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        //max: rough.max,
	                        chosen: ''
	                    };
	                    break;
	                case 'file':
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        url: ''
	                    };
	                    break;
	                case 'image':
	                    element = {
	                        type: otherSchema.type,
	                        title: otherSchema.title,
	                        url: ''
	                    };
	                    break;
	                default:
	                    element = {};
	            }
	            others.push(element);
	        }
	        this.setState({ others: others });
	    },

	    componentDidMount: function componentDidMount() {

	        $.ajax({
	            url: "/form/id",
	            contentType: 'application/json',
	            type: 'GET',
	            data: {
	                eventID: this.props.eventID
	            },
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        if (this.isMounted()) {
	                            this.setState({ event: data.body.event });
	                            var pagesState = [];
	                            pagesState[0] = true;
	                            pagesState[1] = !(data.body.event.formschema.skills.delete && data.body.event.formschema.introduction.delete);
	                            pagesState[2] = !data.body.event.formschema.wish.delete;
	                            pagesState[3] = data.body.event.formschema.others ? true : false;
	                            this.setState({ pagesState: pagesState });
	                            var i = 0;
	                            var pagesNumber = [];
	                            var j;
	                            for (j = 0; j < 4; j++) {
	                                pagesNumber[j] = pagesState[j] ? ++i : 0;
	                            }
	                            this.setState({ totalPage: j });
	                            this.setState({ pagesNumber: pagesNumber });
	                            this.setState({ eventID: data.body.event.eventID });
	                            this.setState({ remark: data.body.event.formschema.remark });
	                            this.otherComponentInitialize(data.body.event.formschema);
	                        }
	                        break;
	                    default:
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    dataRecall: function dataRecall(item, data) {
	        this.setState(_defineProperty({}, item, data));
	    },
	    nextPage: function nextPage() {
	        var nextPage = this.state.page % this.state.totalPage + 1;
	        this.setState({ page: nextPage });
	    },
	    lastPage: function lastPage() {
	        var lastPage = (this.state.totalPage + this.state.page - 2) % this.state.totalPage + 1;
	        this.setState({ page: lastPage });
	    },

	    submit: function submit() {
	        if (this.refs.baseinfo) {
	            this.refs.baseinfo.componentWillUnmount();
	        }
	        if (this.refs.person) {
	            this.refs.person.componentWillUnmount();
	        }
	        if (this.refs.wish) {
	            this.refs.wish.componentWillUnmount();
	        }
	        if (this.refs.others) {
	            this.refs.others.componentWillUnmount();
	        }
	        $.ajax({
	            url: "form/submit",
	            contentType: 'application/json',
	            type: 'POST',
	            data: JSON.stringify({
	                eventID: this.state.eventID,
	                writetime: this.state.writetime,
	                browserinfo: this.state.browserinfo,
	                baseinfo: this.state.baseinfo,
	                skills: this.state.skills,
	                introduction: this.state.introduction,
	                wish: this.state.wish,
	                reason: this.state.reason,
	                others: this.state.others,
	                remark: this.state.remark
	            }),
	            success: function (data) {
	                console.log(data);
	                switch (data.code) {
	                    case 0:
	                        window.location.href = '/#/person/info';
	                        break;
	                    default:
	                        console.log(data.msg);
	                        break;
	                }
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error("ajax请求发起失败");
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        var backgroundStyle = {
	            top: '60px',
	            bottom: '0px',
	            left: '0px',
	            right: '0px',
	            position: 'fixed',
	            overflow: 'auto',
	            background: '#f77968'
	        };
	        var timeLineStyle = {
	            marginTop: '110px'
	        };
	        var bordStyle = {
	            width: '1000px'
	        };
	        var titleStyle = {
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#ffffff',
	            marginTop: '28px',
	            marginBottom: '28px'
	        };
	        var buttonGroupStyle = {
	            float: 'right',
	            marginTop: '160px'
	        };
	        return React.createElement(
	            'div',
	            { style: backgroundStyle },
	            React.createElement(
	                'div',
	                { className: 'container-fluid' },
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    React.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        this.state.event ? React.createElement(
	                            'big',
	                            { style: titleStyle, className: 'center-block' },
	                            this.state.event.name
	                        ) : null
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'row' },
	                    React.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        React.createElement(
	                            'div',
	                            { className: 'center-block', style: bordStyle },
	                            React.createElement(
	                                'div',
	                                { className: 'dank-time-line' },
	                                React.createElement(
	                                    'big',
	                                    { className: this.state.page == 1 ? "dank-time-node-active" : "dank-time-node", onClick: function () {
	                                            this.setState({ page: this.state.pagesNumber[0] });
	                                        }.bind(this) },
	                                    this.state.pagesNumber[0]
	                                ),
	                                this.state.pagesState[1] ? React.createElement(
	                                    'big',
	                                    { className: this.state.page == this.state.pagesNumber[1] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                            this.setState({ page: this.state.pagesNumber[1] });
	                                        }.bind(this) },
	                                    this.state.pagesNumber[1]
	                                ) : null,
	                                this.state.pagesState[2] ? React.createElement(
	                                    'big',
	                                    { className: this.state.page == this.state.pagesNumber[2] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                            this.setState({ page: this.state.pagesNumber[2] });
	                                        }.bind(this) },
	                                    this.state.pagesNumber[2]
	                                ) : null,
	                                this.state.pagesState[3] ? React.createElement(
	                                    'big',
	                                    { className: this.state.page == this.state.pagesNumber[3] ? "dank-time-node-active" : "dank-time-node", style: timeLineStyle, onClick: function () {
	                                            this.setState({ page: this.state.pagesNumber[3] });
	                                        }.bind(this) },
	                                    this.state.pagesNumber[3]
	                                ) : null
	                            ),
	                            this.state.page == this.state.pagesNumber[0] && this.state.pagesState[0] ? React.createElement(Baseinfo, { ref: 'baseinfo', data: this.state.baseinfo, dataRecall: this.dataRecall }) : null,
	                            this.state.page == this.state.pagesNumber[1] && this.state.pagesState[1] ? React.createElement(Person, { ref: 'person', introduction: this.state.introduction, skills: this.state.skills, schema: this.state.event.formschema, dataRecall: this.dataRecall }) : null,
	                            this.state.page == this.state.pagesNumber[2] && this.state.pagesState[2] ? React.createElement(Wish, { ref: 'wish', wish: this.state.wish, reason: this.state.reason, schema: this.state.event.formschema, dataRecall: this.dataRecall }) : null,
	                            this.state.page == this.state.pagesNumber[3] && this.state.pagesState[3] ? React.createElement(Others, { ref: 'others', others: this.state.others, schema: this.state.event.formschema, dataRecall: this.dataRecall }) : null,
	                            React.createElement(
	                                'div',
	                                { style: buttonGroupStyle },
	                                React.createElement(
	                                    'a',
	                                    { className: 'dank-button-2', onClick: this.lastPage },
	                                    '上一页'
	                                ),
	                                React.createElement(
	                                    'a',
	                                    { className: 'dank-button-2', onClick: this.nextPage },
	                                    '下一页'
	                                ),
	                                React.createElement(
	                                    'a',
	                                    { className: 'dank-button-2', onClick: this.submit },
	                                    '提交'
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }

	});

	var Baseinfo = React.createClass({
	    displayName: 'Baseinfo',

	    getInitialState: function getInitialState() {
	        return {
	            name: this.props.data.name,
	            sex: this.props.data.sex,
	            origin: this.props.data.origin,
	            nation: this.props.data.nation,
	            schoolID: this.props.data.schoolID,
	            politicalStatus: this.props.data.politicalStatus,
	            telnumber: this.props.data.telnumber,
	            telshort: this.props.data.telshort,
	            email: this.props.data.email,
	            qq: this.props.data.qq,
	            major: this.props.data.major,
	            birth: this.props.data.birth,
	            address: this.props.data.address
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	    },

	    handleChange: function handleChange(event) {
	        this.setState(_defineProperty({}, event.target.getAttribute('name'), event.target.value));
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        var data = {
	            name: this.state.name,
	            sex: this.state.sex,
	            origin: this.state.origin,
	            nation: this.state.nation,
	            schoolID: this.state.schoolID,
	            politicalStatus: this.state.politicalStatus,
	            telnumber: this.state.telnumber,
	            telshort: this.state.telshort,
	            email: this.state.email,
	            qq: this.state.qq,
	            major: this.state.major,
	            birth: this.state.birth,
	            address: this.state.address
	        };
	        this.props.dataRecall('baseinfo', data);
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '20px',
	            fontWeight: 'bold'
	        };
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { style: titleStyle },
	                React.createElement(
	                    'b',
	                    null,
	                    '个人信息'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'd8' },
	                React.createElement(
	                    'b',
	                    null,
	                    React.createElement(
	                        'table',
	                        { className: 'center-block dank-form-table' },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    { className: 'form-group' },
	                                    '姓　　名'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.name, onChange: this.handleChange, name: 'name', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '性　　别'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement(
	                                        'label',
	                                        { className: 'dank-checkbox-inline' },
	                                        React.createElement('input', { type: 'radio', name: 'sex', value: '男' }),
	                                        React.createElement(
	                                            'b',
	                                            null,
	                                            ' 男'
	                                        )
	                                    ),
	                                    React.createElement(
	                                        'label',
	                                        { className: 'dank-checkbox-inline' },
	                                        React.createElement('input', { type: 'radio', name: 'sex', value: '女' }),
	                                        React.createElement(
	                                            'b',
	                                            null,
	                                            ' 女'
	                                        )
	                                    )
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '籍　　贯'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.origin, onChange: this.handleChange, name: 'origin', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '民　　族'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.nation, onChange: this.handleChange, name: 'nation', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '学　　号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.schoolID, onChange: this.handleChange, name: 'schoolID', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '政治面貌'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.politicalStatus, onChange: this.handleChange, name: 'politicalStatus', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '手机长号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.telnumber, onChange: this.handleChange, name: 'telnumber', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '手机短号'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.telshort, onChange: this.handleChange, name: 'telshort', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '邮　　箱'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.email, onChange: this.handleChange, name: 'email', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    'ＱＱ号码'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.qq, onChange: this.handleChange, name: 'qq', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '专　　业'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.major, onChange: this.handleChange, name: 'major', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '出生日期'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.birth, onChange: this.handleChange, name: 'birth', className: 'dank-form-input', type: 'text' })
	                                )
	                            ),
	                            React.createElement(
	                                'tr',
	                                { className: '' },
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    '寝室地址'
	                                ),
	                                React.createElement(
	                                    'td',
	                                    null,
	                                    React.createElement('input', { value: this.state.address, onChange: this.handleChange, name: 'address', className: 'dank-form-input', type: 'text' })
	                                ),
	                                React.createElement('td', null)
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'd9' },
	                React.createElement(
	                    'div',
	                    { className: 'd10' },
	                    React.createElement('img', { src: 'img/photo.png', className: 'i6' }),
	                    React.createElement(
	                        'a',
	                        { className: 'a21' },
	                        React.createElement(
	                            'b',
	                            null,
	                            '上传照片'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Person = React.createClass({
	    displayName: 'Person',

	    getInitialState: function getInitialState() {
	        return {
	            skills: {
	                delete: this.props.schema.skills.delete,
	                title: this.props.schema.skills.title,
	                chosen: this.props.skills.chosen
	            },
	            introduction: {
	                delete: this.props.schema.introduction.delete,
	                title: this.props.schema.introduction.title,
	                content: this.props.introduction.content
	            }
	        };
	    },

	    introHandleChange: function introHandleChange(event) {
	        this.setState({
	            introduction: {
	                delete: this.state.introduction.delete,
	                title: this.state.introduction.title,
	                content: event.target.value
	            }
	        });
	    },

	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	        $("input[type='checkbox']").on('ifChecked', function (event) {
	            this.checked(event);
	        }.bind(this));
	        $("input[type='checkbox']").on('ifUnchecked', function (event) {
	            this.unchecked(event);
	        }.bind(this));
	    },

	    checked: function checked(event) {
	        var chosen = this.state.skills.chosen;
	        chosen.push(event.target.value);
	        this.setState({ skills: {
	                delete: this.state.skills.delete,
	                title: this.state.skills.title,
	                chosen: chosen
	            } });
	    },

	    unchecked: function unchecked(event) {
	        var value = event.target.value;
	        var chosen = this.state.skills.chosen;
	        chosen.splice(chosen.indexOf(value), 1);
	        this.setState({ skills: {
	                delete: this.state.skills.delete,
	                title: this.state.skills.title,
	                chosen: chosen
	            } });
	    },

	    otherCheck: function otherCheck(event) {
	        var chosen = this.state.skills.chosen;
	        chosen[0] = event.target.value;
	        this.setState({ skills: {
	                delete: this.state.skills.delete,
	                title: this.state.skills.title,
	                chosen: chosen
	            } });
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        var skills = {
	            delete: this.state.skills.delete,
	            title: this.state.skills.title,
	            chosen: this.state.skills.chosen
	        };
	        var introduction = {
	            delete: this.state.introduction.delete,
	            title: this.state.introduction.title,
	            content: this.state.introduction.content
	        };
	        this.props.dataRecall('skills', skills);
	        this.props.dataRecall('introduction', introduction);
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'

	        };
	        var skillNodes = this.props.schema.skills.option.map(function (skill) {
	            return React.createElement(
	                'div',
	                { className: 'dank-checkbox-inOneLine', key: skill },
	                this.props.skills.chosen.indexOf(skill) > 0 ? React.createElement('input', { type: 'checkbox', value: skill, defaultChecked: true }) : React.createElement('input', { type: 'checkbox', value: skill }),
	                React.createElement(
	                    'label',
	                    null,
	                    ' ',
	                    skill,
	                    ' '
	                )
	            );
	        }.bind(this));
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '个人介绍'
	                )
	            ),
	            this.props.schema.skills.delete ? null : React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.props.schema.skills.title
	                        )
	                    ),
	                    skillNodes,
	                    this.props.schema.skills.free ? React.createElement(
	                        'div',
	                        { className: 'dank-form-group-inline' },
	                        React.createElement(
	                            'label',
	                            { className: 'dank-label dank-select-label' },
	                            '其他'
	                        ),
	                        React.createElement('input', { type: 'text', defaultValue: this.props.skills.chosen[0], onBlur: this.otherCheck, className: 'dank-form-input dank-select-input' })
	                    ) : null
	                )
	            ),
	            this.props.schema.introduction.delete ? null : React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.props.schema.introduction.title
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'b',
	                            null,
	                            React.createElement('textarea', { name: 'introduction.content', value: this.state.introduction.content, onChange: this.introHandleChange, className: 'text-left tt1' })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	var Wish = React.createClass({
	    displayName: 'Wish',

	    getInitialState: function getInitialState() {
	        return {
	            wish: {
	                delete: this.props.schema.wish.delete,
	                title: this.props.schema.wish.title,
	                chosen: this.props.wish.chosen
	            },
	            reason: this.props.reason
	        };
	    },

	    reasonChange: function reasonChange(event) {
	        var reason = this.state.reason;
	        var index = event.target.getAttribute('title');
	        reason[index] = event.target.value;
	        this.setState({
	            reason: reason
	        });
	    },

	    componentDidMount: function componentDidMount() {
	        window.iCheck();
	        $("input[type='checkbox']").on('ifChecked', function (event) {
	            this.checked(event);
	        }.bind(this));
	        $("input[type='checkbox']").on('ifUnchecked', function (event) {
	            this.unchecked(event);
	        }.bind(this));
	    },

	    checked: function checked(event) {
	        var chosen = this.state.wish.chosen;
	        chosen.push(event.target.value);
	        this.setState({ wish: {
	                delete: this.state.wish.delete,
	                title: this.state.wish.title,
	                chosen: chosen
	            } });
	    },

	    unchecked: function unchecked(event) {
	        var value = event.target.value;
	        var chosen = this.state.wish.chosen;
	        chosen.splice(chosen.indexOf(value), 1);
	        this.setState({ wish: {
	                delete: this.state.wish.delete,
	                title: this.state.wish.title,
	                chosen: chosen
	            } });
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        var wish = {
	            delete: this.state.wish.delete,
	            title: this.state.wish.title,
	            chosen: this.state.wish.chosen
	        };
	        var reason = this.state.reason;
	        this.props.dataRecall('wish', wish);
	        this.props.dataRecall('reason', reason);
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'

	        };
	        var wishNodes = this.props.schema.wish.option.map(function (wish) {
	            return React.createElement(
	                'div',
	                { className: 'dank-checkbox-inOneLine', key: wish },
	                this.props.wish.chosen.indexOf(wish) > 0 ? React.createElement('input', { type: 'checkbox', value: wish, defaultChecked: true }) : React.createElement('input', { type: 'checkbox', value: wish }),
	                React.createElement(
	                    'label',
	                    null,
	                    ' ',
	                    wish,
	                    ' '
	                )
	            );
	        }.bind(this));

	        var reasonNodes = this.state.wish.chosen.map(function (chosen, i) {
	            if (i == 0) {
	                return null;
	            } else {
	                return React.createElement(
	                    'div',
	                    { className: 'd24', key: i },
	                    React.createElement(
	                        'div',
	                        { className: 'text-left d25' },
	                        React.createElement(
	                            'h1',
	                            { className: 'h1f dank-form-h2' },
	                            React.createElement(
	                                'b',
	                                null,
	                                '希望进入第',
	                                i,
	                                '志愿 ',
	                                chosen,
	                                ' 的原因是'
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            null,
	                            React.createElement(
	                                'b',
	                                null,
	                                React.createElement('textarea', { title: i, value: this.state.reason[i], onChange: this.reasonChange, className: 'text-left tt1' })
	                            )
	                        )
	                    )
	                );
	            }
	        }.bind(this));

	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '志愿选择'
	                )
	            ),
	            this.props.schema.wish.delete ? null : React.createElement(
	                'div',
	                { className: 'd24' },
	                React.createElement(
	                    'div',
	                    { className: 'text-left d25' },
	                    React.createElement(
	                        'h1',
	                        { className: 'h1f dank-form-h2' },
	                        React.createElement(
	                            'b',
	                            null,
	                            this.props.schema.wish.title
	                        )
	                    ),
	                    wishNodes
	                )
	            ),
	            reasonNodes
	        );
	    }
	});

	var Others = React.createClass({
	    displayName: 'Others',

	    getInitialState: function getInitialState() {
	        return {
	            others: this.props.others
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        /*iCheck initialize*/
	        window.iCheck();
	        $("input[type='checkbox']").on('ifChecked', function (event) {
	            this.otherComponentUpdater(event, 1);
	        }.bind(this));
	        $("input[type='checkbox']").on('ifUnchecked', function (event) {
	            this.otherComponentUpdater(event, 0);
	        }.bind(this));
	        $("input[type='radio']").on('ifChecked', function (event) {
	            this.otherComponentUpdater(event, 1);
	        }.bind(this));
	    },

	    otherComponentUpdater: function otherComponentUpdater(event, checkState) {
	        var object = event.target;
	        //console.log(object);
	        var index = object.getAttribute('name');
	        //console.log(index);
	        var others = this.state.others;
	        var old = others[index];
	        var element;
	        switch (old.type) {
	            case 'single-text':
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    content: object.value
	                    //required: tough.required
	                };
	                break;
	            case 'multi-text':
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    content: object.value
	                    //required: tough.required
	                };
	                break;
	            case 'multi-choose':
	                var chosen = old.chosen;
	                if (checkState == 1) //checked
	                    {
	                        chosen.push(object.value);
	                    } else if (checkState == 0) //unchecked
	                    {
	                        chosen.splice(chosen.indexOf(object.value), 1);
	                    } else if (checkState == -1) //check other
	                    {
	                        chosen[0] = object.value;
	                    }
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    //max: rough.max,
	                    chosen: chosen
	                };
	                break;
	            case 'single-choose':
	                //单选暂不实现可自填的功能
	                var chosen = old.chosen;
	                if (checkState == 1) {
	                    chosen = object.value;
	                }
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    //max: rough.max,
	                    chosen: chosen
	                };
	                break;
	            case 'file':
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    url: object.value
	                };
	                break;
	            case 'image':
	                element = {
	                    type: old.type,
	                    title: old.title,
	                    url: object.value
	                };
	                break;
	            default:
	                element = {};
	        }
	        others[index] = element;
	        this.setState({ others: others });
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.props.dataRecall('others', this.state.others);
	    },

	    render: function render() {
	        var bordStyle = {
	            display: 'inline-block',
	            padding: '20px',
	            border: '5px solid #ffffff',
	            borderRadius: '8px',
	            width: '758px',
	            height: 'auto',
	            minHeight: '618px',
	            _height: '618px',
	            marginLeft: '30px',
	            marginBottom: '30px'
	        };
	        var titleStyle = {
	            display: 'block',
	            textAlign: 'center',
	            fontSize: '30px',
	            color: '#FFFFFF',
	            margin: '10px',
	            fontWeight: 'bold'
	        };
	        var checkboxStyle = {
	            color: '#FFFFFF',
	            marginBottom: '20px'

	        };
	        var otherNodes = this.props.schema.others.map(function (other, i) {
	            switch (other.type) {
	                case 'single-text':
	                    return React.createElement(
	                        'div',
	                        { className: 'd24', key: i },
	                        React.createElement(
	                            'div',
	                            { className: 'text-left d25' },
	                            React.createElement(
	                                'h1',
	                                { className: 'h1f dank-form-h2' },
	                                React.createElement(
	                                    'b',
	                                    null,
	                                    other.title
	                                )
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('input', { type: 'text', name: i, defaultValue: this.state.others[i].content, onChange: function (event) {
	                                        this.otherComponentUpdater(event, null);
	                                    }.bind(this), className: 'dank-form-single-text' })
	                            )
	                        )
	                    );
	                    break;
	                case 'multi-text':
	                    return React.createElement(
	                        'div',
	                        { className: 'd24', key: i },
	                        React.createElement(
	                            'div',
	                            { className: 'text-left d25' },
	                            React.createElement(
	                                'h1',
	                                { className: 'h1f dank-form-h2' },
	                                React.createElement(
	                                    'b',
	                                    null,
	                                    other.title
	                                )
	                            ),
	                            React.createElement(
	                                'div',
	                                null,
	                                React.createElement('textarea', { name: i, defaultValue: this.state.others[i].content, onChange: function (event) {
	                                        this.otherComponentUpdater(event, null);
	                                    }.bind(this), className: 'text-left tt1' })
	                            )
	                        )
	                    );
	                    break;
	                case 'multi-choose':
	                    return React.createElement(
	                        'div',
	                        { className: 'text-left d25', key: i },
	                        React.createElement(
	                            'h1',
	                            { className: 'h1f dank-form-h2' },
	                            React.createElement(
	                                'b',
	                                null,
	                                other.title
	                            )
	                        ),
	                        other.option.map(function (option) {
	                            option = "" + option;
	                            return React.createElement(
	                                'div',
	                                { className: 'dank-checkbox-inOneLine', key: option },
	                                this.props.others[i].chosen.indexOf(option) > 0 ? React.createElement('input', { type: 'checkbox', name: i, value: option, defaultChecked: true }) : React.createElement('input', { type: 'checkbox', name: i, value: option }),
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    ' ',
	                                    option,
	                                    ' '
	                                )
	                            );
	                        }.bind(this)),
	                        other.free ? React.createElement(
	                            'div',
	                            { className: 'dank-form-group-inline' },
	                            React.createElement(
	                                'label',
	                                { className: 'dank-label dank-select-label' },
	                                '其他'
	                            ),
	                            React.createElement('input', { type: 'text', name: i, defaultValue: this.state.others[i].chosen[0], onBlur: function (event) {
	                                    this.otherComponentUpdater(event, -1);
	                                }.bind(this), className: 'dank-form-input dank-select-input' })
	                        ) : null
	                    );
	                    break;
	                case 'single-choose':
	                    //单选暂不实现可自填的功能
	                    return React.createElement(
	                        'div',
	                        { className: 'text-left d25', key: i },
	                        React.createElement(
	                            'h1',
	                            { className: 'h1f dank-form-h2' },
	                            React.createElement(
	                                'b',
	                                null,
	                                other.title
	                            )
	                        ),
	                        other.option.map(function (option) {
	                            option = "" + option;
	                            return React.createElement(
	                                'div',
	                                { className: 'dank-radio-inOneLine', key: option },
	                                this.props.others[i].chosen == option ? React.createElement('input', { type: 'radio', name: i, value: option, defaultChecked: true }) : React.createElement('input', { type: 'radio', name: i, value: option }),
	                                React.createElement(
	                                    'label',
	                                    null,
	                                    ' ',
	                                    option,
	                                    ' '
	                                )
	                            );
	                        }.bind(this))
	                    );
	                    break;
	                case 'file':
	                    return null;
	                    break;
	                case 'image':
	                    return null;
	                    break;
	                default:
	                    return null;
	            }
	        }.bind(this));
	        return React.createElement(
	            'div',
	            { style: bordStyle },
	            React.createElement(
	                'h1',
	                { className: 'h1a' },
	                React.createElement(
	                    'b',
	                    null,
	                    '其他问题'
	                )
	            ),
	            otherNodes
	        );
	    }
	});

/***/ }
/******/ ]);