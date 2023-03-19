const mongoose = require('../database/connection.js');

const UrlSchema = new mongoose.Schema({
	original_url: { type: String, required: true },
	user_id: { type: String, required: true },
	hash: { type: String, required: true },
});

UrlSchema.set('timestamps', true);

module.exports = mongoose.model('url', UrlSchema);
