var core = require('./core');

function reducer(state,action){
	if (typeof state === 'undefined') {
    	return {
			entries: [],
			vote: null,
		};
  	}
	
	switch(action.type) {
		case 'SET_ENTRIES':
			return core.setEntries(action.entries);
		case 'NEXT':
			return core.next(state);
		case 'VOTE':
			return core.vote(state, action.select);
	}
	return state;
}


module.exports = reducer; 