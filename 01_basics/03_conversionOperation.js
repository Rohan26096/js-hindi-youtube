"use strict";

let score = "33" 
score = null //output is 0
score = undefined // NaN
score = "33abc" //NaN
score = true // 1
score = false // 0
score = "Rohan"

// console.log(score);
// console.log(typeof score);


let valueScore = Number(score) // type casting
// console.log(typeof valueScore);
// console.log(valueScore);

let isLoggedin = "" // false
isLoggedin = 1 // true
isLoggedin = null // false
isLoggedin = undefined // false

let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin);

