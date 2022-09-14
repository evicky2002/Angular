import { Login, User } from "./interface"

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
}

class Employee implements Login {
    id: number;
    name: string;
    address: Address;
    //static members
    Login(): User {
        return { name: "vicky", age: 20, id: 1, email: "a@g.com" };
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id: number, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        //string literals
        return `${this.name} lives in ${this.address}`;


    }
}

let vicky = new Employee(1, "Vicky", { city: "Chennai", pin: "600112", state: "TamilNadu", street: "Rotler Street" });
let address = vicky.getNameWithAddress();
console.log(Employee.getEmployeeCount());
console.log(vicky);
console.log(address);