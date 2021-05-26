import { Invoice } from "./classes/invoice.js";
// The Dom & Type casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);

// if (anchor) {
// 	console.log(anchor.href);
// }

// const form = document.querySelector('form')!;
// classes
const invOne = new Invoice("eslam", "work on the website", 200);
const invTwo = new Invoice("momen", "work on the design", 250);

let Invoices: Invoice[] = [];

Invoices.push(invOne);
Invoices.push(invTwo);
Invoices.forEach((inv) => {
	console.log(inv.client, inv.details, inv.format());
});
console.log(Invoices);
// Type Casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// calc section

const addButton = document.querySelector(".add")! as HTMLButtonElement;
const minusButton = document.querySelector(".minus")! as HTMLButtonElement;
const divisionButton = document.querySelector(
	".divistion"
)! as HTMLButtonElement;

const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const add = (num1: number, num2: number) => {
	return num1 + num2;
};
const minus = (n1: number, n2: number) => {
	return n1 - n2;
};
const divistion = (n1: number, n2: number) => {
	if (n1 && n2) {
		return n1 / n2;
	}
	return 0;
};

addButton.addEventListener("click", (e: Event) => {
	console.log(add(+input1.value, +input2.value));
});
minusButton.addEventListener("click", (e: Event) => {
	console.log(minus(-input1.value, -input2.value));
});
divisionButton.addEventListener("click", (e: Event) => {
	console.log(divistion(+input1.value, +input2.value));
});

enum Role {
	ADMIN,
	USER,
	AUTHOR,
}
const person: {
	name: string;
	age: number;
	hobbies: (string | number)[];
	role: Role;
} = {
	name: "Eslam",
	age: 20,
	hobbies: ["chess", 5, "fotball", 2],
	role: Role.ADMIN,
};
console.log(person.age);
for (const hobby of person.hobbies) {
	console.log(hobby);
}
if (person.role === Role.ADMIN) {
	console.log("Admin");
}
