// no body
// GET
// DELETE

// with body
// POST
// PUT
// PATCH

// METHODS

// URL
// METHOD:

// fetch('users/id', {
// 	method: 'PUT',
// 	headers: {
// 		'X-Authorization': 'THIS IS TOKEN',
// 	},
// 	body: JSON.stringify({
// 		name: 'Johnathan',
//     photo: 'fileId_2562873',
// 	}),
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// 	headers: {
// 		auth: 'token',
// 	},
// 	method: 'DELETE',
// 	// body: JSON.stringify({ name: 'JOHN' }),
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// { success: true, error: [], data: {} }

const post = {
	// id: 2,
	userId: 1,
	title: 'qui est esse',
	body:
		'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(post),
})
	.then((response) => response.json())
	.then((json) => console.log(json));

//

// REST
// REpresentational State Transfer

// users
// users/:id
// users/:id/posts
