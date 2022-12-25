// 1.
// // function isEqual(first: any[], second: any[]): boolean;

// function isEqual(first, second) {
// 	if (!Array.isArray(first) || !Array.isArray(second)) {
//     throw new Error('Properties must be an array.');
// 	}

// 	if (first.length !== second.length) {
// 		return false;
// 	}

// 	// 1 == '1' => true
// 	// 1 === '1' => false
// 	for (let i = 0; i < first.length; i++) {
// 		if (first[i] !== second[i]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// const arr1 = [1, 2, 3];
// const arr2 = ['1', '2', '3'];
// const arr3 = [1, 2, 3];
// const arr4 = [{}, {}, {}];
// const arr5 = [{}, {}, {}];

// // console.log(isEqual()); // Error
// // console.log(isEqual('string', {})); // Error
// console.log(isEqual(arr1, arr2)); // false
// console.log(isEqual(arr1, arr3)); // true
// console.log(isEqual(arr2, arr4)); // false
// console.log(isEqual(arr4, arr5)); // false

// 2.
// function isUnique(array: any[]): boolean;

// { key: value, key: [] }
// 'ayxan' => hash('ayxan') => 1234 => value

// new HashMap('key', 'value')
// new Set => new Map

// function isUnique(array) {
//   const set = new Set(array);
//   return set.size === array.length;
// }

// function isUnique(array) {
//   if (!Array.isArray(array)) {
//     throw new Error('Property must be an array.');
//   }

// 	// array.forEach((element, index) => {
// 	//   if (array.indexOf(element, index + 1) !== -1) {
// 	//     return false;
// 	//   }
// 	// });
// 	// return true;

// 	return array.some((value, index, array) => {
// 		const found = array.indexOf(value, index + 1); // -1 | 1+
// 		return found !== -1;
// 	});
// }

// const arr1 = [1, 2, 3, 1];
// const arr2 = ['u', 'n', 'i', 'q'];

// isUnique(); // Error
// isUnique(null); // Error
// isUnique(arr1); // false
// isUnique(arr2); // true

// 3.
// // function wordGenerator(array: number[]): string;

// function wordGenerator(array) {
//   let result = '';

//   array.forEach((number) => {
//     result += String.fromCharCode(number);
//   })

//   return result;
// }

// function wordGenerator(array) {
// 	// return String.fromCharCode(...array);
// 	// return String.fromCharCode.call(null, ...array);
// 	return String.fromCharCode.apply(null, array);
// }

// const arr1 = [83, 97, 108, 97, 109];
// const arr2 = [72, 101, 108, 108, 111];
// const arr3 = [72, 111, 108, 97];

// // wordGenerator(); // Error
// wordGenerator(arr1); // Salam
// wordGenerator(arr2); // Hello
// wordGenerator(arr3); // Hola

// 4.
// function uppercase(str) {
// 	return str.toUpperCase();
// }
// function lowercase(str) {
// 	return str.toLowerCase();
// }
// function capitalize(str) {
// 	const arr = str.split(' ');
// 	const mapped = arr.map(
// 		(word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
// 	);
// 	return mapped.join(' ');
// }

// 5.
// function union(first, second) {
// 	// return Array.from(new Set([...first, ...second]));
// 	const result = [...first];
// 	second.forEach((elememt) => {
// 		if (first.indexOf(elememt) === -1) {
// 			result.push(elememt);
// 		}
// 	});
// 	return result;
// }

// union([1, 2], [2, 3]); // [1,2,3]

// 6.
// function intersection(first, second) {
// 	const result = [];
// 	first.forEach((element) => {
// 		if (second.indexOf(element) !== -1) {
// 			result.push(element);
// 		}
// 	});
// 	return result;
// }

// 7. is plain


// 8.
// 9.

// function without(object, key) {
//   const result = {};
//   for (const k in object) {
//     if (k !== key) {
//       result[k] = object[k];
//     }
//   }
//   return result;
// }

// function without(object, key) {
//   const { key, ...rest } = object;
//   return rest;
// }
