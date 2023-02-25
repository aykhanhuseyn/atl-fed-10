const _ = require('lodash');
const express = require('express');
const { filter } = require('lodash');
const app = express();

// parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const movies = [
	{
		id: _.uniqueId(),
		title: 'The Shawshank Redemption',
		year: 1994,
	},
	{
		id: _.uniqueId(),
		title: 'The Godfather',
		year: 1972,
	},
];

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/search', (req, res) => {
	const query = req.query;
	console.log('query', query);
	res.send('Hello World!');
});

app.get('/movies', (req, res) => {
	const query = req.query;
	if (_.isEmpty(query) === false) {
		const filtered = filter(movies, { year: +query.year });
		res.send(filtered);
	}
	res.send(movies);
});

app.post('/movies/create', (req, res) => {
	const body = req.body;
	if ('title' in body && 'year' in body) {
		const found = _.find(movies, { title: body.title, year: body.year });
		if (found) {
			res.status(400).send({ message: 'Movie already exists' });
			return;
		}
		const movie = {
			id: _.uniqueId(),
			title: body.title,
			year: body.year,
		};
		movies.push(movie);
		res.send(movie).status(201);
	} else {
		res.status(400).send({ message: 'Bad Request' });
	}
});

// /movies/1
// /movies/2
app.get('/movies/:id', (req, res) => {
	const { id } = req.params;
	res.send(_.find(movies, { id }));
});

// https://tap.az/elanlar?log=true&q%5Bkeywords%5D=iPhone+14+Pro+Max+512&q%5Bregion_id%5D=

// q => query

// [["log", "true"], ["q[keywords]", "iPhone 14 Pro Max 512"], ["q[region_id]", ""]]

// [["order", ""], ["q[user_id]", ""], ["q[contact_id]", ""], ["q[price][]", ""], ["q[price][]", ""], ["q[region_id]", "484"], ["q[keywords]", "iPhone 14 Pro Max 512"]]

app.listen(4444, () => {
	console.log('Example app listening on port 4444!');
});
