"use strict";
// The Dom & Type casting
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// if (anchor) {
// 	console.log(anchor.href);
// }
// const form = document.querySelector('form')!;
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // public details: string;
    // private amount: number;
    function Invoice(client, // shorthand if i write modifiers
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = a;
        // this.details = b;
        // this.amount = c;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes: " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("eslam", "work on the website", 200);
var invTwo = new Invoice("momen", "work on the design", 250);
var Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
Invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.format());
});
console.log(Invoices);
// Type Casting
var form = document.querySelector(".new-item-form");
// console.log(form.children);
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
