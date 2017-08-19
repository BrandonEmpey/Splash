const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

	const poolRouter = express.Router();

	poolRouter.route('/pools')
		.post(function (req, res)
		{
			const pool = new Pool(req.body);
			pool.save();
		})
		.get(function (req, res){
			let query = {};

			if(req.query.name){
				query.name = req.query.name;
			}
			Pool.find(query, function(err, books){
				if (err)
					res.status(500).send(err);
				else
					res.json(books);
			});
			return poolRouter;
		});


	module.exports = poolRouter;




