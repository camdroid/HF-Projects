var lyrics = ["She wore a raspberry beret. The kind you find in a second-hand store.",
			  "We didn't start the fire. It was always burning, since the world's been turning.",
			   "I'm just a poor boy, nobody loves me. He's just a poor boy, from a poor family!",
			   "That deaf, dumb, and blind kid sure plays a mean pinball."];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomLyric() {
	return lyrics[getRandomInt(0, lyrics.length)];
}

module.exports.getRandomLyric = getRandomLyric;