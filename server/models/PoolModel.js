const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const poolSchema = new Schema({
	name: 	String,
	width:  String,
	length: String,
	depth:  String,
	cost: 	Number,
	msrp: 	Number,
	image: 	String,
	owners:	[],
	margin:	Number,
	options: {
		wildRide:		false,
		turboTwister:	false,
		slidePrep:		false,
		waterFeature:	false,
		ledLight:		Number,
		autoVac:		false,
		stepSaver:		false,
		autoCover:		false,
		autoCoverPrep:	false,
		color:			false,
		tile:			false,
		glassTile:		false,
		swimJets:		false,
		misc:			Number
	}
});

const poolModel = mongoose.model('Pool', poolSchema);

module.exports = poolModel;

