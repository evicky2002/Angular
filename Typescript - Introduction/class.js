"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //static members
    static getEmployeeCount() {
        return 50;
    }
    getNameWithAddress() {
        //string literals
        return `${this.name} lives in ${this.address}`;
    }
}
let vicky = new Employee(1, "Vicky", "Kovai");
let address = vicky.getNameWithAddress();
console.log(Employee.getEmployeeCount());
console.log(vicky);
console.log(address);
