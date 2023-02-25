class LoginUser {
	#username;
	#password;
	constructor(username, password) {
		this.#username = username;
		this.#password = password;
	}
	get username() {
		return this.#username;
	}
	get password() {
		return this.#password;
	}
	changePassword(oldPass, newPass) {
		if (this.#password === oldPass) {
			this.#password = newPass;
		}
	}
}

class User extends LoginUser {
	#id;
	#createdAt;
	constructor(name, surname, password) {
		const username = `${name.toLowerCase()}_${surname.toLowerCase()}`;
		super(username, password);
		this.#id = crypto.randomUUID();
		this.#createdAt = Date.now();
		this.name = name;
		this.surname = surname;
	}
	get id() {
		return this.#id;
	}
}

class Authentication {
	// all users
	users = new Set();

	// logged in users
	sessionUsers = new Set();

	login(user) {
		if (this.sessionUsers.has(user)) {
			return 'olmaz';
		} else if (this.users.has(user)) {
			this.sessionUsers.add(user);
			return 200;
		} else {
			return 'tapilmadi'; // 404
		}
	}

	logout(user) {
		if (this.sessionUsers.has(user)) {
			this.sessionUsers.delete(user);
			return 200;
		} else {
			return 'tapilmadi'; // 404
		}
	}

	register(user) {
		if (this.users.has(user)) {
			return 'olmaz'; // 403 Not Allowed
		} else {
			this.users.add(user);
			return 200;
		}
	}
}

const auth = new Authentication();

const user = new User('John', 'Doe', '1234');
auth.register(user); // 200

// auth.login({ username: 'john_doe', password: '1234' }); // 200

// auth.logout(john_doe); // 200

// if success: 200
// if user is not correct: 400
// if username or password incorrect: 401
// if already logged in: 403
// if user not found: 404
// else: 500
