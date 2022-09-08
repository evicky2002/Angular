"use strict";
//similar to kotlin functions
//first way to write a function
function add(num1, num2) {
    return num1 + num2;
}
//second way to write a function
const sub = (num1, num2) => num1 - num2;
//third way to write a function
const mul = function (num1, num2) {
    return num1 + num2;
};
//Optional parameters
function addOptional(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
//Required paramters - sets a default value for a parameter 
//if the parameter is given the value is replaced or the default
//value will be used
const addRequired = (num1, num2, num3 = 10) => num1 + num2 - num3;
//Rest Parameters
function addRest(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [3, 4, 5];
console.log("Add rest :" + addRest(1, 2, ...numbers));
console.log("Add rest :" + addRest(1, 2, 3, 5, 5, 6, 7, 7, 7, 7));
//Generic Functions
function getItems(items) {
    return new Array().concat(items);
}
let concatNums = getItems([1, 2, 3, 4, 5]);
let concatStrings = getItems(["hi ", "how's ", "it ", "hanging ", "?"]);
console.log(concatNums);
console.log(concatStrings);
