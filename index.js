/*
Fibonacci, was an Italian mathematician who came up with the Fibonacci sequence:
0,1,1,2,3,5,8,13,21,34,55,89,144,......
Where every number after the first two is the sum of the two proceeding ones.

e.g. 0+1 = 1
1+1 = 2
1+2 = 3
2+3 = 5

etc.

Create a function you can call by writing the code:
fibonacciGenerator (n);

Where n is the number of items in the sequence.
So I should be able to call:

fibonacciGenerator(3) and fibonacciGenerator
[0,1,1]
as the output.
*/

function fibonacciGenerator (n) {
var fibSequence = [];
var fibNum0 = 0;
var fibNum1 = 1;

if (n===undefined){
  return [0];
}  
for (var i=0; i<n; i++){
    if (i === 0){
      fibSequence.push(fibNum0);
    } else if (i === 1){
      fibSequence.push(fibNum1);
    } else {
      fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
    }
  }
  return fibSequence;
}
console.log(fibonacciGenerator(undefined));