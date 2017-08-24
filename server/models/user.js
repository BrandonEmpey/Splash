const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
let { Schema } = mongoose;

let userSchema = new Schema({
	name: 	 	String,
	address:	String,
	phone: 		String,
	email: 		String,
	date: 		Date,
	timeFrame:	String,
	poolId: 	String,
	spaId: 		String,
	adjustment: Number
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);


