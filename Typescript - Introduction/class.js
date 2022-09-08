"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
}
let vicky = new Employee(1, "Vicky", "Kovai");
let address = vicky.getNameWithAddress();
console.log(vicky);
console.log(address);
