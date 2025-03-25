// LET VS CONST VS VAR 

//using var 
var value = "some value";
value ="shreyaaa"; // this will override "some value"

//using let 
let name = "john";
name="Peter"; // this will override "john"

//using const (CONSTANT) --- cannot reassign 
const lastName ="Jordan";
lastName ="singh" // this will give error 


// we cannot reassign CONST 

// also when we declare const we should declare value with it otherwise it will give error 

// eg const lastName; ----- give an error 
// eg const lastName ="Jordan"; ----- correct 


console.log(value);
console.log(name);
console.log(lastName);