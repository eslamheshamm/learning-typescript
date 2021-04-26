"use strict";
// implicit types
// let myname = "eslam";
// let age = 22;
// let isFunny = true;
// const circ = (diameter: number) => {
// 	return diameter * Math.PI;
// };
// console.log(circ(4));
// // arrays
// let names = ["momen", "hamza", "hima"];
// names.push("ahmed");
// console.log(names);
// let ages = [21, 22, 22];
// ages.push(24);
// let info = [...names, ...ages];
// console.log(info);
// let person = {
// 	name: "hamada",
// 	age: 20,
// 	favColor: "white",
// };
// // person.skills = ['coding','chess']
// person = {
// 	name: "eslam",
// 	age: 22,
// 	favColor: "red",
// };
// console.log(person);
// explicit types
// let myName: string;
// let age: number;
// let isMarried: boolean;
// // arrays
// let names: string[] = [];
// names = ["eslam", "hesham"];
// console.log(names);
// // union types
// let mixed: (string | number)[] = [];
// mixed.push("hello");
// mixed.push(20);
// // mixed.push(false) doesn't work
// console.log(mixed);
// let uid: string | number; // don't have to write () if it's just variable
// uid = "123";
// uid = 123;
// uid;
// objects
// let person: object;
// person = { name: "eslam", age: 22 };
// let personTwo: {
// 	name: string;
// 	age: number;
// };
// personTwo = { name: "momen", age: 22 };
// let age: any = 25;
// age = true;
// console.log(age);
// age = "hi";
// console.log(age);
// let mixed: any[] = [];
// mixed.push(22);
// mixed.push("eslam");
// mixed.push(true);
// console.log(mixed);
// let ninja: {};
// console.log("workk!");
// functions
// let greet: Function;
// greet = () => {
// 	console.log("hello world!");
// };
// const add = (a: number, b: number, c: number | string = 10): void => {
// 	console.log(a + b);
// 	console.log(c);
// };
// add(5, 11, "hello");
// const minus = (a: number, b: number) => {
// 	return a + b;
// };
// let result = minus(10, 9);
// const logDetails = (uid: string | number, item: string) => {
// 	console.log(`${item} has a uid of ${uid}`);
// };
// type aliases
// type StrOrNum = string | number;
// type objeWName = { name: string; uid: StrOrNum };
// const greet = (user: { name: string; uid: StrOrNum }) => {
// 	console.log(`${user.name} says hello`);
// };
// const greetAgain = (user: objeWName) => {
// 	console.log(`${user.name} says hello`);
// };
var greet;
greet = function (name, greeting) {
    console.log(name + ", says " + greeting);
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else
        return numOne - numTwo;
};
console.log(calc(20, 32));
console.log(calc(20, 32, "add"));
var logDetails;
logDetails = function (person) {
    if (person.age) {
        console.log(person.name + " is " + person.age + " years old");
    }
    else {
        console.log("please write your age " + person.name);
    }
};
logDetails({ name: "eslam", age: 20 });
logDetails({ name: "ahmed " });
