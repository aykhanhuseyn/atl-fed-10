// sum(1)(2)(3) // 6
// (sum(1))(2)(3) // 6
// (function)(2)(3) // 6
// currying
// z;
// const z = 0;
// function sum(a: number) {
// 	console.log({ a });
// 	return function (b: number) {
// 		console.log({ a, b });
// 		return function (c: number) {
// 			console.log({ a, b, c });
// 			return a + b + c;
// 		};
// 	};
// }
// console.log(sum(5)(3)(3));
function calculateVAT(percent) {
    return function (price) {
        return (price * percent) / 100;
    };
}
var calc = calculateVAT(18);
console.log(calc(1000));
console.log(calc(100));
console.log(calc(1235));
