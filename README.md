# Even-odd number problems solving - 6 problems using forEach() Method.

#### problem- 1: Check if a number is even or odd

```
  function checkEvenOdd(num){
  if (num % 2 === 0) {
    console.log(num + " This is even");
  }else{
    console.log(num + " this is odd");
  }
}
checkEvenOdd(7);
```
##### output : 7 is odd;

#### Problem- 2: Print all  Even numbers in an array


```
let Num = [1, 2, 3, 4, 5, 6, 7]
function printEvenNum(array) {
  array.forEach(num =>{
    if(num % 2 === 0){
      console.log(num + " " + "even Numbers");
    }
  })
}
printEvenNum(Num);
```
##### Output:
- 2 Even Numbers
- 4 Even Numbers
- 6 Even Numbers

#### Problem- 3: Print all odd numbers in an array


```
let Num = [1, 2, 3, 4, 5, 6, 7]
function printOddNum(array) {
  array.forEach(num =>{
    if(num % 2 !== 0){
      console.log(num + " " + "odd Number")
    }
  });
}
printOddNum(Num);

```

##### Output :
- 1 odd Number
- 3 odd Number
- 5 odd Number
- 7 odd Number



#### Problem- 4: Count the number of even and odd numbers in an array

```
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvenOdd(array) {
  let evenCount = 0;
  let oddCount = 0;
  array.forEach(num => {
    if(num % 2 === 0){
       evenCount++;
    }else{
      oddCount++;
    }
  });
  console.log("Even Numbers" + " " +  evenCount);
  console.log("odd Numbers" +  " " + oddCount);
}
countEvenOdd(numbers);
```

##### Output :
- even Numbers 5
- odd Numbers 5

#### Problem- 5: Separate even and odd numbers into two different arrays

```
let evenOddNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sepEvenOdd(array) {
  let evenNumbers = [];
  let oddNumnbers = [];
  array.forEach(num => {
   if(num % 2 === 0){
    evenNumbers.push(num);
   }else{
    oddNumnbers.push(num);
   }
  });
  console.log("those numbers are Even Numbers" + " " +  evenNumbers);
  console.log("those numbers are odd Numbers" +  " " + oddNumnbers);
}
sepEvenOdd(evenOddNum);
```

##### Output :
- Those numbers are Even Numbers 2,4,6,8,10
- Those numbers are odd 1,3,5,7,9

#### Problem- 5: Sum of even and odd numbers separately

```
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumSepEvenOddNum(array) {
  let sumEvenNum = 0;
  let sumOddNum = 0;
  array.forEach(num=>{
   if(num % 2 === 0){
    sumEvenNum += num;
   }else{
    sumOddNum += num;
   }
  });
  console.log(sumEvenNum + "-Even Number sum");
  console.log(sumOddNum + "-odd Number sum");
}
sumSepEvenOddNum(Numbers);
```

##### Output :
- 30 -Even Number sum
- 25 -odd Number sum


# Even-odd number problems solving - 3 problems using filetr() Method.


#### Problems 1: Filter Even Numbers from an Array

```
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = filterEvenNum(numbers1);
function filterEvenNum(array) {
return array.filter(num => num % 2 === 0);
  
}
console.log("Even numbers:", evenNumbers);
```
##### Output: Even numbers: [2, 4, 6, 8]

Problem 2: Filter Odd Numbers from an Array
```
let Numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = filterOddNum(Numbers2)
 function filterOddNum(array) {
  return array.filter(num => num % 2 !== 0)
 }
 console.log("Odd numbers:", oddNumbers);
```
##### Output: Odd numbers: [1, 3, 5, 7, 9]


#### Problems 3:  Separate Even and Odd Numbers into Two Arrays Using Filter
```
 let Numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 function filterEvenOddNum(array) {
  let evenNum = array.filter(num => num % 2 === 0);
  let oddNum = array.filter(num => num % 2 !== 0);

  console.log(evenNum);
  console.log(oddNum);
  
 }
 filterEvenOddNum(Numbers3);
```
   

