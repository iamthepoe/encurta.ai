const ServiceResponse = require('../models/ServiceResponse.js');

const response = (status, message, error = false, data = null) => {
	let body = {};
	if (data !== null) body.data = data;
	const response = new ServiceResponse(status, error, body, message);
	return response;
};

module.exports = response;
