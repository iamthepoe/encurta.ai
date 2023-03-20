class InMemoryUrlRepository {
	items = [];

	async create(data) {
		const { originalUrl, userId, hash } = data;
		try {
			const url = { id: this.items.length, originalUrl, userId, hash };
			this.items.push(url);
			return url;
		} catch (e) {
			throw new Error(e);
		}
	}

	async update(id, data) {
		try {
			const index = this.items.findIndex((item) => item.id === id);
			if (index !== -1) this.items[index] = data;
			if (index === -1) throw new Error(`this url doesn't exist!`);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}

	find(data) {
		try {
			const item = this.items.find((item) => item === data);
			if (!item) throw new Error(`this url doesn't exist!`);
			return item;
		} catch (e) {
			throw new Error(e);
		}
	}

	delete(id) {
		try {
			const index = this.items.findIndex((item) => item.id === id);
			if (index !== -1) this.items.splice(index, 1);
			if (index === -1) throw new Error(`this url doesn't exist!`);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = InMemoryUrlRepository;
