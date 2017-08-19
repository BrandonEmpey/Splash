const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const spaRouter = express.Router();

spaRouter.route('/spas')
	.post(function (req, res)
	{
		const spa = new Spa(req.body);
		spa.save();
	})
	.get(function (req, res){
		let query = {};

		if(req.query.name){
			query.name = req.query.name;
		}
		Spa.find(query, function(err, books){
			if (err)
				res.status(500).send(err);
			else
				res.json(books);
		});
		return spaRouter;
	});


module.exports = spaRouter;




