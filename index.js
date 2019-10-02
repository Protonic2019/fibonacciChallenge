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

for (var i=1; i<2; i++){
  do something
}

i++ increments by 1
i+= x; increments by x
for (variable created with value 1; checks if variable i is smaller than 2; increments variable i)

*/
/*
var fibSequence = [];
var fibNum0 = 0;
var fibNum1 = 1;

function fibonacciGenerator (n) {
  for (var i=0; i<n; i++){
    if (n === 0){
      fibSequence.push(fibNum0);
    } else if (n === 1){
      fibSequence.push(fibNum1);
    }
    console.log(fibSequence);
  }
  //TODO

  //Return an array of fibonacci numbers.
}

fibonacciGenerator(2);
*/

/*
function fib(n){
  var arr = [];
  for (var i = 0; i < arr.length; i++){
    if (n ===1)
    arr.push(0);
    } else if (n===2){
      arr.push(1);
      }else{
        //add last two items in the array until arr.length is met
      }
    }
  }
}

*/

var fibSequence = [];
var fibNum0 = 0;
var fibNum1 = 1;
var fibNumx;
var fibNumy;

function fibonacciGenerator (n) {
  for (var i=0; i<n; i++){
    if (i === 0){
      fibSequence.push(fibNum0);
    } else if (i === 1){
      fibSequence.push(fibNum1);
    } else {
      fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
    }
  }
  console.log(fibSequence);
  //TODO

  //Return an array of fibonacci numbers.
}

fibonacciGenerator(3);
