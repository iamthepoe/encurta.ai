class UserRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		const { name, email, password } = data;
		try {
			const queryData = await this.model.create({
				name,
				email,
				password,
			});
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}

	async findOne(data) {
		try {
			const queryData = await this.model.findOne(data);
			return queryData;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = UserRepository;
