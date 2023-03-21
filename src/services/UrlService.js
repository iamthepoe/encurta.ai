const response = require('../factories/ResponseFactory.js');

class UrlService {
	constructor(repository) {
		this.repository = repository;
	}

	/*async create(data) {
		const { originalUrl, userId } = data;
		if (!originalUrl.trim() || !userId.trim())
			return response(400, true, 'You have empty fields!');
	}*/
}
