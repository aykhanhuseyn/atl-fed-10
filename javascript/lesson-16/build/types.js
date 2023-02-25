"use strict";
let num;
let str;
let sym;
let nil;
let und;
let bool;
let big;
let arr;
let arr1;
let arr2;
let obj;
// additional
let an;
let un;
let p = {
    id: 'randomId',
    name: 'john',
    age: 25,
};
// p.age = '543';
p.age = 24;
// extension
let aaa = {
    name: '',
    surname: '',
};
//
const calculateAge = (year, name = 'John') => {
    console.log('Hello, ' + name + '!');
    return new Date().getFullYear() - year;
};
// calculateAge.length == 1
calculateAge(1999);
function getGel(distance) {
    if (distance > 100) {
        return true;
    }
    return false;
}
//# sourceMappingURL=types.js.map