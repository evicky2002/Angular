//similar to kotlin functions
//first way to write a function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

//second way to write a function
const sub = (num1: number, num2: number): number => num1 - num2;

//third way to write a function
const mul = function (num1: number, num2: number): number {
    return num1 + num2;
}

//Optional parameters
function addOptional(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

//Required paramters - sets a default value for a parameter 
//if the parameter is given the value is replaced or the default
//value will be used
const addRequired = (num1: number, num2: number, num3 = 10): number => num1 + num2 - num3;

//Rest Parameters
function addRest(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [3, 4, 5]
console.log("Add rest :" + addRest(1, 2, ...numbers));
console.log("Add rest :" + addRest(1, 2, 3, 5, 5, 6, 7, 7, 7, 7));

//Generic Functions

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatNums = getItems([1, 2, 3, 4, 5]);
let concatStrings = getItems(["hi ", "how's ", "it ", "hanging ", "?"]);
console.log(concatNums);
console.log(concatStrings);