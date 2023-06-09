require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
	})
	.catch((e) => console.log(e));

module.exports = mongoose;
