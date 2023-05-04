const express = require('express');

const router = express.Router();

const User = require('../UserSchema');

router.get('/', async (_, res) => {
	const users = await User.find({}, { createdAt: 0, updatedAt: 0, __v: 0 });
	res.status(200).json(users);
});

router.post('/', async (req, res) => {
	const { name, surname, age } = req.body;

	if (!name || !surname || !age) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	const newUser = new User({
		name,
		surname,
		age,
	});

	try {
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;
