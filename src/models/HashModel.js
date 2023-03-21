const mongoose = require('../database/connection.js');

const HashSchema = new mongoose.Schema({
	hash: { type: String, required: true, unique: true },
	inUse: { type: Boolean, default: false },
});

HashSchema.set('timestamps', true);

module.exports = mongoose.model('hash', HashSchema);
