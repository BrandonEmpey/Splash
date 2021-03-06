
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const poolRouter = express.Router();
const Pool = require('../models/PoolModel');

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
			res.json(pools);
		});
	});

module.exports = poolRouter;


