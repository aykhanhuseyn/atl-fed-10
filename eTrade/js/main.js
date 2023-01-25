const cartSideBar = document.querySelector('.cart-dropdown');
const closeBtn = document.querySelector('.cart-close');
const openBtn = document.querySelector('.cart-open');

openBtn.addEventListener('click', function () {
	cartSideBar.classList.add('open');
});

closeBtn.addEventListener('click', function () {
	cartSideBar.classList.remove('open');
});

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
}

function ready() {
	// Removing items from cart
	let removeCartButtons = document.getElementsByClassName('cart-remove');
	// console.log(removeCartButtons);
	for (let i = 0; i < removeCartButtons.length; i++) {
		let button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
	let quantityInputs = document.getElementsByClassName('quantity-input');
	for (let i = 0; i < quantityInputs.length; i++) {
		let input = quantityInputs[i];
		input.addEventListener('change', quantityChanged);
	}
	// Add to cart
	let addCart = document.getElementsByClassName('add-to-cart');
	for (let i = 0; i < addCart.length; i++) {
		let button = addCart[i];
		button.addEventListener('click', addCartClicked);
	}
}

// Remove function

function removeCartItem(event) {
	event.target.parentElement.remove();
	updateTotal();
}

// Quantity Change
function quantityChanged(event) {
	let input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateTotal();
}

// Add to cart

function addCartClicked(event) {
	let button = event.target;
	let shopProducts = button.parentElement;
	let title = shopProducts.getElementsByClassName('title')[0].innerText;
	let price = shopProducts.getElementsByClassName('current-price')[0].innerText;
	let productImg = shopProducts.getElementsByClassName('img-fluid')[0].src;
	addProductToCart(title, price, productImg);
}

function addProductToCart(title, price, productImg) {
	var cartShopBox = document.createElement('div');
	cartShopBox.classList.add('cart-item');
	var cartItems = document.getElementsByClassName('cart-item-list')[0];
	cartItemsNames = cartItems.getElementsByClassName('item-title');

	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames[i].innerText == title) {
			alert('You added laready');
			return;
		}
	}

	var cartBoxContent = `
        <box-icon name='x' class="close-btn cart-remove"></box-icon>

        <div class="item-img">
            <a href="single-product.html">
                <img src="${productImg}" class="img-fluid">
            </a>
        </div>

        <div class="item-content">
            <h3 class="item-title"><a href="single-product-3.html">${title}</a></h3>

            <div class="item-price">${price}</div>

            <div class="pro-qty item-quantity">
                <span class="dec qtybtn"> - </span>
                <input type="number" class="quantity-input" value="1">
                <span class="inc qtybtn">+</span>
            </div>
        </div>
    `;

	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox);
	cartShopBox
		.getElementsByClassName('cart-remove')[0]
		.addEventListener('click', removeCartItem);
	console.log(cartShopBox);
}

// Update total
function updateTotal() {
	let cartContent = document.getElementsByClassName('cart-item-list')[0];
	let cartBoxes = cartContent.getElementsByClassName('cart-item');
	let total = 0;

	for (let i = 0; i < cartBoxes.length; i++) {
		let cartBox = cartBoxes[i];
		console.log(cartBox);
		let priceElement = cartBox.getElementsByClassName('item-price')[0];
		let quantityElement = cartBox.getElementsByClassName('quantity-input')[0];
		let price = parseFloat(priceElement.innerText.slice(1));
		console.log(price);

		let quantity = quantityElement.value;

		total = total + price * quantity;

		document.getElementsByClassName('subtotal-amount')[0].innerText = '$' + total;
	}
}
