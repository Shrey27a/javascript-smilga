// Data types 

// primitive ( String , number , Boolean, Undefined , Null , Symbol )
// Object ----- Arrays , Functions , Objects

//typeof - operator (typeof variable) (typeof value)

//String

const text = "some text "

//Number
const number = 46

//Boolean 
let value1 = true;
let value2 = false;

//Null
const result = null;

//Undefined
let name ;


//Symbol(ES6) ---- will cover in upcoming videos 

console.log(typeof text); // output is string
console.log(typeof "hello World"); // output is string 
console.log(typeof 4 ); // output is number 
console.log(typeof true);// output is boolean
console.log(typeof number ); // output is number 
console.log(typeof value1); // output is boolean
console.log(typeof value2); // output is boolean again 
console.log(typeof null);// output is object always ---- if you run null , this is going to return a type of object even though it should be null .

console.log(typeof name); // gives output undefined 