const mongoose = require('../database/connection.js');

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

UserSchema.set('timestamps', true);

module.exports = mongoose.model('users', UserSchema);
