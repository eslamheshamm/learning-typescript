let myname = "eslam";
let age = 22;
let isFunny = true;

const circ = (diameter: number) => {
	return diameter * Math.PI;
};
console.log(circ(4));

// arrays
let names = ["momen", "hamza", "hima"];
names.push("ahmed");
console.log(names);

let ages = [21, 22, 22];
ages.push(24);
let info = [...names, ...ages];
console.log(info);

let person = {
	name: "hamada",
	age: 20,
	favColor: "white",
};
// person.skills = ['coding','chess']
person = {
	name: "eslam",
	age: 22,
	favColor: "red",
};
console.log(person);
