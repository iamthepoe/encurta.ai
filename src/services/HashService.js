const response = require('../factories/ResponseFactory.js');

class HashService {
	constructor(repository) {
		this.repository = repository;
	}

	async findFreeHash() {
		try {
			const hash = await this.repository.findOne({ inUse: false });
			return response(200, 'Finded hash', false, { hash });
		} catch (e) {
			return response(400, e, true);
		}
	}
}

module.exports = HashService;
