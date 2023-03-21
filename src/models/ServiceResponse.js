class ServiceResponse {
	constructor(status, error, body, message) {
		this.status = status;
		this.error = error;
		this.body = body;
		this.message = message;
	}
}

module.exports = ServiceResponse;
