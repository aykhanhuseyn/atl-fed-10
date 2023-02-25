// setTimeout
const div = document.getElementById('salam');
const classSalam = document.querySelector('.salam');
div.innerText = '10';

// setTimeout(() => {
// 	console.log('5 saniyeden sonra');
// 	div.innerText = '';
// }, 5000);

// setInterval
// callback
// setInterval(() => {
// 	div.innerText = Number(div.innerText) + 1;
// }, 1000);

const interval = setInterval(() => {
	console.log('interval 500');
}, 500);

classSalam.addEventListener('click', () => {
	clearInterval(interval);
});

console.log('normal');

for (let i = 0; i <= 1_000_000_000; i++) {
	if (i === 1_000_000_000) {
		console.log(1_000_000_000);
	}
}

// HTTP

// fetch

// Promise
