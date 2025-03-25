//Implicit Type conversions


//const name = "shreya";
//const lastName = "sharma";
//const fullName = name + ' ' + lastName;
//console.log(fullName);


//const number = 4;
//const number2 = 10;
//const result = number + number2 ;
//console.log(result);

// to perform operations on string 
//const value = name - lastName;
//console.log(value);

// this will show NAN (not a number)


//let number3 = '10'; // by taking number in quotes , it acts as string 
//let number4 = '20';
//const result2 = number3 - number4;
//const result3 = number3 + number4 // this will not add numbers but add these as string i.e. 1020 will be output
//console.log(result2);
//console.log(result3);

//note ----- if we take 10 without quotes and 20 with quotes and perform string concatenation then again it will perform smoothly gives 1020 not giving any kind of error okkkkkk 
//eg 2 ---- if we take number3 = 10 and number2= "shreya " and now we are doing numner3 + number 4 ----- it will give 10shreya in the output

const randomNumber = 13;
 document.querySelector('.form').addEventListener('submit', function (e){
     e.preventDefault();
      let value = document.getElementById('amount').value;
    //value = parseInt(value);
        console.log('Input Value Type');
        console.log(value)
        console.log('Sum of two values')
        console.log(randomNumber + value);

});

