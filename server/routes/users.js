const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.route('/users')
	.post(function (req, res)
	{
		const user = new User(req.body);
		user.save();
	})
	.get(function (req, res){
		let query = {};

		if(req.query.name){
			query.name = req.query.name;
		}
		User.find(query, function(err, customers){
			if (err)
				res.status(500).send(err);
			else
				res.json(customers);
		});
		return userRouter;
	});


module.exports = userRouter;
