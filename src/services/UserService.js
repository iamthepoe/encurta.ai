require('dotenv').config();

class UserService {
	constructor(response, repository, bcrypt, jwt) {
		this.repository = repository;
		this.response = response;
		this.bcrypt = bcrypt;
		this.jwt = jwt;
	}

	async createToken(
		user,
		secret = process.env.JWT_SECRET,
		expiresIn = '72h'
	) {
		const token = await this.jwt.sign({ userId: user._id }, secret, {
			expiresIn,
		});
		return token;
	}

	async verifyPassword(requestPassword, userPassword) {
		const isCorrectPassword = await this.bcrypt.compareSync(
			requestPassword,
			userPassword
		);

		return isCorrectPassword;
	}

	async userExists(data) {
		const user = await this.repository.findOne(data);
		return user ? true : false;
	}

	async create(data) {
		const { name, email, password } = data;

		if (!name.trim() || !email.trim() || !password.trim())
			return this.response(400, `You can't send empty values.`, true);

		try {
			const salt = await this.bcrypt.genSalt(10);
			const hashedPassword = await this.bcrypt.hash(password, salt);
			const userExists = await this.userExists({ email });
			if (userExists)
				return this.response(
					400,
					'This email already is in use.',
					true
				);

			const user = await this.repository.create({
				name,
				email,
				password: hashedPassword,
			});
			const token = await this.createToken(user);
			return this.response(201, 'Created.', false, { token });
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}

	async login(data) {
		const { email, password } = data;

		if (!email.trim() || !password.trim())
			return this.response(400, `You can't send empty values.`, true);

		try {
			const user = await this.repository.findOne({ email });
			if (!user) return this.response(404, 'Not found.', true);

			const isCorrectPassword = await this.verifyPassword(
				password,
				user.password
			);

			if (!isCorrectPassword)
				return this.response(400, 'Incorrect password', true);

			const token = await this.createToken(user);

			return this.response(200, 'Ok.', false, { token });
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}
}

module.exports = UserService;
