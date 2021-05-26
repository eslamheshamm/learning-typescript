export class Invoice {
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
