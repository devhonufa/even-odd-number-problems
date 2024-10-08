// How to Calculate the Sum of an Array Using A for Loop in JavaScript
// create an array
let number = [1, 2, 3, 4, 5, 6];
// create a variable for the sum and init it
let sum = 0;
// iterate over each item in the array
for(let i = 0; i < number.length; i++ ){
 sum += number [i];
}
console.log(sum);

//How to Calculate the Sum of an Array Using the forEach() Method in JavaScript
let myNumber = [1, 2, 3, 4, 6, 8];
// create a variable for the sum and init it
let sum1 = 0;

// calculate sum using forEach() method
myNumber.forEach(num => {
  sum1 += num;
});
console.log(sum1);
//How to Calculate the Sum of an Array Using the reduce() Method in JavaScript
// create an array
const myNums = [1, 2, 3, 4,];
// use reduce() method to find the sum

let sum3 = myNums.reduce((acc, current) =>{
  return acc + current;
},0);
console.log(sum3)