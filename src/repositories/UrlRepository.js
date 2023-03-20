class UrlRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		const { originalUrl, userId, hash } = data;
		try {
			let queryData = await this.model.create({
				originalUrl,
				userId,
				hash,
			});
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}

	async update(id, data) {
		try {
			await this.model.findByIdAndUpdate(id, data);
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

	async delete(id) {
		try {
			await this.model.findByIdAndDelete(id);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = UrlRepository;
