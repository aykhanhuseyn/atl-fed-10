document.cookie; // string

// document.cookie =
// 	'name=Ayxan; expires=Sunday, 29 January 2023, 13:22 GMT+4; path=/';
// document.cookie =
// 	'surname=Huseynli; expires=Sunday, 29 January 2023, 13:22 GMT+4; path=/';

var documentObject = {
	exp: '',
	path: '/',
	name: '',
	value: '',
	get cookie() {
		return '';
	},
	set cookie(value) {
		return '';
	},
};

// name=value; expires=DATE; path=/

function addCookie(name, value, expDays = 1, path = '/') {
	const date = new Date(new Date().getTime() + expDays * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=${path}`;
}

addCookie('name', 'John');
// addCookie('name', 'John', 365, '/lesson-15');

function removeCookie(name) {
	addCookie(name, null, null);
}

function getCookie(name) {
	return document.cookie
		.split('; ')
		.find((c) => c.startsWith(name))
		?.slice(name.length + 1);
}

// Object.fromEntries(document.cookie.split('; ').map(c => c.split('=')))

removeCookie('name');
removeCookie('surname');
