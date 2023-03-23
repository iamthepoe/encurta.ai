const express = require('express');
const app = express();
const UrlRoutes = require('./routes/UrlRoutes.js');

app.get('/', async (req, res) => {
	res.send('Hello, World!');
});

app.use('/', UrlRoutes);

module.exports = app;
