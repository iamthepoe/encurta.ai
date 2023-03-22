class HashService {
	constructor(response, repository) {
		this.repository = repository;
		this.response = response;
	}

	async findFreeHash() {
		try {
			const hash = await this.repository.findOne({ inUse: false });
			return this.response(200, 'Finded hash', false, { hash });
		} catch (e) {
			return this.response(400, e, true);
		}
	}
}

module.exports = HashService;
