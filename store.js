var redux = require('redux');
var reducer = require('./reducer');
var createLogger = require('redux-node-logger');


var logger = createLogger();

function makeStore(){
	return redux.createStore(reducer,redux.applyMiddleware(logger));
}

module.exports = makeStore;
