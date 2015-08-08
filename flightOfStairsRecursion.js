//Recursion problem


// As I go up a flight of stairs, at each step I can go up by either 1 or 2 steps.
//   What is the total number of different ways that I can go up a flight of N stairs?
// f(0) = 0;
// f(1) = 1;
// f(2) = 2;
// f(3) = f(3-1) + f(3-2);
// f(4) = f(4-1) + f(4-2);

function stairs(n){
  if(n === 1 || n === 2){
    return n;
  }
  return stairs(n-1) + stairs(n-2);
}
console.log(stairs(3));