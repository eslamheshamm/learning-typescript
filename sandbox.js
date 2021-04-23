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
var myName;
var age;
var isMarried;
// arrays
var names = [];
names = ["eslam", "hesham"];
console.log(names);
// union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
// mixed.push(false) doesn't work
console.log(mixed);
var uid; // don't have to write () if it's just variable
uid = "123";
uid = 123;
uid;
// objects
var person;
person = { name: "eslam", age: 22 };
var personTwo;
personTwo = { name: "momen", age: 22 };
