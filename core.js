function setEntries(entries) {
	return {
		entries: entries,
	};
}

function getWinner(vote) {
	if (!vote) {
		return [];
	}

	var a = vote.pair[0];
	var b = vote.pair[1];

	var aVotes = vote.tally[a];
	var bVotes = vote.tally[b];

	if ( aVotes>bVotes ) {
		return [a];
	} else if (aVotes < bVotes){
		return [b];
	} else {
		return [a,b];
	}
	
};

function next(state) {
	var _entries = state.entries.concat(getWinner(state.vote));

	if (_entries.length === 1) {
		return Object.assign({}, state, {
			winner: _entries[0],
		})
	}

	var pair = _entries.splice(0, 2);

	return Object.assign({}, state, {
		entries: _entries,
		vote: {
			pair: pair,
		},
	});
}

function vote(state, select) {
	var _vote = Object.assign({}, state.vote);

	if (!_vote.hasOwnProperty('tally')) {
		_vote.tally = {};
	}

	if (!_vote.tally.hasOwnProperty(select)) {
		_vote.tally[select] = 0	;
	}
	_vote.tally[select]++;

	return Object.assign({}, state , {
		vote: _vote
	}) 
};

module.exports = {
	setEntries: setEntries,
	next: next,
	vote: vote,
};
