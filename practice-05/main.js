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

const MAX_MENU_COUNT = 4;

menuItems.slice(0, MAX_MENU_COUNT).forEach((item) => {
	navlist.innerHTML += `<li>
      <a href=${item.url} target="_blank">
        ${item.title}
      </a>
    </li>`;
});

navlist.innerHTML += `<li>
  <span class="altmenu">
    <span class="dots">...</span>
    <ul class="hidden-menu">
      ${menuItems
							.slice(MAX_MENU_COUNT)
							.map(
								(sub) => `<li>
          <a href=${sub.url}>
            ${sub.title}
          </a>
        </li>`,
							)
							.join('')}
    </ul>
  </span>
</li>`;

const dots = document.querySelector('span.dots');
const hiddenMenu = document.querySelector('ul.hidden-menu');

dots.addEventListener('click', () => {
	hiddenMenu.classList.toggle('open');
});
