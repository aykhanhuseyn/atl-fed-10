const div = document.getElementById('salam');
// console.log({ innerText: document.body.innerText });
// console.log({ textContent: document.body.textContent });

// HTTP(S)
// HyperText Transfer Protocol (Secure)
// version 1, 1.1, 2, 3,
// METHODS
//    GET
//    POST
//    PUT
//    PATCT
//    DELETE

// HTTP 1.1 GET /users/1
// HTTP 1.1 DELETE /users/1
// HTTP 1.1 PUT /users/1 BODY={name: 'John'}

// XHR
// XML HTTP Request
// fetch
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const todoURL = BASE_URL + '/todos';
const todoOneURL = todoURL + '/1';

fetch(todoOneURL)
	.then((response) => {
		// if (response.status === 200) {
		// 	console.log('success');
		// } else {
		// 	console.log('failed');
		// }
		return response.json();
		// return response.text();
		// return response.blob(); BLOB IS FILE FORMAT
	})
	.then((json) => {
		// console.log(json);
		// div.innerHTML += `<li data-id=${json.id}>${json.title}</li>`;
	})
	.catch((error) => {
		console.log(error);
	});

fetch(todoURL)
	.then((response) => response.json())
	.then((json) => {
		// console.log(json);
		json.forEach((todo) => {
			div.innerHTML += `<li data-id=${todo.id}>${todo.title}</li>`;
		});
	});

// Promise
// promises to response up

// IN LORU LANGUAGE:  loading, success, error
// State:             pending, fulfilled, rejected

// Result: What promise will give us
const promise = new Promise((resolve, reject) => {
	// resolve(1);
	reject(2);
})
	.catch((value) => {
		console.log('rejected', value);
	})
	.finally(() => {
		console.log('finished');
	});

// normal code
// Micro task queue => Promise, DOM interaction
// Macro task queue => setTimeout

// 1. fetch
// 2. Promise, statuses, then, catch, finally, resolve, reject
// 3. HTTP, status codes, methods
// 4. micro vs macro tasks
// 5. setTimeout setInterval
