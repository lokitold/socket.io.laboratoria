var socket = require('socket.io');

function startServer(store){
	var io = socket().attach((process.env.PORT || 8080));

	store.subscribe(function(){
		io.emit('state', store.getState());
	});

	io.on('connection', function(socket){
		socket.emit('state', store.getState());
		socket.on('action', store.dispatch.bind(store));
	});
};

module.exports = startServer;
