// The Dom & Type casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);

// if (anchor) {
// 	console.log(anchor.href);
// }

// const form = document.querySelector('form')!;
// classes
class Invoice {
	client: string;
	details: string;
	amount: number;
	constructor(a: string, b: string, c: number) {
		this.client = a;
		this.details = b;
		this.amount = c;
	}
	format() {
		return `${this.client} owes :$${this.amount} for ${this.details}`;
	}
}

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
