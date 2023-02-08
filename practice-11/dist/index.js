"use strict";
let variable;
variable = 'string value';
function stringReturner() {
    if (Math.random() > 0.5) {
        return variable;
    }
    return null;
}
stringReturner();
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tuple = ['string', 1];
const red = ['red', 0xff0000];
const blue = ['blue', 0x00ff00];
const green = ['green', 0x0000ff, 0.5];
const purple = ['blue', 0xff00ff, 0.5];
const results = [
    ['John', 5],
    ['Jane', 4],
    ['Jack', 3],
];
results.push(['Jane', 1]);
const object = {
    name: 'John',
    age: 25,
};
const animal = {
    name: 'Dog',
    age: 5,
};
function printAnimalName(animal) {
    return animal.name;
}
const animalName = printAnimalName({ name: 'Dog' });
const animalNameZOR = printAnimalName({ name: 'Dog' });
const animalNameAS = printAnimalName({
    name: 'Dog',
});
const pi = 3.14;
class Human {
}
class Personcuk extends Human {
    run() { }
    swim() { }
}
function letsGoToTheSea(uzeBilenLyuboyQaqasnanGedirem) { }
const person = new Personcuk();
letsGoToTheSea(person);
function noRet() {
    return person;
}
const civi = {
    ssn: '123',
    languages: ['js', 'ts'],
};
const qara = {
    ssn: '123',
    tools: ['figma', 'photoshop'],
};
let employee;
employee = civi;
const db = {
    ssn: '123',
    pin: 123,
};
employee = db;
const dev = {
    name: 'John',
    languages: ['js', 'ts'],
};
const dev2 = {
    name: 'John',
    languages: ['js', 'ts', 'c#'],
};
function getName(message) {
    if (Math.random() > 0.5) {
        return message;
    }
    throw new Error(message);
}
try {
    const abc = getName('Hello');
    console.log(abc);
}
catch (error) {
    console.error('error');
}
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (Month = {}));
Month.January;
"admin";
"moderator";
const roles = {
    Admin: 'admin',
    Moderator: 'moderator',
};
