const UserModel = require('../models/UserModel.js');
const UserRepository = require('../repositories/UserRepository.js');
const UserService = require('../services/UserService.js');
const response = require('./ResponseFactory.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userFactory = () => {
	const userRepository = new UserRepository(UserModel);
	const userService = new UserService(response, userRepository, bcrypt, jwt);
	return userService;
};

module.exports = userFactory;
