// Arrays , Functions and Objects 
// Arrays are indexed based ----[]

const friend1 = "Anna";
const friend2 = 'Shreya';
const friend3 = 'Avni';
const friend4 = 'Bella';

//Array of friends
const friends = ["Anna", "Shreya", "Avni","Bella", 455 , null , undefined ];
console.log(friends);
console.log(friends[3]); // through index number output will be Bella
console.log(friends[7]); // if you try to access some index that does not represent a value in your array you will et back with undefined --- output is undefined 


//how to access item from an array and assign it to other variable 
let bestFriend = friends[2];
console.log(bestFriend);

// to change the value of an array and assign new value through index 
friends[4] = "Sharma";
console.log(friends); // at index 4 in place of 455 it will give sharma in an array 
console.log(friends[4]);// output is sharma 


