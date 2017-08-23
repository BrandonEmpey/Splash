const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const spaSchema = new Schema({
	name: 		String,
	width:  	String,
	length: 	String,
	depth: 		String,
	cost: 		Number,
	image: 		String,
	msrp: 		Number,
	margin:		Number,
	capacity:	Number,
	jets:		Number,
	options: {
		autoVac:		false,
		stepSaver:		false,
		autoCover:		false,
		hardCover:		false,
		color:			false,
		tile:			false,
		glassTile:		false,
		Misc:			Number
	}
});

const spaModel = mongoose.model('Spa', spaSchema);

module.exports = spaModel;