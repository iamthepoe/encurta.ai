const mongoose = require('../database/connection.js');

const UrlSchema = new mongoose.Schema({
	originalUrl: { type: String, required: true },
	userId: { type: String, required: true },
	hash: { type: String, required: true },
});

UrlSchema.set('timestamps', true);

module.exports = mongoose.model('urls', UrlSchema);
