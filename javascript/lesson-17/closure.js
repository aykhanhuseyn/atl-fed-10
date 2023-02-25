// const person = {
// 	name: 'Barry',
// 	surname: 'Alan',
// 	speed: 4000,
// };
// // enviroment: person 0xh23423a23
// function changeBarrysSpeed(speed: number): void {
// 	if (speed > 0) {
// 		person.speed = speed;
// 	}
// }
// console.log(person);
// changeBarrysSpeed(1000);
// console.log(person);
// // const obj = {
// // 	age: 11,
// // 	changeAge(age: number) {
// // 		this.age = age;
// // 	},
// // };
// // console.log(obj);
// // obj.changeAge(12);
// // console.log(obj);
// // console.log('age' in window && window.age);
// // const c = obj.changeAge;
// // c(13);
// // console.log(obj);
// // console.log('age' in window && window.age);
// console.log();
// // usage
// class Person {
// 	#id = 1;
// }
// const p = new Person();
// p.id
// p.#id
var privateAge = 0;
function Human() {
    this.getAge = function () {
        return privateAge;
    };
}
var h = new Human();
console.log(h.getAge());
console.log(h.privateAge);
