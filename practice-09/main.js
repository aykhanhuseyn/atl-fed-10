const products = [
	{
		id: '1',
		title: 'Anime 1',
		price: 200,
		count: 10,
		images: ['', ''],
	},
	{
		id: '2',
		title: 'Anime 2',
		price: 200,
		count: 10,
		images: ['', ''],
	},
	{
		id: '3',
		title: 'Anime 3',
		price: 200,
		count: 10,
		images: ['', ''],
	},
	{
		id: '4',
		title: 'Anime 4',
		price: 200,
		count: 10,
		images: ['', ''],
	},
	{
		id: '5',
		title: 'Anime 5',
		price: 200,
		count: 10,
		images: ['', ''],
	},
];

const cart = [];
const productList = document.getElementById('product-list');

products.forEach(({ id, count, images, price, title }) => {
	productList.innerHTML += `
    <li data-id="${id}" >
      <h3>${title}</h3>
      <image src="${images[0]}" width="300" height="300" />
      <p class="footer">
        <span class="price">${price} manat</span>
        <span class="count">${count} eded</span>
      </p>
      <button>add to cart</button>
    </li>
  `;
});

// productList.querySelectorAll('button').forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		cart.push(e.target.parentNode.getAttribute('data-id'));
// 	});
// });

productList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const id = event.target.parentNode.getAttribute('data-id');
		cart.push({ [id]: { id, price: 10, count: 1 } });
	}
});

const cartKey = document.getElementById('cart-key');

cartKey.addEventListener('click', () => {
	const backdrop = document.getElementById('backdrop');
	const cart = document.getElementById('cart');
	backdrop.classList.add('open');
	cart.classList.add('open');
	const listener = backdrop.addEventListener('click', (event) => {
		event.stopPropagation();

		if (event.target === backdrop) {
			backdrop.classList.remove('open');
			cart.classList.remove('open');

			backdrop.removeEventListener('click', listener);
		}
	});
});
