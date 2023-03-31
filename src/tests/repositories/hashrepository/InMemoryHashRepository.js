class InMemoryHashRepository {
	itens = [
		{
			id: 1,
			hash: 'TzM8PJg',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 2,
			hash: 'brMhXrM',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 3,
			hash: '7+DcUG8',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 4,
			hash: 'V7yQkhy',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 5,
			hash: 'sAzKbHk',
			inUse: true,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 6,
			hash: 'zLGQI2Q',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 7,
			hash: 'XzS/np4',
			inUse: true,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 8,
			hash: 'C4k/4yI',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 9,
			hash: '4p4cMWH',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
		{
			id: 10,
			hash: 'znuWtFq',
			inUse: false,
			save: () => {
				return 'Saved hash.';
			},
		},
	];

	update(hash, data) {
		try {
			const index = this.itens.findIndex((item) => item.hash === hash);
			if (index !== -1) this.itens[index] = data;
			if (index === -1) throw new Error(`this url doesn't exist!`);
			return true;
		} catch (e) {
			throw new Error(e);
		}
	}

	find(hash) {
		try {
			const queryResult = this.itens.find((item) => item.hash === hash);
			if (!queryResult) throw new Error(`This hash doesn't exist`);
			return queryResult;
		} catch (e) {
			throw new Error(e);
		}
	}

	findOne(data) {
		const { inUse } = data;
		const queryData = this.itens.find((item) => item.inUse === inUse);
		return queryData;
	}
}

module.exports = InMemoryHashRepository;
