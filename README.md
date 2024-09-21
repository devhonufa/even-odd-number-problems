# Even-odd number problems solving - 6 problems

#### problem- 1: Check if a number is even or odd

<code>
  function checkEvenOdd(num){
  if (num % 2 === 0) {
    console.log(num + " This is even");
  }else{
    console.log(num + " this is odd");
  }
}
checkEvenOdd(7);

</code>
##### output: 7 is odd;

#### problem- 2: Count the number of even and odd numbers in an array

<code>
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
</code>

#####output:
even Numbers 5
odd Numbers 5

#### problem- 3: Separate even and odd numbers into two different arrays
<code>
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
</code>

##### Output:
those numbers are Even Numbers 2,4,6,8,10
those numbers are odd 1,3,5,7,9

#### problem- 4: Sum of even and odd numbers separately
<code>
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
</code>
#####output:
30 -Even Number sum
25 -odd Number sum





   

