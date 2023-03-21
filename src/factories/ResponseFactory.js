const ServiceResponse = require('../models/ServiceResponse.js');

const response = (status, message, error = false, body = {}) => {
	const response = new ServiceResponse(status, error, { body }, message);
	return response;
};

module.exports = response;
