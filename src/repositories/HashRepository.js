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

	async find(data) {
		try {
			let queryData = await this.model.find(data);
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}

	async findOne(data) {
		try {
			let queryData = await this.model.findOne(data);
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = HashRepository;
