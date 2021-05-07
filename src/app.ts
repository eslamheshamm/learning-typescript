// The Dom & Type casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);

// if (anchor) {
// 	console.log(anchor.href);
// }

// const form = document.querySelector('form')!;
// classes
class Invoice {
	// readonly client: string;
	// public details: string;
	// private amount: number;
	constructor(
		readonly client: string, // shorthand if i write modifiers
		public details: string,
		private amount: number
	) {
		// this.client = a;
		// this.details = b;
		// this.amount = c;
	}
	format() {
		return `${this.client} owes: ${this.amount} for ${this.details}`;
	}
}
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
