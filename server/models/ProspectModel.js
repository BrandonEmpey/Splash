const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const prospectsSchema = new Schema({
	name: 	 	String,
	address:	String,
	phone: 		String,
	email: 		String,
	date: 		Date,
	timeFrame:	String,
	poolId: 	String,
	spaId: 		String,
	rating: 	[]
});

const prospectsModel = mongoose.model('Prospects', prospectsSchema);

module.exports = prospectsModel;