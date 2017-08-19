const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const customerRouter = express.Router();

customerRouter.route('/customers')
	.post(function (req, res)
	{
		const customer = new Customer(req.body);
		customer.save();
	})
	.get(function (req, res){
		let query = {};

		if(req.query.name){
			query.name = req.query.name;
		}
		Customer.find(query, function(err, books){
			if (err)
				res.status(500).send(err);
			else
				res.json(books);
		});
		return customerRouter;
	});


module.exports = customerRouter;




