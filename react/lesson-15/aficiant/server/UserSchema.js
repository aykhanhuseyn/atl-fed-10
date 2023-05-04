const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		name: String,
		surname: String,
		age: Number,
	},
	{
		timestamps: true,
	},
);

const User = model('User', UserSchema);

module.exports = User;
