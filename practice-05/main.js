const menuItems = [
	{
		title: 'All events',
		url: 'events',
	},
	{
		title: 'Concerts',
		url: 'concerts',
	},
	{
		title: 'Theatre',
		url: 'theatre',
	},
	{
		title: 'Kids',
		url: 'kids',
	},
	{
		title: 'Formula 1',
		url: 'formula-1',
	},
	{
		title: 'Museum',
		url: 'museum',
	},
	{
		title: 'Sport',
		url: 'sport',
	},
	{
		title: 'Tourism',
		url: 'tourism',
	},
	{
		title: 'Circus',
		url: 'circus',
	},
	{
		title: 'Master Class',
		url: 'master-class',
	},
	{
		title: 'Products',
		url: 'products',
	},
	{
		title: '360/VR',
		url: 'virtual-reality',
	},
];

const navlist = document.querySelector('ul.navlist');

const MAX_MENU_COUNT = 6;

menuItems.slice(0, MAX_MENU_COUNT).forEach((item) => {
	navlist.innerHTML += `<li><a href=${item.url} target="_blank">${item.title}</a></li>`;
});

navlist.innerHTML += `<li><span class="altmenu"><span class="dots">...</span><ul class="hidden-menu">${menuItems
	.slice(MAX_MENU_COUNT)
	.map((sub) => `<li><a href=${sub.url}>${sub.title}</a></li>`)
	.join('')}</ul></span></li>`;

const dots = document.querySelector('span.dots');
const hiddenMenu = document.querySelector('ul.hidden-menu');

dots.addEventListener('click', () => {
	hiddenMenu.classList.toggle('open');
});

// count

const INITIAL_COUNT = 0;
const count = document.querySelector('sub.count');
count.innerHTML = INITIAL_COUNT;

const MAX_CART_COUNT = 10;
const MIN_CART_COUNT = 0;
const increment = document.querySelector('button.increment');
const decrement = document.querySelector('button.decrement');
const sabina = document.querySelector('input.sabina');

increment.addEventListener('click', () => {
	const newCount = Number(count.innerHTML) + 1;
	if (newCount <= MAX_CART_COUNT) {
		count.innerHTML = newCount;
	} else {
		alert(`${MAX_CART_COUNT} dene besindi`);
	}
});

decrement.addEventListener('click', () => {
	const newCount = Number(count.innerHTML) - 1;
	if (newCount < MIN_CART_COUNT) {
		alert('olmaz');
	} else {
		count.innerHTML = newCount;
	}
});

// sabina.max = MAX_CART_COUNT;
// sabina.min = MIN_CART_COUNT;

// sabina.setAttribute('max', MAX_CART_COUNT);
// sabina.setAttribute('min', MIN_CART_COUNT);

sabina.addEventListener('change', (event) => {
	// let val = event.target.valueAsNumber;

	let val = Math.min(
		Math.max(event.target.valueAsNumber, MIN_CART_COUNT),
		MAX_CART_COUNT,
	);

	sabina.value = val;

	count.innerHTML = val;
});

// active menu items
const menuItemVisible = document.querySelectorAll('ul.navlist > li > a');

menuItemVisible.forEach((item) => {
	item.addEventListener('click', (event) => {
		// prevent page reload on click a tag
		event.preventDefault();
		// remove 'active' class from all the elements
		menuItemVisible.forEach((element) => {
			element.classList.remove('active');
		});
		// add 'active' class to clicked element
		item.classList.add('active');
	});
});
