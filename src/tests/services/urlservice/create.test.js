const { test, mock } = require('node:test');
const assert = require('node:assert');
const response = require('../../../factories/ResponseFactory.js');
const UrlService = require('../../../services/UrlService.js');
const HashService = require('../../../services/HashService.js');
const InMemoryUrlRepository = require('../../repositories/urlrepository/InMemoryUrlRepository.js');
const InMemoryHashRepository = require('../../repositories/hashrepository/InMemoryHashRepository.js');
const inMemoryUrlRepository = new InMemoryUrlRepository();
const inMemoryHashRepository = new InMemoryHashRepository();
const hashService = new HashService(response, inMemoryHashRepository);
const urlService = new UrlService(response, inMemoryUrlRepository, hashService);

test('create a new short url', async () => {
	const response = await urlService.create({
		originalUrl: 'www.google.com',
		userId: 'fe6eebb7-36f4-487e-aae4-415c35e4d4e',
	});
	const { status, body, error } = response;
	assert.strictEqual(status, 201);
	assert.strictEqual(error, false);
	assert.ok(body.data);
});

test('find original link by the short url', async () => {
	const response = await urlService.findUrl('XzS/np4');
	const { status, body, error } = response;
	assert.strictEqual(status, 200);
	assert.strictEqual(error, false);
	assert.ok(body.data.originalUrl);
});
