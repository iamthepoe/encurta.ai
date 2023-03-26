const express = require('express');
const router = express.Router();
const urlFactory = require('../factories/UrlFactory.js');
const urlService = urlFactory();

router.get('/:hash', async (req, res) => {
	const { hash } = req.params;
	const result = await urlService.findUrl(hash);
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

router.post('/url', async (req, res) => {
	const { originalUrl } = req.body;
	const result = await urlService.create({ originalUrl, userId: 'posopda' });
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});
module.exports = router;
