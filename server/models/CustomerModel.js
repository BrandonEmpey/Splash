const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const customerSchema = new Schema({
	name:  String,
	address: String,
	phone:   String,
	email: String,
	date: Date,
	poolId: null,
	spaId: null,
	rating: []
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;