const express = require('express');
const router = express.Router();
const urlFactory = require('../factories/UrlFactory.js');
const urlService = urlFactory();
const authUser = require('../middlewares/auth.js');

router.get('/:hash', async (req, res) => {
	const { hash } = req.params;
	const result = await urlService.findUrl(hash);
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

router.get('/urls/user', authUser, async (req, res) => {
	const result = await urlService.findUrlsByUser(req.decodedToken.userId);
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

router.post('/urls', authUser, async (req, res) => {
	const { originalUrl } = req.body;

	const result = await urlService.create({
		originalUrl,
		userId: req.decodedToken.userId,
	});

	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

module.exports = router;
