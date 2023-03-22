const UrlModel = require('../models/UrlModel.js');
const UrlRepository = require('../repositories/UrlRepository.js');
const UrlService = require('../services/UrlService.js');
const hashFactory = require('./HashFactory.js');
const response = require('./ResponseFactory.js');

const urlFactory = () => {
	const hashService = hashFactory();
	const urlRepository = new UrlRepository(UrlModel);
	const urlService = new UrlService(response, urlRepository, hashService);
	return urlService;
};

module.exports = urlFactory;
