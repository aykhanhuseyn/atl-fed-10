// async & await

function getUsersSync() {
	for (let i = 0; i < 1_000_000_000; i++) {}
	for (let i = 0; i < 1_000_000_000; i++) {}
	for (let i = 0; i < 1_000_000_000; i++) {}
	console.log(1);
	return 1;
}

async function getUsers() {
	for (let i = 0; i < 1_000_000_000; i++) {}
	for (let i = 0; i < 1_000_000_000; i++) {}
	for (let i = 0; i < 1_000_000_000; i++) {}
	return 1;
}

// async
// getUsers().then(console.log);
// console.log(222);
// 222
// 1

// getUsersSync()
// console.log(222);
// 1
// 222

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((d) => d.json())
	.then(console.log);

console.log('salam, qadanalim');

// (async function () {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await response.json();
// 	console.log(data);
// })();

// console.log('salam, qadanalim');

// async function api(url, body) {
// 	const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`, {
// 		headers: {
// 			auth: 'my token',
// 		},
// 		body,
// 	});
// 	const data = await response.json();
// 	return data;
// }

// api('posts')

const timeout = setTimeout(() => {
	console.log('salam');
}, 1000);
