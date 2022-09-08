class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return this.name + " " + this.address;
    }
}

let vicky = new Employee(1, "Vicky", "Kovai");
let address = vicky.getNameWithAddress();

console.log(vicky);
console.log(address);