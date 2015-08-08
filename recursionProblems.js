//implement a factorial
//factorial is a product of all integers before it and itself
//so given an integer, find its factorial
//i.e. 3 factorial = 3 * 2 * 1
//5*4*3*2*1
//4*3*2*1
//f(5) = 5 * f(4)
//f(4) = 4 * f(3)
//f(3) = 3 * 2 * 1
//base-case n=1
//find general case and base case before writing function
function factorial(n){
  if(n === 1){
    return n;
  }
  return n * factorial(n-1);
}

//fibonacci sequence
//0, 1, 1, 2, 3, 5
//f(0) = 0
//f(1) = 1
//f(2) = 1 + 0
//f(2) = f(1) + f(0)
//f(3) = f(2) + f(1);
//general = f(n) = f(n-1) + f(n-2)
// base = if n <= 1; return n

function fib(n){
  if(n <= 1) {
    return n;
  }
  return fib(n-1)+fib(n-2);
}

//if n = 3
// return f(2) + f(1)
// remebers f(3) = f(2) + f(1)
// runs f(2) which is returning f(1) + f(0)
// runs f(1) = 1, runs f(0) = 0;
// 1 + f(1) (which is 1)
// f(3) = 2



//write a function which is given an array and returns the sum of the array
//solve with recursion
//given array, i.e. [0,1,2]
//f([0]) = 0
//f([0,1]) = f([0]) + 1
//f([0,1,2]) = f([0,1]) + 2
//f([0,1,2,3]) = f([0,1,2]) + 3
//general case = array.pop() + array
//base case = if array.length == 1, return array[0]; OR if array[0]==undefined, return 0 (dont need both)

function sumOfArray(array){
  if(array.length === 1){
    return array[0];
  }
  return array.pop() + sumOfArray(array);
}


//given an array, find the maximum value of the array
//use recursion
//f[0] = 0
//f[0, 1] = 1
//f[0,1,2] = 2
//f[0,1,2,1] = 2
//f[0,1,2,1,3] = f[0,1,2,1] < 3
//general= compare last value to max of all the other before it
//base case array.length == 1, return array[0];

function findMax(array){
  if(array.length === 1) {
    return array[0];
  }
  var lastValue = array.pop();
  var currentMax = findMax(array);
  if(currentMax < lastValue){
    return lastValue;
  } else {
    return currentMax;
  }
  // if(findMax(array) < lastValue){
  //   return lastValue;
  // } else {
  //   return findMax(array);
  // }
}

//you're in a city, the city is in a grid,
// total size of city is m * n
// you start in top left most corner and you want to walk to bottom right corner
// you want to take the shortest path possible, but there are lots of different ways
// to take the shortest path.
// as long as you're going right or down, you're going in the right direction
// in the city, how many unique paths are there where you're going right or down.

//general case is f(m,n) = f(m, n-1) + f(m-1, n);
//base case is if n==0 or m==0, return 1;
function cityPaths(m, n){
  if(m === 0 || n === 0){
    return 1;
  }
  return cityPaths(m, n-1) + cityPaths(m-1, n);
}
console.log(cityPaths(1,1));