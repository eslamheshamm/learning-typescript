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
    function Invoice(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes :$" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
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
