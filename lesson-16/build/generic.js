"use strict";
// tuple
let tuple = ['red', 234];
tuple[0] = '234';
tuple[1] = 934853;
//
function getRandomNumber(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function getRandomString(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomString(['john', 'jack', 'elton', 'elvis', 'mercury', 'fredy']));
function getRandomPerson(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomPerson([
    { name: 'john' },
    { name: 'jack' },
    { name: 'elton' },
    { name: 'elvis' },
    { name: 'mercury' },
]));
//# sourceMappingURL=generic.js.map