// div element containing all products
const productList = document.getElementById('product-list');
const backdrop = document.getElementById('backdrop');
const cart = document.getElementById('cart');

// products list data
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

// type CartItem = {
// 	 id: string,
// 	 count: number,
// }
// CartItem[]
const cartList = JSON.parse(localStorage.getItem('cartList')) ?? [];

// fill the list with products
products.forEach((item) => {
	productList.innerHTML += `
    <li data-id="${item.id}" >
      <h3>${item.title}</h3>
      <image src="${item.images[0]}" width="300" height="300" />
      <p class="footer">
        <span class="price">${item.price} manat</span>
        <span class="count">${item.count} eded</span>
      </p>
      <button>add to cart</button>
    </li>
  `;
});

// add event listener to the list
productList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		// get the id of the product
		const id = event.target.parentNode.getAttribute('data-id');
		// get the product from the cart
		const found = cartList.find((cItem) => cItem.id === id);

		if (found) {
			// if the product is already in the cart, increase the count
			found.count++;
		} else {
			// else add the product to the cart
			cartList.push({ id, count: 1 });
		}
		localStorage.setItem('cartList', JSON.stringify(cartList));
	}
});

// div element containing the cart
const cartKey = document.getElementById('cart-key');

cartKey.addEventListener('click', () => {
	backdrop.classList.add('open');
	cart.classList.add('open');
	updateCart();
	const listener = backdrop.addEventListener('click', (event) => {
		event.stopPropagation();

		if (event.target.tagName === 'BUTTON') {
			const id = event.target.parentNode.getAttribute('data-id');
			cartList.splice(
				cartList.findIndex((item) => item.id === id),
				1,
			);
			updateCart();
		}

		if (event.target === backdrop) {
			backdrop.classList.remove('open');
			cart.classList.remove('open');

			backdrop.removeEventListener('click', listener);
		}
	});
});

function updateCart() {
	// clear the cart
	cart.innerHTML = '';

	// initialize the total price
	let total = 0;

	// fill the cart with calrt list items
	cartList.forEach((item) => {
		const product = products.find((p) => p.id === item.id);

		// calculate the total price
		total += product.price * item.count;

		cart.innerHTML += `
			<div class='cart-item' data-id='${product.id}' role='listitem'>
				<h3>${product.title}</h3>
				<p>price: ${product.price} manat</p>
				<p>count: <input value='${
					item.count
				}' type='number' min='1' onchange='handleInputChange(${item.id})' /></p>
				<p>total: ${product.price * item.count} manat</p>
				<button>remove ${product.title}</button>
			</div>
		`;
	});

	if (cartList.length) {
		// add the total price to the cart
		cart.innerHTML += `<h4 class='sum'>${total} manats</h4>`;
	} else {
		cart.innerHTML = '<h2>Cart is empty</h2>';
	}
}

function handleInputChange(id) {
	const item = cartList.find((cardListItem) => cardListItem.id == id);
	item.count++;
	updateCart();
}
