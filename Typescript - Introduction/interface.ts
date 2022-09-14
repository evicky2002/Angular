export interface User {
    name: string;
    age: number;
    id: number;
    email: string;
}

let user: User = { name: "vicky", age: 20, id: 1, email: "a@g.com" };

export interface Login {
    Login(): User;
}

//Object destructuring
