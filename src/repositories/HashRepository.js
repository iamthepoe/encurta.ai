class HashRepository {
	constructor(model) {
		this.model = model;
	}

	async update(hash, data) {
		try {
			await this.model.findOneAndUpdate({ hash }, data);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}

	async find(hash) {
		try {
			let queryData = await this.model.find({ hash });
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = HashRepository;
