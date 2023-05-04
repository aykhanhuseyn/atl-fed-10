const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const uri =
	'mongodb+srv://adam:adamyeyen@cluster0.qpqmlcc.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 12345;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);

	await mongoose.connect(uri, {
		useNewUrlParser: true,
	});

	console.log('Connected to MongoDB');
});
