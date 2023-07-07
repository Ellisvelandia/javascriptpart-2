'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive');

// // const interface = 'Audio';
// function logger (){
//   console.log('My name is ellis')
// }

// //running 7/ calling / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//  const juice = `Juice with ${apples} apples ${oranges} oranges.`;
//  return juice;
// }

// const appleJuice = fruitProcessor(5, 20);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);


//function declaration
function calcAge1(birthYear){
const age = 2023 - birthYear;;
return age;
}

const age1 = calcAge1(1993);
console.log(age1)


//function expresion
const calcAge2 = function (birthYear){
return 2023 - birthYear;
}

const age2 = calcAge2(1993);
console.log(age1 , age2);