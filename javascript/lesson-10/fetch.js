// const url = './user.json'
const url = 'http://127.0.0.1:5500/lesson-10/user.json';

// JSON
// JavaScript Object Notation
// number, string, boolean, object, array

// XML
// <xml>
//   <name>Asya</name>
// </xml>

// axios

fetch(url)
	.then((response) => {
		console.log({ response });
		return response.json();
	})
	.then((convertedData) => {
		console.log({ convertedData });
		console.log(convertedData.name);
	})
	.catch(() => {
		console.log('this is an error');
	})
	.finally(() => {
		console.log('finished');
	});

fetch(url, {
	method: 'POST',
	body: JSON.stringify(obj),
})
.catch(401); // renew request
