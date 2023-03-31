class InMemoryUrlRepository {
	itens = [
		{
			id: 0,
			originalUrl: 'www.brave.com',
			userId: 'johndoe',
			hash: 'XzS/np4',
		},
	];

	create(data) {
		const { originalUrl, userId, hash } = data;
		try {
			const url = { id: this.itens.length, originalUrl, userId, hash };
			this.itens.push(url);
			return url;
		} catch (e) {
			throw new Error(e);
		}
	}

	update(id, data) {
		try {
			const index = this.itens.findIndex((item) => item.id === id);
			if (index !== -1) this.itens[index] = data;
			if (index === -1) throw new Error(`this url doesn't exist!`);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}

	find(data) {
		try {
			const item = this.itens.find((item) => item.hash === data.hash);
			return { originalUrl: item?.originalUrl };
		} catch (e) {
			throw new Error(e);
		}
	}

	findOne(data) {
		try {
			const item = this.itens.find((item) => item.hash === data.hash);
			return { originalUrl: item?.originalUrl };
		} catch (e) {
			throw new Error(e);
		}
	}

	delete(id) {
		try {
			const index = this.itens.findIndex((item) => item.id === id);
			if (index !== -1) this.itens.splice(index, 1);
			if (index === -1) throw new Error(`this url doesn't exist!`);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = InMemoryUrlRepository;
