const menu = document.getElementById('menu');

const menuItems = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Contact',
		link: '/contact',
	},
];

menuItems.forEach((element) => { // loop over menu items array, which contains title and link
	const li = document.createElement('li'); // create list item

	const a = document.createElement('a'); // create anchor tag
	a.textContent = element.title; // add title text to text contecnt of anchor
	a.href = element.link; // assign href prop of anchor to link property of menu items

	li.appendChild(a); // add anchor tag inside list item

	// add hover event
  li.addEventListener('mouseover', (event) => { // add hover event listener
    // assign root inner html to hovered text
		root.innerHTML = `<h1 style='color:white' >${event.target.textContent}</h1>`;
	});

	menu.appendChild(li); // add li to menu (ul)
});
