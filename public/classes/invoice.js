export class Invoice {
    // readonly client: string;
    // public details: string;
    // private amount: number;
    constructor(client, // shorthand if i write modifiers
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = a;
        // this.details = b;
        // this.amount = c;
    }
    format() {
        return `${this.client} owes: ${this.amount} for ${this.details}`;
    }
}
