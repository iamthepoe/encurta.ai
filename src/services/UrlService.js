class UrlService {
	constructor(response, repository, hashService) {
		this.repository = repository;
		this.hashService = hashService;
		this.response = response;
	}

	async create(data) {
		const { originalUrl, userId } = data;
		if (!originalUrl.trim() || !userId.trim())
			return this.response(400, 'You have empty fields!', true);

		try {
			const hashResponse = await this.hashService.findFreeHash();
			const { hash } = hashResponse.body.data;
			const shortedUrl = await this.repository.create({
				originalUrl,
				userId,
				hash,
			});
			return this.response(201, 'Created.', false, shortedUrl);
		} catch (e) {
			return this.response(400, e, true);
		}
	}
}

module.exports = UrlService;
