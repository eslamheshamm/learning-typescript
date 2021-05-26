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
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
Invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.format());
});
console.log(Invoices);
// Type Casting
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// calc section
const addButton = document.querySelector(".add");
const minusButton = document.querySelector(".minus");
const divisionButton = document.querySelector(".divistion");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const add = (num1, num2) => {
    return num1 + num2;
};
const minus = (n1, n2) => {
    return n1 - n2;
};
const divistion = (n1, n2) => {
    if (n1 && n2) {
        return n1 / n2;
    }
    return 0;
};
addButton.addEventListener("click", (e) => {
    console.log(add(+input1.value, +input2.value));
});
minusButton.addEventListener("click", (e) => {
    console.log(minus(-input1.value, -input2.value));
});
divisionButton.addEventListener("click", (e) => {
    console.log(divistion(+input1.value, +input2.value));
});
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
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
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = `${input1.toString().toUpperCase()} ${input2
            .toString()
            .toUpperCase()}`;
    }
    return result;
};
console.log(combine(20, 224, "as-number"));
console.log(combine("hesham", "eslam", "as-text"));
const printResult = (num) => {
    console.log(`Result:  ${num}`);
};
printResult(add(2, 2));
let combineValues;
combineValues = add;
console.log(combineValues(2, 4));
