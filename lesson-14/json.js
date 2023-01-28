// JavaScript Object Notation

// JSON supported types
// number
// string
// boolean
// array
// object
// null

// takes any value, converts to 'JSON string'
// JSON.stringify();

let num = 1;
JSON.stringify(num); // 1

let str = 'string'; 
JSON.stringify(str); // "string"

let bool = true;
JSON.stringify(bool); // true

let nil = null;
JSON.stringify(nil); // null

let arr = [1, 2, 4];
JSON.stringify(arr); // [1,2,4]

var obj = {
  name: 'jkasdhkjas',
  age: 23
}
JSON.stringify(obj); // {"name": "js...","age":23}

obj[Symbol.for('alakbar')] = 'ajsdkjadhksja';
JSON.stringify(obj); // {"name": "js...","age":23}

Object.defineProperty(obj, 'invisible', {
  value: 'sadasd',
  enumerable: false,
});
JSON.stringify(obj); // {"name": "js...","age":23}

let map = new Map([['name', 'John']]);
JSON.stringify(map); // {}

let set = new Set(['name', 'John']);
JSON.stringify(set); // {}

let arrow = () => {}
function func () {}
JSON.stringify(func); // undefined

let date = new Date();
JSON.stringify(date); // "2023-01-28T11:04:34.156Z"

// YYYY-MM-DD T HH:mm:ss Z => timezone

// JSON.parse();


// unsupoterd types
// Map, Set, Function, Symbol, Undefined