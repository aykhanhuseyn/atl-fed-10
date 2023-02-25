// DOM manipulations

// access | read DOM Element
// const root = document.getElementById('root');

console.log({ root, span });

root.style.background = 'green';

// const fakeDOMElement = {
//   style: {
//     background: '',
//     backgroundColor: '',
//   }
// }

// root.textContent = 'Hello, text content!';
// root.innerText = 'Hello, inner text!';

root.innerHTML = `
  <h1 style="color: white; margin: 0;">Hello, Inner HTML!</h1>
`;
root.innerHTML += `
  <h2 style="color: white; margin: 0;">Hello, Inner HTML!</h2>
`;

span.innerText = 'SPAN';

// BODY
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';

//
document.getElementsByClassName; // HTMLCollection
document.getElementsByName; // NodeList
document.getElementsByTagName; // HTMLCollection
document.getElementsByTagNameNS; // HTMLCollection
//

const listItems = document.getElementsByClassName('list-item'); // type => HTMLCollection

console.log({ listItems });

for (let i = 0; i < listItems.length; i++) {
	const element = listItems[i];
	element.classList.add('red');
	// element.textContent = 'salam';
	// element.appendChild()
}

const ərəstun = document.getElementsByName('ərəstun');

console.log({ ərəstun });

const svg = document.getElementsByTagNameNS(
	'http://www.w3.org/2000/svg',
	'svg',
);
const xhtml = document.getElementsByTagNameNS(
	'http://www.w3.org/1999/xhtml',
	'svg',
);

console.log({ svg, xhtml });

//
document.querySelector; // HTMLElement | null
document.querySelectorAll; // NodeList

const a = document.querySelector('li.list-item > a');
const aTagS = document.querySelectorAll('li.list-item > a');
console.log({ a, aTagS });

a.setAttribute('href', 'https://www.google.com/search?q=where+are+you');
a.setAttribute('target', '_blank');
a.innerText = 'google';
