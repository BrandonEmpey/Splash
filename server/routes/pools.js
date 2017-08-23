
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const poolRouter = express.Router();
const Pool = require('../models/poolModel');



// router.get('/', function(req, res) {
// 	res.json({ message: 'hooray! welcome to our api!' });
// });


function pool ()
{
	
}
	poolRouter.route('/')
		.post(function (req, res)
		{
			const pool = new Pool(req.body);
			pool.save();
		})
		.get(function (req, res)
		{
			let query = {};

			if (req.query.name)
			{
				query.name = req.query.name;
			}

			Pool.find().then(pools =>
			{
				console.log(pools);
				res.json(pools);
			});
		});


module.exports = poolRouter;




