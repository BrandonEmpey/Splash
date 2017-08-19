const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const prospectRouter = express.Router();

prospectRouter.route('/customers')
	.post(function (req, res)
	{
		const prospect = new Prospect(req.body);
		prospect.save();
	})
	.get(function (req, res){
		let query = {};

		if(req.query.name){
			query.name = req.query.name;
		}
		Prospect.find(query, function(err, books){
			if (err)
				res.status(500).send(err);
			else
				res.json(books);
		});
		return prospectRouter;
	});


module.exports = prospectRouter;




