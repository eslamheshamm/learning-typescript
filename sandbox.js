var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var myname = "eslam";
var age = 22;
var isFunny = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
// arrays
var names = ["momen", "hamza", "hima"];
names.push("ahmed");
console.log(names);
var ages = [21, 22, 22];
ages.push(24);
var info = __spreadArray(__spreadArray([], names), ages);
console.log(info);
var person = {
    name: "hamada",
    age: 20,
    favColor: "white"
};
// person.skills = ['coding','chess']
person = {
    name: "eslam",
    age: 22,
    favColor: "red"
};
console.log(person);
