class HashService {
	constructor(response, repository) {
		this.repository = repository;
		this.response = response;
	}

	async findFreeHash() {
		try {
			const hash = await this.repository.findOne({ inUse: false });
			hash.inUse = true;
			await hash.save();
			return this.response(200, 'Finded hash', false, {
				hash: hash.hash,
			});
		} catch (e) {
			return this.response(400, e, true);
		}
	}
}

module.exports = HashService;
