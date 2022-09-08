//Data Types

//string
//Typescript has type inference
let Name: string = 'Vignesh';
let newName = Name.toLowerCase();
console.log(newName);

//number
let age: number;
age = 20;
console.log(age);

//boolean - no default values like java 
let isValid: boolean = false;

//array
let list: string[];
//another way of declaring array
let anotherList: Array<string>;

//enum

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;

//tuples
let newTuple: [number, number] = [10, 5];
console.log(newTuple);




