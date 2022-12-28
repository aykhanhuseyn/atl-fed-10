const popoverTargets = document.querySelectorAll('[data-popover-target]');
const popoverElements = document.querySelectorAll('[data-popover-element]');

popoverTargets.forEach((element) => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		const popoverName = element.dataset.popoverTarget;
		const popover = document.querySelector(
			`[data-popover-element='${popoverName}']`,
		);
		const rect = element.getBoundingClientRect();
		popover.classList.add('visible');
		popover.style.top = rect.bottom;
		popover.style.left = rect.right;
	});
});

document.body.addEventListener('click', (event) => {
	const elements = document.querySelectorAll('[data-popover-element].visible');
	elements.forEach((el) => {
		if (event.currentTarget.contains(el)) {
			el.classList.remove('visible');
		}
	});
});

// popoverElements.forEach();

// element.src
// element.getAttribute('src')

// element.getAttribute('data-name')
// element.dataset.name
