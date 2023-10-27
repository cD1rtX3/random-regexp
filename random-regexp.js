function rollArbitrary(decay = -6.876942579151434) {
	return Math.trunc(Math.log(1 - Math.random()) * decay);
}
