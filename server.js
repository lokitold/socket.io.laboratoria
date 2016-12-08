var socket = require('socket.io');

function startServer(store){
	var io = socket().attach(8080);

	store.subscribe(function(){
		io.emit('state', store.getState());
	});

	io.on('connection', function(socket){
		socket.emit('state', store.getState());
		socket.on('action', store.dispatch.bind(store));
	});
};

module.exports = startServer;
