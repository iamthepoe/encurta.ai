const express = require('express');
const router = express.Router();
const userFactory = require('../factories/UserFactory.js');
const userService = userFactory();

router.post('/users', async (req, res) => {
	const { name, email, password } = req.body;
	const result = await userService.create({ name, email, password });
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

router.post('/users/auth', async (req, res) => {
	const { email, password } = req.body;
	const result = await userService.login({ email, password });
	const { status, body, error, message } = result;
	return res.status(status).json({ body, error, message });
});

module.exports = router;
