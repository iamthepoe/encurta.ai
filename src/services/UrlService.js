class UrlService {
	constructor(response, repository, hashService) {
		this.repository = repository;
		this.hashService = hashService;
		this.response = response;
	}

	async create(data) {
		const { originalUrl, userId } = data;
		if (!originalUrl?.trim() || !userId?.trim())
			return this.response(400, 'You have empty fields!', true);

		try {
			const hashResponse = await this.hashService.findFreeHash();
			const { hash } = hashResponse.body.data;
			await this.repository.create({
				originalUrl,
				userId,
				hash,
			});

			return this.response(201, 'Created.', false, {
				originalUrl,
				hash,
			});
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}

	async findUrl(hash) {
		if (!hash?.trim())
			return this.response(400, 'You have empty fields.', true);

		try {
			const queryData = await this.repository.findOne({ hash });
			if (queryData?.originalUrl == undefined)
				return this.response(404, 'Not found.', true);

			const { originalUrl } = queryData;
			return this.response(200, 'Finded.', false, { originalUrl });
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}

	async findUrlsByUser(userId) {
		if (!userId?.trim())
			return this.response(400, 'You have empty fields.', true);

		try {
			const queryData = await this.repository.find({ userId });

			if (queryData.length === 0)
				return this.response(404, 'Not found.', true);

			const userUrls = queryData.map(({ originalUrl, hash }) => ({
				originalUrl,
				hash,
			}));

			return this.response(200, 'Finded.', false, { userUrls });
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}
}

module.exports = UrlService;
