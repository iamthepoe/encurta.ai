require('dotenv').config();

class UserService {
	constructor(response, repository, bcrypt, jwt, secret) {
		this.repository = repository;
		this.response = response;
		this.bcrypt = bcrypt;
		this.jwt = jwt;
	}

	async createToken(user, secret, expiresIn = '72h') {
		const token = await this.jwt.sign({ userId: user._id }, secret, {
			expiresIn,
		});
		return token;
	}

	async create(data) {
		const { name, email, password } = data;

		if (!name.trim() || !email.trim() || !password.trim())
			return this.response(400, `You can't send empty values.`, true);

		try {
			const salt = await this.bcrypt.genSalt(10);
			const hashedPassword = await this.hash(password, salt);

			const user = await this.repository.create({
				name,
				email,
				password: hashedPassword,
			});
			const token = await this.createToken(user, process.env.JWT_SECRET);
			return this.response(201, 'Created.', false, { token });
		} catch (e) {
			return this.response(500, `${e}`, true);
		}
	}
}

module.exports = UserService;
