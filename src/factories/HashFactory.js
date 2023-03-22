const HashModel = require('../models/HashModel.js');
const HashRepository = require('../repositories/HashRepository.js');
const HashService = require('../services/HashService.js');

const hashFactory = () => {
	const hashRepository = new HashRepository(HashModel);
	const hashService = new HashService(hashRepository);
	return hashService;
};

module.exports = hashFactory;
